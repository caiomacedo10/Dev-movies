import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed; 
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: #000;
  width: 90%;
  max-width: 1200px;
  aspect-ratio: 16 / 9; 
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px; 

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px; 
  }
`;





