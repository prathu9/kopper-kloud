import './business-model.style.css';

const BusinessModelBox = ({indexnumber, text}) => {
    return(
        <div className="business-model-box blue-box">
            <div className="index-number">{indexnumber}</div>
            <div className="business-model-text-box">
                <span>
                    {text}
                </span>
            </div>
        </div>
    )
}

const BusinessModel = () => {
    return(
        <div className="business-model-wrapper">
            <BusinessModelBox
                indexnumber='I'
                text="Creating Bitcoin and Ethereum network NODES to secure, validate and grow the BTC and ETH ecosystems by building our homes and data centers on the backs of our customers and clients, allowing them to
                generate passive income every hour of the day."
            />
            <BusinessModelBox
                indexnumber='II'
                text="Focusing on markets with positive forward supply-demand characteristics that foster recapturing value and enhancing net operating income"
            />
            <BusinessModelBox
                indexnumber='III'
                text="Introducing a Tokenized community where profit sharing can be fractionalized making investing in the properties within our communities democratized for all. Furthermore, we allocate a percentage of rental, lease & utility (Energy, Water, 5G) fees go back to the community."
            />
            <BusinessModelBox
                indexnumber='IV'
                text="Seeking well-located and highly desirable jurisdictions which are in proximity to legal CBD growing and permitting."
            />
            <BusinessModelBox
                indexnumber='V'
                text="Applying Kinetic Power Cell Technology to address the shortcomings of current green technologies while
                providing stable non-interrupted power generation (Energy on Demand) with a smaller scalable footprint."
            />
        </div>
    )
}

export default BusinessModel;