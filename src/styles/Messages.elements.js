import styled from "styled-components";
import { TextField } from '@mui/material';

export const ContainerPrincipal = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 10px 0px 10px 100px;
  @media screen and (max-width: 860px) {
    margin: 0px 0px 10px 10px;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerUno = styled.div`
  width: 40%;
  height: 500px;
  background-color: rgba(230, 230, 230, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 790px) {
    width: 320px;
  }
  @media screen and (max-width: 640px) {
    height: 300px;
    margin-bottom: 100px;
  }
`

export const InputContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const InputSearch = styled(TextField)`
  width: 300px;
  @media screen and (max-width: 1000px) {
    width: 250px;
  }
  @media screen and (max-width: 380px) {
    width: 240px;
  }
`

export const BtnContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Buttons = styled.button`
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  margin-right: 10px;
  background: #5C7AEA;
  padding: 12px;
  &:hover {
    background: #3D56B2;
    transition: 0.5s all ease;
    cursor: pointer;
  }
  @media screen and (max-width: 860px) {
    padding: 8px;
  }
  @media screen and (max-width: 590px) {
    font-size: 14px;
    padding: 5px;
  }
`

export const ContainerDos = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  @media screen and (max-width: 590px) {
    margin-bottom: 30px;
  }
`

export const Img = styled.img`
  width: 200px;
  height: auto;
`

export const ContainerText = styled.div`
  width: 300px;
  height: auto;
`

export const P = styled.p`
  color: #686D76;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  margin-right: 10px;
  @media screen and (max-width: 860px) {
    font-size: 14px;
  }
`