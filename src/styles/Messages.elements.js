import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px;
  @media screen and (max-width: 565px) {
    width: 100%;
    height: 391px;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
  }
`