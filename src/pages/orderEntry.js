// imports
import React, { useState } from "react";
import {
    Export,
    FadersHorizontal,
    CaretRight,
    DotsThreeVertical,
    Eye,
    X
} from "phosphor-react";

// local imports
import NewOrder from "../components/newOrder";
import Navbar from "../components/navbar";
import CustomHeader from "../components/customHeader";

// styles
import "../styles/orders.css";

const OrderEntry = () => {

    const [showFilterEntry, setFilterEntry] = useState(false);
    const [showAddOrder, setAddOrder] = useState(false);
    const [orderEntryFilter, setOrderEntryFilter] = useState({
        fromDate: "",
        toDate: "",
        orderId: "",
        customerName: "",
    });

    const handleOrderEntryFilterInput = (e) => {
        const intermediateInput = {...orderEntryFilter};
        intermediateInput[e.target.id] = e.target.value;
        setOrderEntryFilter(intermediateInput);
    }

    const OrderEntryFilter = () => {
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

                        <div className="filterTextFieldContainer">
                            <input
                                className="loginInSignUpCustomInput"
                                type="date"
                                id="fromDate"
                                placeholder="Enter Date"
                                value={orderEntryFilter.fromDate}
                                onChange={(e) => handleOrderEntryFilterInput(e)}
                            />
                            <label className="orderInputLabel">From Date</label>
                        </div>

                        <div className="filterTextFieldContainer">
                            <input
                                className="loginInSignUpCustomInput"
                                type="date"
                                id="toDate"
                                placeholder="Enter Date"
                                value={orderEntryFilter.toDate}
                                onChange={(e) => handleOrderEntryFilterInput(e)}
                            />
                            <label className="orderInputLabel">To Date</label>
                        </div>

                        <div className="filterTextFieldContainer">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="orderId"
                                placeholder="Enter Order Id"
                                value={orderEntryFilter.orderId}
                                onChange={(e) => handleOrderEntryFilterInput(e)}
                            />
                            <label className="orderInputLabel">Order Id</label>
                        </div>

                        <div className="filterTextFieldContainer">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="customerName"
                                placeholder="Enter Customer Name"
                                value={orderEntryFilter.customerName}
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
                        <p className="orderEntryHeaderSubText">Orders &nbsp; <CaretRight size={30} weight="bold" /> &nbsp; Order Entry</p>
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
                                <th className="orderEntryTableHeaderText">Order Id</th>
                                <th className="orderEntryTableHeaderText">Customer Name</th>
                                <th className="orderEntryTableHeaderText">Order Description</th>
                                <th className="orderEntryTableHeaderText">Order Status</th>
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
                                <td className="orderEntryTableText">
                                    <div className="orderStatusContainer">
                                        <div className="circleYellow" />
                                        <p className="orderStatusText"> 1000 / 200</p>&nbsp;&nbsp;<p className="orderStatusSubText">in kg</p>
                                    </div>
                                </td>
                                <td className="orderEntryTableText"><Eye size={23} weight="bold" color="#F78D12" /></td>
                                <td className="orderEntryTableText"><DotsThreeVertical size={23} weight="bold" color="#F78D12" /></td>
                            </tr>

                            <tr className="orderEntryTableRow">
                                <td className="orderEntryTableText">2/20/2022</td>
                                <td className="orderEntryTableText">ORD1235</td>
                                <td className="orderEntryTableText">New Appeal</td>
                                <td className="orderEntryTableText">Jersy</td>
                                <td className="orderEntryTableText">
                                    <div className="orderStatusContainer">
                                        <div className="circleGreen" />
                                        <p className="orderStatusText"> 1000 / 200</p>&nbsp;&nbsp;<p className="orderStatusSubText">in kg</p>
                                    </div>
                                </td>
                                <td className="orderEntryTableText"><Eye size={23} weight="bold" color="#F78D12" /></td>
                                <td className="orderEntryTableText"><DotsThreeVertical size={23} weight="bold" color="#F78D12" /></td>
                            </tr>

                            <tr className="orderEntryTableRow">
                                <td className="orderEntryTableText">2/20/2022</td>
                                <td className="orderEntryTableText">ORD1235</td>
                                <td className="orderEntryTableText">New Appeal</td>
                                <td className="orderEntryTableText">Jersy</td>
                                <td className="orderEntryTableText">
                                    <div className="orderStatusContainer">
                                        <div className="circleRed" />
                                        <p className="orderStatusText"> 1000 / 200</p>&nbsp;&nbsp;<p className="orderStatusSubText">in kg</p>
                                    </div>
                                </td>
                                <td className="orderEntryTableText"><Eye size={23} weight="bold" color="#F78D12" /></td>
                                <td className="orderEntryTableText"><DotsThreeVertical size={23} weight="bold" color="#F78D12" /></td>
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

            {(showFilterEntry === true) && OrderEntryFilter()}

            {(showAddOrder === true) && <NewOrder setAddOrder={setAddOrder} />}

        </div>
    )

}

export default OrderEntry;