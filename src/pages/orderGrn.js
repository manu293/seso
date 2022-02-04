// imports
import React, { useState } from "react";
import {
    Export,
    FadersHorizontal,
    CaretRight,
    DotsThreeVertical,
    Eye,
    X,
    Trash,
    MinusCircle
} from "phosphor-react";

// local imports
import NewOrder from "../components/newOrder";
import Navbar from "../components/navbar";
import CustomHeader from "../components/customHeader";
import SelectOrderPopUp from "../components/selectOrderPopUp";
import GoodReceivedNotes from "../components/goodReceivedNotes";

// styles
import "../styles/orders.css";

const OrderGrn = () => {

    const [showFilterEntry, setFilterEntry] = useState(false);
    const [showAddOrder, setAddOrder] = useState(false);
    const [showOrderPopUp, setOrderPopUp] = useState(false);
    const [showActionSection, setActionSection] = useState("");
    const [orderGrnFilter, setOrderGrnFilter] = useState({
        date: "",
        orderId: "",
        grnNo: "",
        customerName: "",
    });

    const handleOrderEntryFilterInput = (e) => {
        const intermediateInput = {...orderGrnFilter};
        intermediateInput[e.target.id] = e.target.value;
        setOrderGrnFilter(intermediateInput);
    }

    const OrderGrnFilter = () => {
        return (
            <div className="entryFilterContainer">
                <div className="entryFilterBodyContainer">
                    <div className="entryFilterHeaderSection">
                        <X
                            size={25}
                            weight="bold"
                            color="#FFA412"
                            onClick={() => setFilterEntry(false)}
                        />
                    </div>

                    <div className="filterMiddleSection">

                        <div className="filterTextFieldContainer orderEntryInputMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="date"
                                placeholder="Enter Date"
                                value={orderGrnFilter.date}
                                onChange={(e) => handleOrderEntryFilterInput(e)}
                            />
                            <label className="orderInputLabel">Date</label>
                        </div>

                        <div className="filterTextFieldContainer orderEntryInputMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="orderId"
                                placeholder="Enter Order Id"
                                value={orderGrnFilter.orderId}
                                onChange={(e) => handleOrderEntryFilterInput(e)}
                            />
                            <label className="orderInputLabel">Order Id</label>
                        </div>

                        <div className="filterTextFieldContainer orderEntryInputMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="grnNo"
                                placeholder="Enter GRN No"
                                value={orderGrnFilter.grnNo}
                                onChange={(e) => handleOrderEntryFilterInput(e)}
                            />
                            <label className="orderInputLabel">GRN No</label>
                        </div>

                        <div className="filterTextFieldContainer orderEntryInputMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="customerName"
                                placeholder="Enter Customer Name"
                                value={orderGrnFilter.customerName}
                                onChange={(e) => handleOrderEntryFilterInput(e)}
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

    return (
        <div className="mainContainer">

            <Navbar />

            <div className="mainContentContainer">

                <CustomHeader />

                <div className="orderEntryHeader">

                    <div className="orderEntryHeaderLeftSection">
                        <p className="orderEntryHeaderSubText">Orders &nbsp; <CaretRight size={30} weight="bold" /> &nbsp; GRN</p>
                        <div className="orderEntryHeaderIconContainer">
                            <FadersHorizontal
                                size={28}
                                weight="bold"
                                onClick={() => setFilterEntry(true)}
                            />
                            <Export size={28} weight="bold" />
                        </div>
                    </div>

                    <div className="orderEntryRightSection">
                        <button
                            onClick={() => setAddOrder(true)}
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
                                <th className="orderEntryTableHeaderText">GRN No</th>
                                <th className="orderEntryTableHeaderText">Order Id</th>
                                <th className="orderEntryTableHeaderText">Customer Name</th>
                                <th className="orderEntryTableHeaderText">Yarn Details</th>
                                <th className="orderEntryTableHeaderText">Quantity</th>
                                <th className="orderEntryTableHeaderText">Preview</th>
                                <th className="orderEntryTableHeaderText">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="orderEntryTableRow">
                                <td className="orderEntryTableText">2/20/2022</td>
                                <td className="orderEntryTableText">ORD1235</td>
                                <td className="orderEntryTableText">New Appeal</td>
                                <td className="orderEntryTableText">Jersy</td>
                                <td className="orderEntryTableText">Jersy</td>
                                <td className="orderEntryTableText">Jersy</td>
                                <td className="orderEntryTableText"><Eye size={23} weight="bold" color="#F78D12" /></td>
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
                                                    onClick={() => setOrderPopUp(true)}
                                                >
                                                    <p>Edit</p>
                                                    <MinusCircle size={20} weight="bold" color="#F78D12" />
                                                </div>

                                                <div className="editActionBodyItemContainer">
                                                    <p>Delete</p>
                                                    <Trash size={20} weight="bold" color="#FD0606" />
                                                </div>

                                            </div>
                                        )
                                    }
                                </td>
                            </tr>

                            <tr className="orderEntryTableRow">
                                <td className="orderEntryTableText">2/20/2022</td>
                                <td className="orderEntryTableText">222</td>
                                <td className="orderEntryTableText">New Appeal22</td>
                                <td className="orderEntryTableText">Jersy123</td>
                                <td className="orderEntryTableText">Jersy123</td>
                                <td className="orderEntryTableText">Jersy123</td>
                                <td className="orderEntryTableText"><Eye size={23} weight="bold" color="#F78D12" /></td>
                                <td className="orderEntryTableText editActionIconContainer">
                                    <DotsThreeVertical size={23} weight="bold" color="#F78D12" onClick={() => setActionSection("1") } />

                                    {
                                        (showActionSection === "1") && 
                                        (
                                            <div
                                                className="editActionBodyContainer"
                                                onMouseLeave={() => setActionSection("")}
                                            >

                                                <div
                                                    className="editActionBodyItemContainer"
                                                    onClick={() => setOrderPopUp(true)}
                                                >
                                                    <p>Edit</p>
                                                    <MinusCircle size={20} weight="bold" color="#F78D12" />
                                                </div>

                                                <div className="editActionBodyItemContainer">
                                                    <p>Delete</p>
                                                    <Trash size={20} weight="bold" color="#FD0606" />
                                                </div>

                                            </div>
                                        )
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
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

            
            {(showOrderPopUp === true) && <SelectOrderPopUp hideOrderPopUp={setOrderPopUp} />}

            {(showFilterEntry === true) && OrderGrnFilter()}

            {(showAddOrder === true) && <NewOrder setAddOrder={setAddOrder} />}
            
            {/* <GoodReceivedNotes /> */}

        </div>
    )

}

export default OrderGrn;