import { FaEye } from "react-icons/fa";


const ReviewHistory = () => {
    const reviews = [
        {
            id: 1,
            title: "Knee Replacement Surgery",
            patient: "David Johnson",
            status: "approved",
            reason: "All documentation verified, legitimate medical need confirmed",
            date: "2024-08-10",
        },
        {
            id: 2,
            title: "Diabetes Treatment",
            patient: "Lisa Brown",
            status: "rejected",
            reason: "Insufficient medical documentation, requested additional reports",
            date: "2024-08-08",
        },
        ];
    return (
        <div className="review-page container">
        <h2>Review History</h2>
        <p className="subtitle">
            Previously reviewed campaigns and decisions
        </p>

        <div className="review-list">
            {reviews.map((r) => (
            <div key={r.id} className="review-card">
                <div className="review-left">
                <h4>
                    {r.title}
                    <span className={`status ${r.status}`}>
                    {r.status}
                    </span>
                </h4>
                <p className="patient">Patient: {r.patient}</p>
                <p className="reason">{r.reason}</p>
                </div>

                <div className="review-right">
                <p className="date">Review Date: {r.date}</p>
                <button className="view-btn">
                    <FaEye /> View Details
                </button>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default ReviewHistory;
