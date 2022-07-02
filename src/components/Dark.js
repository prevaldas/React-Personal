import {useState} from 'react';

function Dark() {

    function change() {

    const toggle = document.querySelector(".toggle-button");

    const oneContainer = document.querySelector(".one-container");
    toggle.addEventListener("click", () => {
        oneContainer.classList.toggle("dark");
    });

    const twoContainer = document.querySelector(".two-container");
    toggle.addEventListener("click", () => {
        twoContainer.classList.toggle("dark");
    });

    const threeContainer = document.querySelector(".three-container");
    toggle.addEventListener("click", () => {
        threeContainer.classList.toggle("dark");
    });

    const fourContainer = document.querySelector(".four-container");
    toggle.addEventListener("click", () => {
        fourContainer.classList.toggle("dark");
    });

      const product = document.querySelector(".six-container");
    toggle.addEventListener("click", () => {
        product.classList.toggle("dark");
    });

    const preBtn = document.querySelector(".pre-btn");
    toggle.addEventListener("click", () => {
        preBtn.classList.toggle("dark");
    });

    const nxtBtn = document.querySelector(".nxt-btn");
    toggle.addEventListener("click", () => {
        nxtBtn.classList.toggle("dark");
    });


    const fiveContainer = document.querySelector(".five-container");
    toggle.addEventListener("click", () => {
        fiveContainer.classList.toggle("dark");
    });

    const sideNav = document.querySelector(".sidenav");
    toggle.addEventListener("click", () => {
        sideNav.classList.toggle("dark");
    });

    const toggleButton = document.querySelector(".toggle-button");
    toggle.addEventListener("click", () => {
        toggleButton.classList.toggle("dark");
    });

    }


        const [toggle, setToggle] = useState(false);

    const toggleFunc = () => {
        setToggle(!toggle)
    }

     const txt = toggle ? "☼" : "☾"

    return<div>
    <div data-aos="slide-up" onMouseEnter={change} onMouseLeave={change} onClick={toggleFunc}className="toggle-button">
            <i><a href="#home">{txt}</a></i>
        </div>
        </div>

}

export default Dark;