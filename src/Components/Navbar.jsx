import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarCss/style.css'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a
                href="index.html"
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
                    <a href="index.html" className="nav-item nav-link active">
                        Home
                    </a>
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
                            <a href="team.html" className="dropdown-item">
                                Grand Ballroom PETRA
                            </a>
                            <a href="testimonial.html" className="dropdown-item">
                                Pikol 1, 2
                            </a>
                            <a href="404.html" className="dropdown-item">
                                Dalan
                            </a>

                            <a href="404.html" className="dropdown-item">
                                Chada Restaurant
                            </a>
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
                            <a href="team.html" className="dropdown-item">
                                Onsen
                            </a>
                            <a href="testimonial.html" className="dropdown-item">
                                นวดไทย
                            </a>
                            <a href="404.html" className="dropdown-item">
                                Jacuzzi
                            </a>
                            <a href="404.html" className="dropdown-item">
                                นวดเท้า
                            </a>
                            <a href="404.html" className="dropdown-item">
                                นวดออย
                            </a>
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
                            <a href="team.html" className="dropdown-item">
                                เรือนไทย
                            </a>
                            <a href="testimonial.html" className="dropdown-item">
                                ห้องอาหาร
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </nav>



    )
}

export default Navbar