// imports
import React, { useState, useRef, useEffect } from "react";
import {
    CaretRight,
    FadersHorizontal,
    Eye,
    Trash,
    MinusCircle,
    X,

} from "phosphor-react";

// local imports
import Navbar from "../components/navbar";
import CustomHeader from "../components/customHeader";
import CreateAccountEntry from "../components/createAccountEntry";

// styles
import "../styles/orders.css";
import "../styles/admin.css";

const AccountEntry = () => {
    const accountEntryPopUpRef = useRef();
    const createEntryRef = useRef();
    const [showCreateEntryPopUp, setCreateEntryPopUp] = useState(false);
    const [accountEntryFilter, setAccountEntryFilter] = useState(false);
    const [entryFilterInput, setEntryFilterInput] = useState({
        date: "",
        entryType: "",
        entryNo: "",
        customerName: "",
    });

    const handleEntryFilterInputChange = (e) => {
        const intermediateEntryFilterInput = {...entryFilterInput};
        intermediateEntryFilterInput[e.target.id] = e.target.value;
        setEntryFilterInput(intermediateEntryFilterInput);
    }

    const handleAccountEntryFilter = () => {
        return (
            <div className="entryFilterContainer">
                <div className="entryFilterBodyContainer" ref={accountEntryPopUpRef}>
                    <div className="entryFilterHeaderSection">
                        <X
                            size={25}
                            weight="bold"
                            color="#FFA412"
                            onClick={() => setAccountEntryFilter(false)}
                        />
                    </div>

                    <div className="filterMiddleSection">

                        <div className="accountReportTextField customerLedgerHeaderMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="date"
                                placeholder="Enter Date"
                                value={entryFilterInput.date}
                                onChange={(e) => handleEntryFilterInputChange(e)}
                            />
                            <label className="orderInputLabel">Date</label>
                        </div>

                        <div className="accountReportTextField customerLedgerHeaderMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="entryType"
                                placeholder="Enter Entry Type"
                                value={entryFilterInput.entryType}
                                onChange={(e) => handleEntryFilterInputChange(e)}
                            />
                            <label className="orderInputLabel">Entry Type</label>
                        </div>

                        <div className="accountReportTextField customerLedgerHeaderMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="entryNo"
                                placeholder="Enter Entry No"
                                value={entryFilterInput.entryNo}
                                onChange={(e) => handleEntryFilterInputChange(e)}
                            />
                            <label className="orderInputLabel">Entry No</label>
                        </div>

                        <div className="accountReportTextField customerLedgerHeaderMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="customerName"
                                placeholder="Enter Customer Name"
                                value={entryFilterInput.customerName}
                                onChange={(e) => handleEntryFilterInputChange(e)}
                            />
                            <label className="orderInputLabel">Customer Name</label>
                        </div>
                    </div>

                    <div className="entryFilterFooterSection">
                        <button className="entryFilterFooterButton">Filter</button>
                    </div>
                </div>
            </div>
        )
    }

    useEffect(() => {

        const checkIfClickedOutside = (e) => {
            if (
                (accountEntryFilter === true) &&
                (accountEntryPopUpRef.current) &&
                (!accountEntryPopUpRef.current.contains(e.target))
            ) {
                setAccountEntryFilter(false);
            }
        }

        const checkIfAddClickedOutside = (e) => {
            if (
                (showCreateEntryPopUp === true) &&
                (createEntryRef.current) &&
                (!createEntryRef.current.contains(e.target))
            ) {
                setCreateEntryPopUp(false);
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside);
        document.addEventListener("mousedown", checkIfAddClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
            document.removeEventListener("mousedown", checkIfAddClickedOutside)
        }

    }, [accountEntryFilter, showCreateEntryPopUp]);

    return (
        <div className="mainContainer">

            <Navbar />

            <div className="mainContentContainer">

                <CustomHeader />

                <div className="orderEntryHeader">

                    <div className="orderEntryHeaderLeftSection">
                        <p className="orderEntryHeaderSubText">ACCOUNTS ENTRY &nbsp; <CaretRight size={30} weight="bold" /> &nbsp; RECEIPT</p>
                        <div className="orderEntryHeaderIconContainer">
                            <FadersHorizontal
                                size={28}
                                weight="bold"
                                onClick={() => setAccountEntryFilter(true)}
                            />
                        </div>
                    </div>

                    <div className="orderEntryRightSection">
                        <button
                            onClick={() => setCreateEntryPopUp(true)}
                            className="orderEntryHeaderButton"
                        >
                            Create
                        </button>
                    </div>

                </div>

                <div className="orderEntryMiddleContainer">
                    <table className="orderEntryTable">
                        <thead>
                            <tr className="orderEntryTableHeader">
                                <th className="orderEntryTableHeaderText">Date</th>
                                <th className="orderEntryTableHeaderText">Receipt Entry No</th>
                                <th className="orderEntryTableHeaderText">Customer Name</th>
                                <th className="orderEntryTableHeaderText">Total Amount</th>
                                <th className="orderEntryTableHeaderText">Receipt Status</th>
                                <th className="orderEntryTableHeaderText">Preview</th>
                                <th className="orderEntryTableHeaderText">Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr className="adminUserTableBodyRow">
                                <th className="adminUserTableBodyCustomerName"></th>
                                <th className="adminUserTableBodyText"></th>
                                <th className="adminUserTableBodyText"></th>
                                <th className="adminUserTableBodyText"></th>
                                <th className="adminUserTableBodyIcon"><Eye size={22} weight="bold" color="#F78D12" /></th>
                                <th className="adminUserTableBodyIcon"><MinusCircle size={22} weight="bold" color="#F78D12" /></th>
                                <th className="adminUserTableBodyIcon"><Trash size={22} weight="bold" color="#FD0606" /></th>
                            </tr>

                            <tr className="adminUserTableBodyRow">
                                <th className="adminUserTableBodyCustomerName"></th>
                                <th className="adminUserTableBodyText"></th>
                                <th className="adminUserTableBodyText"></th>
                                <th className="adminUserTableBodyText"></th>
                                <th className="adminUserTableBodyIcon"><Eye size={22} weight="bold" color="#F78D12" /></th>
                                <th className="adminUserTableBodyIcon"><MinusCircle size={22} weight="bold" color="#F78D12" /></th>
                                <th className="adminUserTableBodyIcon"><Trash size={22} weight="bold" color="#FD0606" /></th>
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
                (accountEntryFilter === true) && handleAccountEntryFilter()
            }

            {
                (showCreateEntryPopUp === true) && <CreateAccountEntry setCreateEntryPopUp={setCreateEntryPopUp} createEntryRef={createEntryRef} />
            }

        </div>
    )

}

export default AccountEntry;