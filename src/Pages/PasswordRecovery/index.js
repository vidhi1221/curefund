import { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PasswordRecovery = () => {
    const [step, setStep] = useState(1); // 1=email, 2=otp, 3=reset
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    

    const [formData, setFormData] = useState({
        email: "",
        otp: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    /* STEP 1: SEND OTP */
    const sendOtp = () => {
        if (!formData.email) {
        alert("Enter email");
        return;
        }

        // 🔐 API CALL → SEND OTP
        setStep(2);
    };

    /* STEP 2: VERIFY OTP */
    const verifyOtp = () => {
        if (formData.otp.length !== 6) {
        alert("Enter valid 6-digit OTP");
        return;
        }

        // 🔐 API CALL → VERIFY OTP
        setStep(3);
    };

    /* STEP 3: RESET PASSWORD */
    const resetPassword = () => {
        
        if (formData.newPassword !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
        }
        const ok = window.confirm("Password reset successful. Go to login?");
        // 🔐 API CALL → RESET PASSWORD
        if(ok){
            navigate("/")
        }
    };

    return (
        <div className="forgot-card">
        <h4>Forgot Password</h4>
        <p className="text-muted">
            Secure password recovery using OTP verification
        </p>

        {/* STEP 1: EMAIL */}
        {step >= 1 && (
            <div className="form-group">
            <label>Email</label>
            <input
                className={`form-control filled ${step >= 3 ? "otp-success" : ""}`}
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                disabled={step >= 3}
            />
            </div>
        )}

        {step === 1 && (
            <button className="btn-primary full-width" onClick={sendOtp}>
            Send OTP
            </button>
        )}

        {/* STEP 2: OTP */}
        {step >= 2 && (
            <div className="form-group">
            <label>OTP</label>
            <div className="input-icon">
                <input
                className={`form-control filled ${step === 3 ? "otp-success" : ""}`}
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
                disabled={step === 3}
                />
                {step === 3 && <span className="success-icon">✔</span>}
            </div>
            </div>
        )}

        {step === 2 && (
            <button className="btn-primary full-width" onClick={verifyOtp}>
            Verify OTP
            </button>
        )}

        {/* STEP 3: PASSWORD RESET */}
        {step === 3 && (
            <>
            <div className="form-group">
                <label>New Password</label>
                <div className="input-icon">
                <input
                    className="form-control filled"
                    type={showPassword ? "text" : "password"}
                    name="newPassword"
                    placeholder="Create new password"
                    value={formData.newPassword}
                    onChange={handleChange}
                />
                <span
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                </div>
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input
                className="form-control filled"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                />
            </div>

            <button className="btn-primary full-width" onClick={resetPassword}>
                Reset Password
            </button>
            </>
        )}
        </div>
    );
};

export default PasswordRecovery;
