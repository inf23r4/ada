import { projects } from '../../data/data'
import styled from "styled-components"
import Image from "next/image"

const Container = styled.div`
  display: grid;
  width: 80%;
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
    margin: 15px;
    align-items: center;
    justify-content: center;
    padding: 4px;
    color: black;
`
const CartImage = styled.img`
    width: 100px;
    height: 100px;
`
const Title = styled.h2`
    margin: 4px;
`
const Desc = styled.p`
 font-family:sans-serif;
 text-align: center;
 font-size: smaller;
`

const Proyects = () => {
  return (
    <Container>
        {projects && projects.map((item, i)=>{
          return(
            <Cart key= {i} href={item.url}>
            {item.img ? <CartImage src={item.img} alt={item.title}/> : 
              <Image height={100} width={100} src="/Untitled.svg" alt="Backend" />
            }
            <Desc>{item.desc}</Desc>
            </Cart> 
          )
        })}
  </Container>
  )
}

export default Proyects;