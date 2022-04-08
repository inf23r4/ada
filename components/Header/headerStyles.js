import  styled from "styled-components"

const Container = styled.div`
    display: flex;
    background-color: #2E4053;
    align-items: center;
    justify-content: center;
`
const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    z-index: 10;
`
const Image = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
`
const Title = styled.p`
    margin-top: 10px;
    font-size: larger;
`
// ICONS

const ContainerIcons = styled.div`
    position: absolute;
    right: 1px;
    top: 20px;
`


const SocialIcons = styled.a`
transition: 0.3s ease;
color: #5F9EA0;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(2);
    cursor: pointer;
    
  }
`


export {ContainerIcons, SocialIcons, Container, ContainerInfo, Image, Title };