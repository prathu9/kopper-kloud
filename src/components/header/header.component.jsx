import mainLogo from '../../asset/logo.png';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import NavBar from '../navbar/navbar.component';
import './header.style.css';
import MobileNav from '../mobile-nav/mobile-nav.component';
import ConnectBtn from '../connect-btn/connect-btn.component';

const Header = () => {
    const [displayMobileNav, setDisplayMobileNav] = useState(false);

    useEffect(()=>{
        const toggleMobileNavOnResize = () => {
            setDisplayMobileNav(false);
        }

        if(displayMobileNav){
            document.body.classList.add('no-scroll');
        }else{
            document.body.classList.remove('no-scroll');
        }
        
        window.addEventListener('resize', toggleMobileNavOnResize);

        return window.removeEventListener('resize',toggleMobileNavOnResize)
    }, [displayMobileNav])

    return(
        <div className="header-container">
            <div className="header-wrapper">
                <div className="logo-container">
                    <Link to={"/"}>
                        <img src={mainLogo} alt="logo"/>
                    </Link>
                </div>
                <NavBar/>
                <ConnectBtn/>
                <div onClick={() => setDisplayMobileNav(!displayMobileNav)} 
                     className={`hamburger-menu-container ${displayMobileNav? 'close-nav':''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {
                displayMobileNav?
                <MobileNav setDisplayMobileNav={setDisplayMobileNav}/>:null
            }
        </div>
    )
}

export default Header;