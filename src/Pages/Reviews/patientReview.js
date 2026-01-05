import { useState } from "react";
import {FaCheckCircle,FaTimesCircle,FaClock,FaEye} from "react-icons/fa";


const PatientReviews = () => {
    const requestsData = [
    {
        id: 1,
        doctor: "Dr. Sarah Smith",
        speciality: "Cardiologist",
        hospital: "City General Hospital",
        urgency: "high",
        status: "pending",
        requestedOn: "2024-08-16",
        expiresOn: "2024-08-23",
        reason:
        "Pre-surgical evaluation for cardiac bypass surgery.",
        documents: [
        "Blood Test Results",
        "Cardiac MRI Scan",
        "Medical History Summary",
        ],
        license: "MD-12345",
    },
    {
        id: 2,
        doctor: "Dr. Michael Johnson",
        speciality: "Oncologist",
        hospital: "Memorial Cancer Center",
        urgency: "medium",
        status: "approved",
        requestedOn: "2024-08-14",
        expiresOn: "2024-09-14",
        reason:
        "Follow-up consultation for ongoing cancer treatment.",
        documents: [
        "Recent Lab Reports",
        "CT Scan Results",
        ],
        license: "MD-67890",
    },
    {
        id: 3,
        doctor: "Dr. Emily Davis",
        speciality: "Emergency Medicine",
        hospital: "University Medical Center",
        urgency: "low",
        status: "denied",
        requestedOn: "2024-08-13",
        expiresOn: "2024-08-20",
        reason:
        "Emergency department consultation for patient evaluation.",
        documents: [
        "Emergency Medical Info",
        "Current Medications",
        ],
        license: "MD-13579",
    },
    ];
    const [filter, setFilter] = useState("all");
    const filtered = requestsData.filter(r =>
        filter === "all" ? true : r.status === filter
    );

    return (
        <div className="access-page container">
            <h2>Doctor Access Requests</h2>
            <p className="subtitle">
                Review and manage doctor requests for your medical records
            </p>

            {/* FILTERS */}
            <div className="filters">
                {["all", "pending", "approved", "denied"].map(f => (
                <button
                    key={f}
                    className={filter === f ? "active" : ""}
                    onClick={() => setFilter(f)}
                >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
                ))}
            </div>

            {/* REQUEST LIST */}
            <div className="request-list">
                {filtered.map(req => (
                <RequestCard key={req.id} req={req} />
                ))}
            </div>
        </div>
    );
    };

    const RequestCard = ({ req }) => {
    return (
        <div className={`request-card ${req.status}`}>
            <div className="card-header container">
                <div>
                <h4>{req.doctor}</h4>
                <span>
                    {req.speciality} • {req.hospital}
                </span>
                </div>

                <div className="dates">
                <small>Requested: {req.requestedOn}</small>
                <small>Expires: {req.expiresOn}</small>
                </div>
            </div>

            <div className="badges">
                <span className={`urgency ${req.urgency}`}>
                {req.urgency} urgency
                </span>
                <span className={`status ${req.status}`}>
                {req.status}
                </span>
            </div>

            <div className="section">
                <strong>Reason for Request</strong>
                <p>{req.reason}</p>
            </div>

            <div className="section">
                <strong>Documents Requested</strong>
                <div className="doc-tags">
                {req.documents.map(d => (
                    <span key={d}>{d}</span>
                ))}
                </div>
            </div>

            {/* STATUS MESSAGE */}
            {req.status !== "pending" && (
                <div className={`status-box ${req.status}`}>
                {req.status === "approved" ? (
                    <>
                    <FaCheckCircle /> Approved • Access expires {req.expiresOn}
                    </>
                ) : (
                    <>
                    <FaTimesCircle /> Denied on {req.requestedOn}
                    </>
                )}
                </div>
            )}

            {/* FOOTER */}
            <div className="card-footer">
                <span className="license">License: {req.license}</span>

                <div className="actions">
                <button className="view">
                    <FaEye /> View Details
                </button>

                {req.status === "pending" && (
                    <>
                    <button className="deny">
                        <FaTimesCircle /> Deny
                    </button>
                    <button className="approve">
                        <FaCheckCircle /> Approve
                    </button>
                    </>
                )}
                </div>
            </div>
        </div>
    );
};

export default PatientReviews;
