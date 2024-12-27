import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/pages/home";
import Contato from "./components/pages/contato";
import Compania from "./components/pages/compania";
import Projetos from "./components/pages/projetos";
import NovosProjetos from "./components/pages/novos_projetos"

import NavBar from "./components/layout/nav_bar";
import Footer from "./components/layout/footer";
import Project from "./components/pages/project";


function App() {
  return (
    <Router>

      <NavBar></NavBar>

      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contato" element={<Contato></Contato>}></Route>
          <Route path="/empresa" element={<Compania></Compania>}></Route>
          <Route path="/projetos" element={<Projetos></Projetos>}></Route>
          <Route path="/novosProjetos" element={<NovosProjetos></NovosProjetos>}></Route>
          <Route path="/project/:id" element={<Project></Project>}></Route>
      </Routes>

      <Footer></Footer>

    </Router >
  );
}

export default App;
