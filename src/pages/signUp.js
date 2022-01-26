// imports
import React, { useState } from "react";
import {GoogleLogo} from "phosphor-react";
import {Link} from "react-router-dom";

// styles
import "../styles/signUp.css";

const SignUp = () => {

    const [signUpFormContent, setSignUpFormContent] = useState({
        userName: "",
        emailId: "",
        password: "",
        confirmPassword: "",
    });

    const handleSignUpFormInputChange = (e) => {

        const intermediateSignUpForm = {...signUpFormContent};
        intermediateSignUpForm[e.target.id] = e.target.value;
        setSignUpFormContent(intermediateSignUpForm);

    }

    const handleSignUpFormSubmit = (e) => {
        e.preventDefault();

        console.log("signUpFormContent", signUpFormContent)
    }


    return (
        <div className="signUpContainer">
            
            <div className="signUpLeftSection" />

            <div className="signUpRightSection">

                <div className="signUpLoginSection">
                    <Link to="/login" className="logInHeaderText">
                        <p className="signUpLoginText">Login</p>
                    </Link>
                    <div className="signUpLoginContainer">
                        <p className="signUpLoginText">Sign up</p>
                        <div className="signUpLoginActiveSection" />
                    </div>
                </div>

                <form
                    className="signUpFormConatiner"
                    onSubmit={(e) => handleSignUpFormSubmit(e)}
                >

                    <div className="signUpFormInputContainer">
                        <div className="loginSignUpTextfield">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="userName"
                                placeholder="Enter User Name"
                                value={signUpFormContent.userName}
                                onChange={(e) => handleSignUpFormInputChange(e)}
                            />
                            <label className="loginSignUpLabel">User Name</label>
                        </div>
                    </div>

                    <div className="signUpFormInputContainer signUpFormInputMargin">
                        <div className="loginSignUpTextfield">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="emailId"
                                placeholder="Enter User Email"
                                value={signUpFormContent.emailId}
                                onChange={(e) => handleSignUpFormInputChange(e)}
                            />
                            <label className="loginSignUpLabel">Email ID</label>
                        </div>
                    </div>

                    <div className="signUpFormInputContainer signUpFormInputMargin">
                        <div className="loginSignUpTextfield">
                            <input
                                className="loginInSignUpCustomInput"
                                type="password"
                                id="password"
                                placeholder="Enter Password"
                                value={signUpFormContent.password}
                                onChange={(e) => handleSignUpFormInputChange(e)}
                            />
                            <label className="loginSignUpLabel">Enter Password</label>
                        </div>
                    </div>

                    <div className="signUpFormInputContainer signUpFormInputMargin">
                        <div className="loginSignUpTextfield">
                            <input
                                className="loginInSignUpCustomInput"
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                value={signUpFormContent.confirmPassword}
                                onChange={(e) => handleSignUpFormInputChange(e)}
                            />
                            <label className="loginSignUpLabel">Confirm Password</label>
                        </div>
                    </div>

                    <button
                        className="signUpFormSubmitButton"
                        type="submit"
                    >
                        Sign Up
                    </button>

                </form>

                <div className="dividerAlignmentContainer">
                    <div className="dividerContainer">
                        <span className="dividerContainerText">OR</span>
                    </div>
                </div>

                <p className="signInFooterText">
                    sign up with&nbsp;&nbsp;<img src="https://ik.imagekit.io/id85c1jhrpf/image_2_v9qZvQa0Gws.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642490813018" className="googleIcon" />
                </p>

            </div>

        </div>
    )

}

export default SignUp;
