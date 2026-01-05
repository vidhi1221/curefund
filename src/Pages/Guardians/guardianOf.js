import { useState } from "react";
import {FaUser,FaBolt,FaFileAlt,FaExclamationTriangle,FaEye} from "react-icons/fa";

const GuardiansOf = () => {
    const [activeTab, setActiveTab] = useState("wards");
    const [filter, setFilter] = useState("all");

    // 🔹 DATA
    const wards = [
        {
        id: 1,
        name: "Emily Johnson",
        relation: "Daughter",
        status: "active",
        emergency: false,
        urgent: false,
        documents: 2,
        },
        {
        id: 2,
        name: "Michael Johnson",
        relation: "Son",
        status: "emergency",
        emergency: true,
        urgent: true,
        documents: 0,
        },
    ];

    // 🔹 FILTER LOGIC
    const filteredWards = wards.filter(w => {
        if (filter === "all") return true;
        if (filter === "emergency") return w.emergency;
        if (filter === "urgent") return w.urgent;
        if (filter === "documents") return w.documents > 0;
        return true;
    });

    return (
        <div className="ward-page container">
            <h2>Ward Management</h2>
            <p className="subtitle">
                Manage medical records for people under your guardianship
            </p>

        {/* ================= STATS ================= */}
        <div className="ward-stats">
            <Stat
            title="My Wards"
            value={wards.length}
            icon={<FaUser />}
            active={filter === "all"}
            onClick={() => {
                setFilter("all");
                setActiveTab("wards");
            }}
            />

            <Stat
            title="Emergency Requests"
            value={wards.filter(w => w.emergency).length}
            icon={<FaBolt />}
            active={filter === "emergency"}
            onClick={() => {
                setFilter("emergency");
                setActiveTab("emergency");
            }}
            />

            <Stat
            title="Urgent Requests"
            value={wards.filter(w => w.urgent).length}
            icon={<FaExclamationTriangle />}
            active={filter === "urgent"}
            onClick={() => {
                setFilter("urgent");
                setActiveTab("emergency");
            }}
            />

            <Stat
            title="Total Documents"
            value={wards.reduce((sum, w) => sum + w.documents, 0)}
            icon={<FaFileAlt />}
            active={filter === "documents"}
            onClick={() => {
                setFilter("documents");
                setActiveTab("documents");
            }}
            />
        </div>

        {/* ================= ALERT ================= */}
        {wards.some(w => w.emergency) && (
            <div className="emergency-alert">
            <FaBolt />
            You have <b>emergency requests</b> requiring immediate attention!
            </div>
        )}

        {/* ================= TABS ================= */}
        <div className="ward-tabs">
            <span
            className={activeTab === "wards" ? "active" : ""}
            onClick={() => {
                setActiveTab("wards");
                setFilter("all");
            }}
            >
            My Wards
            </span>

            <span
            className={activeTab === "emergency" ? "active" : ""}
            onClick={() => {
                setActiveTab("emergency");
                setFilter("emergency");
            }}
            >
            Emergency Requests
            <b className="count">{wards.filter(w => w.emergency).length}</b>
            </span>

            <span
            className={activeTab === "documents" ? "active" : ""}
            onClick={() => {
                setActiveTab("documents");
                setFilter("documents");
            }}
            >
            Ward Documents
            </span>
        </div>

        {/* ================= LIST ================= */}
        <div className="ward-list">
            {filteredWards.length === 0 ? (
            <p>No records found</p>
            ) : (
            filteredWards.map(w => (
                <div key={w.id} className="ward-item">
                <div>
                    <h3>{w.id}</h3>
                    <h4>{w.name}</h4>
                    <div>
                        <span>{w.relation}</span>
                    </div>
                    <div>
                        <span>{w.documents}</span>
                    </div>
                </div>

                <div className="actions">
                    <span className={`status ${w.status}`}>
                    {w.status === "active" ? "active" : "emergency only"}
                    </span>
                    <button>
                    <FaEye /> View Records
                    </button>
                </div>
                </div>
            ))
            )}
        </div>
        </div>
    );
    };

    /* ================= STAT COMPONENT ================= */
    const Stat = ({ title, value, icon, onClick, active }) => (
    <div
        className={`stat-box ${active ? "active" : ""}`}
        onClick={onClick}
        style={{ cursor: "pointer" }}
    >
        <div>
        <p>{title}</p>
        <h3>{value}</h3>
        </div>
        <div className="icon">{icon}</div>
    </div>
);

export default GuardiansOf;
