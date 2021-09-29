import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import Images from  './natur.gif';
import { Text } from 'react-bootstrap';


function MarkingImg()
{
	console.warn(Images);

	 const mystyle = {
      position:"relative", 
      top: 95, 
      left: 200
    };

   const myImgstyle = {
    position: "absolute",
    top: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    textAlign: "center",
    paddingLeft: 100,
    paddingRight: 100,
}

const style = {
   margin : 100
}


	return(
		<>
		 <Header />
		 <img styles={style} src={Images} width="400" height="200"/>
<svg styles={mystyle} xmlns="" version="1.1">
  <circle cx="50" cy="50" r="40" stroke="red" strokeWidth="2" fill="none" />
   
<text x="0" y="15" fill="red">Nature</text>
  <line x1="10" y1="10" x2="100" y2="100" style={{stroke:"red"}} strokeWidth="2" />

</svg>

</>
	)
}
export default MarkingImg;



import React, { useState } from "react";
import styled from "styled-components";
import Images from  './21_09_08_12_15_53_984.jpg';
import Image from  './21_09_08_12_17_43_721.jpg';
import Arrow from '@elsdoerfer/react-arrow';

export default function App() {
  const [circles, setCircles] = useState([]);

  // const getClickCoords = (event) => {
  //   // from: https://stackoverflow.com/a/29296049/14198287
  //   var e = event.target;
  //   var dim = e.getBoundingClientRect();
  //   var x = event.clientX - dim.left;
  //   var y = event.clientY - dim.top;
  //   return [x, y];
  // };

  const addCircle = (event) => {
    // get click coordinates
    // let [x, y] = getClickCoords(event);

    // make new svg circle element
    // more info here: https://www.w3schools.com/graphics/svg_circle.asp
    

    // update the array of circles; you HAVE to spread the current array
    // as 'circles' is immutible and will not accept new info
    let allCircles = [...circles];

    // update 'circles'
    setCircles(allCircles);
  };

  console.log(circles);

  return (
    <Container>
      <h1>Big Pythagoras Pizza</h1>
      <ClickableSVG style={{backgroundImage: `url(${Image})`, width:768, height:1024}}>
        {/* This loads your circles in the circles hook here */}
        {circles}
         <circle
        key={circles.length + 1}
        cx="450"
        cy="410"
        r="110"
        stroke="#D81919"
        strokeWidth="4"
        fill="none"
      />
      <text x="100"  y="300" fill="red" style={{fontSize:50}}>Pizza</text>
       <line x1="10" y1="10" x2="200" y2="200" style={{stroke:"red"}} strokeWidth="4" />
       <Arrow
    angle={120}
    length={50}
    style={{width:0,color:"red"}}
    />
      </ClickableSVG>
    </Container>
  );
}

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