import HeroImage from '../../components/hero-image/hero-image.component';
import Main from '../../components/main/main.component';

import './homepage.style.css';

const HomePage = () => {
    return(
        <div className="homepage-container">
            <HeroImage/>
            <Main/>
        </div>
    )
}

export default HomePage;