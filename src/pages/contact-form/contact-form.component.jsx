/* eslint-disable jsx-a11y/iframe-has-title */
import {useEffect} from 'react';
import './contact-form.style.css';

const ContactForm = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return(
        <div className="contact-form-container">
            <h1 className="main-title">
                KOPPER Kloud Virtual World Presents….Kindred Kompound Virtual City
            </h1>
            <div className="video-container">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/R_Fm2BFkDgk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <h3 className="form-title">red border text to put notice</h3>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeZPa87kKfcwJCrj8FwAiSff2xoTlpyYLsuR3usEEE1vDw6kg/viewform?embedded=true" width="100%" height="fit-content" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </div>
    )
}

export default ContactForm;