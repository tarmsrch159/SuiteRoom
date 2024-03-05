import React from 'react'

function JacuzziSPA() {

    const Images = [
        'S__2613254_0.jpg',
        'S__2613256_0.jpg',
        'S__2613257_0.jpg',
        'S__2613258_0.jpg',
    ]

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <h1>Jacuzzi</h1>
                {/* <h6>Details: <span>** ใส่รายละเอียด **</span></h6> */}


                {/* แถว 1 */}
                <div className="row g-4">
                    {Images.map((items) => (
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">


                                    {/* ใส่รูป */}
                                    <img
                                        className="img-fluid w-100 h-100 mb-4"
                                        src={"../../assets/img/resort/Jacuzzi/" + items}
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
                    ))}
                </div>
                {/* แถว 1 */}
            </div>
        </div>
    )
}

export default JacuzziSPA