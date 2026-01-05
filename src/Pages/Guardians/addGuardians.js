import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUserPlus } from "react-icons/fa";

const AddGuardian = () => {
    const navigate = useNavigate();

    return (
        <div className="add-guardian-page">
        {/* BACK */}
        <div className="back-link" onClick={() => navigate("/home/guardians")}>
            <FaArrowLeft /> Back to Guardians
        </div>

        {/* FORM CARD */}
        <div className="add-guardian-card">
            <h3>Add New Guardian</h3>
            <p className="subtitle">
            Add a trusted person who can access your medical records when needed
            </p>

            <div className="form-grid">
            {/* Full Name */}
            <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter guardian's name" />
            </div>

            {/* Relationship */}
            <div className="form-group">
                <label>Relationship</label>
                <select>
                <option>Select relationship</option>
                <option>Spouse</option>
                <option>Parent</option>
                <option>Sibling</option>
                <option>Friend</option>
                </select>
            </div>

            {/* Email */}
            <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="guardian@example.com" />
            </div>

            {/* Phone */}
            <div className="form-group">
                <label>Phone Number</label>
                <input type="text" placeholder="+91 9867442996" />
            </div>

            {/* Access Level */}
            <div className="form-group full">
                <label>Access Level</label>
                <select>
                <option>Limited - Basic information only</option>
                <option>Full Access</option>
                <option>Emergency Access</option>
                </select>
            </div>
            </div>

            {/* ACTIONS */}
            <div className="form-actions">
            <button className="add-btn">
                <FaUserPlus /> Add Guardian
            </button>

            <button
                className="cancel-btn"
                onClick={() => navigate("/home/guardians")}
            >
                Cancel
            </button>
            </div>
        </div>
        </div>
    );
};

export default AddGuardian;
