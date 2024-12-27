import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

import styles from "./footer.modules.css"

function Footer() {
    return (
        <div className="container">
            <footer>
                <ul>
                    <li><FaFacebook></FaFacebook></li>
                    <li><FaInstagram></FaInstagram></li>
                    <li><FaLinkedin></FaLinkedin></li>
                </ul>
                <p><span>Costs</span> &copy; 2024</p>
            </footer>
        </div>
    )
}

export default Footer