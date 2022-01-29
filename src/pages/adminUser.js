// imports
import React, { useState } from "react";
import {
    CaretLeft,
    Eye,
    Trash,
    MinusCircle,
    Pencil
} from "phosphor-react";

// local imports
import Navbar from "../components/navbar";
import CustomHeader from "../components/customHeader";
import AdminUserProfile from "../assets/adminUser.png";

// styles
import "../styles/orders.css";
import "../styles/admin.css";

const AdminUsers = () => {
    const [newUser, setNewUser] = useState({
        avatar: "",
        name: "",
        typeOfUser: "",
        emailId: "",
        mobileNumber: "",
        address: "",
    });

    const [showAdminUserPopUp, setAdminUserPopUp] = useState(false);

    const hadleAvatarFileUpload = (targetId, e) => {
        if (e.target.files && e.target.files[0]) {
            const imageUrl = URL.createObjectURL(e.target.files[0]);
            const intermediateNewUser = {...newUser};
            intermediateNewUser[targetId] = imageUrl;
            setNewUser(intermediateNewUser);
        }
    }

    const handleNewUserEntry = (e) => {
        const intermediateNewUser = {...newUser};
        intermediateNewUser[e.target.id] = e.target.value;
        setNewUser(intermediateNewUser);
    }

    const handleAddAdminUser = () => {
        return (
            <div className="entryFilterContainer">
                <div className="addAdminContainer">

                    <div className="addAdminUserBodyContainer">

                    <div className="avatar-upload">
                        <div className="avatar-edit">
                            <input
                                type='file'
                                id="imageUpload"
                                accept=".png, .jpg, .jpeg"
                                onChange={(e) => hadleAvatarFileUpload("avatar", e)}
                            />
                            <label htmlFor="imageUpload">
                                <Pencil size={22} weight="bold" color="#FFA412" />
                            </label>
                        </div>
                        <div className="avatar-preview">
                            {
                                (newUser.avatar.length === 0)
                                ?
                                    <div id="imagePreviewTextContainer"><p className="addUserImagePreviewText">Upload Photo</p></div>
                                :
                                    <div id="imagePreview" style={{backgroundImage: `url(${newUser.avatar})`}} />
                            }
                            
                        </div>
                    </div>

                        <div className="accountReportTextField addAdminUserMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="name"
                                placeholder="Enter Name"
                                value={newUser.name}
                                onChange={(e) => handleNewUserEntry(e)}
                            />
                            <label className="orderInputLabel">Name</label>
                        </div>

                        <div className="accountReportTextField addAdminUserMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="typeOfUser"
                                placeholder="Enter Type Of User"
                                value={newUser.typeOfUser}
                                onChange={(e) => handleNewUserEntry(e)}
                            />
                            <label className="orderInputLabel">Type Of User</label>
                        </div>

                        <div className="accountReportTextField addAdminUserMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="emailId"
                                placeholder="Enter Email Id"
                                value={newUser.emailId}
                                onChange={(e) => handleNewUserEntry(e)}
                            />
                            <label className="orderInputLabel">Email Id</label>
                        </div>

                        <div className="accountReportTextField addAdminUserMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="mobileNumber"
                                placeholder="Enter Mobile Number"
                                value={newUser.mobileNumber}
                                onChange={(e) => handleNewUserEntry(e)}
                            />
                            <label className="orderInputLabel">Mobile Number</label>
                        </div>

                        <div className="accountReportTextField addAdminUserMargin">
                            <textarea
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="address"
                                placeholder="Enter Address"
                                value={newUser.address}
                                onChange={(e) => handleNewUserEntry(e)}
                            />
                            <label className="orderInputLabel">Address</label>
                        </div>

                    </div>

                    <div className="addAdminUserButtonContainer">
                        <button
                            className="addAdminUserCancelButton"
                            onClick={() => setAdminUserPopUp(false)}
                        >
                            Cancel
                        </button>
                        <button className="addAdminUserSaveButton">Save</button>
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

                <div className="orderEntryHeader">

                    <div className="orderEntryHeaderLeftSection">
                        <p className="orderEntryHeaderSubText"><CaretLeft size={30} weight="bold" /> &nbsp; USERS</p>
                    </div>

                    <div className="orderEntryRightSection">
                        <button
                            onClick={() => setAdminUserPopUp(true)}
                            className="orderEntryHeaderButton"
                        >
                            Add
                        </button>
                    </div>

                </div>

                <div className="orderEntryMiddleContainer">
                    <table className="orderEntryTable">
                        <thead>
                            <tr className="orderEntryTableHeader">
                                <th className="orderEntryTableHeaderText">Customer Name</th>
                                <th className="orderEntryTableHeaderText">Email</th>
                                <th className="orderEntryTableHeaderText">Mobile</th>
                                <th className="orderEntryTableHeaderText">Preview</th>
                                <th className="orderEntryTableHeaderText">Edit</th>
                                <th className="orderEntryTableHeaderText">Delete</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr className="adminUserTableBodyRow">
                                <th className="adminUserTableBodyCustomerName">
                                    <div className="adminUserTableBodyProfileSection">   
                                        <img style={{width: "100%"}} src={AdminUserProfile} alt="New List" />
                                    </div>
                                    <p className="adminUserTableBodyCustomerNameText">New User1</p>
                                </th>
                                <th className="adminUserTableBodyText">test@test.com</th>
                                <th className="adminUserTableBodyText">8574637283</th>
                                <th className="adminUserTableBodyIcon"><Eye size={22} weight="bold" color="#F78D12" /></th>
                                <th className="adminUserTableBodyIcon"><MinusCircle size={22} weight="bold" color="#F78D12" /></th>
                                <th className="adminUserTableBodyIcon"><Trash size={22} weight="bold" color="#FD0606" /></th>
                            </tr>

                            <tr className="adminUserTableBodyRow">
                                <th className="adminUserTableBodyCustomerName">
                                    <div className="adminUserTableBodyProfileSection">   
                                        <img style={{width: "100%"}} src={AdminUserProfile} alt="New List" />
                                    </div>
                                    <p className="adminUserTableBodyCustomerNameText">New User2</p>
                                </th>
                                <th className="adminUserTableBodyText">test22@test.com</th>
                                <th className="adminUserTableBodyText">9574637283</th>
                                <th className="adminUserTableBodyIcon"><Eye size={22} weight="bold" color="#F78D12" /></th>
                                <th className="adminUserTableBodyIcon"><MinusCircle size={22} weight="bold" color="#F78D12" /></th>
                                <th className="adminUserTableBodyIcon" ><Trash size={22} weight="bold" color="#FD0606" /></th>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className="adminUserFooterSection">

                    <p className="adminFooterRightText">Showing 1 of 4</p>

                    <div className="adminUserFooterPageSection">
                        <p className="orderEntryRightText">Page No</p>
                        <div className="orderEntryPageNumberContainer">
                            <p className="orderEntryActivePageNumber">1</p>
                            <p className="orderEntryInactivePageNumber">2</p>
                            <p className="orderEntryInactivePageNumber">3</p>
                            <p className="orderEntryInactivePageNumber">4</p>
                        </div>
                    </div>

                </div>

            </div>

            {
                (showAdminUserPopUp === true) && handleAddAdminUser()
            }

        </div>
    )

}

export default AdminUsers;