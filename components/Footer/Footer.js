import styled from "styled-components"

const Container = styled.div`
    display: flex;
    position: absolute;
    background-color: #091C2D ;
    bottom: 0px;
    width: 100%;
    height: 20px;
    justify-content: end;
    font-size: small;
    @media ${(props) => props.theme.breakpoints.md} {
    position: relative;}
`
const Text = styled.p`
  margin-right: 5px;
`

const Footer = () => {
  return (
    <Container>
        <Text>App created with next.js</Text>
    </Container>
  )
}

export default Footer