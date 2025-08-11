import styled, {css} from "styled-components";


const buttonStyles = css`
  border: 3px solid #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #ffffff;
    color: #ff0000;
    transform: scale(1.05); 
  }
`;

export const ButtonWhite = styled.button`
  ${buttonStyles}






`
export const ButtonRed = styled.button`
  ${buttonStyles}

  background: rgba(255, 0, 0, 0.8);
  color: #ffffff;
  border: none;
  box-shadow: 0 0 5px rgba(255, 0, 0, 0.3);
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 0, 0, 1);
    color: #ffffff;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
    transform: scale(1.05); 
  }
`;

