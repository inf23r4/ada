import  styled, {keyframes} from "styled-components"

const Container = styled.div`
    display: flex;
    background-color: #0D1826;
    align-items: center;
    justify-content: center;
    height: 170px;
`
const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    z-index: 10;
`

const Title = styled.p`
    margin-top: 80px;
    font-size: 18px;
`
const Span = styled.span`

`
// ICONS

const ContainerIcons = styled.div`
    position: absolute;
    right: 11px;
    top: 20px;
`


const SocialIcons = styled.a`
transition: 0.3s ease;
color: #A7B2BF;
border-radius: 50px;
  padding: 3px 10px;
&:hover {
    background-color: #212d45;
    transform: scale(2);
    cursor: pointer;
    
  }
`


export  {ContainerIcons, SocialIcons, Container, ContainerInfo, Title, Span };