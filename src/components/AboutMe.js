import React from "react";
import author from "../Ryan2_small.jpg"

export const AboutMe = () => {
    return (
        <div className="container py-3">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-3"> 
                        <img className="profile-img" src={author} alt="author: Ryan Moore" />
                    </div>
                </div>  
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                        Hello, my name is Ryan and I live in the beautiful Lake Tahoe with my wife Allegra and our pup Milo. When I'm not developing, 
                        I enjoy snowboarding, mountain biking, boating, hiking, camping, and just about anything else I can get my hands on outdoors. 
                        <br /> <br />
                        I've been developing web and data applications since 2015 began and started working with blockchain development in 2020.
                        Please check out my portfolio page and provide any feedback or advice. If you'd like to hire me and my servcies, contact me.
                    </p>
                </div>  
            </div>
        </div>
    )
}

export default AboutMe
