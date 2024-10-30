import { useEffect, useState } from "react";
import Titulo from "../../componentes/Titulo";
import { ICategorias } from "../../interfaces/ICategorias";
import http, { obterCategoriaPorSlug } from "../../http";
import { useParams } from "react-router-dom";
import Loading from "../../componentes/Loading";
import { useQuery } from "@tanstack/react-query";
import ListaLivros from "../../componentes/ListaLivros" ;

export default function Categoria() {
  const params = useParams();

  const { data: categoria, isLoading, error } = useQuery({
    queryKey: ['categoriaPorSlug', params.slug ?? ''],
    queryFn: () => obterCategoriaPorSlug(params.slug ?? '')
  });

  if (isLoading) return <Loading />;

  if (error) return <div>throwing an error message from react query: {error.message}</div>;

  if (!categoria) return <div>No category found.</div>; 

  return (
    <section>
      <Titulo texto={categoria.nome} />
      <ListaLivros categoria={categoria} />
    </section>
  );
}
