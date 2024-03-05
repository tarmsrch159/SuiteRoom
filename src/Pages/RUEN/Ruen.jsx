import React from 'react'

function Ruen() {

    const details = `The Karaked Cafe is surrounded by numerous
    photogenic spots featuring nature and flower gardens. Take a stroll to the pier and go on a romantic kayaking
    trip, taking in the breath-taking views of nature`
  return (
    <div className="container-xxl py-5">
            <div className="containe">
                <h1>Ruen</h1>
                <hr />
                <h5>Room Size: 300 SQM View: garden</h5>
                {/* <h6>Details: <span>{details}</span></h6> */}


                {/* แถว 1 */}
                <div className="row g-4 mt-3">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item text-center pt-3">
                            <div className="p-4">


                                {/* ใส่รูป */}
                                <img
                                    className="img-fluid w-100 h-100 mb-4"
                                    src="assets/img/resort/เรือนไทย/8E3BAFBD-9EB2-49B7-8861-60D44E7B7A9A.jpg"
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
                                    src="assets/img/resort/เรือนไทย/8F5A4703-123C-4D1F-810F-CB535A469458.jpg"
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
                                    src="assets/img/resort/เรือนไทย/S__2605063.jpg"
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
                                    src="assets/img/resort/เรือนไทย/S__2605068.jpg"
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

export default Ruen