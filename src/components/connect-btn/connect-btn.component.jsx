import {useNavigate} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

import './connect-btn.style.css';

const ConnectBtn = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/contact');
    }

    return(
        <div className="connect-btn-container">
            <CustomButton handleClick={handleClick}>
                NFT Pre-order
            </CustomButton>
        </div>
    )
}

export default ConnectBtn;