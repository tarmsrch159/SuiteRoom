import React from 'react'

function DeluxeRoom() {

    const details = `With a rus tic charm and natural hues , the Deluxe
    Rooms a t the Di v a lux Resort & Spa prov ides the
    perfect contrast to Bangkok’s bustling charm. Enjoy
    your favourite book at the window seats, or rejuvenate
    after a long day in the walk-in shower – the Deluxe
    Room is the perfect setting to switch off.`

    const Images = [
        'IMG_4857.JPG',
        'IMG_4860.JPG',
        'IMG_4865.JPG',
        'IMG_4871.JPG',
        'IMG_4840.jpg'
    ]

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <h1>DeluxeRoom</h1>
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
                                        src={"/assets/img/resort/Deluxe Room/" + items}
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

export default DeluxeRoom