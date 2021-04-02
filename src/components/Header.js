import React from "react"
import ReactTypingEffect from "react-typing-effect";
import {Link} from "react-scroll";

const Header = () => {
    return (
        <div id="home" className ="header-wrapper">
            <div className ="main-info">
                <h1>Development</h1>
                <ReactTypingEffect
                    className="typed-text"
                    text={["WEB DEVELOPMENT", "PHOTOGRAPHY", "BLOCKCHAIN DEVELOPMENT", "VIDEOGRAPHY"]}
                    speed="100"
                    eraseSpeed="100"
                    typingDelay="100"
                />
                <Link smooth={true} to="contact" className="btn-main-offer" href="#">Contact Me</Link>
            </div>
        </div>
    )
}

Header.propTypes = {

}

export default Header;

