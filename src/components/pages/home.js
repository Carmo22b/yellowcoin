import styles from "./home.module.css"

import cofrinho from "../../imgs/a-3d-render-of-a-piggy-bank-in-the-shape-of-a-pig--sN_u1kxKT7ObXRASIFUEvw-Skrmb09zTLyvP9OK9qbBvQ.jpeg"

import LinkBotao from "../layout/link_botao"

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>YELLOW COIN</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>

            <LinkBotao to="/novosProjetos" text="Criar Projeto"></LinkBotao>
            <img src={cofrinho} alt="Costs"></img>
        </section>
    )
}

export default Home