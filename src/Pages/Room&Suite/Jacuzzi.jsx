import React from 'react'

function Jacuzzi() {

    const details = `The Divalux Jacuzzi Suite is an enchanting sanctury in
    the heart of the bustling city. Experience brilliance with
    modern furnishings,aspacious layout,and an
    expansive view over the entire city from the top floor
    serve to create an ectraordinary experience.
    The highlight of the Divalux Suite is the magnificent
    outdoor Jacuzzi tub, where you can soak up the sun,
    enjoy music, and de-stress in the lap of nature. This
    luxurious heaven is ideal for intimate gatherings and
    long stay.`

    const Images = [

        'DSC03973.jpg',
        'DSC03994 (1).jpg',
        'DSC04000 (1).jpg',
        'DSC04016 (1).jpg',
        'DSC04020.jpg',
        'DSC04185 (1).jpg',
        'DSC04186 (1).jpg',
    ]



    return (
        <div className="container-xxl py-5">
            <div className="container">
                <h1>Divalux Jacuzzi Suites</h1>
                <hr />
                <h5>Room Size: 68 SQM View: Garden</h5>
                {/* <h6>Details: <span>{details}</span></h6> */}


                {/* แถว 1 */}
                <div className="row g-4 mt-3">

                    {Images.map((items) => (
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">


                                    {/* ใส่รูป */}
                                    <img
                                        className="img-fluid w-100 h-100 mb-4"
                                        src={"assets/img/resort/Divalux Jacuzzi SUITES/" + items}
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

export default Jacuzzi