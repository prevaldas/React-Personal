
function Example() {

function disapier() {
  document.querySelector('#menu-btn').addEventListener('click', function() {
  document.querySelector('#menu-content').style.height= 'auto';
  this.style.display= 'none';
});
    }

    return <div className="four-container all">
          <div className="dropdown-menu">
          <button onMouseEnter={disapier} id="menu-btn">✓ More examples<i className="fa fa-caret-down"></i></button>
          <div id="menu-content">
                    <a className="links-hidden" href="https://warm-tanuki-218cc5.netlify.app"> ➤ Web page with React hooks and API.</a>
          <a className="links-hidden" href="https://vandos-gelynas.netlify.app"> ➤ A personal web page with a hoby showcase.</a>
          <a className="links-hidden" href="https://katinai.netlify.app"> ➤ Web page introducing pets and their activities.</a>
        </div>
        </div>
      <hr></hr>
    </div>
}

export default Example;