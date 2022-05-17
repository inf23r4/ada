import styled from "styled-components"
import Technologies from '../technologies/technologies'

const Container = styled.div`
    display: flex;
    position: absolute;
    background-color: #0D1826 ;
    flex-direction: column;
    bottom: 0px;
    width: 100%;
    height: 90px;
    justify-content: center;
    font-size: small;
    @media ${(props) => props.theme.breakpoints.md} {
      position: relative;
      bottom: 0px;
      }
    @media ${(props) => props.theme.breakpoints.sm} {
      position:relative;
      height: 60px;
      }
`

const Footer = () => {
  return (
    <Container>
        <Technologies/>
    </Container>
  )
}

export default Footer