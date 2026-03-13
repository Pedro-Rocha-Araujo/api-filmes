import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"

function Detalhes(props) {
  const [detalhes, setDetalhes] = useState({})
  const {id} = useParams()
  const navigate = useNavigate()

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
    .catch(()=>{
      navigate("/", { replace: true} )
      return
    })
  }, [navigate, link])

  return (
    <div>
      <section>
          <h3>{detalhes.title}</h3>
          <img src={`https://image.tmdb.org/t/p/original/${detalhes.poster_path}`} alt="Poster do filme em questão" />
          <div className="infos">
            <a className="btn-pequeno" target="blank" href={`https://www.youtube.com/results?search_query=${detalhes.title} trailer`}>Trailer</a>
            <span><i class="fa-solid fa-star"></i> {detalhes.vote_average}</span>
          </div>
          <p>{detalhes.overview}</p>
      </section>
    </div>
  );
}

export default Detalhes;