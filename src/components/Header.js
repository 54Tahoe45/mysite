import React from "react"
import ReactTypingEffect from "react-typing-effect";

const Header = () => {
    return (
        <div className ="header-wrapper">
            <div className ="main-info">
                <h1>Development</h1>
                <ReactTypingEffect
                    className="typed-text"
                    text={["WEB DEVELOPMENT", "PHOTOGRAPHY", "BLOCKCHAIN DEVELOPMENT"]}
                    speed="100"
                    eraseSpeed="100"
                    typingDelay="100"
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

Header.propTypes = {

}

export default Header;

