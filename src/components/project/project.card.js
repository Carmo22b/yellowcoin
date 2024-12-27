import styles from "./project.card.module.css"

import { Link } from "react-router-dom";

import { BsPencil, BsFillTrashFill } from "react-icons/bs"

function ProjectCard({ id, name, budget, category, handleRemove }) {
    
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    
    return (
        <div className={styles.project_card}> 
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[(category?.name || "Sem categoria").toLowerCase()]}`}></span> {category?.name || "Sem categoria"} 
                
            </p>
            <div className={styles.project_card_actions}>
                <Link to={`/project/${id}`}>
                    <BsPencil>Editar</BsPencil>
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill>Excluir</BsFillTrashFill>
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;