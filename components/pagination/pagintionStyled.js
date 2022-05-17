import styled from "styled-components"

const Container = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    @media ${(props) => props.theme.breakpoints.md} {
        padding: 5px 25px;
        margin: 10px 15px;
        }
        @media ${(props) => props.theme.breakpoints.sm} {
          padding: 1px 5px;
      margin: 15px 7px;
          }
`

const Button = styled.button`
margin: 15px 35px;
border:none;
font-family: monospace;
background-color: #E2E9F2;
box-shadow: 2px 2px 0px 0px #DBE1E8;
padding: 7px 20px;
color:black;
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

const Input = styled.input`
height: 20px;
        width: 30px;
        text-align: center;
        border: none;
        outline: none;
        color:grey;
        font-family: monospace;
`

const P = styled.p`
font-family: monospace;
`
export {Container, Button, Input, P};


