import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 40px 20px;
  justify-items: center;
  
`;

export const ContainerTitle = styled.div`
margin-top: 130px;

`


export const Card = styled.div`
  background-color: #1c1c1c;
  padding: 10px;
  border-radius: 8px;
  width: 160px;
  text-align: center;



   

  img {
    width: 150px;
    height: 225px;
    object-fit: cover;
    border-radius: 6px;
    display: block;
    margin: 0 auto;
  }

  h2 {
    color: white;
    font-size: 0.9rem;
    margin-top: 8px;
  }

  p {
    color: #aaa;
    font-size: 0.75rem;
   
  }
`;
