import { FaBell } from "react-icons/fa";
import {   Outlet } from "react-router-dom";
import HomeLogo from "../../assets/images/homePage-logo.png"
import { NavLink } from "react-router-dom";
import {  } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const Home = () => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const [open, setOpen] = useState(false);
    const menuRef = useRef();
    const navigate = useNavigate();
    const isVerified = user?.verified;

    {isVerified && <span>Verified</span>}

    const role = user?.role;
    localStorage.setItem(
    "user",
    JSON.stringify({
        name: "Vidhi",
        role: "patient",
        verified: true,
        id: "CF-P-2024-001",
    })
    );
    const handleLogout = () => {
        localStorage.clear();
        navigate("/", { replace: true });
    };
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpen(false);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const NavItem = ({ text, to }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
        isActive ? "nav-item active" : "nav-item"
        }
    >
        {text}
    </NavLink>
    );
    
    
    
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center"> <b>Verified Care. Protected Funding. Real Healing.</b></p>
                    </div>
                </div>
            </div>
            <header className="main-header">
                {/* LOGO */}
                <div className="logo">
                    <img src={HomeLogo} alt="CureFund" />
                </div>

                {/* ROLE BASED MENU */}
                <nav className="nav-menu">
                    {role === "patient" && (
                    <>
                        <NavItem text="Dashboard" to="/home/dashboard" />
                        <NavItem text="Documents" to="/home/documents" />
                        <NavItem text="Guardians" to="/home/guardians" />
                        <NavItem text="Campaigns" to="/home/campaigns" />
                    </>
                    )}

                    {role === "doctor" && (
                    <>
                        <NavItem text="Dashboard" to="/home/dashboard" />
                        <NavItem text="Patients" to="/home/patients" />
                        <NavItem text="Campaigns" to="/home/campaigns" />
                    </>
                    )}

                    {role === "auditor" && (
                    <>
                        <NavItem text="Dashboard" to="/home/dashboard" />
                        <NavItem text="Reviews" to="/home/auditor/reviews" />
                        <NavItem text="Campaigns" to="/home/campaigns" />
                    </>
                    )}
                </nav>

                {/* RIGHT SIDE */}
                <div className="header-right">
                    <FaBell className="bell-icon" />
                    {user.verified && (
                    <span className="verified-badge">Verified</span>
                    )}

                    {/* <div className="avatar">{user.name[0]}</div> */}
                    <div className="profile-container" ref={menuRef}>
                        
                        {/* JD Avatar */}
                        <div className="avatar avatar-circle" onClick={() => setOpen(!open)}>
                            {user.name[0]}
                        </div>

                        {/* Dropdown */}
                        {open && (
                            <div className="profile-dropdown">
                                <div className="profile-header">
                                    <h4>{user.name}</h4>
                                    <p>{user.email}</p>
                                    <span className="role">{user.role}</span>
                                </div>

                                <div
                                    className="dropdown-item"
                                    onClick={() => navigate("/home/profile")}
                                >
                                    <FaUser /> Profile
                                </div>

                                <div
                                    className="dropdown-item logout"
                                    onClick={handleLogout}
                                >
                                    <FaSignOutAlt /> Log out
                                </div>
                            </div>
                        )}
                        </div>
                </div>
            </header>
            <div className="home-content">
                <Outlet />
            </div>
        </>
    )
}
// const NavItem = ({ text }) => (
//         <button className="nav-item">{text}</button>
//     );



export default Home;
