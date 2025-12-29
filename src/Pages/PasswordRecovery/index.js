import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordRecovery = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        otp: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const verifyOtp = () => {
        if (formData.otp.length !== 6) {
        alert("Enter valid 6-digit OTP");
        return;
    }

    // 🔐 API CALL HERE (verify OTP)
    setOtpVerified(true);
    };

    const resetPassword = () => {
    if (formData.newPassword !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // 🔐 API CALL HERE (reset password)
    alert("Password reset successful");
    };

    return (
        <>
            <div className="forgot-card">
                <h4>Forgot Password</h4>
                <p className="text-muted">
                    Enter OTP and create new password
                </p>

                {/* OTP FIELD */}
                <div className="form-group">
                    <label>OTP</label>
                    <div className="input-icon">
                        <input
                        className={`form-control filled ${
                            otpVerified ? "otp-success" : ""
                        }`}
                        name="otp"
                        placeholder="Enter OTP"
                        value={formData.otp}
                        onChange={handleChange}
                        disabled={otpVerified}
                        />

                        {/* ✅ Green tick */}
                        {otpVerified && (
                        <span className="success-icon">✔</span>
                        )}
                    </div>
                </div>

                {/* VERIFY OTP BUTTON */}
                {!otpVerified && (
                    <button
                    className="btn-primary full-width"
                    onClick={verifyOtp}
                    >
                    Verify OTP
                    </button>
                )}

                {/* PASSWORD FIELDS (VISIBLE AFTER OTP VERIFIED) */}
                {otpVerified && (
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

                    <button
                        className="btn-primary full-width"
                        onClick={resetPassword}
                    >
                        Reset Password
                    </button>
                    </>
                )}
            </div>
        </>
        
    )
}

export default PasswordRecovery;