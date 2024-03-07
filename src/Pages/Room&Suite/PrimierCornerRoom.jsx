import React from 'react'

function PrimierCornerRoom() {

    const details = `Luxury goes a step higher in the Premier Corner Rooms
    at the Divalux Resort & Spa. Unwind and rejuvenate
    with a relaxing bath in the bathtub, while catching up
    on your favourite book, or anything that helps you
    zone out – peace has never been this accessible. The
    ultimate vacation experience, our Premier Corner
    includes a plush king size bed, grand bathrooms, flat- screen TV, complimentary Wi-Fi, sofa, and a private
    terrace with pool views.`

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <h1>Premier Corner Room</h1>
                <hr />
                <h5>Room Size: 37 SQM View: Pool</h5>
                <h6>Details: <span>{details}</span></h6>


                {/* แถว 1 */}
                <div className="row g-4 mt-3">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item text-center pt-3">
                            <div className="p-4">


                                {/* ใส่รูป */}
                                <img
                                    className="img-fluid w-100 h-100 mb-4"
                                    src="assets/img/resort/Premier Corner Room/DSC03844-HDR-2.jpg"
                                    alt=""
                                    style={{ objectFit: "cover" }}
                                />
                                {/* ใส่รูป */}


                                
                              {/* <h5 className="mb-3">ชื่อรูป</h5>
                                <p>
                                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
                                    diam
                                </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item text-center pt-3">
                            <div className="p-4">


                                {/* ใส่รูป */}
                                <img
                                    className="img-fluid w-100 h-100 mb-4"
                                    src="assets/img/resort/Premier Corner Room/DSC03865.jpg"
                                    alt=""
                                    style={{ objectFit: "cover" }}
                                />
                                {/* ใส่รูป */}


                                
                              {/* <h5 className="mb-3">ชื่อรูป</h5>
                                <p>
                                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
                                    diam
                                </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item text-center pt-3">
                            <div className="p-4">

                                {/* ใส่รูป */}
                                <img
                                    className="img-fluid w-100 h-100 mb-4"
                                    src="assets/img/resort/Premier Corner Room/DSC03867.jpg"
                                    alt=""
                                    style={{ objectFit: "cover" }}
                                />
                                {/* ใส่รูป */}

                                
                              {/* <h5 className="mb-3">ชื่อรูป</h5>
                                <p>
                                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
                                    diam
                                </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="service-item text-center pt-3">
                            <div className="p-4">


                                {/* ใส่รูป */}
                                <img
                                    className="img-fluid w-100 h-100 mb-4"
                                    src="assets/img/resort/Premier Corner Room/DSC03871.jpg"
                                    alt=""
                                    style={{ objectFit: "cover" }}
                                />
                                {/* ใส่รูป */}


                                
                              {/* <h5 className="mb-3">ชื่อรูป</h5>
                                <p>
                                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
                                    diam
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* แถว 1 */}


             


            </div>
        </div>
    )
}

export default PrimierCornerRoom