import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

  const First = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

const date = new Date();
const currentTime = date.getHours();

let greeting;
const customStyle = {
  color: ""
}

if (currentTime < 12) {
  greeting = "Good morning"
  customStyle.color = "#FFE194"; 
} else if (currentTime < 18) {
  greeting = "Good afternoon"
  customStyle.color = "#83BD75";
} else {
  greeting = "Good night"
  customStyle.color = "#525E75";
}
  
    return<div className="one-container" id="#home">
      <img data-aos="fade-left" className="top-cloud" src="/img/cloud.png" alt="cloud-img"></img>
      <h1 className="greet" style={customStyle}>{greeting}</h1>
      <h1 data-aos="zoom-in" className="my-name text-gradient">I'm Evaldas</h1>
      <h2 className="prog text-gradient">a <span className="pro">pro</span>grammer.</h2>
      <img data-aos="fade-right" className="bottom-cloud" src="/img/cloud.png" alt="cloud-img"></img>
    </div>
}
export default First;