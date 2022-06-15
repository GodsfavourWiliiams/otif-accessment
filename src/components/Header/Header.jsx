import { useState } from 'react';
import { ReactComponent as OTIFLOGO } from '../Assets/Hero-Logo.svg';
import { ReactComponent as HamburgerMenu } from '../Assets/Menu.svg';
import { ReactComponent as Arrow } from '../Assets/arrow.svg';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';



const Header = () => {
    const [ open, setOpen ] = useState(false);


  return (
    <>
    <Banner/>
    <nav className="navbar bg-primary-100 navbar-expand-md ">
        <div className="container mt-3">
            <Link to="/">
                <OTIFLOGO className="me-5" />
            </Link>
            <HamburgerMenu className="d-md-none" onClick={() => setOpen(!open)}/>
                <div className={`${open ? "" : "collapse"} navbar-collapse rounded-2 mt-3 mt-md-0`}>
                    <ul className="navbar-nav gap-3 text-center text-white p-md-0 p-2 gap-md-5 me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <span className="pe-2 ">Products</span>
                            <Arrow/>
                        </li>
                        <li className="nav-item">
                            <span className="pe-2 ">Use Cases</span>
                            <Arrow/>
                        </li>
                        <li className="nav-item">
                        <span className="pe-2 ">Resources</span>
                            <Arrow/>
                        </li>
                        <li className="nav-item">
                            <span className="pe-2 ">Company</span>
                            <Arrow/>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
    </>
  )
}

export default Header