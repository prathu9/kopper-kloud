import {Link} from 'react-router-dom';

import {useRef, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import ConnectBtn from '../connect-btn/connect-btn.component';

import './mobile-nav.style.css';

const MobileNav = ({setDisplayMobileNav}) => {
    const location = useLocation();
    const currentRoute = useRef(location.pathname);

    useEffect(() => {
        if(location.pathname !== currentRoute.current){
            setDisplayMobileNav(false);
        }
    }, [location, currentRoute, setDisplayMobileNav])

    return(
        <nav className="mobile-nav-container">
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/investor_benefits">
                        Investor Benefits
                    </Link>
                </li>
                <li>
                    <Link to="/roadmap">
                        Roadmap
                    </Link>
                </li>
                <li>
                    <Link to="/partners">
                        Partners
                    </Link>
                </li>
                <li>
                    <Link to="/team">
                        Team
                    </Link>
                </li>
                <div>
                    <ConnectBtn />
                </div>
            </ul>
        </nav>
    )
}

export default MobileNav;