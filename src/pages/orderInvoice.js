// imports
import React, { useRef, useState, useEffect } from "react";
import {
    FadersHorizontal,
    CaretRight,
    DotsThreeVertical,
    Eye,
    X,
    Trash,
    FilePlus,
    Square
} from "phosphor-react";

// local imports
import Navbar from "../components/navbar";
import CustomHeader from "../components/customHeader";
import GenerateInvoicePopUp from "../components/generateInvoicePopUp";

// styles
import "../styles/orders.css";

const OrderInvoice = () => {
    const previewPopUpRef = useRef();
    const previewFilterPopUpRef = useRef();
    const previewAddGrnRef = useRef();

    const [selectInvoice, setSelectInvoice] = useState(false);
    const [showFilterEntry, setFilterEntry] = useState(false);
    const [showOrderPopUp, setOrderPopUp] = useState(false);
    const [showGrnSection, setShowGrnSection] = useState(false);
    const [showNewOrderInvoice, setShowNewOrderInvoice] = useState(false);
    const [invoiceTab, setInvoiceTab] = useState(0);
    const [showActionSection, setActionSection] = useState("");
    const [orderInvoiceFilter, setOrderInvoiceFilter] = useState({
        date: "",
        orderId: "",
        customerName: "",
        orderStatus: "",
    });
    const [newOrderInvoice, setNewOrderInvoice] = useState([
        {
            documentDate: "",
            orderId: "",
            invoiceNo: "",
            fabricProgram: "",
            price: "",
            fdcNo: "",
            status: "",
            invoiceType: "",
            invoiceValue: "",
            withGst: true,
        }
    ]);

    const addNewOrderInvoice = () => {
        const newOrder = {
            documentDate: "",
            orderId: "",
            invoiceNo: "",
            fabricProgram: "",
            price: "",
            fdcNo: "",
            status: "",
            invoiceType: "",
            invoiceValue: "",
        };

        const intermediateOrder = [...newOrderInvoice];
        intermediateOrder.push(newOrder);
        setNewOrderInvoice(intermediateOrder);
    }

    const removeNewOrderInvoice = (invoiceVal) => {
        const intermediateOrder = [...newOrderInvoice];
        intermediateOrder.splice(invoiceVal, 1);
        setNewOrderInvoice(intermediateOrder);
    }

    const handleOrderEntryFilterInput = (e) => {
        const intermediateInput = {...orderInvoiceFilter};
        intermediateInput[e.target.id] = e.target.value;
        setOrderInvoiceFilter(intermediateInput);
    }

    const OrderInvoiceFilter = () => {
        return (
            <div className="entryFilterContainer">
                <div className="entryFilterBodyContainer" ref={previewFilterPopUpRef}>
                    <div className="entryFilterHeaderSection">
                        <X
                            size={25}
                            weight="bold"
                            color="#FFA412"
                            onClick={() => setFilterEntry(false)}
                        />
                    </div>

                    <div className="filterMiddleSection">

                        <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "22%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="date"
                                id="date"
                                placeholder="Enter Date"
                                value={orderInvoiceFilter.date}
                                onChange={(e) => handleOrderEntryFilterInput(e)}
                            />
                            <label className="orderInputLabel">Date</label>
                        </div>

                        <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "22%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="orderId"
                                placeholder="Enter Order Id"
                                value={orderInvoiceFilter.orderId}
                                onChange={(e) => handleOrderEntryFilterInput(e)}
                            />
                            <label className="orderInputLabel">Order Id</label>
                        </div>
    
                        <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "22%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="customerName"
                                placeholder="Enter Customer Name"
                                value={orderInvoiceFilter.customerName}
                                onChange={(e) => handleOrderEntryFilterInput(e)}
                            />
                            <label className="orderInputLabel">Customer Name</label>
                        </div>

                        {
                            (invoiceTab === 0) &&
                                <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "22%"}}>
                                    <input
                                        className="loginInSignUpCustomInput"
                                        type="text"
                                        id="orderStatus"
                                        placeholder="Enter Order Status"
                                        value={orderInvoiceFilter.orderStatus}
                                        onChange={(e) => handleOrderEntryFilterInput(e)}
                                    />
                                    <label className="orderInputLabel">Order Status</label>
                                </div>
                        }
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
                (showOrderPopUp === true) &&
                (previewPopUpRef.current) &&
                (!previewPopUpRef.current.contains(e.target))
            ) {
                setOrderPopUp(false);
            }
        }

        const checkIfClickedOutsideFilter = (e) => {
            if (
                (showFilterEntry === true) &&
                (previewFilterPopUpRef.current) &&
                (!previewFilterPopUpRef.current.contains(e.target))
            ) {
                setFilterEntry(false);
            }
        }

        const checkIfClickedOutsideAddGrn = (e) => {
            if (
                (showGrnSection === true) &&
                (previewAddGrnRef.current)
            ) {
                setShowGrnSection(false);
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside);
        document.addEventListener("mousedown", checkIfClickedOutsideFilter);
        document.addEventListener("mousedown", checkIfClickedOutsideAddGrn);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
            document.removeEventListener("mousedown", checkIfClickedOutsideFilter);
            document.removeEventListener("mousedown", checkIfClickedOutsideAddGrn);
        }

    }, [showOrderPopUp, showFilterEntry, showGrnSection]);

    const renderPendingInvoiceTable = () => {
        return (
            <table className="orderEntryTable">
                <thead>
                    <tr className="orderEntryTableHeader">
                        <th className="orderEntryTableHeaderText">Date</th>
                        <th className="orderEntryTableHeaderText">Order Id</th>
                        <th className="orderEntryTableHeaderText">Customer Name</th>
                        <th className="orderEntryTableHeaderText">Order Detail</th>
                        <th className="orderEntryTableHeaderText">Order Status</th>
                        <th className="orderEntryTableHeaderText">Preview</th>
                        <th className="orderEntryTableHeaderText">Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="orderEntryTableRow">
                        <td className="orderEntryTableText">2/20/2022</td>
                        <td className="orderEntryTableText">ORD1235</td>
                        <td className="orderEntryTableText">Jersy</td>
                        <td className="orderEntryTableText">Jersy</td>
                        <td className="orderEntryTableText">Jersy</td>
                        <td className="orderEntryTableText" onClick={() => setOrderPopUp(true)}>
                            <Eye size={23} weight="bold" color="#F78D12" />
                        </td>
                        {
                            (selectInvoice === true) ?
                                <td className="orderEntryTableText">
                                    <div className="actionCheckboxGroup">
                                        <input type="checkbox" id="yarnReturn" checked={true} />
                                        <label for="yarnReturn"/>
                                    </div>
                                </td>
                            :
                                <td className="orderEntryTableText editActionIconContainer">
                                    <DotsThreeVertical size={23} weight="bold" color="#F78D12" onClick={() => setActionSection("0") } />

                                    {
                                        (showActionSection === "0") && 
                                        (
                                            <div
                                                className="editActionBodyContainer"
                                                onMouseLeave={() => setActionSection("")}
                                            >

                                                <div
                                                    className="editActionBodyItemContainer"
                                                    onClick={() => setShowNewOrderInvoice(true)}
                                                >
                                                    <p>Create</p>
                                                    <FilePlus size={20} weight="bold" color="#F78D12" />
                                                </div>

                                                <div className="editActionBodyItemContainer">
                                                    <p>Delete</p>
                                                    <Trash size={20} weight="bold" color="#FD0606" />
                                                </div>

                                                <div className="editActionBodyItemContainer" onClick={() => setSelectInvoice(true)}>
                                                    <p>Select</p>
                                                    <Square size={20} weight="bold" color="#F78D12" />
                                                </div>

                                            </div>
                                        )
                                    }
                                </td>  
                        }
                    </tr>   
                </tbody>
            </table>
        )
    }

    const renderCompletedInvoice = () => {
        return (
            <table className="orderEntryTable">
                <thead>
                    <tr className="orderEntryTableHeader">
                        <th className="orderEntryTableHeaderText">Date</th>
                        <th className="orderEntryTableHeaderText">Invoice No</th>
                        <th className="orderEntryTableHeaderText">Order Id</th>
                        <th className="orderEntryTableHeaderText">Customer Name</th>
                        <th className="orderEntryTableHeaderText">Order Details</th>
                        <th className="orderEntryTableHeaderText">Inv Value</th>
                        <th className="orderEntryTableHeaderText">Preview</th>
                        <th className="orderEntryTableHeaderText">Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="orderEntryTableRow">
                        <td className="orderEntryTableText">2/20/2022</td>
                        <td className="orderEntryTableText">ORD1235</td>
                        <td className="orderEntryTableText">Jersy</td>
                        <td className="orderEntryTableText">Jersy</td>
                        <td className="orderEntryTableText">Jersy</td>
                        <td className="orderEntryTableText">Jersy</td>
                        <td className="orderEntryTableText" onClick={() => setOrderPopUp(true)}>
                            <Eye size={23} weight="bold" color="#F78D12" />
                        </td>
                        <td className="orderEntryTableText editActionIconContainer">
                            <DotsThreeVertical size={23} weight="bold" color="#F78D12" onClick={() => setActionSection("0") } />

                            {
                                (showActionSection === "0") && 
                                (
                                    <div
                                        className="editActionBodyContainer"
                                        onMouseLeave={() => setActionSection("")}
                                    >

                                        <div className="editActionBodyItemContainer">
                                            <p>Create</p>
                                            <FilePlus size={20} weight="bold" color="#F78D12" />
                                        </div>

                                        <div className="editActionBodyItemContainer">
                                            <p>Delete</p>
                                            <Trash size={20} weight="bold" color="#FD0606" />
                                        </div>

                                        <div className="editActionBodyItemContainer" onClick={() => setSelectInvoice(true)}>
                                            <p>Select</p>
                                            <Square size={20} weight="bold" color="#F78D12" />
                                        </div>

                                    </div>
                                )
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    return (
        <div className="mainContainer">

            <Navbar />

            <div className="mainContentContainer">

                <CustomHeader />

                <div className="orderEntryHeader">

                    <div className="orderEntryHeaderLeftSection">
                        <p className="orderEntryHeaderSubText">Orders &nbsp; <CaretRight size={30} weight="bold" /> &nbsp; Invoices</p>
                        <div className="orderEntryHeaderIconContainer">
                            <FadersHorizontal
                                size={28}
                                weight="bold"
                                onClick={() => setFilterEntry(true)}
                            />
                        </div>
                    </div>

                    <div className="orderEntryRightSection">
                        {
                            (selectInvoice === true) ?
                                <button
                                    className="orderEntryHeaderButton"
                                >
                                    Generate
                                </button>
                            :
                                <button
                                    onClick={() => setShowNewOrderInvoice(true)}
                                    className="orderEntryHeaderButton"
                                >
                                    Create
                                </button>
                        }
                    </div>

                </div>

                <div className="orderEntryTabContainer">

                    <p
                        onClick={() => setInvoiceTab(0)}
                        className={(invoiceTab === 0) ? "orderEntryTabContainerText orderEntryTabContainerActiveText" : "orderEntryTabContainerText"}
                    >
                        Pending Invoice
                    </p>
                    <p
                        onClick={() => setInvoiceTab(1)}
                        className={(invoiceTab === 1) ? "orderEntryTabContainerText orderEntryTabContainerActiveText" : "orderEntryTabContainerText"}
                    >
                        Completed Invoice
                    </p>

                </div>

                <div className="orderEntryMiddleContainer">
                    {
                        (invoiceTab === 0) ? renderPendingInvoiceTable() : renderCompletedInvoice()
                    }
                </div>

                <div className="orderEntryFooterContainer">

                    <div className="orderEntryFooterPageSection">
                        <p className="orderEntryRightText">Page No</p>
                        <div className="orderEntryPageNumberContainer">
                            <p className="orderEntryActivePageNumber">1</p>
                            <p className="orderEntryInactivePageNumber">2</p>
                            <p className="orderEntryInactivePageNumber">3</p>
                            <p className="orderEntryInactivePageNumber">4</p>
                        </div>
                    </div>

                    <p className="orderEntryRightText">Showing 1 of 4</p>
                </div>

            </div>

            {(showFilterEntry === true) && OrderInvoiceFilter()}

            {
                (showNewOrderInvoice === true) &&
                    <GenerateInvoicePopUp
                        newOrderInvoice={newOrderInvoice}
                        addNewOrderInvoice={addNewOrderInvoice}
                        removeNewOrderInvoice={removeNewOrderInvoice}
                        setShowNewOrderInvoice={setShowNewOrderInvoice}
                    />
            }

        </div>
    )

}

export default OrderInvoice;