import React from 'react'

function GrandBallRoom() {

    const Images = [
        'DSC03668.JPG',
        'DSC03663 (2).JPG',
        'DSC03674 (3).jpg',
        'DSC03676 (2).jpg',

    ]

    const details = `The prestigious Petra Ballroom is an ideal weeding venue. With 
    large room filled with emotions, luxury and passion, 
    you can experience the feeling of a meaningful party or 
    celebration. Launnch a wide range of events that can accommodate more 
    than 200 people. With a giant LCD digital screens and two large screens, 
    this ballroom enchances the grandeur and dimension of your opening ceremony. Together, with your 
    input and our creativity, we can design an atmosphere that is befitting of class and business.`
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <h1>Grand Ballroom PETRA</h1>
                <hr />
                <h5>Room Size: 32 SQM View: City</h5>
                <h6>Details: <span>{details}</span></h6>


                {/* แถว 1 */}
                <div className="row g-4 mt-3">
                    {Images.map((items) => (
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">


                                    {/* ใส่รูป */}
                                    <img
                                        className="img-fluid w-100 h-100 mb-4"
                                        src={`assets/img/resort/Grand Ballroom PETRA/${items}`}
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

export default GrandBallRoom