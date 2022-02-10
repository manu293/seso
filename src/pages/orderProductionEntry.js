// imports
import React, { useRef, useState, useEffect } from "react";
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
import Navbar from "../components/navbar";
import CustomHeader from "../components/customHeader";
import SelectOrderPopUp from "../components/selectOrderPopUp";

// styles
import "../styles/orders.css";

const OrderProductionEntry = () => {
    const previewPopUpRef = useRef();
    const previewFilterPopUpRef = useRef();
    const previewAddGrnRef = useRef();

    const [showFilterEntry, setFilterEntry] = useState(false);
    const [showOrderPopUp, setOrderPopUp] = useState(false);
    const [showProductionReport, setShowProductionReport] = useState(false);
    const [showActionSection, setActionSection] = useState("");
    const [orderProductionFilter, setOrderProductionFilter] = useState({
        date: "",
        orderId: "",
        operator: "",
        operatorName: "",
    });

    const handleOrderProductionEntryInput = (e) => {
        const intermediateInput = {...orderProductionFilter};
        intermediateInput[e.target.id] = e.target.value;
        setOrderProductionFilter(intermediateInput);
    }

    const OrderProductionEntryFilter = () => {
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
                                value={orderProductionFilter.date}
                                onChange={(e) => handleOrderProductionEntryInput(e)}
                            />
                            <label className="orderInputLabel">Date</label>
                        </div>

                        <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "22%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="orderId"
                                placeholder="Enter Order Id"
                                value={orderProductionFilter.orderId}
                                onChange={(e) => handleOrderProductionEntryInput(e)}
                            />
                            <label className="orderInputLabel">Order Id</label>
                        </div>

                        <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "22%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="operator"
                                placeholder="Enter Operator"
                                value={orderProductionFilter.operator}
                                onChange={(e) => handleOrderProductionEntryInput(e)}
                            />
                            <label className="orderInputLabel">Operator</label>
                        </div>

                        <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "22%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="operatorName"
                                placeholder="Enter Operator Name"
                                value={orderProductionFilter.operatorName}
                                onChange={(e) => handleOrderProductionEntryInput(e)}
                            />
                            <label className="orderInputLabel">Operator Name</label>
                        </div>
                    </div>

                    <div className="entryFilterFooterSection">
                        <button className="entryFilterFooterButton">Filter</button>
                    </div>
                </div>
            </div>
        )
    }

    const productionEntryPopUp = () => {
        return (
            <div className="entryFilterContainer">
                <div className="entryFilterBodyContainer" ref={previewAddGrnRef}>

                    <div className="productionEntryPopUpMiddleSection">

                        <div className="productionPopUpFirstSection">
                            <div className="filterTextFieldContainer">
                                <input
                                    className="loginInSignUpCustomInput"
                                    type="date"
                                    id="operator"
                                    placeholder="Enter Document Date"
                                    value=""
                                />
                                <label className="orderInputLabel">Document Date</label>
                            </div>
                        </div>

                        <div className="productionPopUpSecondSection">
                            <div className="filterTextFieldContainer" style={{width: "35%"}}>
                                <input
                                    className="loginInSignUpCustomInput"
                                    type="text"
                                    id="operator"
                                    placeholder="Enter Machine Name"
                                    value=""
                                />
                                <label className="orderInputLabel">Machine Name</label>
                            </div>

                            <div className="filterTextFieldContainer" style={{width: "25%"}}>
                                <input
                                    className="loginInSignUpCustomInput"
                                    type="text"
                                    id="operator"
                                    placeholder="Enter Dia"
                                    value=""
                                />
                                <label className="orderInputLabel">Dia</label>
                            </div>

                            <div className="filterTextFieldContainer" style={{width: "35%"}}>
                                <input
                                    className="loginInSignUpCustomInput"
                                    type="text"
                                    id="operator"
                                    placeholder="Enter Order Id"
                                    value=""
                                />
                                <label className="orderInputLabel">Order Id</label>
                            </div>

                        </div>

                        <div className="productionPopUpFirstSection">
                            <div className="filterTextFieldContainer" style={{width: "75%"}}>
                                <input
                                    className="loginInSignUpCustomInput"
                                    type="text"
                                    id="operator"
                                    placeholder="Enter Fabric Program"
                                    value=""
                                />
                                <label className="orderInputLabel">Fabric Program</label>
                            </div>
                        </div>

                        <div className="productionPopUpSecondSection">
                            <div className="filterTextFieldContainer" style={{width: "22%"}}>
                                <input
                                    className="loginInSignUpCustomInput"
                                    type="text"
                                    id="operator"
                                    placeholder="Enter Shift"
                                    value=""
                                />
                                <label className="orderInputLabel">Shift</label>
                            </div>

                            <div className="filterTextFieldContainer" style={{width: "22%"}}>
                                <input
                                    className="loginInSignUpCustomInput"
                                    type="text"
                                    id="operator"
                                    placeholder="Enter Operator"
                                    value=""
                                />
                                <label className="orderInputLabel">Operator</label>
                            </div>

                            <div className="filterTextFieldContainer" style={{width: "20%"}}>
                                <input
                                    className="loginInSignUpCustomInput"
                                    type="text"
                                    id="operator"
                                    placeholder="Enter Rolls"
                                    value=""
                                />
                                <label className="orderInputLabel">Rolls</label>
                            </div>

                            <div className="filterTextFieldContainer">
                                <input
                                    className="loginInSignUpCustomInput"
                                    type="text"
                                    id="operator"
                                    placeholder="Enter Rolls"
                                    value=""
                                />
                                <label className="orderInputLabel">Weight</label>
                            </div>

                        </div>
                        
                    </div>

                    <div className="addNewOrderFooter">
                        <button
                            onClick={() => setShowProductionReport(false)}
                            className="addNewOrderFooterCancel addNewOrderFooterMargin"
                        >
                            Cancel
                        </button>
                        <button
                            className="addNewOrderFooterSubmit"
                        >
                            Submit
                        </button>
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
                (showProductionReport === true) &&
                (previewAddGrnRef.current) &&
                (!previewAddGrnRef.current.contains(e.target))
            ) {
                setShowProductionReport(false);
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

    }, [showOrderPopUp, showFilterEntry, showProductionReport]);

    return (
        <div className="mainContainer">

            <Navbar />

            <div className="mainContentContainer">

                <CustomHeader />

                <div className="orderEntryHeader">

                    <div className="orderEntryHeaderLeftSection" style={{width: "600px"}}>
                        <p className="orderEntryHeaderSubText">Orders &nbsp; <CaretRight size={30} weight="bold" /> &nbsp; Production Entry</p>
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
                            onClick={() => setShowProductionReport(true)}
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
                                <th className="orderEntryTableHeaderText">Fabric Details</th>
                                <th className="orderEntryTableHeaderText">Shift</th>
                                <th className="orderEntryTableHeaderText">Operator</th>
                                <th className="orderEntryTableHeaderText">Dia</th>
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
                                <td className="orderEntryTableText">Jersy</td>
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

            {(showFilterEntry === true) && OrderProductionEntryFilter()}
            {(showOrderPopUp === true) && <SelectOrderPopUp hideOrderPopUp={setOrderPopUp} previewPopUpRef={previewPopUpRef} />}
            {(showProductionReport === true) && productionEntryPopUp()}
            {/* {(showOrderPopUp === true) && <SelectOrderPopUp hideOrderPopUp={setOrderPopUp} previewPopUpRef={previewPopUpRef} />}

            {(showFilterEntry === true) && OrderProductionEntryFilter()}

            {
                (showGrnSection === true) &&
                (
                    <GoodReceivedNotes
                        grnSection={grnSection}
                        addGrnSection={addGrnSection}
                        removeGrnSection={removeGrnSection}
                        bagWeight={bagWeight}
                        handleAddNewBagWeight={handleAddNewBagWeight}
                        handleRemoveBagWeight={handleRemoveBagWeight}
                        setShowGrnSection={setShowGrnSection}
                        previewAddGrnRef={previewAddGrnRef}
                    />
                )
            } */}
            
        </div>
    )

}

export default OrderProductionEntry;