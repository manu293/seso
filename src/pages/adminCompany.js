// imports
import React, { useRef, useState, useEffect } from "react";
import { CaretLeft, Eye, Trash, MinusCircle, Pencil } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

// local imports
import Navbar from "../components/navbar";
import CustomHeader from "../components/customHeader";
import {
  fetchAdminEmployees,
  addAdminEmployees,
  editAdminEmployees,
  fetchAdminMachine,
  addAdminMachines,
  editAdminMachines,
  fetchAdminFabric,
  addAdminFabric,
  editAdminFabric,
} from "../actions";

// styles
import "../styles/orders.css";
import "../styles/admin.css";

const AdminCompany = (props) => {
  const adminCompanyPopUpRef = useRef();

  const history = useNavigate();

  const [companyTab, setCompanyTab] = useState(0);

  const [newEmployee, setNewEmployee] = useState({
    imageurl: "",
    employeeName: "",
    typeofemployee: "",
    mobile: "",
  });
  const [newMachine, setNewMachine] = useState({
    machineno: "",
    machinemake: "",
    dia: "",
    gauge: "",
  });
  const [newFabric, setFabric] = useState({
    fabricname: "",
    fabrictype: "",
  });

  const [employeeId, setEmployeeId] = useState(null);
  const [fabricId, setFabricId] = useState(null);
  const [machineId, setMachineId] = useState(null);

  const [adminCustomerPopUp, setAdminCustomerPopUp] = useState(false);

  const handleMachineInput = (e) => {
    const intermediateNewUser = { ...newMachine };
    intermediateNewUser[e.target.id] = e.target.value;
    setNewMachine(intermediateNewUser);
  };

  const hanleFabricInput = (e) => {
    const intermediateNewUser = { ...newFabric };
    intermediateNewUser[e.target.id] = e.target.value;
    setFabric(intermediateNewUser);
  };

  const handleNewEmployeeEntry = (e) => {
    const intermediateNewUser = { ...newEmployee };
    intermediateNewUser[e.target.id] = e.target.value;
    setNewEmployee(intermediateNewUser);
  };

  const clearCompanyEmployeeDetail = () => {
    setNewEmployee({
      imageurl: "",
      employeeName: "",
      typeofemployee: "",
      mobile: "",
    });
  };

  const clearCompanyFabricTypeDetail = () => {
    setFabric({
      fabricname: "",
      fabrictype: "",
    });
  };

  const clearCompanyMachineDetail = () => {
    setNewMachine({
      machineno: "",
      machinemake: "",
      dia: "",
      gauge: "",
    });
  };

  const handleAdminCompanyCancel = () => {
    clearCompanyEmployeeDetail();
    clearCompanyMachineDetail();
    clearCompanyFabricTypeDetail();
    setAdminCustomerPopUp(false);
    setEmployeeId(null);
  };

  const handleEmployeeAvatarUpdate = (targetId, e) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      const intermediateNewUser = { ...newEmployee };
      intermediateNewUser[targetId] = imageUrl;
      setNewEmployee(intermediateNewUser);
    }
  };

  const updateAdminEmployeeDetail = (employee) => {
    setNewEmployee({ ...employee });
    setAdminCustomerPopUp(true);
    setEmployeeId(employee.id);
  };

  const updateAdminMachineDetails = (machine) => {
    setNewMachine({ ...machine });
    setAdminCustomerPopUp(true);
    setMachineId(machine.id);
  };

  const handleEmployeeSubmitDetails = async (e) => {
    if (employeeId !== null) {
      e.preventDefault();
      const editEmployee = {
        id: employeeId,
        ...newEmployee,
      };
      await props.editAdminEmployees(history, editEmployee);
      await props.fetchAdminEmployees(history);
      clearCompanyEmployeeDetail();
      setAdminCustomerPopUp(false);
      setEmployeeId(null);
    } else {
      e.preventDefault();
      await props.addAdminEmployees(history, newEmployee);
      await props.fetchAdminEmployees(history);
      clearCompanyEmployeeDetail();
      setAdminCustomerPopUp(false);
    }
  };

  const handleEmployeeDetailPopUp = () => {
    return (
      <div className="entryFilterContainer">
        <div className="addAdminContainer" ref={adminCompanyPopUpRef}>
          <form
            className="addAdminUserForm"
            onSubmit={(e) => handleEmployeeSubmitDetails(e)}
          >
            <div className="addAdminUserBodyContainer">
              <div className="avatar-upload">
                <div className="avatar-edit">
                  <input
                    type="file"
                    id="imageurl"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => handleEmployeeAvatarUpdate("imageurl", e)}
                  />
                  <label htmlFor="imageurl">
                    <Pencil size={22} weight="bold" color="#FFA412" />
                  </label>
                </div>
                <div className="avatar-preview">
                  {newEmployee.imageurl.length === 0 ? (
                    <div id="imagePreviewTextContainer">
                      <p className="addUserImagePreviewText">Upload Photo</p>
                    </div>
                  ) : (
                    <div
                      id="imagePreview"
                      style={{
                        backgroundImage: `url(${newEmployee.imageurl})`,
                      }}
                    />
                  )}
                </div>
              </div>

              <div className="accountReportTextField addAdminUserMargin">
                <input
                  className="loginInSignUpCustomInput"
                  type="text"
                  id="employeeName"
                  placeholder="Enter Employee Name"
                  value={newEmployee.employeeName}
                  required={true}
                  onChange={(e) => handleNewEmployeeEntry(e)}
                />
                <label className="orderInputLabel">Employee Name</label>
              </div>

              <div className="accountReportTextField addAdminUserMargin">
                <input
                  className="loginInSignUpCustomInput"
                  type="text"
                  id="typeofemployee"
                  placeholder="Enter Type Of Employee"
                  value={newEmployee.typeofemployee}
                  required={true}
                  onChange={(e) => handleNewEmployeeEntry(e)}
                />
                <label className="orderInputLabel">Type Of Employee</label>
              </div>

              <div className="accountReportTextField addAdminUserMargin">
                <input
                  className="loginInSignUpCustomInput"
                  type="number"
                  id="mobile"
                  placeholder="Enter Mobile Number"
                  value={newEmployee.mobile}
                  required={true}
                  onChange={(e) => handleNewEmployeeEntry(e)}
                />
                <label className="orderInputLabel">Mobile Number</label>
              </div>
            </div>

            <div className="addAdminUserButtonContainer">
              <button
                className="addAdminUserCancelButton"
                onClick={() => handleAdminCompanyCancel()}
              >
                Cancel
              </button>
              <button className="addAdminUserSaveButton" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const handleMachineSubmitDetails = async (e) => {
    if (machineId !== null) {
      e.preventDefault();
      const editMachine = {
        id: machineId,
        ...newMachine,
      };
      await props.editAdminMachines(history, editMachine);
      await props.fetchAdminMachine(history);
      clearCompanyEmployeeDetail();
      setAdminCustomerPopUp(false);
      setMachineId(null);
    } else {
      e.preventDefault();
      await props.addAdminMachines(history, newMachine);
      await props.fetchAdminMachine(history);
      clearCompanyEmployeeDetail();
      setAdminCustomerPopUp(false);
    }
  };

  const handleMachineDetailsPopUp = () => {
    return (
      <div className="entryFilterContainer">
        <div className="addAdminContainer" ref={adminCompanyPopUpRef}>
          <form
            className="addAdminUserForm"
            onSubmit={(e) => handleMachineSubmitDetails(e)}
          >
            <div className="addAdminUserBodyContainer">
              <div className="accountReportTextField addAdminUserMargin">
                <input
                  className="loginInSignUpCustomInput"
                  type="text"
                  id="machineno"
                  placeholder="Enter Machine No"
                  value={newMachine.machineno}
                  required={true}
                  onChange={(e) => handleMachineInput(e)}
                />
                <label className="orderInputLabel">Machine No</label>
              </div>

              <div className="accountReportTextField addAdminUserMargin">
                <input
                  className="loginInSignUpCustomInput"
                  type="text"
                  id="machinemake"
                  placeholder="Enter Machine Make"
                  value={newMachine.machinemake}
                  required={true}
                  onChange={(e) => handleMachineInput(e)}
                />
                <label className="orderInputLabel">Machine Make</label>
              </div>

              <div className="accountReportTextField addAdminUserMargin">
                <input
                  className="loginInSignUpCustomInput"
                  type="text"
                  id="dia"
                  placeholder="Enter Dia"
                  value={newMachine.dia}
                  required={true}
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
                  required={true}
                  onChange={(e) => handleMachineInput(e)}
                />
                <label className="orderInputLabel">Gauge</label>
              </div>
            </div>

            <div className="addAdminUserButtonContainer">
              <button
                className="addAdminUserCancelButton"
                onClick={() => handleAdminCompanyCancel()}
              >
                Cancel
              </button>
              <button className="addAdminUserSaveButton" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const handleFabricSubmitDetails = async (e) => {
    if (fabricId !== null) {
      e.preventDefault();
      const editFabric = {
        id: fabricId,
        ...newFabric,
      };
      await props.editAdminFabric(history, editFabric);
      await props.fetchAdminFabric(history);
      clearCompanyEmployeeDetail();
      setAdminCustomerPopUp(false);
      setFabricId(null);
    } else {
      e.preventDefault();
      await props.addAdminFabric(history, newFabric);
      await props.fetchAdminFabric(history);
      clearCompanyEmployeeDetail();
      setAdminCustomerPopUp(false);
    }
  };

  const handleFabricDetailPopUp = () => {
    return (
      <div className="entryFilterContainer">
        <div className="addAdminContainer" ref={adminCompanyPopUpRef}>
          <form
            className="addAdminUserForm"
            onSubmit={(e) => handleFabricSubmitDetails(e)}
          >
            <div className="addAdminUserBodyContainer">
              <div className="accountReportTextField addAdminUserMargin">
                <input
                  className="loginInSignUpCustomInput"
                  type="text"
                  id="fabricname"
                  placeholder="Enter Fabric Name"
                  value={newFabric.fabricname}
                  required={true}
                  onChange={(e) => hanleFabricInput(e)}
                />
                <label className="orderInputLabel">Fabric Name</label>
              </div>

              <div className="accountReportTextField addAdminUserMargin">
                <input
                  className="loginInSignUpCustomInput"
                  type="text"
                  id="fabrictype"
                  placeholder="Enter Fabric Type"
                  value={newFabric.fabrictype}
                  required={true}
                  onChange={(e) => hanleFabricInput(e)}
                />
                <label className="orderInputLabel">Fabric Type</label>
              </div>
            </div>

            <div className="addAdminUserButtonContainer">
              <button
                className="addAdminUserCancelButton"
                onClick={() => handleAdminCompanyCancel()}
              >
                Cancel
              </button>
              <button className="addAdminUserSaveButton" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

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

        <tbody>{renderEmployeeTableBody()}</tbody>
      </table>
    );
  };

  const renderEmployeeTableBody = () => {
    const { employees } = props;

    if (employees.length === 0) {
      return null;
    } else {
      return employees.map((employee) => {
        return (
          <tr className="adminUserTableBodyRow" key={`employee-${employee.id}`}>
            <th className="adminUserTableBodyCustomerName">
              {employee.imageurl !== null && employee.imageurl.length > 0 && (
                <div className="adminUserTableBodyProfileSection">
                  <img
                    style={{ width: "100%" }}
                    src={employee.imageurl}
                    alt="New List"
                  />
                </div>
              )}
              <p className="adminUserTableBodyCustomerNameText">
                {employee.employeeName}
              </p>
            </th>
            <th className="adminUserTableBodyText">
              {employee.typeofemployee}
            </th>
            <th className="adminUserTableBodyText">{employee.mobile}</th>
            <th className="adminUserTableBodyIcon">
              <Eye size={22} weight="bold" color="#F78D12" />
            </th>
            <th className="adminUserTableBodyIcon">
              <MinusCircle
                size={22}
                weight="bold"
                color="#F78D12"
                onClick={() => updateAdminEmployeeDetail(employee)}
              />
            </th>
            <th className="adminUserTableBodyIcon">
              <Trash size={22} weight="bold" color="#FD0606" />
            </th>
          </tr>
        );
      });
    }
  };

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

        <tbody>{renderMachineTableBody()}</tbody>
      </table>
    );
  };

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

        <tbody>{renderFabricTableBody()}</tbody>
      </table>
    );
  };

  const renderFabricTableBody = () => {
    const { fabrics } = props;

    if (fabrics.length === 0) {
      return null;
    } else {
      return fabrics.map((fabric) => {
        return (
          <tr className="adminUserTableBodyRow" key={`employee-${fabric.id}`}>
            <th className="adminUserTableBodyText">{fabric.fabricname}</th>
            <th className="adminUserTableBodyText">{fabric.fabrictype}</th>
            <th className="adminUserTableBodyText"></th>
            <th className="adminUserTableBodyIcon">
              <Eye size={22} weight="bold" color="#F78D12" />
            </th>
            <th className="adminUserTableBodyIcon">
              <MinusCircle
                size={22}
                weight="bold"
                color="#F78D12"
                onClick={() => updateAdminFabricDetails(fabric)}
              />
            </th>
            <th className="adminUserTableBodyIcon">
              <Trash size={22} weight="bold" color="#FD0606" />
            </th>
          </tr>
        );
      });
    }
  };

  const renderMachineTableBody = () => {
    const { machines } = props;

    if (machines.length === 0) {
      return null;
    } else {
      return machines.map((machine) => {
        return (
          <tr className="adminUserTableBodyRow" key={`employee-${machine.id}`}>
            <th className="adminUserTableBodyText">{machine.machineno}</th>
            <th className="adminUserTableBodyText">{machine.machinemake}</th>
            <th className="adminUserTableBodyText">{machine.dia}</th>
            <th className="adminUserTableBodyText">{machine.gauge}</th>
            <th className="adminUserTableBodyIcon">
              <MinusCircle
                size={22}
                weight="bold"
                color="#F78D12"
                onClick={() => updateAdminMachineDetails(machine)}
              />
            </th>
            <th className="adminUserTableBodyIcon">
              <Trash size={22} weight="bold" color="#FD0606" />
            </th>
          </tr>
        );
      });
    }
  };

  const updateAdminFabricDetails = (fabric) => {
    setFabric({ ...fabric });
    setAdminCustomerPopUp(true);
    setFabricId(fabric.id);
  };

  let renderTableContainer = renderEmployeeDetailTable();
  let renderPopUpContainer = handleEmployeeDetailPopUp();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        adminCustomerPopUp === true &&
        adminCompanyPopUpRef.current &&
        !adminCompanyPopUpRef.current.contains(e.target)
      ) {
        setAdminCustomerPopUp(false);
        clearCompanyEmployeeDetail();
        clearCompanyMachineDetail();
        clearCompanyFabricTypeDetail();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [adminCustomerPopUp]);

  useEffect(() => {
    if (props.employees.length === 0) {
      props.fetchAdminEmployees();
    }

    if (props.machines.length === 0) {
      props.fetchAdminMachine();
    }

    if (props.fabrics.length === 0) {
      props.fetchAdminFabric();
    }
  }, []);

  switch (companyTab) {
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
            <p className="orderEntryHeaderSubText">
              <CaretLeft size={30} weight="bold" /> &nbsp; COMPANY
            </p>
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
            className={
              companyTab === 0
                ? "orderEntryTabContainerText orderEntryTabContainerActiveText"
                : "orderEntryTabContainerText"
            }
          >
            Employee Details
          </p>
          <p
            onClick={() => setCompanyTab(1)}
            className={
              companyTab === 1
                ? "orderEntryTabContainerText orderEntryTabContainerActiveText"
                : "orderEntryTabContainerText"
            }
          >
            Machine Details
          </p>
          <p
            onClick={() => setCompanyTab(2)}
            className={
              companyTab === 2
                ? "orderEntryTabContainerText orderEntryTabContainerActiveText"
                : "orderEntryTabContainerText"
            }
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

      {adminCustomerPopUp === true && renderPopUpContainer}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    employees: state.admin.employees,
    machines: state.admin.machines,
    fabrics: state.admin.fabrics,
  };
};

export default connect(mapStateToProps, {
  fetchAdminEmployees,
  addAdminEmployees,
  editAdminEmployees,
  fetchAdminMachine,
  addAdminMachines,
  editAdminMachines,
  fetchAdminFabric,
  addAdminFabric,
  editAdminFabric,
})(AdminCompany);
