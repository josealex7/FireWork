import styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export const NavBarContainer = styled(AppBar)`
  position: static;
  background: #3D56B2;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 60px;
  @media screen and (max-width: 590px) {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 15px;
  }
`

export const ImgLogo = styled.img`
  width: 100px;
  height: auto;
`

export const MenuItems = styled(Typography)`
  margin-left: 30px;
`

export const ContainerSearch = styled.div`
  margin-left: 300px;
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