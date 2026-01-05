import { useState } from "react";
import {FaArrowLeft,FaSearch,FaClock,FaExclamationTriangle,FaFileAlt,} from "react-icons/fa";
import { useNavigate } from "react-router-dom";




const CampaignReviews = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [priority, setPriority] = useState("all");
    const campaignsData = [
        {
            id: 1,
            title: "Emergency Heart Surgery for John Smith",
            patient: "John Smith, age 54",
            condition: "Severe Coronary Artery Disease",
            doctor: "Dr. Sarah Wilson",
            hospital: "City General Hospital",
            goal: 50000,
            submitted: "2024-08-16",
            priority: "high",
            critical: true,
            description:
            "John requires immediate cardiac surgery due to severe coronary artery disease.",
            documents: [
            "Cardiac Catheterization Report",
            "Pre-operative Assessment",
            "Surgery Cost Estimate",
            "Doctor License Verification",
            "Hospital Partnership Agreement",
            ],
            reviewTime: "2–4 hours",
        },
        {
            id: 2,
            title: "Cancer Treatment Fund for Maria Garcia",
            patient: "Maria Garcia, age 42",
            condition: "Stage 3 Breast Cancer",
            doctor: "Dr. Michael Chen",
            hospital: "Memorial Cancer Center",
            goal: 75000,
            submitted: "2024-08-15",
            priority: "medium",
            critical: false,
            description:
            "Maria requires chemotherapy, radiation therapy, and possible surgery.",
            documents: [
            "Oncology Report",
            "Biopsy Results",
            "Treatment Plan",
            "Insurance Pre-authorization",
            "Chemotherapy Protocol",
            ],
            reviewTime: "3–5 hours",
        },
        ];
    const filteredCampaigns = campaignsData.filter((c) => {
        const matchesSearch =
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.patient.toLowerCase().includes(search.toLowerCase());

        const matchesPriority =
        priority === "all" || c.priority === priority;

        return matchesSearch && matchesPriority;
    });

    return (
        <div className="campaign-page container">
            {/* HEADER */}
            <div className="page-header">
                <div>
                    <h2>Campaign Reviews</h2>
                    <p>Review and verify medical fundraising campaigns</p>
                </div>

                <button className="back-btn" onClick={() => navigate("/home")}>
                    <FaArrowLeft /> Back to Dashboard
                </button>
            </div>

            {/* STATS */}
            <div className="stats-row">
                <Stat label="Total Pending" value="3" icon={<FaClock />} />
                <Stat label="High Priority" value="1" icon={<FaExclamationTriangle />} />
                <Stat label="Avg Review Time" value="3.2h" icon={<FaClock />} />
                <Stat label="Documents" value="14" icon={<FaFileAlt />} />
            </div>

            {/* SEARCH */}
            
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search campaigns by patient, doctor, or condition..."
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select className="priority-select" value={priority}
                onChange={(e) => setPriority(e.target.value)}>
                    <option value="all">All Priorities</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <button className="search-btn">
                    <span className="search-icon"><FaSearch /></span>
                    Search
                </button>
            </div>
            {/* LIST */}
            <div className="campaign-list">
                {filteredCampaigns.map((c) => (
                <div key={c.id} className="campaign-card">
                    <div className="card-header">
                    <h3>
                        {c.title}
                        <span className={`badge ${c.priority}`}>
                        {c.priority} priority
                        </span>
                        {c.critical && <span className="badge critical">Critical</span>}
                    </h3>

                    <button className="review-btn">Start Review</button>
                    </div>

                    <div className="card-grid">
                    <Info title="Patient Information" value={`${c.patient} • ${c.condition}`} />
                    <Info title="Attending Physician" value={`${c.doctor} • ${c.hospital}`} />
                    <Info title="Campaign Details" value={`Goal: $${c.goal.toLocaleString()} • Submitted: ${c.submitted}`} />
                    </div>

                    <p className="desc">{c.description}</p>

                    <div className="docs">
                    {c.documents.map((d, i) => (
                        <span key={i}>{d}</span>
                    ))}
                    </div>

                    <div className="footer">
                    <span>Est. review time: {c.reviewTime}</span>
                    <span>Patient history available</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

const Stat = ({ label, value, icon }) => (
    <div className="stat-box">
        <div>
        <p>{label}</p>
        <h3>{value}</h3>
        </div>
        <div className="icon">{icon}</div>
    </div>
);

const Info = ({ title, value }) => (
    <div>
        <small>{title}</small>
        <p>{value}</p>
    </div>
);

export default CampaignReviews;
