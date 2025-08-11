import { useEffect, useState } from "react";
import { Container, Background } from "./styles";
import { getMovieVideos } from "../../services/getData";


function Modal({ movieId,setShowModal }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
     setMovie(await getMovieVideos(movieId));
    }

      getMovies();
    },[])


  return (
    <Background onClick={() => setShowModal(false)}>
      {loading && <p style={{ color: "#fff" }}>Carregando trailer...</p>}

      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
