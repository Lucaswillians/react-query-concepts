import { useQuery } from "@tanstack/react-query"
import { ICategorias } from "../../interfaces/ICategorias"
import { obterProdutosDaCategoria } from "../../http";
import CardLivro from "../CardLivro";
import './ListaLivros.css'

interface ListaLivrosProps {
  categoria: ICategorias
}

export default function ListaLivros ({ categoria }: ListaLivrosProps) {
  const { data: produtos } = useQuery({
    queryKey: ['categoriaPorSlug', categoria],
    queryFn: () => obterProdutosDaCategoria(categoria)
  })

  return (
    <section className="livros">
      {
        produtos?.map(livro => <CardLivro livro={livro} key={livro.id}/>)
      }
    </section>
  )
}