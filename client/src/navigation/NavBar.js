import React  from "react";
import styled from "styled-components";
import KaylaLogo from '../assets/KaylaLogo.png';


const NavBar = () => {
  return (
    <>
   <NavStyle>
    <FlexContainer>
    <Image src={KaylaLogo} alt="KaylaDailey Logo" />
        </FlexContainer>
 
      </NavStyle>
 </>
  );
};
export default NavBar;

//Styling
const NavStyle = styled.nav`
  position: fixed;
  width: 100%;
  background: #69454F;
  z-index: 1;
  font-size:  2rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;
const Image = styled.img`
  height: 100%;
  position: right;
`