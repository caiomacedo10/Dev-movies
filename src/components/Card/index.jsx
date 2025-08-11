import { getImages } from "../../utils/getImages";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

function Card({ item }) {
  const navigate = useNavigate();

  function handleClick() {
    if (item.id) {
      navigate(`/detalhe/${item.id}`);
    }
  }

  return (
    <Container onClick={handleClick}>
      <img src={getImages(item.poster_path || item.profile_path || '')} alt={item.title || item.name} />
      <h3>{item.title || item.name || ''}</h3>
    </Container>
  );
}

export default Card;
