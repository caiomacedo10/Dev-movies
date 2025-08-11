import { useEffect, useState } from "react";
import {
  Container,
  Background,
  Cover,
  Info,
  ContainerMovies
} from "./styles";

import {
  getMovieById,
  getMovieVideos,
  getMovieCredits,
  getMovieSimilar
} from "../../services/getData";

import { useParams } from "react-router-dom";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";

function Detalhe() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [movieVideos, setMovieVideos] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [movieSimilar, setMovieSimilar] = useState([]);

  useEffect(() => {
    async function getAllData() {
      try {
        const [movieData, videos, credits, similar] = await Promise.all([
          getMovieById(id),
          getMovieVideos(id),
          getMovieCredits(id),
          getMovieSimilar(id),
        ]);

        setMovie(movieData);
        setMovieVideos(videos); 
        setMovieCredits(credits);
        setMovieSimilar(similar);
      } catch (error) {
        console.error(error);
      }
    }

    getAllData();
  }, [id]);

  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} />
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Container>

     <ContainerMovies>
  {movieVideos.map((video) => (
    <div key={video.id}>
      <h4>{video.name}</h4>
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  ))}
</ContainerMovies>
 <Slider info={movieSimilar} title={'Fimes Similares'} />


        </>
      )}
    </>
  );
}

export default Detalhe;
