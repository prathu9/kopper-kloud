import {Link} from 'react-router-dom';
import mainHeroImage from '../../asset/hero-image.png';
import CustomButton from '../custom-button/custom-button.component';

import './hero-image.style.css';

const HeroImage = () => {
    return(
        <div className="hero-image-container">
            <div className="gradient-overlay"></div>
            <img className="hero-image" src={mainHeroImage} alt="hero background"/>
            <div className="hero-title">
                Welcome to KOPPER KLOUD the “Kopper Kommunities” Virtual World
            </div>
            <div className="hero-subTitle">
                We Tokenize our Private Blockchain Backed Kommunities’ Real Property, Green Renewable Energy, 5G Internet, Rent & Mining Revenue!
            </div>
            <CustomButton customClass="hero-button">
                <Link to="/contact">
                     NFT Pre-order
                </Link>
            </CustomButton>
        </div>
    )
}

export default HeroImage;