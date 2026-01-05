import { useState } from "react";
import { FaUser,FaEye,FaEyeSlash,FaArrowLeft   } from "react-icons/fa";
import { CiStethoscope } from "react-icons/ci";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const StepRegister = () => {
    const [step, setStep] = useState(1);
    const [role, setRole] = useState("patient");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        dob: "",
        address: "",
        emergencyContact: "",
        medicalHistory: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        if (!formData.fullName || !formData.email || !formData.password) {
        alert("Please fill all required fields");
        return;
        }
        if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
        }
        setStep(2);
    };

    const handleSubmit = () => {
        const payload = { role, ...formData };
        console.log("Final Data:", payload);
        alert("Account Created Successfully!");
    };

    return (
        <div className="register-card">
        {step === 1 && (
            <>
            <div className="step-header">
            {/* Top row */}
                <div className="step-top">
                    <button className="back-btn">
                    <FaArrowLeft />
                    <Link className="back-btn" to={'/'}>Back to Login</Link>
                    </button>
                    <div className="step-text">
                    <h4><b>Step {step} of 2: Account Details</b></h4>
                    <p>Choose your role and create login credentials</p>
                    </div>
                </div>
                {/* Progress bar */}
                <div className="progress-wrapper">
                    <div
                    className="progress-bar"
                    style={{ width: step === 1 ? "50%" : "100%" }}
                    />
                </div>
            </div>

            {/* Role Selection */}
            <div className="role-box">
                <div className={`role-item ${role === "patient" ? "active" : ""}`} onClick={() => setRole("patient")}>
                <FaUser className="role-icon"/>
                <div>
                    <h5>Patient</h5>
                    <p>Manage health records and access fundraising</p>
                </div>
                </div>

                <div className={`role-item ${role === "doctor" ? "active" : ""}`} onClick={() => setRole("doctor")}>
                <CiStethoscope className="role-icon" />
                <div>
                    <h5>Doctor</h5>
                    <p>Access patient records</p>
                </div>
                </div>
            </div>


            {/* Inputs */}
            <div className="form-grid">
                <div className="form-group">
                    <label >Full Name</label>
                    <input className="form-control" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label >Email</label>
                    <input className="form-control" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}/>
                </div>
                <div className="form-group input-icon">
                    <label>Password</label>
                    <input className="form-control" type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
                    <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
                <div className="form-group input-icon">
                    <label >Rewrite Password</label>
                    <input className="form-control" type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                    <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
            </div>
            <button className="btn-primary" onClick={handleNext}>
                Continue to Personal Information
            </button>
            </>
        )}

        {step === 2 && (
            <>
            <div className="step-header">
                <div className="step-top">
                    <button className="back-btn" onClick={() => setStep(1)}>
                    Previous
                    </button>
                    <div className="step-text">
                    <h4><b>Step {step} of 2: Personal Information</b></h4>
                    <p className="text-muted">Complete your profile information</p>
                    </div>
                </div>
                <div className="progress-wrapper">
                    <div
                    className="progress-bar"
                    style={{ width: step === 1 ? "50%" : "100%" }}
                    />
                </div>
            </div>

            <div className="form-grid">
                <div className="form-group filled">
                    <label>Phone Number</label>
                    <input className="form-control" name="phone" placeholder="9867442996" value={formData.phone} onChange={handleChange}/>
                </div>
                <div className="form-group filled">
                    <label>Date of Birth</label>
                    <input className="form-control" type="date" name="dob" value={formData.dob} onChange={handleChange}/>
                </div>
            </div>
            <div className="form-group filled">
                <label>Address</label>
                <textarea className="form-control" name="address" placeholder="Address" value={formData.address} onChange={handleChange}/>
            </div>
            <div className="form-group filled">
                <label>Emergency Contact</label>
                <input className="form-control" name="emergencyContact" placeholder="Emergency Contact" value={formData.emergencyContact} onChange={handleChange}/>

            </div>
            <div className="form-group filled">
                <label>Medical History</label>
                <textarea className="form-control" name="medicalHistory" placeholder="Medical History (Optional)" value={formData.medicalHistory} onChange={handleChange}/>
            </div>


            <div className="btn-group-2">
                
                <button className="btn-primary full-width " onClick={handleSubmit}>
                Create CureFund Account
                </button>
            </div>
            </>
        )}
        </div>
    );
    };

export default StepRegister;
