import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarCss/style.css'
function Navbar() {

    const BanquetLink = [
        { text: 'Grand Ballroom PETRA', url: '/grandBallRoom' },
        { text: 'Pikol 1, 2', url: '/pikol' },
        { text: 'Dalan', url: '/dalan' },
        { text: 'Chada Restaurant', url: '/chada' },
    ]

    const PraanSpa = [
        { text: 'Onsen', url: '/Onsen' },
        { text: 'นวดไทย', url: '/massageThai' },
        { text: 'Jacuzzi', url: '/JacuzziSPA' },
        { text: 'นวดเท้า', url: '/MassageFoot' },
        { text: 'นวดออย', url: '/MassageOil' },
    ]

    const RUEN = [
        { text: 'เรือนไทย', url: '/ThaiHouse' },
        { text: 'ห้องอาหาร', url: '/FoodRoom' },
    ]

    console.log(BanquetLink)
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a
                href="/"
                className="navbar-brand d-flex align-items-center px-4 px-lg-5"
            >
                <h2 className="m-0 text-primary">
                    <i className="fa fa-book me-3" />
                    Devalux Resort & SPA
                </h2>
            </a>
            <button
                type="button"
                className="navbar-toggler me-4"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    
                    <Link to='/' className='nav-item nav-link active'>
                        Home
                    </Link>

                    {/* <Link to='/' className={({ isActive }) => isActive ? 'nav-item nav-link ': 'nav-item nav-link active'}>
                        Home
                    </Link> */}
                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Room&Suite
                        </a>
                        <div className="dropdown-menu fade-down m-0">

                            <Link to="/deluxeRoom" className='dropdown-item'>
                                Deluxe
                            </Link>

                            <Link to="/grandRoom" className='dropdown-item'>
                                Grand Deluxe Room
                            </Link>

                            <Link to="/primierRoom" className='dropdown-item'>
                                Premier Corner Room
                            </Link>

                            <Link to="/premierSuiteRoom" className='dropdown-item'>
                                Premier Suites Room

                            </Link>

                            <Link to="/jacuzzi" className='dropdown-item'>
                                Divalux Jacuzzi Suites

                            </Link>


                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Banquet
                        </a>
                        <div className="dropdown-menu fade-down m-0">
                            {BanquetLink.map((link, index) => (
                                <Link to={link.url} className='dropdown-item'>{link.text}</Link>
                            ))}

                        </div>
                    </div>

                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Praan SPA
                        </a>
                        <div className="dropdown-menu fade-down m-0">
                            {PraanSpa.map((link) => (
                                <Link to={link.url} className='dropdown-item'>{link.text}</Link>
                            ))}

                        </div>
                    </div>

                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Ruen karaked
                        </a>
                        <div className="dropdown-menu fade-down m-0">
                            {RUEN.map((link) => (
                                <Link to={link.url} className='dropdown-item'>{link.text}</Link>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </nav>



    )
}

export default Navbar