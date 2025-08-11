import styled, {keyframes} from "styled-components";

const scale = keyframes`
from {
    transform: scale(0);
}
to {
    transform: scale(1);
}

`


export const Background = styled.div`
background-image: url(${(props) => props.image});
height: 50vh;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
position: relative;

&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

&::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background-image:linear-gradient(to top,#000,rgba(0, 0, 0, 0));
}

`

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
height: 100%;
max-width: 1500px;
margin-top: -100px;




`

export const Cover= styled.div`
padding: 20px;
display: flex;
align-items: flex-start;
height: 100%;
z-index: 99;

img{
    width: 450px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear
    
}


`

export const Info= styled.div`
padding: 20px;
width: 50%;
z-index: 99;
display: flex;
align-items: flex-start;
flex-direction: column;

h2 {
    font-size: 50px;
    font-weight: 700;
    color: #ffffff;
}

p {
   font-weight: 700;
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 30px;

}	


`
export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  width: 100%;

  div {
    width: 100%;
    max-width: 1000px;
    margin-bottom: 40px;
  }

  h4 {
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: left;
  }

  .video-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; 
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.15);
    background-color: #000;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 20px;
      text-align: center;
    }

    div {
      padding: 0 10px;
    }
  }
`;
