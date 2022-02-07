// imports
import React, { useRef, useState } from "react";

const CreateAccountEntry = (props) => {
    const {setCreateEntryPopUp, createEntryRef} = props;
    const [createEntryTab, setCreateEntryTab] = useState(0);

    const renderPayableSection = () => {
        return (
            <>
                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="entryNo"
                        placeholder="Enter Entry No"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Entry No</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="date"
                        id="date"
                        placeholder="Enter Date"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Date</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Total Amount"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Total Amount</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <select
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="documentDate"
                        placeholder="Enter Document Date"
                        value=""
                    >
                        <option value="">Option1</option>
                    </select>
                    <label className="accountEntryInputLabel">Payment Mode</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <select
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="documentDate"
                        placeholder="Enter Document Date"
                        value=""
                    >
                        <option value="">Option1</option>
                    </select>
                    <label className="accountEntryInputLabel">Status</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Narration"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Narration</label>
                </div>
            </>
        )
    }

    const renderReceivableSection = () => {
        return (
            <>
                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="entryNo"
                        placeholder="Enter Entry No"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Entry No</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="date"
                        id="date"
                        placeholder="Enter Date"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Date</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Total Amount"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Total Amount</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <select
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="documentDate"
                        placeholder="Enter Document Date"
                        value=""
                    >
                        <option value="">Option1</option>
                    </select>
                    <label className="accountEntryInputLabel">Payment Mode</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <select
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="documentDate"
                        placeholder="Enter Document Date"
                        value=""
                    >
                        <option value="">Option1</option>
                    </select>
                    <label className="accountEntryInputLabel">Status</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Total Amount"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Total Amount</label>
                </div>
            </>
        )
    }

    const renderReceiptSection = () => {
        return (
            <>
                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="entryNo"
                        placeholder="Enter Entry No"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Entry No</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="date"
                        id="date"
                        placeholder="Enter Date"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Date</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Total Amount"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Total Amount</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <select
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="documentDate"
                        placeholder="Enter Document Date"
                        value=""
                    >
                        <option value="">Option1</option>
                    </select>
                    <label className="accountEntryInputLabel">Payment Mode</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <select
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="documentDate"
                        placeholder="Enter Document Date"
                        value=""
                    >
                        <option value="">Option1</option>
                    </select>
                    <label className="accountEntryInputLabel">Status</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Total Amount"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Total Amount</label>
                </div>
            </>
        )
    }

    const renderCreditNote = () => {
        return (
            <>
                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="entryNo"
                        placeholder="Enter Entry No"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Entry No</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="date"
                        id="date"
                        placeholder="Enter Date"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Date</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Total Amount"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Taxable Amount</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Total Amount"
                        value=""
                    />
                    <label className="accountEntryInputLabel">SGST</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Total Amount"
                        value=""
                    />
                    <label className="accountEntryInputLabel">CGST</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Total Amount"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Total Amount</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Total Amount"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Narration</label>
                </div>
            </>
        )
    }

    const renderDebitNote = () => {
        return (
            <>
                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="entryNo"
                        placeholder="Enter Entry No"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Entry No</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="date"
                        id="date"
                        placeholder="Enter Date"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Date</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Total Amount"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Taxable Amount</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Total Amount"
                        value=""
                    />
                    <label className="accountEntryInputLabel">SGST</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Total Amount"
                        value=""
                    />
                    <label className="accountEntryInputLabel">CGST</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Total Amount"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Total Amount</label>
                </div>

                <div className="customerBodyContainer accountEntryMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="totalAmount"
                        placeholder="Enter Total Amount"
                        value=""
                    />
                    <label className="accountEntryInputLabel">Narration</label>
                </div>
            </>
        )
    }

    let renderActiveSection;

    switch(createEntryTab) {

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
            renderActiveSection = renderCreditNote();
            break;

        case 4:
            renderActiveSection = renderDebitNote();
            break;

        default:
            renderActiveSection = renderPayableSection();
            break;

    }

    return (
        <div className="entryFilterContainer">
            <div className="createEntryPopUpContainer" ref={createEntryRef}>

                <div className="createEntryPopUpLeftContainer">
                    <p
                        onClick={() => setCreateEntryTab(0)}
                        className={(createEntryTab === 0) ? "createEntryPopUpLeftContainerText createEntryPopUpLeftContainerActiveText" : "createEntryPopUpLeftContainerText"}
                    >
                        TDS PAYABLE
                    </p>
                    <p
                        onClick={() => setCreateEntryTab(1)}
                        className={(createEntryTab === 1) ? "createEntryPopUpLeftContainerText createEntryPopUpLeftContainerActiveText" : "createEntryPopUpLeftContainerText"}
                    >
                        TDS RECEIVABLE
                    </p>
                    <p
                        onClick={() => setCreateEntryTab(2)}
                        className={(createEntryTab === 2) ? "createEntryPopUpLeftContainerText createEntryPopUpLeftContainerActiveText" : "createEntryPopUpLeftContainerText"}
                    >
                        RECEIPT
                    </p>
                    <p
                        onClick={() => setCreateEntryTab(3)}
                        className={(createEntryTab === 3) ? "createEntryPopUpLeftContainerText createEntryPopUpLeftContainerActiveText" : "createEntryPopUpLeftContainerText"}
                    >
                        CREDIT NOTE
                    </p>
                    <p
                        onClick={() => setCreateEntryTab(4)}
                        className={(createEntryTab === 4) ? "createEntryPopUpLeftContainerText createEntryPopUpLeftContainerActiveText" : "createEntryPopUpLeftContainerText"}
                    >
                        DEBIT NOTE
                    </p>
                </div>

                <div className="createEntryPopUpRightContainer">

                    <div className="rightContainerCustomerName">

                        <div className="customerBodyContainer">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="customerName"
                                placeholder="Enter Customer Name"
                                value=""
                                // onChange={(e) => handleEntryFilterInputChange(e)}
                            />
                            <label className="orderInputLabel">Customer Name</label>
                        </div>

                    </div>

                    <div className="middleContainerPopUp">
                        {renderActiveSection}
                    </div>

                    <div className="createEntryPopUpRightBottomContainer">
                        <button
                            onClick={() => setCreateEntryPopUp(false)}
                            className="createEntryCancelButton"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => setCreateEntryPopUp(false)}
                            className="createEntrySaveButton"
                        >
                            Save
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default CreateAccountEntry;