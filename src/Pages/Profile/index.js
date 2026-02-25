import {FaUser,FaPhone,FaMapMarkerAlt,FaCalendarAlt,FaEnvelope,FaShieldAlt,} from "react-icons/fa";

const ProfileSettings = () => {
    const user = {
        name: "Vidhi",
        email: "vidhi@gmail.com",
        role: "patient",
        verified: true,
        id: "CF-P-2024-001",
    };

    return (
        <div className="profile-page">
        <h2>Profile Settings</h2>
        <p className="subtitle">
            Manage your account information and preferences
        </p>

        <div className="profile-grid">
            {/* LEFT SIDE */}
            <div className="left-column">
                <div className="profile-card">
                    <div className="avatar">{user.name}</div>
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>

                    <div className="badges">
                        <span className="badge role">{user.role}</span>
                        {user.verified && (
                            <span className="badge verified">Verified</span>
                        )}
                        <span className="badge id">{user.id}</span>
                    </div>

                    <button className="edit-btn">Edit Profile</button>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="right-column">
            {/* PERSONAL INFO */}
            <div className="card">
                <h4>Personal Information</h4>
                <p className="card-sub">Your basic account details</p>

                <div className="info-grid">
                <Info label="Full Name" icon={<FaUser />} value={user.name} />
                <Info label="Email Address" icon={<FaEnvelope />} value={user.email} />
                <Info label="Phone Number" icon={<FaPhone />} value="Not provided" />
                <Info label="Date of Birth" icon={<FaCalendarAlt />} value="Not provided" />
                <Info label="Address" icon={<FaMapMarkerAlt />} value="Not provided" />
                <Info label="Emergency Contact" icon={<FaShieldAlt />} value="Not provided" />
                </div>
            </div>

            {/* HEALTH INFO */}
            <div className="card">
                <h4>Health Information</h4>
                <p className="card-sub">Medical information and preferences</p>

                <div className="health-boxes">
                <div className="health-id">
                    <h5>Health ID</h5>
                    <p>Your unique blockchain identifier</p>
                    <span>CF-P-2024-001</span>
                </div>

                <div className="health-verify">
                    <h5>Verification Status</h5>
                    <p>Account verified and secure</p>
                    <span className="verified-tag">Verified</span>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    const Info = ({ label, icon, value }) => (
    <div className="info-item">
        <small>{label}</small>
        <p>
        {icon} {value}
        </p>
    </div>
    );

    const SecurityItem = ({ title, desc, action }) => (
    <div className="security-item">
        <div>
        <h6>{title}</h6>
        <p>{desc}</p>
        </div>
        <button>{action}</button>
    </div>
);

export default ProfileSettings;