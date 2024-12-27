import { useEffect, useState } from "react"

import styles from "./projeto_form.module.css"

import Input from "../form/input"
import Select from "../form/select"
import Submit from "../form/submit"

function ProjetoForm({handleSubmit, projectData}) {

    const [categories, setCategories] = useState([])

    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categorias", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
    }

    return (
        <form onSubmit={submit} className={styles.form}>

            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange} value={project.name ? project.name : ""}></Input>

            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" handleOnChange={handleChange} value={project.budget ? project.budget : ""}></Input>

            <Select name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ""}></Select>

            <Submit text="Criar projeto"></Submit>
        </form>
    )
}

export default ProjetoForm