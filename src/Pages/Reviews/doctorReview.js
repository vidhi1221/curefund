import { useState } from "react";
import { FaSearch, FaEye, FaFilter } from "react-icons/fa";


const DoctorReviews = () => {
    const [search, setSearch] = useState("");
    const mockCampaigns = [
    {
        id: 1,
        title: "Emergency Heart Surgery",
        patient: "John Smith",
        doctor: "Dr. Sarah Wilson",
        goal: 50000,
        submitted: "2024-08-16",
        priority: "high",
        description:
        "Urgent cardiac surgery required due to severe coronary artery disease.",
        documents: ["Medical Report", "Surgery Quote", "Doctor Verification"],
    },
    {
        id: 2,
        title: "Cancer Treatment Fund",
        patient: "Maria Garcia",
        doctor: "Dr. Michael Chen",
        goal: 75000,
        submitted: "2024-08-15",
        priority: "medium",
        description:
        "Comprehensive cancer treatment including chemotherapy and radiation.",
        documents: ["Diagnosis Report", "Treatment Plan", "Cost Estimate"],
    },
    ];
    const filtered = mockCampaigns.filter(
        (c) =>
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.patient.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="pending-page container">
            {/* HEADER */}
            <div className="page-header">
                <div>
                    <h2>Pending Reviews</h2>
                    <p>Medical campaigns awaiting verification</p>
                </div>
                <button className="filter-btn">
                    <FaFilter /> Filter
                </button>
            </div>

            {/* SEARCH */}
            <div className="search-box">
                <FaSearch />
                <input
                placeholder="Search campaigns..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <button>Search</button>
            </div>

            {/* LIST */}
            <div className="review-list">
                {filtered.map((c) => (
                <div key={c.id} className="review-card">
                    <div className="review-left">
                        <h4>
                            {c.title}
                            <span className={`priority ${c.priority}`}>
                            {c.priority} priority
                            </span>
                        </h4>

                        <p className="meta">
                            <b>Patient:</b> {c.patient}
                        </p>
                        <p className="meta">
                            <b>Doctor:</b> {c.doctor}
                        </p>
                        <p className="meta">
                            <b>Goal:</b> ${c.goal.toLocaleString()}
                        </p>

                        <p className="desc">{c.description}</p>

                        <div className="doc-tags">
                            {c.documents.map((d, i) => (
                            <span key={i}>{d}</span>
                            ))}
                        </div>
                    </div>

                    <div className="review-right">
                        <p className="date">
                            Submitted: <br />
                            <b>{c.submitted}</b>
                        </p>

                        <button className="review-btn">
                            <FaEye /> Review
                        </button>
                    </div>
                </div>
                ))}

                {filtered.length === 0 && (
                <p className="empty">No campaigns found</p>
                )}
            </div>
        </div>
    );
};

export default DoctorReviews;
