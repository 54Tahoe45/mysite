import React from "react";
import santacruz from "../sanatcruz.JPG";
// import tahoe1 from "../Tahoe1.JPG";
// import Ryan1 from "../Ryan1.JPG";
// import BlogPost2 from "../BlogPost2.JPG";
// FONT AWESOME IMPORT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

//Santa Cruz
    const openPopupboxSantaCruz = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={santacruz} alt="Santa Cruz" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                </p>
                <b>Github:</b> <a className="hyper-link" onClick={() => 
                    window.open("https://github.com/54Tahoe45/my-portfolio")}>
                        https://github.com/54Tahoe45/my-portfolio</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigSantaCruz = {
        titleBar:{
            enable: true,
            text: "Santa Cruz project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Santa Cruz2
    const openPopupboxSantaCruz2 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={santacruz} alt="Santa Cruz2" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => 
                    window.open("https://github.com/54Tahoe45/my-portfolio", "_blank")}>
                        https://github.com/54Tahoe45/my-portfolio</a>
                <br />
                <b>Demo:</b> <a className="hyper-link" onClick={() => 
                    window.open("https://github.com/54Tahoe45/my-portfolio")}>
                        https://github.com/54Tahoe45/my-portfolio</a>
                    
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigSantaCruz2 = {
        titleBar:{
            enable: true,
            text: "Santa Cruz2 project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

// Santa Cruz3
    const openPopupboxSantaCruz3 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={santacruz} alt="Santa Cruz3" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => 
                    window.open("https://github.com/54Tahoe45/my-portfolio", "_blank")}>
                        https://github.com/54Tahoe45/my-portfolio</a>
                <br />
                <b>Demo:</b> <a className="hyper-link" onClick={() => 
                    window.open("https://github.com/54Tahoe45/my-portfolio", "_blank")}>
                        https://github.com/54Tahoe45/my-portfolio</a>
                    
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigSantaCruz3 = {
        titleBar:{
            enable: true,
            text: "Santa Cruz3 project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Santa Cruz4
    const openPopupboxSantaCruz4 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={santacruz} alt="Santa Cruz4" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => 
                    window.open("https://github.com/54Tahoe45/my-portfolio", "_blank")}>
                        https://github.com/54Tahoe45/my-portfolio</a>
                <br />
                <b>Demo:</b> <a className="hyper-link" onClick={() => 
                    window.open("https://github.com/54Tahoe45/my-portfolio", "_blank")}>
                        https://github.com/54Tahoe45/my-portfolio</a>
                    
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigSantaCruz4 = {
        titleBar:{
            enable: true,
            text: "Santa Cruz4 project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxSantaCruz}>
                        <img className="portfolio-image" src={santacruz} alt="Santa Cruz Pier" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxSantaCruz2}>
                        <img className="portfolio-image" src={santacruz} alt="SantaCruz2" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxSantaCruz3}>
                        <img className="portfolio-image" src={santacruz} alt="SantaCruz3" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxSantaCruz4}>
                        <img className="portfolio-image" src={santacruz} alt="SantaCruz4" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigSantaCruz} />
            <PopupboxContainer {...popupboxConfigSantaCruz2} />
            <PopupboxContainer {...popupboxConfigSantaCruz3} />
            <PopupboxContainer {...popupboxConfigSantaCruz4} />
        </div>
    )
}

export default Portfolio;

