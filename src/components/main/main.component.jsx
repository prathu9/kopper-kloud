import {useEffect, useRef} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import ProfileCard from '../profile-card/profile-card.component';
import ProjectRoadmap from '../project-roadmap/project-roadmap.component';
import BusinessModel from '../business-model/business-model.component';

import descriptionImg from '../../asset/description-image.png';
import founderImg1 from '../../asset/founder-image-1.jpg';
import founderImg2 from '../../asset/founder-image-2.jpg';
import founderImg3 from '../../asset/founder-image-3.jpg';
import leaderImg1 from '../../asset/leader-image-1.jpg';
import leaderImg2 from '../../asset/leader-image-2.jpg';
import leaderImg3 from '../../asset/leader-image-3.jpg';
import projectDevImg1 from '../../asset/project-dev-image-1.png';
import projectDevImg2 from '../../asset/project-dev-image-2.png';
import projectDevImg3 from '../../asset/project-dev-image-3.png';
import projectRoadmapBG from '../../asset/project-roadmap-bg.png';
import businessPartner1 from '../../asset/business-partner-1.png';
import businessPartner2 from '../../asset/business-partner-2.png';
import businessPartner3 from '../../asset/business-partner-3.png';
import businessPartner4 from '../../asset/business-partner-4.png';
import businessPartner5 from '../../asset/business-partner-5.png';
import businessPartner6 from '../../asset/business-partner-6.png';
import businessPartnerBG from '../../asset/business-partner-bg.png';
import ownershipWatermark from '../../asset/ownership-watermark.png';

import './main.style.css';

const roadmapData1 = [
    {
        indexNumber: 'I',
        title: 'Q1 2022',
        list:['KOPPER Kommunities Virtual World Site Development']
    },
    {
        indexNumber: 'II',
        title: 'Q2 2022',
        list:['Kindred Kompound Virtual SMART City NFT Sale',
        'KOPPER Whales Members Only Site Development',
        'KOPPER Whales NFT Membership Sale',
        'Begin Property Mining Operations (Off-Site) ',
        'Begin Social Media and On-Line Community Marketing',
        'Begin Blockchain Tech Development',
        'International Marketing Campaign']
    },
    {
        indexNumber: 'III',
        title: 'Q3 2022',
        list:['Architectural & Engineering',
        'LAND permitting ',
        'KOPPER Kloud NFT Marketplace']
    },
    {
        indexNumber: 'IV',
        title: 'Q4 2022',
        list:['Construction Phase 1: Infrastructure']
    },
    {
        indexNumber: 'V',
        title: 'Q1 2023',
        list:['Construction Phase 2: Property Development']
    },
    {
        indexNumber: 'VI',
        title: 'Q2 2023',
        list:['Tokenized Asset Ownership Offerings']
    }
]

const roadmapData2 = [
    {
        indexNumber: 'I',
        title: 'Q1 2022',
        list:['KOPPER Kommunities Virtual World Site Development']
    },
    {
        indexNumber: 'II',
        title: 'Q2 2022',
        list:['Kindred Kompound Virtual SMART City NFT Sale',
        'KOPPER Whales Members Only Site Development',
        'KOPPER Whales NFT Membership Sale',
        'Begin Property Mining Operations (Off-Site) ',
        'Begin Social Media and On-Line Community Marketing',
        'Begin Blockchain Tech Development',
        'International Marketing Campaign']
    },
    {
        indexNumber: 'III',
        title: 'Q3 2022',
        list:['Architectural & Engineering',
        'LAND permitting ',
        'KOPPER Kloud NFT Marketplace']
    },
    {
        indexNumber: 'IV',
        title: 'Q4 2022',
        list:['Construction Phase 1: Infrastructure']
    },
    {
        indexNumber: 'V',
        title: 'Q1 2023',
        list:['Construction Phase 2: Property Development']
    },
    {
        indexNumber: 'VI',
        title: 'Q2 2023',
        list:['Tokenized Asset Ownership Offerings']
    },
    {
        indexNumber: 'VII',
        title: 'Q2 2023',
        list:['Tokenized Asset Ownership Offerings']
    },
    {
        indexNumber: 'VIII',
        title: 'Q2 2023',
        list:['Tokenized Asset Ownership Offerings']
    }
]


