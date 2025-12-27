import LogoFirst from '../../assets/images/CureFund-logo-1.jpeg'
import LogoSecond from '../../assets/images/CureFund-logo-2.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center"> <b>Verified Care. Protected Funding. Real Healing.</b></p>
                    </div>
                </div>

                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2 ">
                                <Link to={'/'}><img src={LogoSecond} alt='Logo'/></Link>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center part2">
                                <p><b>CUREFUND</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="headerWrapper-2">
                <div>
                    <div className="container">
                        <p className="mb-0 mt-0 text-center welcome-tagline"><b>Welcome to CureFund</b></p>
                        <p className="mb-0 mt-0 text-center">"Because Every Treatment Deserves Transparency."</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;