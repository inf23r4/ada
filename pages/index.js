import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/header'
import Proyects from '../components/Proyect/proyects'
import Technologies from '../components/technologies/technologies'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`
export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      
      <Header/>

      <main>
        <Container>
          <Proyects />
        </Container>
        <Technologies/>
        <Footer/>
      </main>
    </div>
  )
}
