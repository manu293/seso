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
            
            <div className="signUpLeftSection">
                <img
                    src="https://ik.imagekit.io/id85c1jhrpf/pic7_6VJtfh-nD?ik-sdk-version=javascript-1.4.3&updatedAt=1642491641813"
                    alt="Sign Up Image"
                    className="signUpImage"
                />
            </div>

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
                        <label className="signUpFormLabel">
                            User Name
                        </label>
                        <input
                            className="signUpFormInput"
                            type="text"
                            value={signUpFormContent.userName}
                            placeholder="Enter User Name"
                            onChange={(e) => handleSignUpFormInputChange(e)}
                            id="userName"
                        />
                    </div>

                    <div className="signUpFormInputContainer signUpFormInputMargin">
                        <label className="signUpFormLabel">
                            Email ID
                        </label>
                        <input
                            className="signUpFormInput"
                            type="text"
                            value={signUpFormContent.emailId}
                            placeholder="Enter User Name"
                            onChange={(e) => handleSignUpFormInputChange(e)}
                            id="emailId"
                        />
                    </div>

                    <div className="signUpFormInputContainer signUpFormInputMargin">
                        <label className="signUpFormLabel">
                            Enter Password
                        </label>
                        <input
                            className="signUpFormInput"
                            type="password"
                            value={signUpFormContent.password}
                            placeholder="Enter User Name"
                            onChange={(e) => handleSignUpFormInputChange(e)}
                            id="password"
                        />
                    </div>

                    <div className="signUpFormInputContainer signUpFormInputMargin">
                        <label className="signUpFormLabel">
                            Confirm Password
                        </label>
                        <input
                            className="signUpFormInput"
                            type="password"
                            value={signUpFormContent.confirmPassword}
                            placeholder="Enter User Name"
                            onChange={(e) => handleSignUpFormInputChange(e)}
                            id="confirmPassword"
                        />
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
                    sign up with&nbsp;&nbsp;<GoogleLogo size={22} weight="bold" />
                </p>

            </div>

        </div>
    )

}

export default SignUp;
