// imports
import React, {useState, useRef, useEffect} from "react";
import {
        Export,
        FadersHorizontal,
        Eye,
        X, 
        DotsThreeVertical,
        CaretRight,
        Trash,
        MinusCircle,

    } from "phosphor-react";

// local imports
import CustomHeader from "../components/customHeader";
import Navbar from "../components/navbar";
import SelectOrderPopUp from "../components/selectOrderPopUp";
import FabricDeliveryPopUp from "../components/fabricDeliveryPopUp";

// styles
import "../styles/orderReport.css";

const OrderFabricDelivery = () => {
    const orderFilterRef = useRef();
    const previewPopUpRef = useRef();
    const fabricDeliveryRef = useRef();

    const [orderFabricDeliveryFilter, setOrderFabricDeliveryFilter] = useState({
        date: "",
        orderId: "",
        dcNo: "",
        customerName: "",
    });
    const [showFilterEntry, setFilterEntry] = useState(false);
    const [showOrderPopUp, setOrderPopUp] = useState(false);
    const [showFabricDeliveryPopUp, setFabricDeliveryPopUp] = useState(false);
    const [showActionSection, setActionSection] = useState("");

    const handleFabricDeliveryFilterInput = (e) => {
        const intermediateInput = {...orderFabricDeliveryFilter};
        intermediateInput[e.target.id] = e.target.value;
        setOrderFabricDeliveryFilter(intermediateInput);
    }

    const FabricDeliveryFilter = () => {
        return (
            <div className="entryFilterContainer">
                <div className="entryFilterBodyContainer" ref={orderFilterRef}>
                    <div className="entryFilterHeaderSection">
                        <X
                            size={25}
                            weight="bold"
                            color="#FFA412"
                            onClick={() => setFilterEntry(false)}
                        />
                    </div>

                    <div className="filterMiddleSection">

                        <div className="accountReportTextField orderEntryInputMargin" style={{width: "22%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="date"
                                placeholder="Enter Date"
                                value={orderFabricDeliveryFilter.date}
                                onChange={(e) => handleFabricDeliveryFilterInput(e)}
                            />
                            <label className="orderInputLabel">Date</label>
                        </div>

                        <div className="accountReportTextField orderEntryInputMargin" style={{width: "22%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="orderId"
                                placeholder="Enter Order Id"
                                value={orderFabricDeliveryFilter.orderId}
                                onChange={(e) => handleFabricDeliveryFilterInput(e)}
                            />
                            <label className="orderInputLabel">Order Id</label>
                        </div>

                        <div className="accountReportTextField orderEntryInputMargin" style={{width: "22%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="dcNo"
                                placeholder="Enter DC No"
                                value={orderFabricDeliveryFilter.dcNo}
                                onChange={(e) => handleFabricDeliveryFilterInput(e)}
                            />
                            <label className="orderInputLabel">DC No</label>
                        </div>

                        <div className="accountReportTextField orderEntryInputMargin" style={{width: "22%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="customerName"
                                placeholder="Enter Customer Name"
                                value={orderFabricDeliveryFilter.customerName}
                                onChange={(e) => handleFabricDeliveryFilterInput(e)}
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
                (showFilterEntry === true) &&
                (orderFilterRef.current) &&
                (!orderFilterRef.current.contains(e.target))
            ) {
                setFilterEntry(false);
            }
        }

        const checkIfClikedOutside2 = (e) => {
            if (
                (showOrderPopUp === true) &&
                (previewPopUpRef.current) &&
                (!previewPopUpRef.current.contains(e.target))
            ) {
                setOrderPopUp(false);
            }
        }

        const checkIfClikedOutside3 = (e) => {
            if (
                (showFabricDeliveryPopUp === true) &&
                (fabricDeliveryRef.current) &&
                (!fabricDeliveryRef.current.contains(e.target))
            ) {
                setFabricDeliveryPopUp(false);
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside);
        document.addEventListener("mousedown", checkIfClikedOutside2);
        document.addEventListener("mousedown", checkIfClikedOutside3);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
            document.removeEventListener("mousedown", checkIfClikedOutside2);
            document.removeEventListener("mousedown", checkIfClikedOutside3);
        }

    }, [showFilterEntry, showOrderPopUp, showFabricDeliveryPopUp]);

    return (
        <div className="mainContainer">

            <Navbar />

            <div className="mainContentContainer">

                <CustomHeader />

                <div className="orderEntryHeader">

                    <div className="orderEntryHeaderLeftSection">
                        <p className="orderEntryHeaderSubText">Orders &nbsp; <CaretRight size={30} weight="bold" /> &nbsp; Fabric Delivery</p>
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
                            className="orderEntryHeaderButton"
                            onClick={() => setFabricDeliveryPopUp(true)}
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
                                <th className="orderEntryTableHeaderText">DC No</th>
                                <th className="orderEntryTableHeaderText">Order Id</th>
                                <th className="orderEntryTableHeaderText">Customer Name</th>
                                <th className="orderEntryTableHeaderText">Fabric Details</th>
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
                                <td className="orderEntryTableText" onClick={() => setOrderPopUp(true)}>
                                    <Eye size={23} weight="bold" color="#F78D12" />
                                </td>
                                <td className="orderEntryTableText editActionIconContainer">
                                    <DotsThreeVertical size={23} weight="bold" color="#F78D12" onClick={() => setActionSection("1") } />

                                    {
                                        (showActionSection === "1") && 
                                        (
                                            <div
                                                className="editActionBodyContainer"
                                                onMouseLeave={() => setActionSection("")}
                                            >

                                                <div className="editActionBodyItemContainer">
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

            {(showFilterEntry === true) && FabricDeliveryFilter()}

            {
                (showOrderPopUp === true) &&
                (
                    <SelectOrderPopUp
                        previewPopUpRef={previewPopUpRef}
                        hideOrderPopUp={setOrderPopUp}
                    />
                )
            }

            {
                (showFabricDeliveryPopUp === true) &&
                (
                    <FabricDeliveryPopUp
                        setFabricDeliveryPopUp={setFabricDeliveryPopUp}
                        fabricDeliveryRef={fabricDeliveryRef}
                    />
                )
            }

            

        </div>
    )

}

export default OrderFabricDelivery;