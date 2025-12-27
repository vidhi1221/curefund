import { FaHeart } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";

const Footer = () => {
    return(
        <>
        <div className="features-section">
            <div className="feature-card">
                <div className="feature-icon red">
                <FaHeart />
                </div>
                <h5>Secure Crowdfunding</h5>
                <p>
                Blockchain-powered healthcare fundraising with transparent fund
                management
                </p>
            </div>

            <div className="feature-card">
                <div className="feature-icon blue">
                <HiDocumentText />
                </div>
                <h5>Medical Records</h5>
                <p>
                Encrypted health data storage with controlled access and guardian
                management
                </p>
            </div>

            <div className="feature-card">
                <div className="feature-icon green">
                <FaUsers />
                </div>
                <h5>Verified Network</h5>
                <p>
                Authenticated doctors, auditors, and patients in a trusted healthcare
                ecosystem
                </p>
            </div>
        </div>
        </>
    )
}

export default Footer;