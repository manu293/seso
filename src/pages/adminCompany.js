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

const AdminCompany = () => {
    const [companyTab, setCompanyTab] = useState(0);
    const [newEmployee, setNewEmployee] = useState({
        employeeAvatar: "",
        employeeName: "",
        typeOfEmployee: "",
        emailId: "",
        mobileNumber: "",
        address: "",
    });
    const [newMachine, setNewMachine] = useState({
        machineNo: "",
        machineMake: "",
        dia: "",
        gauge: "",
    });
    const [newFabric, setFabric] = useState({
        fabricName: "",
        fabricType:"",
    });

    const [adminCustomerPopUp, setAdminCustomerPopUp] = useState(false);

    const handleEmployeeAvatar = (targetId, e) => {
        if (e.target.files && e.target.files[0]) {
            const imageUrl = URL.createObjectURL(e.target.files[0]);
            const intermediateNewUser = {...newEmployee};
            intermediateNewUser[targetId] = imageUrl;
            setNewEmployee(intermediateNewUser);
        }
    }

    const handleEmployeeInput = (e) => {
        const intermediateNewUser = {...newEmployee};
        intermediateNewUser[e.target.id] = e.target.value;
        setNewEmployee(intermediateNewUser);
    }

    const handleMachineInput = (e) => {
        const intermediateNewUser = {...newMachine};
        intermediateNewUser[e.target.id] = e.target.value;
        setNewMachine(intermediateNewUser);
    }

    const hanleFabricInput = (e) => {
        const intermediateNewUser = {...newFabric};
        intermediateNewUser[e.target.id] = e.target.value;
        setFabric(intermediateNewUser);
    }

    const handleEmployeeDetailPopUp = () => {
        return (
            <div className="entryFilterContainer">
                <div className="addAdminContainer">

                    <div className="addAdminUserBodyContainer">

                    <div className="avatar-upload">
                        <div className="avatar-edit">
                            <input
                                type='file'
                                id="employeeAvatar"
                                accept=".png, .jpg, .jpeg"
                                onChange={(e) => handleEmployeeAvatar("employeeAvatar", e)}
                            />
                            <label htmlFor="employeeAvatar">
                                <Pencil size={22} weight="bold" color="#FFA412" />
                            </label>
                        </div>
                        <div className="avatar-preview">
                            {
                                (newEmployee.employeeAvatar.length === 0)
                                ?
                                    <div id="imagePreviewTextContainer"><p className="addUserImagePreviewText">Upload Photo</p></div>
                                :
                                    <div id="imagePreview" style={{backgroundImage: `url(${newEmployee.employeeAvatar})`}} />
                            }
                            
                        </div>
                    </div>

                        <div className="accountReportTextField addAdminUserMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="employeeName"
                                placeholder="Enter Name"
                                value={newEmployee.companyName}
                                onChange={(e) => handleEmployeeInput(e)}
                            />
                            <label className="orderInputLabel">Name</label>
                        </div>

                        <div className="accountReportTextField addAdminUserMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="typeOfEmployee"
                                placeholder="Enter Type Of Employee"
                                value={newEmployee.typeOfEmployee}
                                onChange={(e) => handleEmployeeInput(e)}
                            />
                            <label className="orderInputLabel">GST No</label>
                        </div>

                        <div className="accountReportTextField addAdminUserMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="emailId"
                                placeholder="Enter Email Id"
                                value={newEmployee.emailId}
                                onChange={(e) => handleEmployeeInput(e)}
                            />
                            <label className="orderInputLabel">Email Id</label>
                        </div>

                        <div className="accountReportTextField addAdminUserMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="mobileNumber"
                                placeholder="Enter Mobile Number"
                                value={newEmployee.mobileNumber}
                                onChange={(e) => handleEmployeeInput(e)}
                            />
                            <label className="orderInputLabel">Mobile Number</label>
                        </div>

                        <div className="accountReportTextField addAdminUserMargin">
                            <textarea
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="address"
                                placeholder="Enter Address"
                                value={newEmployee.address}
                                onChange={(e) => handleEmployeeInput(e)}
                            />
                            <label className="orderInputLabel">Address</label>
                        </div>

                    </div>

                    <div className="addAdminUserButtonContainer">
                        <button
                            className="addAdminUserCancelButton"
                            onClick={() => setAdminCustomerPopUp(false)}
                        >
                            Cancel
                        </button>
                        <button className="addAdminUserSaveButton">Save</button>
                    </div>

                </div>
            </div>
        )
    }

    const handleMachineDetailsPopUp = () => {
        return (
            <div className="entryFilterContainer">
                <div className="addAdminContainer">

                    <div className="addAdminUserBodyContainer">

                        <div className="accountReportTextField addAdminUserMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="machineNo"
                                placeholder="Enter Machine No"
                                value={newMachine.machineNo}
                                onChange={(e) => handleMachineInput(e)}
                            />
                            <label className="orderInputLabel">Machine No</label>
                        </div>

                        <div className="accountReportTextField addAdminUserMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="machineMake"
                                placeholder="Enter Machine Make"
                                value={newMachine.machineMake}
                                onChange={(e) => handleMachineInput(e)}
                            />
                            <label className="orderInputLabel">Machine Make</label>
                        </div>

                        <div className="accountReportTextField addAdminUserMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="dia"
                                placeholder="Enter DIA"
                                value={newMachine.dia}
                                onChange={(e) => handleMachineInput(e)}
                            />
                            <label className="orderInputLabel">Dia</label>
                        </div>

                        <div className="accountReportTextField addAdminUserMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="gauge"
                                placeholder="Enter Gauge"
                                value={newMachine.gauge}
                                onChange={(e) => handleMachineInput(e)}
                            />
                            <label className="orderInputLabel">Gauge</label>
                        </div>
                    </div>

                    <div className="addAdminUserButtonContainer">
                        <button
                            className="addAdminUserCancelButton"
                            onClick={() => setAdminCustomerPopUp(false)}
                        >
                            Cancel
                        </button>
                        <button className="addAdminUserSaveButton">Save</button>
                    </div>

                </div>
            </div>
        )
    }

    const handleFabricDetailPopUp = () => {
        return (
            <div className="entryFilterContainer">
                <div className="addAdminContainer">

                    <div className="addAdminUserBodyContainer">

                        <div className="accountReportTextField addAdminUserMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="fabricName"
                                placeholder="Enter Fabric Name"
                                value={newFabric.fabricName}
                                onChange={(e) => hanleFabricInput(e)}
                            />
                            <label className="orderInputLabel">Fabric Name</label>
                        </div>

                        <div className="accountReportTextField addAdminUserMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="fabricType"
                                placeholder="Enter Fabric Type"
                                value={newFabric.fabricType}
                                onChange={(e) => hanleFabricInput(e)}
                            />
                            <label className="orderInputLabel">Fabric Type</label>
                        </div>

                    </div>

                    <div className="addAdminUserButtonContainer">
                        <button
                            className="addAdminUserCancelButton"
                            onClick={() => setAdminCustomerPopUp(false)}
                        >
                            Cancel
                        </button>
                        <button className="addAdminUserSaveButton">Save</button>
                    </div>

                </div>
            </div>
        )
    }


    const renderEmployeeDetailTable = () => {
        return (
            <table className="orderEntryTable">
                <thead>
                    <tr className="orderEntryTableHeader">
                        <th className="orderEntryTableHeaderText">Employee Name</th>
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
        )
    }

    const renderMachineDetailTable = () => {
        return (
            <table className="orderEntryTable">
                <thead>
                    <tr className="orderEntryTableHeader">
                        <th className="orderEntryTableHeaderText">Machine No</th>
                        <th className="orderEntryTableHeaderText">Machine Make</th>
                        <th className="orderEntryTableHeaderText">Dia</th>
                        <th className="orderEntryTableHeaderText">Gauge</th>
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
        )
    }

    const renderFabricDetailTable = () => {
        return (
            <table className="orderEntryTable">
                <thead>
                    <tr className="orderEntryTableHeader">
                        <th className="orderEntryTableHeaderText">Fabric Name</th>
                        <th className="orderEntryTableHeaderText">Fabric Type</th>
                        <th className="orderEntryTableHeaderText">Fabric Description</th>
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
        )
    }

    let renderTableContainer = renderEmployeeDetailTable();
    let renderPopUpContainer = handleEmployeeDetailPopUp();

    switch(companyTab) {

        case 0:
            renderTableContainer = renderEmployeeDetailTable();
            renderPopUpContainer = handleEmployeeDetailPopUp();
            break;

        case 1:
            renderTableContainer = renderMachineDetailTable();
            renderPopUpContainer = handleMachineDetailsPopUp();
            break;

        case 2:
            renderTableContainer = renderFabricDetailTable();
            renderPopUpContainer = handleFabricDetailPopUp();
            break;

        default:
            renderTableContainer = renderEmployeeDetailTable();
            renderPopUpContainer = renderEmployeeDetailTable();
            break;
    }

    return (
        <div className="mainContainer">

            <Navbar />

            <div className="mainContentContainer">

                <CustomHeader />

                <div className="orderEntryHeader">

                    <div className="orderEntryHeaderLeftSection">
                        <p className="orderEntryHeaderSubText"><CaretLeft size={30} weight="bold" /> &nbsp; COMPANY</p>
                    </div>

                    <div className="orderEntryRightSection">
                        <button
                            onClick={() => setAdminCustomerPopUp(true)}
                            className="orderEntryHeaderButton"
                        >
                            Add
                        </button>
                    </div>

                </div>

                <div className="orderEntryTabContainer">

                    <p
                        onClick={() => setCompanyTab(0)}
                        className={(companyTab === 0) ? "orderEntryTabContainerText orderEntryTabContainerActiveText" : "orderEntryTabContainerText"}
                    >
                        Employee Details
                    </p>
                    <p
                        onClick={() => setCompanyTab(1)}
                        className={(companyTab === 1) ? "orderEntryTabContainerText orderEntryTabContainerActiveText" : "orderEntryTabContainerText"}
                    >
                        Machine Details
                    </p>
                    <p
                        onClick={() => setCompanyTab(2)}
                        className={(companyTab === 2) ? "orderEntryTabContainerText orderEntryTabContainerActiveText" : "orderEntryTabContainerText"}
                    >
                        Fabric Details
                    </p>

                </div>

                <div className="adminCompanyMiddleContainer">
                    {renderTableContainer}
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
                (adminCustomerPopUp === true) && renderPopUpContainer
            }

        </div>
    )

}

export default AdminCompany;