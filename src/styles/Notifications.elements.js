import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";

export const ContainerPrincipal = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 20px 40px 170px 40px;
`

export const ContainerUno = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 640px) {
    margin-bottom: 10px;
  }
`

export const BtnBack = styled.button`
  background: none;
  border:  none;
  &:hover {
    cursor: pointer;
  }
`

export const Left = styled(FaChevronLeft)`
  font-size: 30px;
  color: #5C7AEA;
`

export const Title = styled.h1`
  font-size: 40px;
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`

export const ContainerDos = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(92, 122, 234, 0.2);
  @media screen and (max-width: 400px) {
    width: auto;
  }
`

export const ContainerText = styled.div`
  width: 300px;
  height: auto;
`

export const P = styled.p`
  color: #14279B;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  @media screen and (max-width: 860px) {
    font-size: 14px;
  }
`