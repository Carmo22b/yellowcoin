import { useLocation } from "react-router-dom"

import Mensagem from "../layout/mensagem"
import styles from "./projetos.module.css"
import LinkBotao from "../layout/link_botao"
import Loading from "../layout/loading"

import ProjectCard from "../project/project.card"
import { useState, useEffect } from "react"

function Projetos() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMassage, setProjectMassage] = useState("")

    const location = useLocation()

    let messagem = ""

    if (location.state && location.state.message) {
        messagem = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            const API_URL = process.env.REACT_APP_API_URL; // Usando variável de ambiente

            fetch(`${API_URL}/projects`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data);
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 300)
    }, [])

    function removeProject(id) {
        const API_URL = process.env.REACT_APP_API_URL; // Usando variável de ambiente

        fetch(`${API_URL}/projects/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(resp => resp.json())
            .then(data => {
                setProjects(projects.filter((project) => project.id !== id))
                setProjectMassage("Projeto removido com sucesso!")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>
                    Meus Projetos
                </h1>
                <LinkBotao to="/novosProjetos" text="Criar Projeto"></LinkBotao>
            </div>

            {messagem && <Mensagem type="success" msg={messagem}></Mensagem>}

            <div className={styles.container_pai}>
                {projectMassage && <Mensagem type="success" msg={projectMassage}></Mensagem>}
                {projects.length > 0 &&
                    projects.map((project) => <ProjectCard name={project.name} id={project.id} budget={project.budget} category={project.category} key={project.id} handleRemove={removeProject}></ProjectCard>)}

                {!removeLoading && <Loading></Loading>}

                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados</p>
                )}
            </div>


        </div>

    )
}

export default Projetos