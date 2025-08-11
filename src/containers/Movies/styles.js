import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px;
  padding: 40px 20px;
  justify-items: center; 
`;
export const ContainerTitle = styled.div`
margin-top: 130px;

`


export const Card = styled.div`
  background-color:rgb(0, 0, 0);
  padding: 10px;
  border-radius: 8px;
  width: 80%;
  text-align: center;

  img {
    border: none;
    width: 100%;
    height: 100%;
 
    border-radius: 6px;
    display: block;
    margin: 0 auto;
  }

  h2 {
    color: white;
    font-size: 0.8rem;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  p {
    color: #000000;
    font-size: 0.7rem;
  }
`;
