import { FaFileAlt, FaUsers, FaExclamationCircle, FaHeart, FaCheckCircle, FaRegCopy, FaPlus  } from "react-icons/fa";
import { BsShieldLock, BsLightning } from "react-icons/bs";
import { MdQrCode } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { FaBan } from "react-icons/fa6";
import { FaHourglassEnd } from "react-icons/fa6";
import { FaUpload, FaUserCheck, FaCogs, FaHeartbeat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { PiEyeBold } from "react-icons/pi";
import { FaUser,FaExclamationTriangle, FaClock, FaTimesCircle } from "react-icons/fa";



const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const navigate = useNavigate();
    const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);
    localStorage.setItem(
    "user",
    JSON.stringify({
        name: "Vidhi",
        role: "patient",
        verified: true,
        id: "CF-P-2024-001",
        documents: [
            { id: 1, name: "Report.pdf" },
            { id: 2, name: "Xray.png" },
            { id: 3, name: "Prescription.pdf" },
            { id: 4, name: "Bil.pdf" }
        ],
        guardians : [
            { id: 1, name: "Raddha" },
            { id: 2, name: "Krishna" }
        ],
        pendingRequest : [
            { id: 1, name: "doctor1" },
            { id: 2, name: "doctor2" },
            { id: 3, name: "doctor3.pdf" }
        ],
        activeCampaigns : [
            { id: 1, name: "Campaign1" }
        ],
        totalPatients: 5,
        totalDonate: [
            { id: 1, amount: 10 },
            { id: 2, amount: 10 }
        ],
        pendingReviews : 6,
        approveInMonth : 10,
        rejectInMonth : 5,
        highPriority : 1,
    })
    );
    const totalAmount = user?.totalDonate?.reduce(
    (sum, item) => sum + item.amount,
    0
    ) ?? 0;

    const StatCard = ({ title, value, icon, color }) => {
        return (
            <div className="stat-card">
            <div>
                <p className="stat-title">{title}</p>
                <h2 className="stat-value">{value}</h2>
            </div>

            <div className={`stat-icon ${color}`}>
                {icon}
            </div>
            </div>
        );
    };
    const copyId = () => {
        navigator.clipboard.writeText(user.id);
        alert("Health ID copied!");
    };
    const ActionItem = ({ icon, title, desc, to }) => {
        
    return (
        <div className="quick-action-item" onClick={() => navigate(to)} role="button">
            <div className="quick-action-icon">{icon}</div>
            <div>
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
        </div>
        
    );
    };
    const ActivityItem = ({ icon, title, subtitle, status, statusType }) => {
    return (
        <div className="activity-item">
            <div className="activity-left">
                <div className={`activity-icon ${statusType}`}>
                    {icon}
                </div>
                <div>
                    <h5>{title}</h5>
                    <p>{subtitle}</p>
                </div>
            </div>

            <span className={`status-pill ${statusType}`}>
                {status}
            </span>
        </div>
    );
    };
    const PCItem = ({ icon, title, subtitle, status }) => {
    return (
        <div className="pc-item">
            <div className="pc-left">
                <div className={`pc-icon ${status}`}>
                    {icon}
                </div>
                <div>
                    <h5>{title}</h5>
                    <p>{subtitle}</p>
                </div>
            </div>

            <span className={`pc-status ${status}`}>
                {status.replace("-", " ")}
            </span>
        </div>
    );
    };
    const PRItem = ({ icon, title, subtitle, priority }) => {
    return (
        <div className={`pr-item ${priority}`}>
        <div className="pr-left">
            <div className={`pr-icon ${priority}`}>{icon}</div>
            <div>
            <h5>{title}</h5>
            <p>{subtitle}</p>
            </div>
        </div>

        <span className={`priority-pill ${priority}`}>
            {priority === "high" ? "High Priority" : "medium priority"}
        </span>
        </div>
    );
    };

    const ReviewItem = ({ icon, title, subtitle, status }) => {
    return (
        <div className="pr-item">
        <div className="pr-left">
            <div className={`pr-icon ${status}`}>{icon}</div>
            <div>
            <h5>{title}</h5>
            <p>{subtitle}</p>
            </div>
        </div>

        <span className={`status-pill ${status}`}>
            {status}
        </span>
        </div>
    );
    };
    return (
        <>
            <div className="dashboardWrapper">
                <div className="container">
                    <div>
                        <h4>{capitalize(user.role)} Dashboard</h4>
                        <p>Welcome back, {capitalize(user.name)}</p>
                    </div>
                    <div>
                        {user.role === "patient" && (
                            <div >
                                <div className="health-id-card">
                                {/* HEADER */}
                                    <div className="card-header">
                                        <div className="card-title">
                                        <div className="card-icon">💳</div>
                                        <div>
                                            <h4>CureFund Medical Identity</h4>
                                        </div>
                                        </div>

                                        <span className="verified-pill">
                                        <FaCheckCircle /> Verified
                                        </span>
                                    </div>

                                {/* HEALTH ID */}
                                    <div className="health-id-box">
                                        <div>
                                        <small>Health ID Number</small>
                                        <h3>
                                            {user.id}
                                            <FaRegCopy className="copy-icon" onClick={copyId} />
                                        </h3>
                                        </div>

                                        <div className="qr-box">
                                        <MdQrCode />
                                        </div>
                                    </div>

                                {/* DETAILS */}
                                    <div className="details-grid">
                                        <div className="detail-box">
                                        <small>Patient Name</small>
                                        <p>{capitalize(user.name)}</p>
                                        </div>

                                        <div className="detail-box">
                                        <small>Account Type</small>
                                        <p>{capitalize(user.role)}</p>
                                        </div>

                                        <div className="detail-box">
                                        <small>Network</small>
                                        <p>Polygon</p>
                                        </div>
                                    </div>

                                {/* FOOTER */}
                                    <div className="card-footer">
                                        <div className="security-info">
                                        <span>
                                            <BsShieldLock /> AES-256 Encrypted
                                        </span>
                                        <span>
                                            <BsLightning /> Blockchain Secured
                                        </span>
                                        </div>

                                        <span className="valid-text">Valid • No Expiry</span>
                                    </div>
                                </div>
                            
                                <div className="stats-grid">
                                    <StatCard title="Documents" value={user?.documents?.length || 0} icon={<FaFileAlt />} color="blue"/>
                                    <StatCard title="Guardians" value={user?.guardians?.length || 0} icon={<FaUsers />} color="green" />
                                    <StatCard title="Pending Requests" value={user?.pendingRequest?.length || 0} icon={<FaExclamationCircle />} color="orange" />
                                    <StatCard title="Active Campaigns" value={user?.activeCampaigns?.length || 0} icon={<FaHeart />} color="red" />
                                </div>
                            </div>
                            
                        )}
                        {user.role === "doctor" && (
                            
                            <div>
                                <div className="stats-grid">
                                    <StatCard title="Total Patients" value={user?.totalPatients || 0} icon={<FaUsers />} color="green"/>
                                    <StatCard title="Active Campaigns" value={user?.activeCampaigns?.length || 0} icon={<FaHeart />} color="red"/>
                                    <StatCard title="Pending Requests" value={user?.pendingRequest?.length || 0} icon={<FaExclamationCircle />} color="orange"/>
                                    <StatCard title="Total Donate" value={totalAmount} icon={<div className="dollar-icon"><BsCurrencyDollar /></div>}/>
                                </div>
                            </div>
                        )}
                        {user.role === 'auditor' && (
                            <div>
                                <div className="stats-grid">
                                    <StatCard title="Pending Reviews" value={user?.pendingReviews || 0} icon={<FaHourglassEnd />} color="orange"/>
                                    <StatCard title="Approve this Month" value={user?.approveInMonth || 0} icon={<TiTickOutline />} color="green"/>
                                    <StatCard title="Reject this Month" value={user?.rejectInMonth || 0} icon={<FaBan />} color="red"/>
                                    <StatCard title="High Priority" value={user.highPriority} icon={<div className="dollar-icon"><BsCurrencyDollar /></div>}/>
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        {user.role === "patient" && (
                            <div className="quick-actions-card">
                                {/* Header */}
                                <div className="quick-actions-header">
                                    <h4>Quick Actions</h4>
                                    <p>Manage your health records and access</p>
                                </div>

                                {/* Actions */}
                                <div className="quick-actions-grid">
                                    <ActionItem icon={<FaUpload />} title="Upload Document" desc="Add new medical records" to={'/home/documents'}/>

                                    <ActionItem icon={<FaUsers />} title="Manage Guardians" desc="Update access permissions" to={'/home/guardians'}/>

                                    <ActionItem icon={<FaUserCheck />} title="Review Requests" desc="Approve doctor access"/>

                                    <ActionItem icon={<FaCogs />} title="Ward Management" desc="Manage your wards"/>
                                </div>
                            </div>
                        )}
                        {user.role === "doctor" && (
                            <div className="quick-actions-card">
                                {/* Header */}
                                <div className="quick-actions-header">
                                    <h4>Quick Actions</h4>
                                    <p>Common tasks and operations</p>
                                </div>

                                {/* Actions */}
                                <div className="quick-actions-grid">
                                    <ActionItem icon={<FaUsers />} title="Manage Patients" desc="View and access records" to={'/home/patients'}/>

                                    <ActionItem icon={<FaPlus />} title="Create Campaigns" desc="New fundraising campaigns" to={'/home/campaigns'}/>

                                    <ActionItem icon={<RiCalendarScheduleFill />} title="Schedule Visit" desc="Approve doctor access"/>

                                    <ActionItem icon={<PiEyeBold />} title="View Campaigns" desc="Track Fundraising" to={'/home/campaigns'}/>
                                </div>
                            </div>
                        )}
                        {user.role === "auditor" && (
                            <div className="quick-actions-card">
                                {/* Header */}
                                <div className="quick-actions-header">
                                    <h4>Quick Actions</h4>
                                    <p>Common auditing tasks and operations</p>
                                </div>

                                {/* Actions */}
                                <div className="quick-actions-grid">
                                    <ActionItem icon={<FaUpload />} title="Review Campaigns" desc="Verify pending campaigns" to={'/home/reviews'}/>

                                    <ActionItem icon={<FaPlus />} title="Review History" desc="View past decision" to={'/home/reviews'}/>

                                    <ActionItem icon={<FaUserCheck />} title="Generate Report" desc="Monthly audit summary"/>

                                    <ActionItem icon={<FaPlus />} title="Create Campaigns" desc="New fundraising campaigns" to={'/home/campaigns'}/>
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        {user.role === "patient" && (
                            <div className="activity-grid">
                                {/* RECENT DOCUMENTS */}
                                <div className="activity-card">
                                    <div className="activity-header">
                                    <h4>Recent Documents</h4>
                                    <span className="view-all">View All</span>
                                    </div>

                                    <ActivityItem
                                    icon={<FaFileAlt />}
                                    title="Blood Test Results"
                                    subtitle="2024-08-15"
                                    status="Encrypted"
                                    statusType="encrypted"
                                    />

                                    <ActivityItem
                                    icon={<FaFileAlt />}
                                    title="MRI Scan"
                                    subtitle="2024-08-10"
                                    status="Encrypted"
                                    statusType="encrypted"
                                    />

                                    <ActivityItem
                                    icon={<FaFileAlt />}
                                    title="Prescription"
                                    subtitle="2024-08-12"
                                    status="Encrypted"
                                    statusType="encrypted"
                                    />
                                </div>

                                {/* ACCESS REQUESTS */}
                                <div className="activity-card">
                                    <div className="activity-header">
                                    <h4>Access Requests</h4>
                                    <span className="view-all">View All</span>
                                    </div>

                                    <ActivityItem
                                    icon={<FaHeartbeat />}
                                    title="Dr. Smith"
                                    subtitle="Blood Test Results"
                                    status="Pending"
                                    statusType="pending"
                                    />

                                    <ActivityItem
                                    icon={<FaHeartbeat />}
                                    title="Dr. Johnson"
                                    subtitle="MRI Scan"
                                    status="Approved"
                                    statusType="approved"
                                    />
                                </div>
                                </div>
                        )}
                        {user.role === "doctor" && (
                            <div className="pc-grid doctor-footer">
                                {/* RECENT PATIENTS */}
                                <div className="pc-card">
                                    <div className="pc-header">
                                    <h4>Recent Patients</h4>
                                    <span className="view-all">View All</span>
                                    </div>

                                    <PCItem
                                    icon={<FaUser />}
                                    title="John Smith"
                                    subtitle="Cardiac Surgery"
                                    status="active"
                                    />

                                    <PCItem
                                    icon={<FaUser />}
                                    title="Maria Garcia"
                                    subtitle="Cancer Treatment"
                                    status="pending"
                                    />

                                    <PCItem
                                    icon={<FaUser />}
                                    title="David Johnson"
                                    subtitle="Orthopedic Surgery"
                                    status="active"
                                    />
                                </div>

                                {/* CAMPAIGN STATUS */}
                                <div className="pc-card">
                                    <div className="pc-header">
                                    <h4>Campaign Status</h4>
                                    <span className="view-all">View All</span>
                                    </div>

                                    <PCItem
                                    icon={<FaHeart />}
                                    title="Emergency Heart Surgery"
                                    subtitle="$32,000 / $50,000"
                                    status="active"
                                    />

                                    <PCItem
                                    icon={<FaHeart />}
                                    title="Cancer Treatment Fund"
                                    subtitle="$18,000 / $75,000"
                                    status="pending-audit"
                                    />

                                    <PCItem
                                    icon={<FaHeart />}
                                    title="Knee Replacement Surgery"
                                    subtitle="$25,000 / $25,000"
                                    status="completed"
                                    />
                                </div>
                                </div>
                        )}
                        {user.role === "auditor" && (
                            <div className="pr-wrapper">
                                {/* PRIORITY QUEUE */}
                                <div className="pr-card">
                                    <div className="pr-header">
                                    <h4>Priority Queue</h4>
                                    <span className="view-all">View All</span>
                                    </div>

                                    <PRItem
                                    icon={<FaExclamationTriangle />}
                                    title="Emergency Heart Surgery"
                                    subtitle="John Smith • $50,000"
                                    priority="high"
                                    />

                                    <PRItem
                                    icon={<FaClock />}
                                    title="Cancer Treatment Fund"
                                    subtitle="Maria Garcia • $75,000"
                                    priority="medium"
                                    />
                                </div>

                                {/* RECENT REVIEWS */}
                                <div className="pr-card">
                                    <div className="pr-header">
                                    <h4>Recent Reviews</h4>
                                    <span className="view-all">View All</span>
                                    </div>

                                    <ReviewItem
                                    icon={<FaCheckCircle />}
                                    title="Knee Replacement Surgery"
                                    subtitle="David Johnson • 2024-08-10"
                                    status="approved"
                                    />

                                    <ReviewItem
                                    icon={<FaTimesCircle />}
                                    title="Diabetes Treatment"
                                    subtitle="Lisa Brown • 2024-08-08"
                                    status="rejected"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;