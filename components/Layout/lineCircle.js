import styled from "styled-components";

const Line = styled.div`
    width: 100%;
    height: 70px;
    background-color: #091C2D  ;
    position: absolute;
    top: 0px;
`
const Circle = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-color: #2E4053;
    position: absolute;
    top: 15px;
    z-index: 2;
`

const LineCircle = () => {
  return (
      <>
        <Line/>
        <Circle/>
      </>
  )
}

export default LineCircle;