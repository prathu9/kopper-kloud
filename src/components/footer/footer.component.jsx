import footerLogo from '../../asset/logo.png';
import  envelopeIcon from '../../asset/envelope-icon.svg';
import  phoneIcon from '../../asset/phone-icon.svg';
import  twitterIcon from '../../asset/twitter-icon.svg';
import  youtubeIcon from '../../asset/youtube-icon.svg';
import  instagramIcon from '../../asset/instagram-icon.svg';
import telegramIcon from '../../asset/telegram-icon.svg';


import './footer.style.css';

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-logo-container">
                <img src={footerLogo} alt="footer logo"/>
            </div>
            <div className="quick-links">
                <h4>Quick Links</h4>
                <ul>
                    {/* <li><a href={'link'}>Purchase NFT</a></li>
                    <li><a href={'link'}>Virtual World App</a></li>
                    <li><a href={'link'}>Updates</a></li> */}
                    <li><a href={'link'}>Project Documents</a></li>
                    {/* <li><a href={'link'}>KK NFT Contact</a></li> */}
                </ul>
            </div>
            <div className="contact-links">
                <h4>Contact Us</h4>
                <div>
                    <span>
                        <img src={envelopeIcon} alt="email logo"/>
                    </span>
                    <span><a href="mailto:query@kreatovate.com">query@kreatovate.com</a></span>
                </div>
                <div>
                    <span>
                        <img src={phoneIcon} alt="phone logo"/>
                    </span>
                    <span><a href={'link'}>+123-15106404</a></span>
                </div>
            </div>
            <div className="social-links">
                <h4>Follow Us</h4>
                <span>
                    <a href={'link'}>
                        <img src={twitterIcon} alt="twitter logo"/>
                    </a>
                </span>
                <span>
                    <a href={'link'}>
                        <img src={youtubeIcon} alt="youtube logo"/>
                    </a>
                </span>
                <span>
                    <a href={'link'}>
                        <img src={instagramIcon} alt="instagram logo"/>
                    </a>
                </span>
                <span>
                    <a href={'link'}>
                        <img src={telegramIcon} alt="telegram logo"/>
                    </a>
                </span>
            </div>
            </div>
            <div className="citation-container">
                <div className="citation">© 2022 Kopper Kommunities. All rights reserved. | Privacy Policy | Cookies</div>
            </div>
        </div>
    )
}

export default Footer;