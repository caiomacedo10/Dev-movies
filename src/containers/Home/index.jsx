import Slider from '../../components/Slider';
import Button from '../../components/Button';
import {
  getMovies,
  getTopMovies,
  getTopSeries,
  getPopularSeries,
  getTopPeople
} from '../../services/getData';

import { getImages } from '../../utils/getImages';
import { Background,Container,ContainerButtons,Info, Poster } from './styles';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal';

function Home() {
    const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState();
     const [TopMovies, setTopMovies] = useState();
       const [TopSeries, setTopSeries] = useState();
        const [PopularSeries, setPopularSeries] = useState();
          const [PopularPeople, setPopularPeople] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        async function getAllData() {
            try {
                const [movie, TopMovies, TopSeries, PopularSeries, TopPeople] = await Promise.all([
                    getMovies(),
                    getTopMovies(),
                    getTopSeries(),
                    getPopularSeries(),
                    getTopPeople()
                ]);
                setMovie(movie);
                setTopMovies(TopMovies);
                setTopSeries(TopSeries);
                setPopularSeries(PopularSeries);
                setPopularPeople(TopPeople);
            } catch (error) {
                console.error(error);
            }
        }
       
        getAllData();
    }, []);
    
return (
    <>
        {movie && (
            <Background $img={getImages(movie.backdrop_path)}>
                {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
                <Container>
                    <Info>
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        <ContainerButtons>
                            <Button red onClick={() => navigate (`/detalhe/${movie.id}`)}>Assista Agora</Button>
                            <Button onClick={() => setShowModal (true)}>Assista o Trailer</Button>
                        </ContainerButtons>
                    </Info>
                    <Poster>
                        <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
                    </Poster>
                </Container>
            </Background>
        )}
        {TopMovies && <Slider info={TopMovies} title={'Top Fimes'} />}
        {TopSeries && <Slider info={TopSeries} title={'Top Series'} />}
        {PopularSeries && <Slider info={PopularSeries} title={'Series Populares'} />}
        {PopularPeople && <Slider info={PopularPeople} title={'Artistas Populares'} />}
    </>
)
}

export default Home;

