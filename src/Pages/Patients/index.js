import { useState } from "react";
import { FaSearch, FaUser, FaPlus } from "react-icons/fa";


const Patients = () => {
    const patientsList = [
        {
        id: "CF-P-2024-001",
        name: "John Smith",
        condition: "Cardiac Surgery",
        status: "active",
        lastAccess: "2024-08-16",
        },
        {
        id: "CF-P-2024-002",
        name: "Maria Garcia",
        condition: "Cancer Treatment",
        status: "pending",
        lastAccess: "2024-08-15",
        },
        {
        id: "CF-P-2024-003",
        name: "David Johnson",
        condition: "Orthopedic Surgery",
        status: "active",
        lastAccess: "2024-08-14",
        },
    ];

    const requests = [
        {
        name: "Emily Brown",
        docs: "Blood Test, X-Ray",
        reason: "Initial consultation",
        status: "pending",
        },
        {
        name: "Robert Wilson",
        docs: "MRI Scan",
        reason: "Follow-up examination",
        status: "approved",
        },
    ];
    const [search,setSearch] = useState("");
    const filteredPatients = patientsList.filter((patient) =>
        patient.name.toLowerCase().includes(search.toLowerCase()) ||
        patient.id.toLowerCase().includes(search.toLowerCase()) ||
        patient.condition.toLowerCase().includes(search.toLowerCase())
    );

    
    return (
        <div className="patient-page container">
            {/* HEADER */}
            <div className="page-header">
                <div>
                    <h2>Patient Management</h2>
                    <p>Access and manage patient records</p>
                </div>

                <button className="primary-btn">
                    <FaPlus /> Request Access
                </button>
            </div>

            {/* SEARCH */}
            <div className="search-box">
                <FaSearch />
                <input placeholder="Search patients..." value={search} onChange={(e) => setSearch(e.target.value)}/>
                {filteredPatients.map((p) => (
                    <div key = {p.id}></div>
                ))}
                <button className="search-btn">Search</button>
            </div>

            {/* PATIENT LIST */}
            {filteredPatients.map((p) => (
                <div className="patient-card" key={p.id}>
                    <div className="patient-info">
                        <div className="avatar">
                            <FaUser />
                        </div>
                        <div>
                            <h4>{p.name}</h4>
                            <p>ID: {p.id}</p>
                            <small>{p.condition}</small>
                        </div>
                    </div>

                    <div className="patient-actions">
                        <span className={`status ${p.status}`}>{p.status}</span>
                        <span className="last-access">
                        Last access: {p.lastAccess}
                        </span>
                        <button className="outline-btn">View Records</button>
                    </div>
                </div>
            ))}

            {/* RECENT REQUESTS */}
            <div className="requests-card">
                <h4>Recent Access Requests</h4>

                {requests.map((r, i) => (
                <div className="request-item" key={i}>
                    <div>
                        <strong>{r.name}</strong>
                        <p>Requested: {r.docs}</p>
                        <small>Reason: {r.reason}</small>
                    </div>

                    <div className="request-actions">
                        <span className={`status ${r.status}`}>{r.status}</span>
                        {r.status === "pending" && (
                            <button className="outline-btn">Follow Up</button>
                        )}
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Patients;
