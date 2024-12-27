import loading from "../../imgs/1487.gif"

import styles from "./loading.module.css"

function Loading() {
    return(
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="loading"></img>
        </div>
    )
}

export default Loading