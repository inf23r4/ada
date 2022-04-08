import { ContainerIcons, SocialIcons, Container, ContainerInfo,  Image, Title} from "./headerStyles"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import LineCircle from "../Layout/lineCircle";


function Layout () {
  return (
    <Container>
        <LineCircle/>
        <ContainerInfo>
            <Image src ="https://avatars.githubusercontent.com/u/78464249?v=4" alt = "profile"/>  
            <Title>Mario Gabriel Agüero Diaz</Title>
            <h4>Developer</h4>
            <br/>
        </ContainerInfo>

        <ContainerIcons>
        <SocialIcons href="https://github.com/inf23r4">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/mario-diaz-ag%C3%BCero-108350198/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </ContainerIcons>

    </Container>
  )
}

export default Layout;