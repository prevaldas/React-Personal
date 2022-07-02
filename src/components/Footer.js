
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFlickr, faGithub } from '@fortawesome/free-brands-svg-icons';
import PageViews from './PageViews';

function Footer() {

  
    const currentYear = new Date().getFullYear();
    return<footer className='all'>
    
    <a className="footer-link" href="https://github.com/prevaldas"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
    <a className="footer-link" href="https://www.facebook.com/prevaldas/"><FontAwesomeIcon className="icon" icon={faFacebook} /></a>
    <a className="footer-link" href="https://www.flickr.com/photos/prevaldas/"><FontAwesomeIcon className="icon" icon={faFlickr} /></a>

    <p className="name">{currentYear} © Evaldas Pranckevicius</p>
    <PageViews />
    {/* <a href="https://www.freecounterstat.com" title="website counter"><img src="https://counter9.stat.ovh/private/freecounterstat.php?c=5f7achbz8x56wz5bwxy92fkanhwnh4kf" border="0" title="website counter" alt="website counter" /></a> */}

    </footer>

    
}
export default Footer;