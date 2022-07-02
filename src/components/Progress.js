import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'

  function Progress() {


    return<div className="three-container all" id="services">
    <h2 className="item1">MERN stack</h2>
    
    <div className="item6">
    <p className="prog-title"><FontAwesomeIcon className="icon pro" icon={faHtml5} /> HTML</p>
    {/* <label>85%</label> */}
    <div class="progress"><div class="html-prog"></div></div>
    
    <p className="prog-title"><FontAwesomeIcon className="icon pro" icon={faCss3} /> CSS</p>
    {/* <label>75%</label> */}
    <div class="progress"><div class="css-prog"></div></div>


    <p className="prog-title"><FontAwesomeIcon className="icon pro" icon={faJs} /> JavaScript</p>
    {/* <label>50%</label> */}
     <div class="progress"><div class="js-prog"></div></div>


    <p className="prog-title"><FontAwesomeIcon className="icon pro" icon={faBootstrap} /> Bootsrap</p>
    {/* <label>75%</label> */}
    <div class="progress"><div class="boot-prog"></div></div>
    </div>


    <div className="item7">
    <p className="prog-title"><FontAwesomeIcon className="icon pro" icon={faReact} /> React</p>
    {/* <label>50%</label> */}
  <div class="progress"><div class="react-prog"></div></div>


    <p className="prog-title"><FontAwesomeIcon className="icon pro" icon={faNodeJs} /> NodeJS</p>
    {/* <label>60%</label> */}
  <div class="progress"><div class="node-prog"></div></div>


    <p className="prog-title"><FontAwesomeIcon className="icon pro" icon={faCode} /> TypeScript</p>
    {/* <label>65%</label> */}
    <div class="progress"><div class="ts-prog"></div></div>


    <p className="prog-title"><FontAwesomeIcon className="icon pro" icon={faCode} /> Material UI</p>
    {/* <label>70%</label> */}
  <div class="progress"><div class="mui-prog"></div></div>
    </div>

    <div className="item9">
    <h3 className="h3-skill">I love to develop and designe useful Websites and Apps.</h3>
    </div>

    <div className="item8">
    <hr />
    </div>
    </div>

}
export default Progress;