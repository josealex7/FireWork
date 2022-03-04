import styled from "styled-components";

export const NavBarContainer = styled.div`
  background: #3D56B2;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  @media screen and (max-width: 590px) {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 15px;
  }
`

export const ImgLogo = styled.img`
  width: 130px;
  height: auto;
`

export const ContainerSearch = styled.div`
  margin-left: 300px;
  display: flex;
  align-items: start;
  justify-content: start;
  color: #fff;
  width: 250px;
  @media screen and (max-width: 1193px) {
    margin-left: 200px;
  }
  @media screen and (max-width: 1110px) {
    margin-left: 100px;
  }
  @media screen and (max-width: 950px) {
    margin-left: 50px;
  }
`

// Items Menu
export const ItemsContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`