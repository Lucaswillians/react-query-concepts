import { Link } from "react-router-dom"
import BotaoNavegacao from "../BotaoNavegacao"
import ModalCadastroUsuario from "../ModalCadastroUsuario"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'
import { useEffect, useState } from "react"
import { ICategorias } from "../../interfaces/ICategorias"
import http from "../../http"

const BarraNavegacao = () => {
    const [categorias, setCategorias] = useState<ICategorias[]>([])

    useEffect(() => {
        http.get<ICategorias[]>('categorias').then(response => {
            setCategorias(response.data)
        })
    },[])

    return (<nav className="ab-navbar">
        <h1 className="logo">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo da AluraBooks" />
            </Link>
        </h1>
        <ul className="navegacao">
            <li>
                <a href="#!">Categorias</a>
                <ul className="submenu">
                   {
                    categorias.map(categoria => (
                        <li key={categoria.id}>
                            <Link to={`/categorias/${categoria.slug}`}>
                                {categoria.nome}
                            </Link>
                        </li>
                    ) )
                   }
                </ul>
            </li>
        </ul>
        <ul className="acoes">
            <li>
                <BotaoNavegacao texto="Login" textoAltSrc="Icone representando um usuário" imagemSrc={usuario} />
            </li>
            <li>
                <BotaoNavegacao
                    texto="Cadastrar-se"
                    textoAltSrc="Icone representando um usuário"
                    imagemSrc={usuario}
                />
                {/* <ModalCadastroUsuario /> */}
            </li>
        </ul>
    </nav>)
}

export default BarraNavegacao