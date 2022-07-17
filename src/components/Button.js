import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import ContactForm from './ContactForm';
import NoMatch from './NoMatch';
function Button() {
  return (
    <div className="five-container all" id="contact">
      <div className="contact-me">
        <h2>Get in Touch</h2>
        <h3 className="ready">Ready to start a new project?</h3>
        <p>Please contact me for further information and proposals.</p>
        <Link to="contactform">
          <button className="BUTTON_BER">Contact Form</button>
        </Link>
      </div>
      <Routes>
        <Route path="/" exact />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <div className="certificate">
        <div className="cert-card">
          <img className="cert-img" src="img/udemy Logo.png" alt="logo"></img>
          <h3 className="cert-title">
            <a
              className="cert-a"
              href="https://www.udemy.com/certificate/UC-7ead479f-b272-4c8a-82eb-642ef6156b98/"
            >
              The complete 2021 Web Developement Bootcamp Certificate
            </a>
          </h3>
        </div>

        <div className="cert-card">
          <img className="cert-img" src="img/fCC Logo.jpeg" alt="logo"></img>
          <h3 className="cert-title">
            <a
              className="cert-a"
              href="https://www.freecodecamp.org/certification/Edinuk4t/javascript-algorithms-and-data-structures"
            >
              JavaScript Algorithm and Data Structures Certificate
            </a>
          </h3>
        </div>

        <div className="cert-card">
          <img
            className="cert-img"
            src="img/coursera Logo.png"
            alt="logo"
          ></img>
          <h3 className="cert-title">
            <a
              className="cert-a"
              href="https://www.coursera.org/account/accomplishments/specialization/QU22MAVZ8NXE"
            >
              Full-Stack Web Development with React Certificate
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Button;
