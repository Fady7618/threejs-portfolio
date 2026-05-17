import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className={"c-space pt-5 pb-3 border-t border-white-500 flex flex-wrap justify-between items-center gap-5"}>
            <div className={"text-white-500 flex gap-2"}>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className={"flex gap-3"}>
                <a href="https://github.com/Fady7618" className={"social-icon group hover:bg-white-700 hover:text-black-600 transition-colors duration-150"}>
                    <FontAwesomeIcon icon={faGithub} size="lg" className={"text-white group-hover:text-black-600 transition-colors duration-150"} />
                </a>
                <a href="https://linkedin.com/in/fady-alfred" className={"social-icon hover:bg-blue-500 transition-colors duration-150"}>
                    <FontAwesomeIcon icon={faLinkedin} size="lg" className={"text-white"}/>
                </a>
            </div>

            <p className={"text-white-500"}>
                © 2026 Fady. All rights reserved
            </p>
        </footer>
    )
}
export default Footer
