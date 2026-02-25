import { useState } from "react";
import { FaUser  } from "react-icons/fa";
import { MdAdminPanelSettings,MdOutlineEmail } from "react-icons/md";
import { CiStethoscope } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [selectedRole, setSelectedRole] = useState("patient");
    const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // 🔐 Simulate successful login
        localStorage.setItem("user", "true");
        localStorage.setItem("role", selectedRole);

        navigate("/home", { replace: true });
    };

    return(
        <>
        <div className="auth-page">
            <div className="auth-wrapper">
                {/* <div className="col-md-5 col-md-6 d-flex justify-content-center"> */}
                    <div className="role-container w-100">
                        <h4 className="text-center fw-bold"><b>Select Your Role</b></h4>
                        <p className="text-center text-muted">
                            Choose how you’ll be using CureFund today
                        </p>

                        <div className={`role-card ${selectedRole === "patient" ? "active" : ""}`}
                        onClick={() => {setSelectedRole("patient"); localStorage.setItem("role", "patient")}}>
                            <div className="role-icon">
                                <FaUser />
                            </div>
                            <div>
                                <h5>Patient</h5>
                                <p>Access your medical records and manage healthcare</p>
                            </div>
                        </div>

                        <div className={`role-card ${selectedRole === "doctor" ? "active" : ""}`}
                        onClick={() => {setSelectedRole("doctor");localStorage.setItem("role", "doctor");}}>
                            <div className="role-icon">
                                <CiStethoscope />
                            </div>
                            <div>
                                <h5>Doctor</h5>
                                <p>Manage patients and create treatment campaigns</p>
                            </div>
                        </div>

                        <div className={`role-card ${selectedRole === "auditor" ? "active" : ""}`} onClick={() => {setSelectedRole("auditor");localStorage.setItem("role", "health auditor");}}>
                            <div className="role-icon">
                                <MdAdminPanelSettings  />
                            </div>
                            <div>
                                <h5>Health Auditor</h5>
                                <p>Verify and audit medical campaigns</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-5 col-md-6 d-flex justify-content-center">
                        
                        <div className="form-container w-100">
                            <h4 className="text-center fw-bold"><b>Sign In</b></h4>
                            <p className="text-muted text-center">
                                Enter your credentials to access your <b>{capitalize(selectedRole)}</b> dashboard
                            </p>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <div className="input-icon">
                                        <MdOutlineEmail className="input-icon__icon" />
                                        <input
                                        type="email"
                                        className="form-control ps-5 text-center"
                                        placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <div className="input-icon">
                                        <RiLockPasswordFill className="input-icon__icon" />
                                        <input
                                        type="password"
                                        className="form-control ps-5 text-center"
                                        placeholder="Enter your password"
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Sign In as {capitalize(selectedRole)}
                                </button>

                                <div className="text-center mt-3">
                                    <Link to={'/passwordRecovery'} className="text-decoration-none">
                                    Forgot your password?
                                    </Link>
                                </div>

                                <div className="text-center mt-2">
                                    <span className="text-muted">
                                    Don’t have an account? <Link to={'/register'} className="text-decoration-none">Sign Up</Link>
                                    </span>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                {/* </div> */}
            </div>
        </div>
        
        

        </>
    )
}

export default Login;