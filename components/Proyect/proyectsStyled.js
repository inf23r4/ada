import styled from "styled-components"

const Container = styled.div`
width: 80%;
margin-top: 30px;
`

const ContainerP = styled.div`
  display: grid;
  height: min-content;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
  grid-template-areas:
    "cart cart cart cart cart "
    ;
  justify-content: center;
  align-items: center;


  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr 1fr 1fr 1fr ;
  grid-template-areas:
    "cart cart cart cart "
    ;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "cart cart "
    ;
    }
    
`
const Cart = styled.a`
    display: flex;
    grid-area: "cart";
    flex-direction: column;
    width: 160px;
    height: 140px;
    min-height: 140px;
    background-color: white;
    border-radius: 3px;
    margin: 15px auto;
    align-items: center;
    justify-content: center;
    padding: 0px;
    color: black;
    @media ${(props) => props.theme.breakpoints.md} {
      width: 140px;
    height: 120px;
    margin: 7px auto;
      }
      @media ${(props) => props.theme.breakpoints.sm} {
        width: 130px;
    height: 130px;
    margin: 7px auto;
        }
`
const CartImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 3px;
    margin:9px;
`
const Title = styled.h2`
    margin: 4px;
`
const Desc = styled.p`
 font-family:sans-serif;
 text-align: center;
 font-size: smaller;
 margin-bottom: 2px  
`
const Button = styled.button`
margin: 15px 35px;
border:none;
font-family: monospace;
background-color: #E2E9F2;
box-shadow: 2px 2px 0px 0px #DBE1E8;
padding: 7px 35px;
&:active {
  color:#ABB2B9 ;
}
@media ${(props) => props.theme.breakpoints.md} {
  padding: 5px 25px;
  margin: 10px 15px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1px 5px;
margin: 7px 7px;
    }
`
const ContainerButton = styled.div`
display: flex;
justify-content: center;
`
export { Container, ContainerButton, ContainerP, Cart, CartImage, Button, Desc}