// imports
import React, {useState} from "react";
import { Export, Faders, Printer, X } from "phosphor-react";

// local imports
import CustomHeader from "../components/customHeader";
import Navbar from "../components/navbar";
import CircularProgressBar from "../components/circularProgressBar";

// styles
import "../styles/orderReport.css";

const OrderReport = () => {

    const [orderEntryFilter, setOrderEntryFilter] = useState({
        date: "",
        orderId: "",
        customerName: "",
    });
    const [showFilterEntry, setFilterEntry] = useState(false);

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

                        <div className="accountReportTextField orderEntryInputMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="date"
                                placeholder="Enter Date"
                                value={orderEntryFilter.date}
                                onChange={(e) => handleOrderEntryFilterInput(e)}
                            />
                            <label className="orderInputLabel">Date</label>
                        </div>

                        <div className="accountReportTextField orderEntryInputMargin">
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

                        <div className="accountReportTextField orderEntryInputMargin">
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

                <div className="orderReportHeaderContainer2">

                    <div className="orderReportHeaderItemContainer">

                        <div className="orderReportHeaderGraphContainer">
                            <CircularProgressBar color="yellow" number="1200" />
                        </div>

                       <div className="orderReportHeaderTextContainer">
                        <p className="orderReportHeaderGraphText">No Of Orders</p>
                       </div>
                    </div>

                    <div className="orderReportHeaderItemContainer">

                        <div className="orderReportHeaderGraphContainer">
                            <CircularProgressBar color="green" number="2100" />
                        </div>

                        <div className="orderReportHeaderTextContainer">
                            <p className="orderReportHeaderGraphText">No Of Orders Completed</p>
                        </div>

                    </div>

                    <div className="orderReportHeaderItemContainer">

                        <div className="orderReportHeaderGraphContainer">
                            <CircularProgressBar color="red" number="1000" />
                        </div>

                        <div className="orderReportHeaderTextContainer">
                            <p className="orderReportHeaderGraphText">No Of Orders Pending</p>
                        </div>

                    </div>

                </div>

                <div className="orderReportTableBodyContainer">

                    <div className="orderReportTableBodyContainerHeader">
                        <p className="orderReportTableBodyContainerHeaderText">
                            YARN AND FABRIC STATEMENT
                        </p>

                        <div className="orderReportTableBodyContainerHeaderIconContainer">
                            <Faders size={26} weight="bold" onClick={() => setFilterEntry(true)} />
                            <Printer size={26} weight="bold" />
                            <Export size={26} weight="bold" />
                        </div>
                    </div>

                    <table className="orderReportTableBodyContainerTable">
                        <thead>
                            <tr className="orderReportTableBodyContainerTableHeader">
                                <th className="orderReportTableBodyContainerTableHeaderText">Date</th>
                                <th className="orderReportTableBodyContainerTableHeaderText">Order Id</th>
                                <th className="orderReportTableBodyContainerTableHeaderText">Customer</th>
                                <th className="orderReportTableBodyContainerTableHeaderText"  colSpan="2">Yarn Received</th>
                                <th className="orderReportTableBodyContainerTableHeaderText"  colSpan="2">Fabric Delivery</th>
                                <th className="orderReportTableBodyContainerTableHeaderText" colSpan="2">Yarn Return</th>
                                <th className="orderReportTableBodyContainerTableHeaderText">Balance</th>
                            </tr>
                            <tr className="orderReportTableBodyContainerTableHeader">
                                <th className="orderReportTableBodyContainerTableHeaderText"></th>
                                <th className="orderReportTableBodyContainerTableHeaderText"></th>
                                <th className="orderReportTableBodyContainerTableHeaderText"></th>
                                <th className="orderReportTableBodyContainerTableHeaderText">Bag</th>
                                <th className="orderReportTableBodyContainerTableHeaderText">Weight</th>
                                <th className="orderReportTableBodyContainerTableHeaderText">Bag</th>
                                <th className="orderReportTableBodyContainerTableHeaderText">Weight</th>
                                <th className="orderReportTableBodyContainerTableHeaderText">Bag</th>
                                <th className="orderReportTableBodyContainerTableHeaderText">Weight</th>
                                <th className="orderReportTableBodyContainerTableHeaderText"></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="orderReportTableBodyContainerTableBodyRow">
                                <td className="orderReportTableBodyContainerTableBodyRowText">T1</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">T2</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">T3</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">T4</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">T5</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">T6</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">T7</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">T8</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">T9</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">T10</td>
                            </tr>

                            <tr className="orderReportTableBodyContainerTableBodyRow">
                                <td className="orderReportTableBodyContainerTableBodyRowText">A1</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">A2</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">A3</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">A4</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">A5</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">A6</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">A7</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">A8</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">A9</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">A10</td>
                            </tr>

                            <tr className="orderReportTableBodyContainerTableBodyRow">
                                <td className="orderReportTableBodyContainerTableBodyRowText">C1</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">C2</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">C3</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">C4</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">C5</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">C6</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">C7</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">C8</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">C9</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">C10</td>
                            </tr>

                            <tr className="orderReportTableBodyContainerTableBodyRow">
                                <td className="orderReportTableBodyContainerTableBodyRowText">D1</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">D2</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">D3</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">D4</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">D5</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">D6</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">D7</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">D8</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">D9</td>
                                <td className="orderReportTableBodyContainerTableBodyRowText">D10</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>

            {(showFilterEntry === true) && OrderEntryFilter()}

        </div>
    )

}

export default OrderReport;