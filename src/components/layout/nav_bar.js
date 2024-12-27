import { Link } from "react-router-dom"

import styles from "./nav_bar.modules.css"
import logo from "../../imgs/a-logo-of-a-yellow-coin-with-the-text-yellow-coin--2PVrsHhoSfGLRkSmnVPMLg-tE6X-TGKRf6XaecGvORIeQ-removebg-preview.png"

function NavBar() {
    return (
        <nav>
            <Link to="/">
                <img src={logo} alt="Costs"></img>
            </Link>
            <ul>
                <li><Link to="/" className="links">Home</Link></li>
                <li><Link to="/contato" className="links">Contato</Link></li>
                <li><Link to="/empresa" className="links">Empresa</Link></li>
                <li><Link to="/projetos" className="links">Projetos</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar