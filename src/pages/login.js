// import
import React, { useState } from "react";
import {GoogleLogo} from "phosphor-react";
import {Link} from "react-router-dom";

// local imports


// styles
import "../styles/login.css";

const Login = () => {

    const [loginFormContent, setLoginFormContent] = useState({
        userName: "",
        password: "",
    });

    const handleLoginFormInputChange = (e) => {
        const intermediateLoginForm = {...loginFormContent};
        intermediateLoginForm[e.target.id] = e.target.value;

        setLoginFormContent(intermediateLoginForm);
    }

    const handleLoginFormSubmit = (e) => {
        e.preventDefault();
        console.log("loginFormContent", loginFormContent)
    }

    return (
        <div className="loginContainer">

            <div className="logInLeftSection">
                <img
                    src="https://ik.imagekit.io/id85c1jhrpf/pic7_6VJtfh-nD?ik-sdk-version=javascript-1.4.3&updatedAt=1642491641813"
                    alt="Sign Up"
                    className="logInImage"
                />
            </div>

            <div className="logInRightSection">

                <div className="loginSection">
                    <div className="signUpLoginSectionContainer">
                        <p className="signUpLoginText">Login</p>
                        <div className="logInActiveSection" />
                    </div>
                    <Link to="/signup" className="signUpHeaderText">
                        <p className="signUpLoginText">Sign up</p>
                    </Link>
                </div>

                <p className="logInWelcomeSection">Welcome to SESO</p>

                <p className="logInWelcomeSubSection">we are happy to see you again</p>

                <form
                    className="logInFormContainer"
                    onSubmit={(e) => handleLoginFormSubmit(e)}
                >

                    <div className="logInFormInputContainer">
                        <label className="logInFormLabel">
                            User Name
                        </label>
                        <input
                            id="userName"
                            className="logInFormInput"
                            type="text"
                            value={loginFormContent.userName}
                            placeholder="Enter User Name"
                            onChange={(e) => handleLoginFormInputChange(e)}
                        />
                    </div>

                    <div className="logInFormInputContainer logInFormMargin">
                        <label className="logInFormLabel">
                            Password
                        </label>
                        <input
                            id="password"
                            className="logInFormInput"
                            type="password"
                            value={loginFormContent.password}
                            placeholder="Enter Password"
                            onChange={(e) => handleLoginFormInputChange(e)}
                        />
                    </div>

                    <p className="forgotPasswordText">Forgot Password</p>

                    <button
                        className="logInFormSubmitButton"
                        type="submit"
                    >
                        Login
                    </button>

                </form>

                <div className="dividerAlignmentContainer">
                    <div className="dividerContainer">
                        <span className="dividerContainerText">OR</span>
                    </div>
                </div>

                <p className="logInFooterText">
                    login with&nbsp;&nbsp;<GoogleLogo size={22} weight="bold" />
                </p>
                

            </div>

        
        </div>
    )

}

export default Login;