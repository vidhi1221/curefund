import { useState, useMemo } from "react";
import {FaSearch,FaHeart,FaBookmark,FaShareAlt,FaUserMd,FaMapMarkerAlt,} from "react-icons/fa";
import {useNavigate} from 'react-router-dom'


const Campaigns = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All Categories");
    const [tab, setTab] = useState("all");
    const navigate = useNavigate();

    const campaigns = [
        {
        id: 1,
        urgent: true,
        verified: true,
        title: "Emergency Heart Surgery for John Smith",
        desc:
            "John requires immediate cardiac surgery due to severe coronary artery disease.",
        doctor: "Dr. Sarah Wilson",
        location: "New York, NY",
        raised: 32000,
        goal: 50000,
        donors: 156,
        daysLeft: 12,
        category: "Surgery",
        completed: false,
        },
        {
        id: 2,
        urgent: false,
        verified: true,
        title: "Cancer Treatment Fund for Maria Garcia",
        desc:
            "Maria is fighting breast cancer and needs funds for chemotherapy treatments.",
        doctor: "Dr. Michael Chen",
        location: "Los Angeles, CA",
        raised: 18000,
        goal: 75000,
        donors: 89,
        daysLeft: 45,
        category: "Cancer",
        completed: false,
        },
        {
        id: 3,
        urgent: false,
        verified: true,
        title: "Knee Replacement Surgery for David Johnson",
        desc:
            "David needs bilateral knee replacement surgery to regain mobility.",
        doctor: "Dr. Emily Brown",
        location: "Chicago, IL",
        raised: 25000,
        goal: 25000,
        donors: 78,
        daysLeft: 0,
        category: "Surgery",
        completed: true,
        },
    ];

    /* SEARCH + FILTER */
    const filteredCampaigns = useMemo(() => {
        return campaigns.filter(c => {
        const matchSearch =
            c.title.toLowerCase().includes(search.toLowerCase());

        const matchCategory =
            category === "All Categories" || c.category === category;

        const matchTab =
            tab === "urgent"
            ? c.urgent
            : tab === "saved"
            ? false
            : true;

        return matchSearch && matchCategory && matchTab;
        });
    }, [search, category, tab]);

    return (
        <div className="campaigns-page container">
            {/* HEADER */}
            <div className="campaigns-header">
                <h2>Medical Campaigns</h2>
                <p>Support verified medical fundraising campaigns</p>
            </div>

            {/* SEARCH BAR */}
            <div className="campaign-search">
                <div className="search-input">
                    <FaSearch />
                    <input
                        placeholder="Search campaigns by patient name or condition..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <select  onChange={(e) => setCategory(e.target.value)}>
                    <option>All Categories</option>
                    <option>Surgery</option>
                    <option>Cancer</option>
                </select>

                <button className="search-btn">
                <FaSearch /> Search
                </button>
            </div>

            {/* TABS */}
            <div className="campaign-tabs">
                <button onClick={() => navigate("/home/campaigns/myDonation")}>
                    <FaHeart /> My Donations
                </button>
                <button onClick={() => setTab("saved")} className={tab === "saved" ? "active" : ""}>
                    <FaBookmark /> Saved Campaigns
                </button>
                <button onClick={() => setTab("urgent")} className={tab === "urgent" ? "active" : ""}>
                    Urgent Cases
                </button>
            </div>

            {/* GRID */}
            <div className="campaign-grid">
                {filteredCampaigns.map(c => (
                <CampaignCard key={c.id} c={c} />
                ))}
            </div>
        </div>
    );
    };

    const CampaignCard = ({ c }) => {
    const progress = Math.min((c.raised / c.goal) * 100, 100);

    return (
        <div className="campaign-card container">
            <div className="campaign-image">
                {c.urgent && <span className="urgent-badge">Urgent</span>}
                {c.verified && <span className="verified-badge">Verified</span>}
                <FaHeart className="image-icon" />
            </div>

            <div className="campaign-content">
                <h4>{c.title}</h4>
                <p>{c.desc}</p>

                <div className="campaign-meta">
                    <span><FaUserMd /> {c.doctor}</span>
                    <span><FaMapMarkerAlt /> {c.location}</span>
                </div>

                <div className="campaign-progress">
                    <div className="amount">
                        <b>${c.raised.toLocaleString()}</b> raised
                        <span>{progress.toFixed(0)}%</span>
                    </div>
                    <div className="progress-bar">
                        <div style={{ width: `${progress}%` }} />
                    </div>

                    <div className="campaign-stats">
                        <span>Goal: ${c.goal.toLocaleString()}</span>
                        <span>{c.donors} donors</span>
                        <span>{c.daysLeft} days left</span>
                    </div>
                </div>

                <div className="campaign-footer">
                <span className="tag">{c.category}</span>

                {c.completed ? (
                    <button className="completed-btn">Completed</button>
                ) : (
                    <button className="donate-btn">Donate</button>
                )}

                <div className="card-actions">
                    <FaShareAlt />
                    <FaBookmark />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Campaigns;
