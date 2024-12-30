import { useNavigate } from "react-router-dom"

import ProjetoForm from "../project/projeto_form"

import styles from "./novos_projetos.module.css"

function NovosProjetos() {

    const navigate = useNavigate()

    function createPost(project) {
    project.cost = 0
    project.services = []

    const API_URL = process.env.REACT_APP_API_URL; // Usando variável de ambiente

    fetch(`${API_URL}/projects`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(project)
    })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            navigate("/projetos", { state: { message: "Projeto criado com sucesso!" } }) // Alterado para message
        })
        .catch((err) => console.log(err))
}


    return (
        <div className={styles.novo_projeto_container}>
            <h1>Criar Projeto</h1>

            <p>Crie seu projeto para depois adicionar os serviços</p>

            <ProjetoForm handleSubmit={createPost}></ProjetoForm>
        </div>
    )
}

export default NovosProjetos