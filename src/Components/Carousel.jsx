import React from 'react'
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Carousel() {
    const carouselOptions = {
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    };


    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ minHeight: 400 }}
                    >
                        <div className="position-relative h-100">
                            <img
                                className="img-fluid position-absolute w-100 h-100"
                                src="../../assets/img/image700-700.png"
                                alt=""
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <h6 className="section-title bg-white text-start text-primary pe-3">
                            หน้าหลัก
                        </h6>
                        <h1 className="mb-4">Welcome to  Devalux Resort & SPA</h1>


                        {/* คำอธิบาย */}
                        <p className="mb-4">
                            คำอธิบาย :
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                            diam amet diam et eos. Clita erat ipsum et lorem et sit.
                        </p>


                         {/* คำอธิบาย */}
                        <p className="mb-4">
                        คำอธิบาย :
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                            lorem sit clita duo justo magna dolore erat amet
                        </p>
                        <div className="row gy-2 gx-4 mb-4">
                            <div className="col-sm-6">
                                <p className="mb-0">
                                    <i className="fa fa-arrow-right text-primary me-2" />
                                    Skilled Instructors
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0">
                                    <i className="fa fa-arrow-right text-primary me-2" />
                                    Online Classes
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0">
                                    <i className="fa fa-arrow-right text-primary me-2" />
                                    International Certificate
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0">
                                    <i className="fa fa-arrow-right text-primary me-2" />
                                    Skilled Instructors
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0">
                                    <i className="fa fa-arrow-right text-primary me-2" />
                                    Online Classes
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0">
                                    <i className="fa fa-arrow-right text-primary me-2" />
                                    International Certificate
                                </p>
                            </div>
                        </div>
                        <a className="btn btn-primary py-3 px-5 mt-2" href="">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Carousel