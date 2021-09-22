import React from 'react'
import styled from 'styled-components'
import ImgSlider from "./ImgSlider"

function Home() {
    return (
        <Container>
           <ImgSlider/>
        </Container>
    )
}

export default Home

const Container = styled.main`
// by setting it to main it's more html friendly for Google
//min-height is setting the rest of body by subtracting the size of 70px which is the headers height
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);


//sets a div before the container
&:after{
    background: url("/images/home-background.png") center center / cover
    no-repeat fixed;
  content: "";
  position: absolute;
  inset: 0px;
  opacity: 1;
  z-index: -1;


}


`

