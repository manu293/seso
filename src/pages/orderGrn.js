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
import NewOrder from "../components/newOrder";
import Navbar from "../components/navbar";
import CustomHeader from "../components/customHeader";
import SelectOrderPopUp from "../components/selectOrderPopUp";
import GoodReceivedNotes from "../components/goodReceivedNotes";

// styles
import "../styles/orders.css";

const OrderGrn = () => {
    const previewPopUpRef = useRef();
    const previewFilterPopUpRef = useRef();
    const previewAddGrnRef = useRef();

    const [showFilterEntry, setFilterEntry] = useState(false);
    const [showOrderPopUp, setOrderPopUp] = useState(false);
    const [showGrnSection, setShowGrnSection] = useState(false);
    const [showActionSection, setActionSection] = useState("");
    const [orderGrnFilter, setOrderGrnFilter] = useState({
        date: "",
        orderId: "",
        grnNo: "",
        customerName: "",
    });
    const [grnSection, setGrnSection] = useState([
        {
            counts: "",
            mill: "",
            typeOfYarn: "",
            varietyOfYarn: "",
            colour: "",
        }
    ]);
    const [bagWeight, setBagWeight] = useState([
        {
            bag: "",
            weight: "",
        }
    ]);

    const handleAddNewBagWeight = () => {
        const newBagWeight = {
            bag: "",
            weight: "",
        };

        const inerDia = [...bagWeight];
        inerDia.push(newBagWeight);
        setBagWeight(inerDia);
    }

    const handleRemoveBagWeight = (indexVal) => {
        const inerDia = [...bagWeight];
        inerDia.splice(indexVal, 1);
        setBagWeight(inerDia)
    }

    const handleOrderEntryFilterInput = (e) => {
        const intermediateInput = {...orderGrnFilter};
        intermediateInput[e.target.id] = e.target.value;
        setOrderGrnFilter(intermediateInput);
    }

    const addGrnSection = () => {
        const initalData = {
            counts: "",
            mill: "",
            typeOfYarn: "",
            varietyOfYarn: "",
            colour: "",
        }

        const intermediateData = [...grnSection];
        intermediateData.push(initalData);
        setGrnSection(intermediateData);
    }

    const removeGrnSection = (indexVal) => {
        const intermediateData = [...grnSection];
        intermediateData.splice(indexVal, 1);
        setGrnSection(intermediateData);
    }

    const OrderGrnFilter = () => {
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
            console.log("This is run", previewAddGrnRef.current)
            if (
                (showGrnSection === true) &&
                (previewAddGrnRef.current) &&
                (!previewAddGrnRef.current.contains(e.target))
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
                            onClick={() => setShowGrnSection(true)}
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

            
            {(showOrderPopUp === true) && <SelectOrderPopUp hideOrderPopUp={setOrderPopUp} previewPopUpRef={previewPopUpRef} />}

            {(showFilterEntry === true) && OrderGrnFilter()}

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
                        currentAddGrnRef={previewAddGrnRef}
                    />
                )
            }
            
        </div>
    )

}

export default OrderGrn;