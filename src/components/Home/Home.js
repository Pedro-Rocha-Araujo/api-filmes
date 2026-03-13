import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Home() {
  const [filmes, setFilmes] = useState([])  
  
  useEffect(()=>{
    const chave = "d80d11bd92edbcfa822ce540864b7e91"
    const link = `https://api.themoviedb.org/3/movie/popular?api_key=${chave}&language=pt-BR`
    function getFilmes() {
      fetch(link)
      .then((resposta)=>{
        return resposta.json()
      })
      .then((resposta)=>{
        setFilmes(resposta.results)
      })
    }
    getFilmes()
  }, [])

  return (
    <div>
      <h2><i class="fa-solid fa-film"></i> Lista de filmes <i class="fa-solid fa-film"></i></h2>
      {filmes.map((_,i)=>{
        return(
          <section key={i}>
            <div className="flex">
            <h3>{_.title}</h3>
            <img src={`https://image.tmdb.org/t/p/original/${_.poster_path}`} alt="Poster do filme em questão" />

            </div>
            <p>{_.overview}</p>
            <Link to={`/detalhes/${_.id}`}>Detalhes</Link>
          </section>
        )
      })}
    </div>
  );
}

export default Home;