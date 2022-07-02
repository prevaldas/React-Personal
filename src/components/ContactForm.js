import AOS from 'aos'

function ContactForm () {

    AOS.init()


    return<div>
            <form action="mailto:prevaldas@yahoo.com"
            method="POST"
            enctype="multipart/form-data"
            name="EmailFrom">
            <div className="contact-form1">
            <div className="form-card"  data-aos="fade-down">

                <input id="fName" type="text" size="20" name="Contact-Name" placeholder="First Name"/><br />
                <input id="lName" type="text" size="20" name="Contact-Name" placeholder="Last Name"/>
            </div>
            <div className="form-card"  data-aos="fade-down">
                <input id="email" type="email" name="Contact-Email" placeholder="Email" /><br />
                <input id="telNo" type="tel" name="Contact-telNo" placeholder="Tel No" />
            </div>
            <div className="form-card"  data-aos="fade-down">

                <textarea  id="textArea" name="Contact-Message" placeholder="Message here..." rows="4" cols="30" />
            </div>
            </div>
           <button data-aos="fade-down" id="contact-btn" type="submit" value="Submit">✉︎</button>
           <hr />
           </form>
        </div>

}

export default ContactForm;