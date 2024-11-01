import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import PaginaBase from "../paginas/PaginaBase"
import Categoria from "../paginas/Categoria"


const Rotas = () => {
    return (<Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
        <Route path="/categorias/:slug" element={<Categoria/>}/>
      </Route>
    </Routes>)
}

export default Rotas