// imports
import React, { useRef, useState, useEffect } from "react";
import { CaretLeft, Eye, Trash, MinusCircle, Pencil } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

// local imports
import Navbar from "../components/navbar";
import CustomHeader from "../components/customHeader";
import {
  fetchAdminCustomers,
  addAdminCustomer,
  editAdminCustomer,
} from "../actions";

// styles
import "../styles/orders.css";
import "../styles/admin.css";

const AdminCustomer = (props) => {
  const adminCustomerPopUpRef = useRef();
  const [newCustomer, setNewCustomer] = useState({
    imageurl: "",
    customername: "",
    gstno: "",
    panno: "",
    email: "",
    address: "",
    email: "",
    mobilenumber: "",
  });
  const [customerId, setCustomerId] = useState(null);

  const history = useNavigate();

  const [adminCustomerPopUp, setAdminCustomerPopUp] = useState(false);

  const hadleAvatarFileUpload = (targetId, e) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      const intermediateNewUser = { ...newCustomer };
      intermediateNewUser[targetId] = imageUrl;
      setNewCustomer(intermediateNewUser);
    }
  };

  const handleNewUserEntry = (e) => {
    const intermediateNewUser = { ...newCustomer };
    intermediateNewUser[e.target.id] = e.target.value;
    setNewCustomer(intermediateNewUser);
  };

  useEffect(() => {
    props.fetchAdminCustomers(history);
  }, []);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        adminCustomerPopUp === true &&
        adminCustomerPopUpRef.current &&
        !adminCustomerPopUpRef.current.contains(e.target)
      ) {
        setAdminCustomerPopUp(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [adminCustomerPopUp]);

  const clearCustomerDetails = () => {
    setNewCustomer({
      imageurl: "",
      customername: "",
      gstno: "",
      panno: "",
      email: "",
      address: "",
      email: "",
      mobilenumber: "",
    });
  };

  const updateCustomerDetail = (customer) => {
    setNewCustomer({ ...customer });
    setAdminCustomerPopUp(true);
    setCustomerId(customer.id);
  };

  const handleAddCustomerCancel = () => {
    clearCustomerDetails();
    setAdminCustomerPopUp(false);
    setCustomerId(null);
  };

  const handleAddNewCustomer = async (e) => {
    if (customerId !== null) {
      e.preventDefault();
      const editCustomer = {
        id: customerId,
        ...newCustomer,
      };
      await props.editAdminCustomer(history, editCustomer);
      await props.fetchAdminCustomers(history);
      clearCustomerDetails();
      setAdminCustomerPopUp(false);
      setCustomerId(null);
    } else {
      e.preventDefault();
      await props.addAdminCustomer(history, newCustomer);
      await props.fetchAdminCustomers(history);
      clearCustomerDetails();
      setAdminCustomerPopUp(false);
    }
  };

  const handleAddAdminCustomer = () => {
    return (
      <div className="entryFilterContainer">
        <div className="addAdminContainer" ref={adminCustomerPopUpRef}>
          <form
            className="addAdminUserForm"
            onSubmit={(e) => handleAddNewCustomer(e)}
          >
            <div className="addAdminUserBodyContainer">
              <div className="avatar-upload">
                <div className="avatar-edit">
                  <input
                    type="file"
                    id="imageurl"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => hadleAvatarFileUpload("imageurl", e)}
                  />
                  <label htmlFor="imageurl">
                    <Pencil size={22} weight="bold" color="#FFA412" />
                  </label>
                </div>
                <div className="avatar-preview">
                  {newCustomer.imageurl.length === 0 ? (
                    <div id="imagePreviewTextContainer">
                      <p className="addUserImagePreviewText">Upload Photo</p>
                    </div>
                  ) : (
                    <div
                      id="imagePreview"
                      style={{
                        backgroundImage: `url(${newCustomer.imageurl})`,
                      }}
                    />
                  )}
                </div>
              </div>

              <div className="accountReportTextField addAdminUserMargin">
                <input
                  className="loginInSignUpCustomInput"
                  type="text"
                  id="customername"
                  placeholder="Enter Customer Name"
                  value={newCustomer.customername}
                  required={true}
                  onChange={(e) => handleNewUserEntry(e)}
                />
                <label className="orderInputLabel">Customer Name</label>
              </div>

              <div className="accountReportTextField addAdminUserMargin">
                <input
                  className="loginInSignUpCustomInput"
                  type="text"
                  id="gstno"
                  placeholder="Enter GST No"
                  value={newCustomer.gstno}
                  required={true}
                  onChange={(e) => handleNewUserEntry(e)}
                />
                <label className="orderInputLabel">GST No</label>
              </div>

              <div className="accountReportTextField addAdminUserMargin">
                <input
                  className="loginInSignUpCustomInput"
                  type="text"
                  id="panno"
                  placeholder="Enter PAN No"
                  required={true}
                  value={newCustomer.panno}
                  onChange={(e) => handleNewUserEntry(e)}
                />
                <label className="orderInputLabel">PAN No</label>
              </div>

              <div className="accountReportTextField addAdminUserMargin">
                <input
                  className="loginInSignUpCustomInput"
                  type="text"
                  id="email"
                  placeholder="Enter Email Id"
                  value={newCustomer.email}
                  required={true}
                  onChange={(e) => handleNewUserEntry(e)}
                />
                <label className="orderInputLabel">Email Id</label>
              </div>

              <div className="accountReportTextField addAdminUserMargin">
                <input
                  className="loginInSignUpCustomInput"
                  type="number"
                  id="mobilenumber"
                  placeholder="Enter Mobile Number"
                  value={newCustomer.mobilenumber}
                  required={true}
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
                  required={true}
                  value={newCustomer.address}
                  onChange={(e) => handleNewUserEntry(e)}
                />
                <label className="orderInputLabel">Address</label>
              </div>
            </div>

            <div className="addAdminUserButtonContainer">
              <button
                className="addAdminUserCancelButton"
                onClick={() => handleAddCustomerCancel()}
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

  const renderTableBody = () => {
    const { customers } = props;

    if (customers.length === 0) {
      return null;
    } else {
      return customers.map((customer) => {
        return (
          <tr className="adminUserTableBodyRow" key={`customer-${customer.id}`}>
            <th className="adminUserTableBodyCustomerName">
              {customer.imageurl !== null && customer.imageurl.length > 0 && (
                <div className="adminUserTableBodyProfileSection">
                  <img
                    style={{ width: "100%" }}
                    src={customer.imageurl}
                    alt="New List"
                  />
                </div>
              )}
              <p className="adminUserTableBodyCustomerNameText">
                {customer.customername}
              </p>
            </th>
            <th className="adminUserTableBodyText">{customer.email}</th>
            <th className="adminUserTableBodyText">{customer.mobilenumber}</th>
            <th className="adminUserTableBodyIcon">
              <Eye size={22} weight="bold" color="#F78D12" />
            </th>
            <th className="adminUserTableBodyIcon">
              <MinusCircle
                size={22}
                weight="bold"
                color="#F78D12"
                onClick={() => updateCustomerDetail(customer)}
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

  return (
    <div className="mainContainer">
      <Navbar />

      <div className="mainContentContainer">
        <CustomHeader />

        <div className="orderEntryHeader">
          <div className="orderEntryHeaderLeftSection">
            <p className="orderEntryHeaderSubText">
              <CaretLeft size={30} weight="bold" /> &nbsp; CUSTOMERS
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

            <tbody>{renderTableBody()}</tbody>
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

      {adminCustomerPopUp === true && handleAddAdminCustomer()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    customers: state.admin.customers,
  };
};

export default connect(mapStateToProps, {
  fetchAdminCustomers,
  addAdminCustomer,
  editAdminCustomer,
})(AdminCustomer);
