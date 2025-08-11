import { useEffect, useState } from 'react';
import { getTopMovies, getNowPlayingMovies } from '../../services/getData'; 
import Slider from '../../components/Slider';
import { ContainerTitle } from './styles';

function Movie() {
  const [topMovies, setTopMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]); 

  useEffect(() => {
    async function fetchData() {
      try {
        const top = await getTopMovies();
        const now = await getNowPlayingMovies(); 
        setTopMovies(top);
        setNowPlaying(now); // 👈 
        
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <ContainerTitle>
      {topMovies.length > 0 && (
        <Slider info={topMovies} title="Filmes Populares" />
      )}
      {nowPlaying.length > 0 && (
        <Slider info={nowPlaying} title="Filmes em Cartaz" /> 
      )}
    </ContainerTitle>
  );
}

export default Movie;
