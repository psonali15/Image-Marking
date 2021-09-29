import React, { Component,useState } from "react";
import styled from "styled-components";
import Image1 from  './21_09_24_01_39_39_142.jpg';
import Image0 from  './21_09_08_12_17_43_721.jpg';
import Image2 from  './21_09_24_01_40_57_920.jpg';
import Image3 from  './21_09_24_01_41_34_491.jpg';
import Image4 from  './21_09_24_01_42_21_351.jpg';
import Arrow from '@elsdoerfer/react-arrow';




 class MarkingImg extends Component {
  // const [circles, setCircles] = useState([]);




 
constructor(){
    super();
    this.state={
       circles: [],
       p1: {x: 107, y: 163}, 
       p2: {x: 215, y: 389}, 
       a1 :10
    }

    
  }

  // const getClickCoords = (event) => {
  //   // from: https://stackoverflow.com/a/29296049/14198287
  //   var e = event.target;
  //   var dim = e.getBoundingClientRect();
  //   var x = event.clientX - dim.left;
  //   var y = event.clientY - dim.top;
  //   return [x, y];
  // };



  // const addCircle = (event) => {
  //   // get click coordinates
  //   // let [x, y] = getClickCoords(event);

  //   // make new svg circle element
  //   // more info here: https://www.w3schools.com/graphics/svg_circle.asp
    

  //   // update the array of circles; you HAVE to spread the current array
  //   // as 'circles' is immutible and will not accept new info
  //   let allCircles = [...circles];

  //   // update 'circles'
  //   setCircles(allCircles);
  // };

  // console.log(circles);
render() {
  return(
    <Container>
      <h1>Image 1</h1>
      <ClickableSVG style={{backgroundImage: `url(${Image1})`, width:768, height:1024}}>
        {/* This loads your circles in the circles hook here */}
        
      
    <line x1="107" y1="163" x2="215" y2="389" markerEnd="url(#arrow)" style={{stroke:"red"}} strokeWidth="4"   />



      </ClickableSVG>

       <h1>Image 1</h1>
      <ClickableSVG style={{backgroundImage: `url(${Image0})`, width:768, height:1024}}>
        {/* This loads your circles in the circles hook here */}
        
  

    <line x1="107" y1="112" x2="307" y2="348" style={{markerStart:"url(#markerArrow)",stroke:"red"}} strokeWidth="4"   />

      </ClickableSVG>
 <h1>Image 2</h1>
      <ClickableSVG style={{backgroundImage: `url(${Image2})`, width:768, height:1024}}>
        {/* This loads your circles in the circles hook here */}
       
      
      
      </ClickableSVG>
      <h1>Image 3</h1>
      <ClickableSVG style={{backgroundImage: `url(${Image3})`, width:768, height:1024}}>
        {/* This loads your circles in the circles hook here */}
       
      
    <ellipse
    fill="none"
    // cx="163"
    // cy="368"
    // rx="225"
    // ry="145"

    cx="230.84"
    cy="245.76"
    rx="115.42"
    ry="30.7"
    stroke="#D81919"
    strokeWidth="4"
  />
  
      
      </ClickableSVG>
       <h1>Image 4</h1>
      <ClickableSVG style={{backgroundImage: `url(${Image4})`, width:768, height:1024}}>
        {/* This loads your circles in the circles hook here */}
        
   
  <text x="0" y="1024" fill="red" style={{fontSize:30}}>Car</text>
  <text x="0" y="0" fill="red" style={{fontSize:30}}>Car</text>
  <text x={1024} y={1536} fill="red">Test</text> 
    </ClickableSVG>
    </Container>
    );
  }
}

export default MarkingImg

const Container = styled.div`
  width: 100%;
  hieght: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ClickableSVG = styled.svg`
  width: 500px;
  height: 700px;
  background-image: {Images}
  & * {
    /* Block your circles from triggering 'add circle' */
    pointer-events: none;
  }
`;