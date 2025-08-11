import { useEffect, useState } from 'react';
import { getTopSeries, getPopularSeries } from '../../services/getData';
import Slider from '../../components/Slider';
import { Container,ContainerTitle,Card} from './styles';

function Series() {
  const [topSeries, setTopSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);

  useEffect(() => {
    async function fetchSeries() {
      try {
        const [top, popular] = await Promise.all([
          getTopSeries(),
          getPopularSeries()
        ]);
        setTopSeries(top);
        setPopularSeries(popular);
      } catch (error) {
        console.error('Erro ao buscar séries:', error);
      }
    }

    fetchSeries();
  }, []);

  return (
    <ContainerTitle>
      {topSeries.length > 0 && <Slider info={topSeries} title="Séries Mais Bem Avaliadas" />}
      {popularSeries.length > 0 && <Slider info={popularSeries} title="Séries Populares" />}
    </ContainerTitle>
  );
}

export default Series;
