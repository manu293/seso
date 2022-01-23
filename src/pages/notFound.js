// imports
import React from "react";
import { Link } from "react-router-dom";

// styles
import "../styles/notFound.css";

const NotFound = () => {

    return (
        <div className="notFoundContainer">
            
            <div className="notFoundLeftSection">

                <img
                    src="https://ik.imagekit.io/id85c1jhrpf/pic7_6VJtfh-nD?ik-sdk-version=javascript-1.4.3&updatedAt=1642491641813"
                    alt="Not Found"
                    className="notFoundImage"
                />

            </div>

            <div className="notFoundRightSection">

                <p className="notFoundErrorText">ERROR 404</p>

                <p className="notFoundErrorSubText">Hey you,</p>
                <p className="notFoundErrorSubText">the page you are searching for is un-available.</p>

                <Link
                    className="linkStyle"
                    to="/dashboard"
                >
                    <p className="returnToHomeText">
                        Return to Dashboard
                    </p>
                </Link>
            </div>

        </div>
    );

}

export default NotFound;