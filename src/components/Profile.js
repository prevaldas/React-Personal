import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


  const Profile = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);


    return<div className="two-container all" id="profile">
        <div data-aos="fade-right" className="profile item3">
          <h2 className="title1">Hello</h2>
          <img className="profilePic" src="img/me3.jpeg" alt="profile-img"></img>
        </div>
        <div data-aos="fade-left"  className="skills item4">
          <h2 className="title2">My Skills</h2>
          <div className="skill-row">
            <img className="skills-img1" src="img/computer.png" alt="computer-img"></img>
            <h3>Design and developement</h3>
            <p>I have got my first computer when I was 11 and since then I have been facineted by its capabilities.</p>
          </div>
          <div className="skill-row">
            <img className="skills-img2" src="img/cameraicon.jpeg" alt="camera-icn"></img>
            <h3>Photography</h3>
            <p>Passion for photography combines in one all my hobies of nature, traveling, discovering and history.</p>
          </div>
        </div>
       <div className="item5"><hr /></div>
        </div>
}

export default Profile;