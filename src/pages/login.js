// import
import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {connect} from "react-redux";

// local imports
import {logUserIn} from "../actions";

// styles
import "../styles/login.css";

const Login = (props) => {
    const history = useNavigate();

    const [loginFormContent, setLoginFormContent] = useState({
        userName: "aswanth@seso.tech",
        password: "securedpass",
    });

    const handleLoginFormInputChange = (e) => {
        const intermediateLoginForm = {...loginFormContent};
        intermediateLoginForm[e.target.id] = e.target.value;

        setLoginFormContent(intermediateLoginForm);
    }

    const handleLoginFormSubmit = async (e) => {
        e.preventDefault();

        if (
            (loginFormContent.userName.length > 0) &&
            (loginFormContent.password.length > 0)
        ) {
            const userEmail = loginFormContent.userName;
            const userPassword = loginFormContent.password;

            await props.logUserIn({userEmail, userPassword})
            .then(() => history("/dashboard"))
            .catch(() => console.log("error"));
            
        }
    }     

    return (
        <>
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
                                    className="loginComponentInputField"
                                    type="text"
                                    id="userName"
                                    required={true}
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
                                    className="loginComponentInputField"
                                    type="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    required={true}
                                    value={loginFormContent.password}
                                    onChange={(e) => handleLoginFormInputChange(e)}
                                />
                                <label className="loginSignUpLabel">Password</label>
                            </div>
                        </div>

                        {
                            (props.loginError === true) &&
                            <p className="alertText">Enter a valid user name or password</p>
                        }

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

            {
                (props.loading === true) &&
                (
                    <div className="progressPopUp">
                        <div className="progress">
                            <div className="indeterminate" />
                        </div>
                    </div>
                )
            }

        </>
    )

}

const mapStateToProps = (state) => {
    return {
        loginError: state.auth.loginError,
        loading: state.auth.loading,
    }
}

export default connect(mapStateToProps, {logUserIn})(Login);