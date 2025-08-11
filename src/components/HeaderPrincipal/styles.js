import styled from "styled-components";





export const Container = styled.div`
min-height:100px;
z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  padding: 10px 50px;
  background-color: ${(props) =>
  props.$changeBackground ? '#000' : 'transparent'};
  transition: background-color 0.5s ease-in-out;

  img{
    width: 25%;
   
  }
  

`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
  margin-right: 20px;
  font-size: 1.2rem;

  a {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s;


    &:hover {
      color:#189b20;
    }
  }


`

export const Li = styled.li`
color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s;
  position: relative;

  &::after {
    content: '';
    height: 3px;
    width: ${props => props.$isActive ? '100%' : '0'};
    background-color: #189b20;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease-in-out;
    
  }

  
  &:hover::after {
  width: 100%;
  }



`



