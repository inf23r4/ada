import { SiTypescript, SiThreedotjs, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs } from "react-icons/si"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
    justify-content: center;
    align-items: center;
        font-size: 20px; 
    }
`
const Div = styled.div`
    margin: 8px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media ${(props) => props.theme.breakpoints.sm} {
    margin: 10px;
    justify-content: center;
    align-items: center;
    }
`
const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: small;
    text-shadow: 2px 3px 0 #2a2a2a;
    @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    }
`

const Technologies = () => {
  return (
    <Container>
        <Div>
            <SiJavascript/>
            <Text>JavaScript</Text>
        </Div>
        <Div>
            <SiTypescript/>
            <Text>Typescript</Text>
        </Div>
        <Div>
            <SiNodedotjs/>
            <Text>Node.js</Text>
        </Div>
        <Div>
            <SiReact/>
            <Text>React.js</Text>
        </Div>
        <Div>
            <SiNextdotjs/>
            <Text>Next.js</Text>
        </Div>
        <Div>
            <SiThreedotjs/>
            <Text>Three.js</Text>
        </Div>
    </Container>
  )
}

export default Technologies