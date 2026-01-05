import {FaHeart,FaUser,FaChartLine,FaEye} from "react-icons/fa";


const MyDonations = () => {
    const stats = {
        totalDonated: 350,
        campaignsSupported: 2,
        livesImpacted: 2,
    };

    const donations = [
        {
        id: 1,
        title: "Emergency Heart Surgery for John Smith",
        date: "2024-08-15",
        amount: 250,
        status: "completed",
        },
        {
        id: 2,
        title: "Cancer Treatment Fund for Maria Garcia",
        date: "2024-08-14",
        amount: 100,
        status: "completed",
        },
    ];

    return (
        <div className="donations-page container">
            {/* HEADER */}
            <div className="donations-header">
                <h2>My Donations</h2>
                <p>Track your contributions and impact</p>
            </div>

            {/* STATS */}
            <div className="donation-stats">
                <StatCard
                title="Total Donated"
                value={`$${stats.totalDonated}`}
                icon={<FaHeart />}
                color="green"
                />
                <StatCard
                title="Campaigns Supported"
                value={stats.campaignsSupported}
                icon={<FaUser />}
                color="blue"
                />
                <StatCard
                title="Lives Impacted"
                value={stats.livesImpacted}
                icon={<FaChartLine />}
                color="purple"
                />
            </div>

            {/* HISTORY */}
            <div className="donation-history-card">
                <h4>Donation History</h4>
                <p className="subtitle">
                Your past contributions to medical campaigns
                </p>

                <div className="donation-list">
                {donations.map(d => (
                    <div className="donation-item" key={d.id}>
                        <div className="donation-left">
                            <div className="donation-icon">
                            <FaHeart />
                            </div>
                            <div>
                            <h5>{d.title}</h5>
                            <span>Donated on {d.date}</span>
                            </div>
                        </div>

                        <div className="donation-right">
                            <span className="amount">${d.amount}</span>
                            <span className="status completed">{d.status}</span>
                            <button className="view-btn">
                            <FaEye /> View Campaign
                            </button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
    };

    const StatCard = ({ title, value, icon, color }) => {
    return (
        <div className="donation-stat-card">
        <div>
            <p className="stat-title">{title}</p>
            <h3>{value}</h3>
        </div>
        <div className={`stat-icon ${color}`}>
            {icon}
        </div>
        </div>
    );
};

export default MyDonations;
