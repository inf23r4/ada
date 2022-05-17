import Image from "next/image"
import { useState, useEffect} from 'react'
import { Container, ContainerButton, ContainerP, Cart, CartImage, Button, Desc} from "./proyectsStyled"
import {db} from "../../data/firebase"
import { collection, getDocs, query} from "firebase/firestore";
import Pagination from "../pagination/pagination";

const Proyects = () => {

  // GET DATA FIREBASE

  const [ projects , setProjects ] = useState([])
  const [ data, setData ] = useState ([])
 

  useEffect( () => {
    async function fetchData(){
    const querySnapshot = await getDocs(query(collection(db, "proyec")));
      let projectsArray = []
      querySnapshot.forEach((doc) => {
        projectsArray.push({...doc.data(), id: doc.id});
      });
      setProjects(projectsArray)
      setData(projectsArray)
    }
    fetchData();
}, [])

  //FILTER DATA


  var app = projects.filter(p => p.img === "/a.svg")
  var front = projects.filter(p => p.img === "/r.svg")
  var back = projects.filter(p => p.img === "/b.svg")
  var three = projects.filter(p => p.img === "t.gif")
  


  function handleClickApp(){
    setData(app)
  }
  function handleClickFront(){
    setData(front)
  }
  function handleClickBack(){
    setData(back)
  }
  function handleClickThree(){
    setData(three)
  }
  function handleClick(){
    setData(projects)
  }

  //PAGINATION

  const [ pagina, setPagina ] = useState(1)
  const [ porPagina, setPorPagina ] = useState(10)

  const maximo = Math.ceil(data.length / porPagina)

  return (
    <Container>
        <ContainerButton>
          <Button onClick={handleClickApp}>Apps</Button>
          <Button onClick={handleClickFront}>Frontend</Button>
          <Button onClick={handleClick}>All</Button>
          <Button onClick={handleClickBack}>Backend</Button>
          <Button onClick={handleClickThree}>Three</Button>
        </ContainerButton>
 
    <ContainerP>     
        {data && data
        .slice((pagina - 1 )* porPagina, (pagina - 1)* porPagina + porPagina)
        .map((item, i)=>{
          return(
            <Cart key= {i} href={item.url}>
            {item.img === "t.gif"? <CartImage src={item.img} alt={item.title}/> : 
              <Image height={90} width={90} src={item.img} alt={item.title} />
            }
            <Desc>{item.desc}</Desc>
            </Cart> 
          )
        })}
  </ContainerP>
          <Pagination pagina={pagina} setPagina={setPagina} maximo = {maximo}/>
  </Container>
  )
}

export default Proyects;