import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const CreateCampaign = () => {
    const [form, setForm] = useState({
        patient: "",
        title: "",
        category: "",
        goal: "",
        description: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Campaign Data:", form);
        alert("Campaign submitted for verification");
    };

    return (
        <div className="create-campaign-page">
            <div className="campaign-page-1 container">
                <h2>Create Campaign</h2>
                <p className="subtitle">
                    Create a verified fundraising campaign for your patient
                </p>

                <form className="campaign-card" onSubmit={handleSubmit}>
                    <h4>Campaign Details</h4>
                    <p className="hint">
                    Provide details about the medical campaign you want to create
                    </p>

                    {/* Patient */}
                    <label>Select Patient</label>
                    <select name="patient" value={form.patient} onChange={handleChange}>
                        <option value="">Choose a patient</option>
                        <option value="john">John Smith</option>
                        <option value="maria">Maria Garcia</option>
                    </select>

                    {/* Title */}
                    <label>Campaign Title *</label>
                    <input
                    name="title"
                    placeholder="e.g. Emergency Heart Surgery for John Smith"
                    value={form.title}
                    onChange={handleChange}
                    required
                    />

                    {/* Category */}
                    <label>Medical Category</label>
                    <select name="category" value={form.category} onChange={handleChange}>
                    <option value="">Select category</option>
                    <option value="surgery">Surgery</option>
                    <option value="cancer">Cancer Treatment</option>
                    <option value="emergency">Emergency Care</option>
                    </select>

                    {/* Goal */}
                    <label>Funding Goal (USD) *</label>
                    <input
                    type="number"
                    name="goal"
                    placeholder="50000"
                    value={form.goal}
                    onChange={handleChange}
                    required
                    />

                    {/* Description */}
                    <label>Medical Description *</label>
                    <textarea
                    name="description"
                    rows="4"
                    placeholder="Provide detailed medical information about the condition and treatment needed..."
                    value={form.description}
                    onChange={handleChange}
                    required
                    />

                    {/* Info box */}
                    <div className="info-box">
                        This campaign will be submitted for health auditor verification
                        before going live. Ensure all medical information is accurate and
                        complete.
                    </div>

                    {/* Actions */}
                    <div className="form-actions">
                        <button type="button" className="cancel-btn">
                            Cancel
                        </button>
                        <button type="submit" className="primary-btn">
                            <FaPlus /> Create Campaign
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCampaign;