const Main = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const aboutRef = useRef();
    const investorBenefitsRef = useRef();
    const roadmapRef = useRef();
    const partnersRef = useRef();
    const teamRef = useRef();

    useEffect(() => {
        const changeRouteOnRefresh = (scrollTopValue) => {
            if(scrollTopValue > 100){
                window.scrollTo(0,scrollTopValue);
            }
            else{
                console.log(scrollTopValue)
                navigate("/");
                window.scrollTo(0, 0);
            }
        }

        if(location.pathname === '/about'){
            const aboutTop = aboutRef.current.offsetTop - 250;
            changeRouteOnRefresh(aboutTop);
        }
        else if(location.pathname === '/investor_benefits'){
            const investorBenefitsTop =investorBenefitsRef.current.offsetTop - 100;
            changeRouteOnRefresh(investorBenefitsTop);
        }
        else if(location.pathname === '/roadmap'){
            const roadmapTop = roadmapRef.current.offsetTop;
            changeRouteOnRefresh(roadmapTop);
        }
        else if(location.pathname === '/partners'){
            const partnersTop = partnersRef.current.offsetTop - 100;
            changeRouteOnRefresh(partnersTop);
        }
        else if(location.pathname === '/team'){
            const teamTop = teamRef.current.offsetTop - 100;
            changeRouteOnRefresh(teamTop);
        }
        else{
            window.scrollTo(0, 0);
        }

    }, [location, navigate])

    return(
        <main className="main-container">
            <h1 className="main-title">
                KOPPER Kloud Virtual World Represents Tangible Assets & Real Property in the Real World!
            </h1>
            <svg width="80" height="8" style={{'marginTop':'8px'}}>
                <rect width="80" height="8" fill="#E8A473"/>
            </svg>
            <div ref={aboutRef} className="video-container">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uamIxiNhyEY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="company-description">
                <p>
                    Kopper Kommunities was formed to design and develop 100% self-sustainable, energy-efficient, transformative, and innovative communities. Kopper Kommunities develops blockchain networked-backed communities which deliver unmatched service and rewards to the company’s corporate tenants and residents. The firm’s self-generating energy capabilities enable communities essentially to become energy hubs by connecting our microgrids to the city’s grid.
                </p>
                <p>
                    Kopper Kommunities plants the seeds of tomorrow by incorporating innovative and disruptive technologies in the traditional commercial real estate industry. The company’s vision is to develop multiple electricity grid-free and eco-friendly micro cities established to serve the
                    community and employ the local workforce
                </p>
                <p>
                    Kopper Kommunities' credo is to serve the community, employ the local workforce and introduce this new way of living which is ultimately helping our communities adapt and prepare for the up-and-coming cashless society.
                </p>
            </div>
            <div className="description-img-container">
                <img src={descriptionImg} alt="description"/>
            </div>
            <h1 className="main-title">
                So what is KOPPER KLOUD Virtual World?
            </h1>
            <svg width="80" height="8" style={{'marginTop':'8px'}}>
                    <rect width="80" height="8" fill="#E8A473"/>
            </svg>
            <div className="company-description">
                <p>
                    Simply put, it is a mirror of our physical KOPPER Kommunities SMART Micro-Cities. Our first Virtual City replicated in the MetaVerse is ‘Kindred Kompound Virtual City!’
                </p>
                <p>
                    Kindred Kompound VC owns 3% of Kindred Kompound SMART Micro-City, Houston, TX. Why is this special? Well our MicroCities are self sustainable and self revenue generating from Mining to Self Producing Energy, Private Blockchain backed 5G WISP, and of course rentals and leases.
                </p>
                <p>
                    As we tokenize all of our owned assets including land, properties, Mining Ops, 5G, Energy Distribution and payments of course, this type of operation will naturally generate a lot of daily/weekly/monthly revenue.
                </p>
                <p>
                    So in addition to the Virtual City owning 3% of all revenue generated in the real world from its twin property, it also has many of its own revenue streams as only the MetaVerse can offer!
                </p>
                <p>
                    Continue down this page and you will see exactly what I mean!
                </p>
                <p>
                    Welcome to KOPPER KLOUD! Welcome home!
                </p>
            </div>
            <div ref={teamRef} className="founder-section">
                <h1>Founders</h1>
                <svg width="80" height="8" style={{'marginTop':'8px'}}>
                    <rect width="80" height="8" fill="#E8A473"/>
                </svg>
                <div className="founder-card">
                    <ProfileCard profileImg={founderImg1} 
                                 profileRole={"President/CEO"} 
                                 profileName={"Terran Williams"} 
                                 profileDescription={"Vision, Company Direction, Company Development"}
                    />
                    <ProfileCard profileImg={founderImg2} 
                                 profileRole={"Chief Legal Officer"} 
                                 profileName={"Tammy Wilkerson"} 
                                 profileDescription={"Business Affairs & Investor Relations"}
                    />
                    <ProfileCard customStyle="founder-3-card"
                                 profileImg={founderImg3} 
                                 profileRole={"Executive Vice President"} 
                                 profileName={"Joseph Wesley"} 
                                 profileDescription={"QA/QC & Safety, Operations"}
                    />
                </div>
            </div>
            <div className="leader-section">
                <h1>Leadership</h1>
                <svg width="80" height="8" style={{'marginTop':'8px'}}>
                    <rect width="80" height="8" fill="#E8A473"/>
                </svg>
                <div className="leader-card">
                    <ProfileCard customStyle='leader-1-card'
                                 profileImg={leaderImg1} 
                                 profileRole={"Chief Financial Officer"} 
                                 profileName={"Rayven J. Moore"} 
                                 profileDescription={"Accounting, Crisis, Mitigation, Controller"}
                    />
                    <ProfileCard customStyle='leader-2-card'
                                 profileImg={leaderImg2} 
                                 profileRole={"Chief Property Development Officer"} 
                                 profileName={"Fred Harris"} 
                                 profileDescription={"Property Development & Automation"}
                    />
                    <ProfileCard customStyle="leader-3-card"
                                 profileImg={leaderImg3} 
                                 profileRole={"Chief of Staff"} 
                                 profileName={"Brandi Brooks"} 
                                 profileDescription={"Human Relations, Talent Acquisition, Fleet"}
                    />
                </div>
            </div>
            <div className="project-dev-section">
                <h1>Project Development</h1>
                <svg width="80" height="8" style={{'marginTop':'8px'}}>
                    <rect width="80" height="8" fill="#E8A473"/>
                </svg>
                <div className="project-dev-card">
                    <ProfileCard customStyle='project-dev-1-card'
                                 profileImg={projectDevImg1} 
                                 profileRole={"Property Development"} 
                                 profileName={"CETS Technology , Inc."} 
                    />
                    <ProfileCard customStyle='project-dev-2-card'
                                 profileImg={projectDevImg2} 
                                 profileRole={"NFT Project Development"} 
                                 profileName={"Aiex Technology"} 
                    />
                    <ProfileCard customStyle="project-dev-3-card"
                                 profileImg={projectDevImg3} 
                                 profileRole={"Private Blockchain Development"} 
                                 profileName={"TOPTAL"} 
                    />
                </div>
            </div>
            <div className="proceeds-section">
                <h1>Use of Proceeds</h1>
                <svg width="80" height="8" style={{'marginTop':'8px'}}>
                    <rect width="80" height="8" fill="#E8A473"/>
                </svg>
                <div className="proceeds-list-container blue-box">
                    <ul>
                        <li>20% Private Blockchain Development</li>
                        <li>20% KOPPER Kloud Virtual World Application Development</li>
                        <li>20% Blockchain Land Title Registry Development</li>
                        <li>20% Tokenization of Assets</li>
                        <li>20% International Marketing & Advertising Campaign</li>
                    </ul>
                </div>
            </div>
            <div ref={roadmapRef} className="project-roadmap-section">
                <div className="project-roadmap-overlay"></div>
                <img src={projectRoadmapBG} alt="roadmap background"/>
                <div className="project-roadmap-container">
                    <h1>Project Roadmap</h1>
                    <svg width="80" height="8" style={{'marginTop':'8px'}}>
                        <rect width="80" height="8" fill="#E8A473"/>
                    </svg>
                    <ProjectRoadmap roadmapData={roadmapData1}/>
                </div>
            </div>
            <div className="project-roadmap-section">
                <div className="project-roadmap-overlay"></div>
                <img src={projectRoadmapBG} alt="roadmap background"/>
                <div className="project-roadmap-container">
                    <h1>NFT Drop Roadmap</h1>
                    <svg width="80" height="8" style={{'marginTop':'8px'}}>
                        <rect width="80" height="8" fill="#E8A473"/>
                    </svg>
                    <ProjectRoadmap roadmapData={roadmapData2}/>
                </div>
            </div>
            <div className="business-model-section">
                <div className="business-model-container">
                    <h1>Micro-City Business Model</h1>
                    <svg width="80" height="8" style={{'marginTop':'8px'}}>
                        <rect width="80" height="8" fill="#E8A473"/>
                    </svg>
                    <BusinessModel/>
                </div>
            </div>
            <div ref={investorBenefitsRef} className="benefits-section">
                <div className="benefits-container">
                    <h1>Kindred Kompound NFT Investor Benefits</h1>
                    <svg width="80" height="8" style={{'marginTop':'8px'}}>
                        <rect width="80" height="8" fill="#E8A473"/>
                    </svg>
                    <div className="benefits-list-container blue-box">
                        <ul>
                            <li>Will have all pertinent project information available to investors</li>
                            <li>User can view construction updates & see progress in 3D of their owned cities</li>
                            <li>Directly purchase additional NFT's</li>
                            <li>Directly apply for KOPPER Whales Wealth & Lifestyle Social Klub<br/><br/> after meeting the needed requirements</li>
                        </ul>
                        <h3>Future Benefits</h3>
                        <ul>
                            <li>Reserve Stays, Rent Office Space and check property revenue in real time (Once property is fully developed (1.5 - 2 year timeframe)</li>
                            <li>Private Blockchain Built Specifically for Moving value in and Out of Our Physical & Virtual Communities</li>
                            <li>Immersive Mobile AR and VR Community Engagement & Landlord Experience</li>
                            <li>Play 2 Earn Model (Gamified Virtual Community)</li>
                            <li>Virtual Land & Asset Sales</li>
                            <li>Virtual Shopping</li>
                            <li>Virtual City Governance</li>
                            <li>Sell Advertising</li>
                            <li>Land Plot Ad Sales </li>
                            <li>Virtual City Taxonomy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="ownership-section">
                <div className="ownership-container">
                    <h1>Kindred Kompound NFT Virtual Ownership</h1>
                    <svg width="80" height="8" style={{'marginTop':'8px'}}>
                        <rect width="80" height="8" fill="#E8A473"/>
                    </svg>
                    <div className="ownership-wrapper blue-box">
                        <div className="ownership-watermark-container">
                            <img src={ownershipWatermark} alt="ownership watermark"/>
                        </div>
                        <div className="nft-for-sale">Private Round NFT’s for Sale: <span>2000</span></div>
                        <div className="cost-of-nft">Cost per NFT: <span>$250</span></div>
                        <div className="total-goal">Total Raise Goal: <span>$500K</span></div>
                        <div>
                            <h3>Kindred Kompound NFT Reward Model:</h3>
                            <span>Each NFT this private round qualifies for 0.0045% Virtual Land Ownership</span>
                            <ul>
                                <li>All 2000 NFT's equal 9% total land tile ownership (Virtual Landlord)</li>
                                <li>We plan to sell 100% of the Kindred Kompound Virtual City land tiles by way of future NFT Sales</li>
                                <li>A holder of any 11 Kindred Kompound NFT's qualifies to apply for KOPPER Whales Private Social Wealth & Lifestyle KLUB at a rate that will never be offered again (Membership site coming soon)</li>
                            </ul>
                            <p>
                                Post Virtual World App Development:
                                Users will be able to unlock land tiles after approval that your wallet Minted an NFT by Connecting your Whitelisted Wallet to KOPPER Kloud Virtual World App
                            </p>
                            <p>
                                *All Potential Landlords and KOPPER Whales Members will be required to pass our KYC Process<br/>
                                *Kindred Kompound NFT's will not have to be in your possession to claim future land ownership<br/>
                                {/* *Only the initial minter of the Kindred Kompound NFT's qualify for ownership; anyone that purchase our NFT by way of resell will not qualify<br/> */}
                                *Must be a holder of at least 1 Kindred Kompound NFT to qualify to become a Virtual Landlord
                                *To become a KOPPER Whale member you will have to have in your possession (Wallet) all 11 NFT's it takes to qualify<br/>
                                *KOPPER Whales membership intake will be suspended after the first 100 members are approved<br/>
                                *Future admittance into the KLUB will have very strict requirements and will be by invite only<br/>
                            </p>
                            <p>
                                Become a holder of any 11 authentic “Kindred Kompound” NFT’s you qualify to apply for membership into our private Wealth & Lifestyle Social KLUB, “KOPPER Whales” (Membership Platform Coming Soon)
                            </p>
                            <p>
                                *Qualifying investors looking to become future virtual owners and KOPPER Whales members will be required to pass our KYC process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={partnersRef} className="business-partner-section">
                <div className="business-partner-container">
                    <h1>Our Business Partners</h1>
                    <svg width="80" height="8" style={{'marginTop':'8px'}}>
                        <rect width="80" height="8" fill="#E8A473"/>
                    </svg>
                    <img className="business-partner-bg" src={businessPartnerBG} alt="business partner bg"/>
                    <div className="business-partner">
                        <div>
                            <img src={businessPartner1} alt="business partner"/>
                        </div>
                        <div>
                            <img src={businessPartner2} alt="business partner"/>
                        </div>
                        <div>
                            <img src={businessPartner3} alt="business partner"/>
                        </div>
                        <div>
                            <img src={businessPartner4} alt="business partner"/>
                        </div>
                        <div>
                            <img src={businessPartner5} alt="business partner"/>
                        </div>
                        <div>
                            <img src={businessPartner6} alt="business partner"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;