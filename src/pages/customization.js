// imports
import React, { useState } from "react";
import { Pencil } from "phosphor-react";

// local imports
import CustomHeader from "../components/customHeader";
import Navbar from "../components/navbar";

// styles
import "../styles/admin.css";

const Customization = () => {
    const [tabSection, setTabSection] = useState(0);
    const [organizationDetail, setOrganizationDetail] = useState({
        adminName: "",
        phoneNumber: "",
        gstNo: "",
        panNo: "",
        address: "",
    });
    const [profileAvatar, setProfileAvatar] = useState("");

    const hadleAvatarFileUpload = (targetId, e) => {
        if (e.target.files && e.target.files[0]) {
            const imageUrl = URL.createObjectURL(e.target.files[0]);
            setProfileAvatar(imageUrl);
        }
    }

    const handleInputChange = (e) => {
        const intermediateOrganizationDetail = {...organizationDetail};
        intermediateOrganizationDetail[e.target.id] = e.target.value;
        setOrganizationDetail(intermediateOrganizationDetail);
    }

    const renderOrganizationDetails = () => {
        return (
            <>
                
                <div className="adminCustomizationProfileSection">

                    <div className="customizationAvatarProfile">
                        <div className="avatar-edit">
                            <input
                                type='file'
                                id="profileAvatar"
                                accept=".png, .jpg, .jpeg"
                                onChange={(e) => hadleAvatarFileUpload("avatar", e)}
                            />
                            <label htmlFor="profileAvatar">
                                <Pencil size={22} weight="bold" color="#FFA412" />
                            </label>
                        </div>
                        <div className="csutomizationAvatarPreview">
                            {
                                (profileAvatar.length === 0)
                                ?
                                    <div id="imagePreviewTextContainer"><p className="addUserImagePreviewText">Upload Photo</p></div>
                                :
                                    <div id="imagePreview" style={{backgroundImage: `url(${profileAvatar})`}} />
                            }
                            
                        </div>
                    </div>

                    <p className="adminOrganizationDetailHeader">SESO TECH</p>

                </div>

                <div className="customizationDetailSection">

                    <p className="customizationDetailSectionHeader">Basic Information</p>

                    <div className="accountReportTextField customizationMargin">
                        <input
                            className="loginInSignUpCustomInput"
                            type="text"
                            id="adminName"
                            placeholder="Enter Admin Name"
                            style={{width: "35%"}}
                            value={organizationDetail.adminName}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <label className="orderInputLabel">Admin Name</label>
                    </div>

                    <div className="accountReportTextField customizationMargin">
                        <input
                            className="loginInSignUpCustomInput"
                            type="text"
                            id="phoneNumber"
                            style={{width: "35%"}}
                            placeholder="Enter Phone Number"
                            value={organizationDetail.phoneNumber}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <label className="orderInputLabel">Phone Number</label>
                    </div>

                    <div className="accountReportTextField customizationMargin">
                        <input
                            className="loginInSignUpCustomInput"
                            type="text"
                            id="gstNo"
                            style={{width: "35%"}}
                            placeholder="Enter GST Number"
                            value={organizationDetail.gstNo}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <label className="orderInputLabel">GST No</label>
                    </div>

                    <div className="accountReportTextField customizationMargin">
                        <input
                            className="loginInSignUpCustomInput"
                            type="text"
                            id="panNo"
                            style={{width: "35%"}}
                            placeholder="Enter PAN Number"
                            value={organizationDetail.panNo}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <label className="orderInputLabel">PAN Number</label>
                    </div>

                    <p className="customizationDetailSectionHeader customizationMargin">Address Information</p>

                    <div className="accountReportTextField customizationMargin">
                        <textarea
                            className="loginInSignUpCustomInput"
                            type="text"
                            id="address"
                            style={{width: "35%"}}
                            placeholder="Enter Address"
                            value={organizationDetail.address}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <label className="orderInputLabel">Address</label>
                    </div>

                </div>

            </>
        )
    }

    const renderDocumentations = () => {
        return (
            <div className="customizationDocumentationContainer">
                
                <div className="customizationDocSection">
                    <p className="customizationDocSectionText">
                        {"DC T&C"}
                    </p>

                    <div className="customizationDocSubSection">
            
                        <div className="accountReportTextField">
                            <textarea
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="adminName"
                                placeholder="Enter DC T&C"
                                value={organizationDetail.adminName}
                                onChange={(e) => handleInputChange(e)}
                            />
                            <label className="orderInputLabel">Narration</label>
                        </div>


                    </div>
                </div>

                <div className="customizationDocSection">
                    <p className="customizationDocSectionText">
                        {"GRN T&C"}
                    </p>

                    <div className="customizationDocSubSection">
            
                        <div className="accountReportTextField">
                            <textarea
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="adminName"
                                placeholder="Enter GRN T&C"
                                value={organizationDetail.adminName}
                                onChange={(e) => handleInputChange(e)}
                            />
                            <label className="orderInputLabel">Narration</label>
                        </div>


                    </div>
                </div>

                <div className="customizationDocSection">
                    <p className="customizationDocSectionText">
                        {"Invoice T&C"}
                    </p>

                    <div className="customizationDocSubSection">
            
                        <div className="accountReportTextField">
                            <textarea
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="adminName"
                                placeholder="Enter Invoice T&C"
                                value={organizationDetail.adminName}
                                onChange={(e) => handleInputChange(e)}
                            />
                            <label className="orderInputLabel">Narration</label>
                        </div>


                    </div>
                </div>

            </div>
        )
    }

    return (
        <div className="mainContainer">

            <Navbar />
            
            <div className="mainContentContainer">

                <CustomHeader />

                <div className="adminCustomizationTabHeader">

                    <p
                        onClick={() => setTabSection(0)}
                        className={(tabSection === 0) ? "adminCustomizationTabHeaderText adminCustomizationTabHeaderAcitveText" : "adminCustomizationTabHeaderText"}
                    >
                        Organization Details
                    </p>
                    <p
                        onClick={() => setTabSection(1)}
                        className={(tabSection === 1) ? "adminCustomizationTabHeaderText adminCustomizationTabHeaderAcitveText" : "adminCustomizationTabHeaderText"}
                    >
                        Documentations
                    </p>

                </div>

                <div className="customizationDetailBodyContainer">

                    {
                        (tabSection === 0) ? renderOrganizationDetails() : renderDocumentations()
                    }

                </div>

            </div>

        </div>
    )

}

export default Customization;