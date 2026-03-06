import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

function Detalhes() {
  const [detalhes, setDetalhes] = useState([])
  const {id} = useParams()

  const chave = "d80d11bd92edbcfa822ce540864b7e91"
  const link = `https://api.themoviedb.org/3/movie/${id}?api_key=${chave}&language=pt-BR`

  useEffect(()=>{
    fetch(link)
    .then((resposta)=>{
      return resposta.json()
    })
    .then((resposta)=>{
      setDetalhes(resposta)
    })
  }, [])
  return (
    <div>
      <section>
          <h3>{detalhes.title}</h3>
          <img src={`https://image.tmdb.org/t/p/original/${detalhes.poster_path}`} />
          <p>{detalhes.overview}</p>
      </section>
    </div>
  );
}

export default Detalhes;
