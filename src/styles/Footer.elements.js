import styled from "styled-components";

export const ContainerPrincipal = styled.footer`
  width: 100%;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom:40px;
  @media screen and (max-width: 850px) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 30px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 850px) {
    margin-bottom: 0px;
    margin-left: 0px;
  }
`

export const ImgLogo = styled.img`
  width: 130px;
  height: auto;
  margin-bottom: 10px;
  @media screen and (max-width: 850px) {
    margin-bottom: 0px;
    width: 120px;
  }
`

export const ContainerTexto = styled.div`
  width: 695px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 850px) {
    margin-top: 30px;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const P = styled.small`
  color: #686D76;
  /* font-family: Lora; */
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  @media screen and (max-width: 850px) {
    font-size: 16px;
    line-height: 32px;
  }
`

export const ContainerIconos = styled.div`
  width: 144px;
  height: 10px;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  margin-right: 90px;
  @media screen and (max-width: 850px) {
    margin-top: 40px;
    margin-right: 0px;
  }
`

export const LinkRedes = styled.a`
  color: #3D56B2;
  font-size: 25px;
  line-height: 32px;
  text-align: start;
  margin-right: 10px;
  &:hover {
    color: #5C7AEA;
    transition: 0.5s all ease;
    cursor: pointer;
  }
  @media screen and (max-width: 850px) {
    margin-top: 0px;
  }
`

// Scroll -------------------------------------------------------
export const ScrollToTop = styled.div`
  bottom: 0px;
  right: 0px;
  animation: fadeIn 700ms ease-in-out 1s both;
  cursor: pointer;
  width: 100%;
  height: 50px;
  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`

export const BackTopContainer = styled.div`
  text-align: center;
  width: 60px;
  height: 60px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  margin-left: 1200px;
}
`

export const Indication = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3D56B2;
  bottom: 0px;
  font-size: 40px;
`