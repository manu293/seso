// imports
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

// local imports
import {
  fetchAdminCustomers,
  addAccountsCreditNotes,
  addAccountsDebitNotes,
  addAccountsTdsPayable,
  addAccountsTdsReceivable,
  addAccountsPayment,
  addReceipt,
} from "../actions";

const CreateAccountEntry = (props) => {
  const history = useNavigate();

  const formatNewDate = (newDate) => {
    return newDate.toISOString().split("T")[0];
  };

  const { setCreateEntryPopUp, createEntryRef } = props;
  const [createEntryTab, setCreateEntryTab] = useState(0);
  const [currSelectedCustomer, setCurrSelectedCustomer] = useState(0);
  const [creditNotes, setCreditNotes] = useState({
    reciptdate: formatNewDate(new Date()),
    cgst: "0",
    taxableamount: "0",
    sgst: "0",
    totalvalue: "0",
    narration: "",
  });
  const [debitNotes, setDebitNotes] = useState({
    reciptdate: formatNewDate(new Date()),
    cgst: "0",
    taxableamount: "0",
    sgst: "0",
    totalvalue: "0",
    narration: "",
  });
  const [tdsPayable, setTdsPayable] = useState({
    reciptdate: formatNewDate(new Date()),
    taxableamount: "0",
    paymentmode: "",
    status: "",
    narration: "",
  });
  const [tdsReceivable, setTdsReceivable] = useState({
    reciptdate: formatNewDate(new Date()),
    taxableamount: "0",
    paymentmode: "",
    status: "",
    narration: "",
  });
  const [payment, setPayment] = useState({
    reciptdate: formatNewDate(new Date()),
    taxableamount: "0",
    paymentmode: "",
    status: "",
    narration: "",
  });
  const [receipt, setReceipt] = useState({
    reciptdate: formatNewDate(new Date()),
    taxableamount: "0",
    paymentmode: "",
    status: "",
    narration: "",
  });

  useEffect(() => {
    if (props.customers.length === 0) {
      props.fetchAdminCustomers(history);
    }
  }, []);

  useEffect(() => {
    clearCreditNotesSection();
    clearDebitNotesSection();
    clearTdsPayableSection();
    clearTdsReceivableSection();
    clearPaymentSection();
    clearReceiptSection();
  }, [createEntryTab]);

  const clearReceiptSection = () => {
    setReceipt({
      reciptdate: formatNewDate(new Date()),
      taxableamount: "0",
      paymentmode: "",
      status: "",
      narration: "",
    });
  };

  const clearPaymentSection = () => {
    setPayment({
      reciptdate: formatNewDate(new Date()),
      taxableamount: "0",
      paymentmode: "",
      status: "",
      narration: "",
    });
  };

  const clearTdsReceivableSection = () => {
    setTdsReceivable({
      reciptdate: formatNewDate(new Date()),
      taxableamount: "0",
      paymentmode: "",
      status: "",
      narration: "",
    });
  };

  const clearTdsPayableSection = () => {
    setTdsPayable({
      reciptdate: formatNewDate(new Date()),
      taxableamount: "0",
      paymentmode: "",
      status: "",
      narration: "",
    });
  };

  const clearDebitNotesSection = () => {
    setDebitNotes({
      reciptdate: formatNewDate(new Date()),
      cgst: "",
      taxableamount: "",
      sgst: "",
      totalvalue: "",
      narration: "",
    });
  };

  const clearCreditNotesSection = () => {
    setCreditNotes({
      reciptdate: formatNewDate(new Date()),
      cgst: "",
      taxableamount: "",
      sgst: "",
      totalvalue: "",
      narration: "",
    });
  };

  const handlePayableInputSection = (e) => {
    const tdsPayableCopy = { ...tdsPayable };
    tdsPayableCopy[e.target.id] = e.target.value;
    setTdsPayable(tdsPayableCopy);
  };

  const renderPayableSection = () => {
    return (
      <>
        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="date"
            placeholder="Enter Date"
            id="reciptdate"
            value={tdsPayable.reciptdate}
            onChange={(e) => handlePayableInputSection(e)}
          />
          <label className="accountEntryInputLabel">Date</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="number"
            id="taxableamount"
            value={tdsPayable.taxableamount}
            onChange={(e) => handlePayableInputSection(e)}
          />
          <label className="accountEntryInputLabel">Total Amount</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <select
            className="loginInSignUpCustomInput"
            type="text"
            id="paymentmode"
            value={tdsPayable.paymentmode}
            onChange={(e) => handlePayableInputSection(e)}
          >
            <option value="">Select Payment Option</option>
            <option value="cash">Cash</option>
            <option value="credit">Credit</option>
            <option value="card">Card</option>
            <option value="debit">Debit</option>
          </select>
          <label className="accountEntryInputLabel">Payment Mode</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <select
            className="loginInSignUpCustomInput"
            type="text"
            id="status"
            value={tdsPayable.status}
            onChange={(e) => handlePayableInputSection(e)}
          >
            <option value="">Select Status</option>
          </select>
          <label className="accountEntryInputLabel">Status</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="text"
            id="narration"
            value={tdsPayable.narration}
            onChange={(e) => handlePayableInputSection(e)}
          />
          <label className="accountEntryInputLabel">Narration</label>
        </div>
      </>
    );
  };

  const handleReceivableInputSection = (e) => {
    const tdsReceivableCopy = { ...tdsReceivable };
    tdsReceivableCopy[e.target.id] = e.target.value;
    setTdsReceivable(tdsReceivableCopy);
  };

  const renderReceivableSection = () => {
    return (
      <>
        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="date"
            placeholder="Enter Date"
            id="reciptdate"
            value={tdsReceivable.reciptdate}
            onChange={(e) => handleReceivableInputSection(e)}
          />
          <label className="accountEntryInputLabel">Date</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="number"
            id="taxableamount"
            value={tdsReceivable.taxableamount}
            onChange={(e) => handleReceivableInputSection(e)}
          />
          <label className="accountEntryInputLabel">Total Amount</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <select
            className="loginInSignUpCustomInput"
            type="text"
            id="paymentmode"
            value={tdsReceivable.paymentmode}
            onChange={(e) => handleReceivableInputSection(e)}
          >
            <option value="">Select Payment Option</option>
            <option value="cash">Cash</option>
            <option value="credit">Credit</option>
            <option value="card">Card</option>
            <option value="debit">Debit</option>
          </select>
          <label className="accountEntryInputLabel">Payment Mode</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <select
            className="loginInSignUpCustomInput"
            type="text"
            id="status"
            value={tdsReceivable.status}
            onChange={(e) => handleReceivableInputSection(e)}
          >
            <option value="">Select Status</option>
          </select>
          <label className="accountEntryInputLabel">Status</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="text"
            id="narration"
            value={tdsReceivable.narration}
            onChange={(e) => handleReceivableInputSection(e)}
          />
          <label className="accountEntryInputLabel">Narration</label>
        </div>
      </>
    );
  };

  const handleReceiptInputSection = (e) => {
    const receiptCopy = { ...receipt };
    receiptCopy[e.target.id] = e.target.value;
    setReceipt(receiptCopy);
  };

  const renderReceiptSection = () => {
    return (
      <>
        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="date"
            placeholder="Enter Date"
            id="reciptdate"
            value={receipt.reciptdate}
            onChange={(e) => handleReceiptInputSection(e)}
          />
          <label className="accountEntryInputLabel">Date</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="number"
            id="taxableamount"
            value={receipt.taxableamount}
            onChange={(e) => handleReceiptInputSection(e)}
          />
          <label className="accountEntryInputLabel">Total Amount</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <select
            className="loginInSignUpCustomInput"
            type="text"
            id="paymentmode"
            value={receipt.paymentmode}
            onChange={(e) => handleReceiptInputSection(e)}
          >
            <option value="">Select Payment Option</option>
            <option value="cash">Cash</option>
            <option value="credit">Credit</option>
            <option value="card">Card</option>
            <option value="debit">Debit</option>
          </select>
          <label className="accountEntryInputLabel">Payment Mode</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <select
            className="loginInSignUpCustomInput"
            type="text"
            id="status"
            value={receipt.status}
            onChange={(e) => handleReceiptInputSection(e)}
          >
            <option value="">Select Status</option>
          </select>
          <label className="accountEntryInputLabel">Status</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="text"
            id="narration"
            value={receipt.narration}
            onChange={(e) => handleReceiptInputSection(e)}
          />
          <label className="accountEntryInputLabel">Narration</label>
        </div>
      </>
    );
  };

  const handleCreditInputChange = (e) => {
    const creditNotesCopy = { ...creditNotes };
    creditNotesCopy[e.target.id] = e.target.value;
    setCreditNotes(creditNotesCopy);
  };

  const renderCreditNote = () => {
    return (
      <>
        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="date"
            id="reciptdate"
            value={creditNotes.reciptdate}
            max={formatNewDate(new Date())}
            onChange={(e) => handleCreditInputChange(e)}
          />
          <label className="accountEntryInputLabel">Date</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="number"
            id="taxableamount"
            placeholder="Enter Taxable Amount"
            value={creditNotes.taxableamount}
            onChange={(e) => handleCreditInputChange(e)}
          />
          <label className="accountEntryInputLabel">Taxable Amount</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="number"
            id="sgst"
            placeholder="Enter SGST"
            value={creditNotes.sgst}
            onChange={(e) => handleCreditInputChange(e)}
          />
          <label className="accountEntryInputLabel">SGST</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="number"
            id="cgst"
            placeholder="Enter CGST"
            value={creditNotes.cgst}
            onChange={(e) => handleCreditInputChange(e)}
          />
          <label className="accountEntryInputLabel">CGST</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="number"
            id="totalvalue"
            placeholder="Enter Total Amount"
            value={creditNotes.totalvalue}
            onChange={(e) => handleCreditInputChange(e)}
          />
          <label className="accountEntryInputLabel">Total Amount</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="text"
            id="narration"
            placeholder="Enter Narration"
            value={creditNotes.narration}
            onChange={(e) => handleCreditInputChange(e)}
          />
          <label className="accountEntryInputLabel">Narration</label>
        </div>
      </>
    );
  };

  const handleDebitInputChange = (e) => {
    const debitInputCopy = { ...debitNotes };
    debitInputCopy[e.target.id] = e.target.value;
    setDebitNotes(debitInputCopy);
  };

  const renderDebitNote = () => {
    return (
      <>
        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="date"
            id="reciptdate"
            value={creditNotes.reciptdate}
            max={formatNewDate(new Date())}
            onChange={(e) => handleDebitInputChange(e)}
          />
          <label className="accountEntryInputLabel">Date</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="number"
            id="taxableamount"
            placeholder="Enter Taxable Amount"
            value={debitNotes.taxableamount}
            onChange={(e) => handleDebitInputChange(e)}
          />
          <label className="accountEntryInputLabel">Taxable Amount</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="number"
            id="sgst"
            placeholder="Enter SGST"
            value={debitNotes.sgst}
            onChange={(e) => handleDebitInputChange(e)}
          />
          <label className="accountEntryInputLabel">SGST</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="number"
            id="cgst"
            placeholder="Enter CGST"
            value={debitNotes.cgst}
            onChange={(e) => handleDebitInputChange(e)}
          />
          <label className="accountEntryInputLabel">CGST</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="number"
            id="totalvalue"
            placeholder="Enter Total Amount"
            value={debitNotes.totalvalue}
            onChange={(e) => handleDebitInputChange(e)}
          />
          <label className="accountEntryInputLabel">Total Amount</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="text"
            id="narration"
            placeholder="Enter Narration"
            value={debitNotes.narration}
            onChange={(e) => handleDebitInputChange(e)}
          />
          <label className="accountEntryInputLabel">Narration</label>
        </div>
      </>
    );
  };

  const handlePaymentInputSection = (e) => {
    const paymentCopy = { ...payment };
    paymentCopy[e.target.id] = e.target.value;
    setPayment(paymentCopy);
  };

  const renderPaymentSection = () => {
    return (
      <>
        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="date"
            placeholder="Enter Date"
            id="reciptdate"
            value={payment.reciptdate}
            onChange={(e) => handlePaymentInputSection(e)}
          />
          <label className="accountEntryInputLabel">Date</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="number"
            id="taxableamount"
            value={payment.taxableamount}
            onChange={(e) => handlePaymentInputSection(e)}
          />
          <label className="accountEntryInputLabel">Total Amount</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <select
            className="loginInSignUpCustomInput"
            type="text"
            id="paymentmode"
            value={payment.paymentmode}
            onChange={(e) => handlePaymentInputSection(e)}
          >
            <option value="">Select Payment Option</option>
            <option value="cash">Cash</option>
            <option value="credit">Credit</option>
            <option value="card">Card</option>
            <option value="debit">Debit</option>
          </select>
          <label className="accountEntryInputLabel">Payment Mode</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <select
            className="loginInSignUpCustomInput"
            type="text"
            id="status"
            value={payment.status}
            onChange={(e) => handlePaymentInputSection(e)}
          >
            <option value="">Select Status</option>
          </select>
          <label className="accountEntryInputLabel">Status</label>
        </div>

        <div className="customerBodyContainer accountEntryMargin">
          <input
            className="loginInSignUpCustomInput"
            type="text"
            id="narration"
            value={payment.narration}
            onChange={(e) => handlePaymentInputSection(e)}
          />
          <label className="accountEntryInputLabel">Narration</label>
        </div>
      </>
    );
  };

  let renderActiveSection;

  switch (createEntryTab) {
    case 0:
      renderActiveSection = renderPayableSection();
      break;

    case 1:
      renderActiveSection = renderReceivableSection();
      break;

    case 2:
      renderActiveSection = renderReceiptSection();
      break;

    case 3:
      renderActiveSection = renderPaymentSection();
      break;

    case 4:
      renderActiveSection = renderCreditNote();
      break;

    case 5:
      renderActiveSection = renderDebitNote();
      break;

    default:
      renderActiveSection = renderPayableSection();
      break;
  }

  if (props.customers.length === 0) {
    return null;
  }

  const renderCustomerNameOption = () => {
    const { customers } = props;

    return customers.map((customer) => {
      return <option value={customer.id}>{customer.customername}</option>;
    });
  };

  const formatCustomerFields = (filterCustomer) => {
    return {
      id: parseInt(filterCustomer.id),
      customername: filterCustomer.customername,
      email: filterCustomer.email,
      mobilenumber: parseInt(filterCustomer.mobilenumber, 10),
      gstno: filterCustomer.gstno,
      panno: filterCustomer.panno,
      address: filterCustomer.address,
      imageurl: filterCustomer.imageurl,
    };
  };

  const filteredCustomer = () => {
    return props.customers.find(
      (cust) => cust.id === parseInt(currSelectedCustomer, 10)
    );
  };

  const handleCredirNotesSubmit = () => {
    if (currSelectedCustomer === 0) {
      alert("Please select a customer");
      return;
    } else {
      const filterCustomer = filteredCustomer();

      if (filterCustomer === undefined) {
        alert("Could not find customer");
        return;
      } else {
        const creditNotesReq = {
          customerid: formatCustomerFields(filterCustomer),
          reciptdate: creditNotes.reciptdate,
          cgst: parseInt(creditNotes.cgst, 10),
          taxableamount: parseInt(creditNotes.taxableamount, 10),
          totalvalue: parseInt(creditNotes.totalvalue, 10),
          sgst: parseInt(creditNotes.sgst, 10),
          narration: creditNotes.narration,
        };
        props
          .addAccountsCreditNotes(history, creditNotesReq)
          .then(() => {
            setCreateEntryPopUp(false);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  const handleDebitNotesSubmit = () => {
    if (currSelectedCustomer === 0) {
      alert("Please select a customer");
      return;
    } else {
      const filterCustomer = filteredCustomer();

      if (filterCustomer === undefined) {
        alert("Could not find customer");
        return;
      } else {
        const debitNotesReq = {
          customerid: formatCustomerFields(filterCustomer),
          reciptdate: debitNotes.reciptdate,
          cgst: parseInt(debitNotes.cgst, 10),
          taxableamount: parseInt(debitNotes.taxableamount, 10),
          totalvalue: parseInt(debitNotes.totalvalue, 10),
          sgst: parseInt(debitNotes.sgst, 10),
          narration: debitNotes.narration,
        };
        props
          .addAccountsDebitNotes(history, debitNotesReq)
          .then(() => {
            setCreateEntryPopUp(false);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  const handleTdsPayableSubmit = () => {
    if (currSelectedCustomer === 0) {
      alert("Please select a customer");
      return;
    } else {
      const filterCustomer = filteredCustomer();

      if (filterCustomer === undefined) {
        alert("Could not find customer");
        return;
      } else {
        const tdsPaybleReq = {
          customerid: formatCustomerFields(filterCustomer),
          reciptdate: tdsPayable.reciptdate,
          totalamount: parseInt(tdsPayable.taxableamount, 10),
          paymentmode: tdsPayable.paymentmode,
          status: tdsPayable.status,
          narration: tdsPayable.narration,
        };
        props
          .addAccountsTdsPayable(history, tdsPaybleReq)
          .then(() => {
            setCreateEntryPopUp(false);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  const handleTdsReceivableSubmit = () => {
    if (currSelectedCustomer === 0) {
      alert("Please select a customer");
      return;
    } else {
      const filterCustomer = filteredCustomer();

      if (filterCustomer === undefined) {
        alert("Could not find customer");
        return;
      } else {
        const tdsReceivableReq = {
          customerid: formatCustomerFields(filterCustomer),
          reciptdate: tdsPayable.reciptdate,
          totalamount: parseInt(tdsPayable.taxableamount, 10),
          paymentmode: tdsPayable.paymentmode,
          status: tdsPayable.status,
          narration: tdsPayable.narration,
        };
        props
          .addAccountsTdsReceivable(history, tdsReceivableReq)
          .then(() => {
            setCreateEntryPopUp(false);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  const handlePaymentSubmit = () => {
    if (currSelectedCustomer === 0) {
      alert("Please select a customer");
      return;
    } else {
      const filterCustomer = filteredCustomer();

      if (filterCustomer === undefined) {
        alert("Could not find customer");
        return;
      } else {
        const paymentReq = {
          customerid: formatCustomerFields(filterCustomer),
          reciptdate: payment.reciptdate,
          totalamount: parseInt(payment.taxableamount, 10),
          paymentmode: payment.paymentmode,
          status: payment.status,
          narration: payment.narration,
        };
        props
          .addAccountsPayment(history, paymentReq)
          .then(() => {
            setCreateEntryPopUp(false);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  const handleReceiptSubmit = () => {
    if (currSelectedCustomer === 0) {
      alert("Please select a customer");
      return;
    } else {
      const filterCustomer = filteredCustomer();

      if (filterCustomer === undefined) {
        alert("Could not find customer");
        return;
      } else {
        const receiptReq = {
          customerid: formatCustomerFields(filterCustomer),
          reciptdate: receipt.reciptdate,
          totalamount: parseInt(receipt.taxableamount, 10),
          paymentmode: receipt.paymentmode,
          status: receipt.status,
          narration: receipt.narration,
        };
        props
          .addReceipt(history, receiptReq)
          .then(() => {
            setCreateEntryPopUp(false);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  const handleSaveClick = () => {
    switch (createEntryTab) {
      case 0:
        handleTdsPayableSubmit();
        break;

      case 1:
        handleTdsReceivableSubmit();
        break;

      case 2:
        handleReceiptSubmit();
        break;

      case 3:
        handlePaymentSubmit();
        break;

      case 4:
        handleCredirNotesSubmit();
        break;

      case 5:
        handleDebitNotesSubmit();
        break;

      default:
        break;
    }
  };

  return (
    <div className="entryFilterContainer">
      <div className="createEntryPopUpContainer" ref={createEntryRef}>
        <div className="createEntryPopUpLeftContainer">
          <p
            onClick={() => setCreateEntryTab(0)}
            className={
              createEntryTab === 0
                ? "createEntryPopUpLeftContainerText createEntryPopUpLeftContainerActiveText"
                : "createEntryPopUpLeftContainerText"
            }
          >
            TDS PAYABLE
          </p>
          <p
            onClick={() => setCreateEntryTab(1)}
            className={
              createEntryTab === 1
                ? "createEntryPopUpLeftContainerText createEntryPopUpLeftContainerActiveText"
                : "createEntryPopUpLeftContainerText"
            }
          >
            TDS RECEIVABLE
          </p>
          <p
            onClick={() => setCreateEntryTab(2)}
            className={
              createEntryTab === 2
                ? "createEntryPopUpLeftContainerText createEntryPopUpLeftContainerActiveText"
                : "createEntryPopUpLeftContainerText"
            }
          >
            RECEIPT
          </p>
          <p
            onClick={() => setCreateEntryTab(3)}
            className={
              createEntryTab === 3
                ? "createEntryPopUpLeftContainerText createEntryPopUpLeftContainerActiveText"
                : "createEntryPopUpLeftContainerText"
            }
          >
            Payment
          </p>
          <p
            onClick={() => setCreateEntryTab(4)}
            className={
              createEntryTab === 4
                ? "createEntryPopUpLeftContainerText createEntryPopUpLeftContainerActiveText"
                : "createEntryPopUpLeftContainerText"
            }
          >
            CREDIT NOTE
          </p>
          <p
            onClick={() => setCreateEntryTab(5)}
            className={
              createEntryTab === 5
                ? "createEntryPopUpLeftContainerText createEntryPopUpLeftContainerActiveText"
                : "createEntryPopUpLeftContainerText"
            }
          >
            DEBIT NOTE
          </p>
        </div>

        <div className="createEntryPopUpRightContainer">
          <div className="rightContainerCustomerName">
            <div className="customerBodyContainer accountEntryMargin">
              <select
                className="loginInSignUpCustomInput"
                value={currSelectedCustomer}
                onChange={(e) => setCurrSelectedCustomer(e.target.value)}
              >
                <option value={0}>Select a customer</option>
                {renderCustomerNameOption()}
              </select>
              <label className="accountEntryInputLabel">Customer Name</label>
            </div>
          </div>

          <div className="middleContainerPopUp">{renderActiveSection}</div>

          <div className="createEntryPopUpRightBottomContainer">
            <button
              onClick={() => setCreateEntryPopUp(false)}
              className="createEntryCancelButton"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSaveClick()}
              className="createEntrySaveButton"
            >
              Save
            </button>
          </div>
        </div>
      </div>
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
  addAccountsCreditNotes,
  addAccountsDebitNotes,
  addAccountsTdsPayable,
  addAccountsTdsReceivable,
  addAccountsPayment,
  addReceipt,
})(CreateAccountEntry);
