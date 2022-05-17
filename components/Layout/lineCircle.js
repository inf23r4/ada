import styled from "styled-components";

const Line = styled.div`
    width: 100%;
    height: 70px;
    background-color: #000B1B  ;
    position: absolute;
    top: 0px;
`
const Circle = styled.div`
    display: flex;
    width: 105px;
    height: 105px;
    border-radius: 50%;
    background-color: #0D1826;
    position: absolute;
    top: 15px;
    z-index: 2;
    align-items: center;
    justify-content: center;
    
`
const Image = styled.img`
    border-radius: 50%;
    width: 80px;
    height: 80px;
`

const LineCircle = () => {
  return (
      <>
        <Line/>
        <Circle>
        <Image src ="https://avatars.githubusercontent.com/u/78464249?v=4" alt = "profile"/>
        </Circle>
      </>
  )
}

export default LineCircle;