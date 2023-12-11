import {Link} from 'react-router-dom';
import './navbar.style.css';

const NavBar = () => {
    return(
        <nav className="navbar-container">
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
            </ul>
        </nav>
    )
}

export default NavBar;