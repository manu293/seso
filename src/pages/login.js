// import
import React, { useState } from "react";
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
        console.log("e.target.value", e.target.value)
        intermediateLoginForm[e.target.id] = e.target.value;

        setLoginFormContent(intermediateLoginForm);
    }

    const handleLoginFormSubmit = (e) => {
        e.preventDefault();
        console.log("loginFormContent", loginFormContent)
    }
      
    console.log("loginFormContent.userName", loginFormContent.userName)

    return (
        <div className="loginContainer">

            <div className="logInLeftSection" />

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
                        <div className="loginSignUpTextfield">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="userName"
                                placeholder="Enter User Name"
                                value={loginFormContent.userName}
                                onChange={(e) => handleLoginFormInputChange(e)}
                            />
                            <label className="loginSignUpLabel">User Name</label>
                        </div>
                    </div>

                    <div className="logInFormInputContainer logInFormMargin">
                        <div className="loginSignUpTextfield">
                            <input
                                className="loginInSignUpCustomInput"
                                type="password"
                                id="password"
                                placeholder="Enter Password"
                                value={loginFormContent.password}
                                onChange={(e) => handleLoginFormInputChange(e)}
                            />
                            <label className="loginSignUpLabel">Password</label>
                        </div>
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
                    login with&nbsp;&nbsp; <img src="https://ik.imagekit.io/id85c1jhrpf/image_2_v9qZvQa0Gws.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642490813018" className="googleIcon" />
                </p>
                

            </div>

        
        </div>
    )

}

export default Login;