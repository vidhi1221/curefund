import {FaUserShield,FaEye,FaEdit,FaTrash,FaExclamationTriangle,FaEnvelope,FaPhone,FaClock,FaUserPlus} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Guardians = () => {
    const navigate = useNavigate()
    const guardians = [
        {
        id: 1,
        name: "Jane Doe",
        relation: "Spouse",
        email: "jane.doe@email.com",
        phone: "+1 (555) 123-4567",
        access: "full access",
        verified: true,
        emergency: true,
        documents: 3,
        lastAccess: "2024-08-10",
        added: "2024-06-15",
        },
        {
        id: 2,
        name: "Robert Doe",
        relation: "Father",
        email: "robert.doe@email.com",
        phone: "+1 (555) 987-6543",
        access: "emergency access",
        verified: true,
        emergency: true,
        documents: 1,
        lastAccess: "Never",
        added: "2024-07-02",
        },
        {
        id: 3,
        name: "Sarah Johnson",
        relation: "Sister",
        email: "sarah.johnson@email.com",
        phone: "+1 (555) 456-7890",
        access: "limited access",
        verified: false,
        emergency: false,
        documents: 0,
        lastAccess: "Never",
        added: "2024-08-14",
        },
    ];

    return (
        <div className="guardians-page container">
            {/* HEADER */}
            <div className="guardians-header">
                <div>
                <h2>Guardian Management</h2>
                <p>Manage who can access your medical records in emergencies</p>
                </div>

                <button className="add-guardian-btn" onClick={() => navigate("/home/guardians/add")}>
                    <FaUserPlus /> Add Guardian
                </button>
            </div>

            {/* WARNING */}
            <div className="emergency-warning">
                <FaExclamationTriangle />
                <p>
                <strong>Emergency Access Information</strong><br />
                Guardians with emergency access can view your medical records when
                you're unable to grant permission yourself. This includes situations
                where you're unconscious or unable to communicate.
                </p>
            </div>

            {/* LIST */}
            <div className="guardians-list">
                {guardians.map(g => (
                <div key={g.id} className="guardian-card">
                    <div className="guardian-top">
                    <div className="guardian-avatar">
                        <FaUserShield />
                    </div>

                    <div className="guardian-info">
                        <h4>{g.name}</h4>
                        <p>{g.relation}</p>

                        <div className="badges">
                        <span className={`badge ${g.access.replace(" ", "-")}`}>
                            {g.access}
                        </span>

                        {g.verified && <span className="badge verified">verified</span>}
                        {g.emergency && (
                            <span className="badge emergency">Emergency Contact</span>
                        )}
                        </div>
                    </div>

                    <div className="guardian-actions">
                        <FaEye title="View" />
                        <FaEdit title="Edit" />
                        <FaTrash title="Delete" />
                    </div>
                    </div>

                    <div className="guardian-details">
                    <span><FaEnvelope /> {g.email}</span>
                    <span><FaPhone /> {g.phone}</span>
                    <span><FaClock /> Added: {g.added}</span>
                    </div>

                    <div className="guardian-footer">
                    <span>Documents Access: <b>{g.documents} document(s)</b></span>
                    <span>Last Access: <b>{g.lastAccess}</b></span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Guardians;
