import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { fabFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faVideo, faCamera, faTh, faLaptopCode } from '@fortawesome/free-solid-svg-icons'


const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">my services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faLaptopCode} size="2x"/></div>
                            <h3>Web Development</h3>
                            <p>
                                Dynamiclly desinged websites and applications.
                            </p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faCamera} size="2x"/></div>
                            <h3>Photography</h3>
                            <p>
                                Capturing high quality images and creating unique memories.
                            </p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faTh} size="2x"/></div>
                            <h3>Blockchain Technology</h3>
                            <p>
                                Smart contracts, gaming, wallets, and NFTs.
                            </p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faVideo} size="2x"/></div>
                            <h3>Videography</h3>
                            <p>
                                Experience with action, landscape, portrait, and wedding videography.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
