// imports
import React, { useEffect, useRef, useState } from "react";
import {
    FadersHorizontal,
    CaretRight,
    DotsThreeVertical,
    Eye,
    X,
    Printer
} from "phosphor-react";
import pdfMake from "pdfmake/build/pdfmake";

// local imports
import Navbar from "../components/navbar";
import CustomHeader from "../components/customHeader";
import VendorEntryPopUpFilter from "../components/vendorEntryPopUp";
import CreateVendorOrder from "../components/createVendorOrder";
import {generateVendorOrderPdf} from "../helpers/pdf";

// styles
import "../styles/orders.css";

const SubContractVendorOrder = () => {
    const orderFilterRef = useRef();
    const orderEntryCreateRef = useRef();
    const orderPdfRef = useRef();

    const [showFilterEntry, setFilterEntry] = useState(false);
    const [showAddOrder, setAddOrder] = useState(false);
    const [showVendorPopUp, setVendorPopUp] = useState(false);
    const [pdfData, setPdfData] = useState(null);
    const [vendorEntryFilter, setOrderEntryFilter] = useState({
        date: "",
        vdcNo: "",
        orderId: "",
        customerName: "",
        vendorName: "",
    });

    const handleVendorFilterInput = (e) => {
        const intermediateInput = {...vendorEntryFilter};
        intermediateInput[e.target.id] = e.target.value;
        setOrderEntryFilter(intermediateInput);
    }

    useEffect(() => {
        return () => {
            setPdfData(null);
            setOrderEntryFilter({
                date: "",
                vdcNo: "",
                orderId: "",
                customerName: "",
                vendorName: "",
            });
            setVendorPopUp(false);
            setFilterEntry(false);
            setAddOrder(false);
        }
    },[])

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

        const checkIfClickedOutside2 = (e) => {
            if (
                (showAddOrder === true) &&
                (orderEntryCreateRef.current) &&
                (!orderEntryCreateRef.current.contains(e.target))
            ) {
                setAddOrder(false);
            }
        }

        const checkIfClickedOutside3 = (e) => {
            if (
                (pdfData !== null) &&
                (orderPdfRef.current) &&
                (!orderPdfRef.current.contains(e.target))
            ) {
                setPdfData(null);
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside);
        document.addEventListener("mousedown", checkIfClickedOutside2);
        document.addEventListener("mousedown", checkIfClickedOutside3);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
            document.removeEventListener("mousedown", checkIfClickedOutside2);
            document.removeEventListener("mousedown", checkIfClickedOutside3);
        }

    }, [showFilterEntry, showAddOrder, pdfData]);

    const VendorOrderEntryFilter = () => {
        return (
            <div className="entryFilterContainer">
                <div className="entryFilterBodyContainer" ref={orderFilterRef} style={{width: "950px"}}>
                    <div className="entryFilterHeaderSection">
                        <X
                            size={25}
                            weight="bold"
                            color="#FFA412"
                            onClick={() => setFilterEntry(false)}
                        />
                    </div>

                    <div className="filterMiddleSection">

                        <div className="filterTextFieldContainer" style={{width: "18%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="date"
                                id="fromDate"
                                placeholder="Enter Date"
                                value={vendorEntryFilter.date}
                                onChange={(e) => handleVendorFilterInput(e)}
                            />
                            <label className="orderInputLabel">Date</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "18%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="toDate"
                                placeholder="Enter Order Id"
                                value={vendorEntryFilter.orderId}
                                onChange={(e) => handleVendorFilterInput(e)}
                            />
                            <label className="orderInputLabel">Order Id</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "18%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="orderId"
                                placeholder="Enter VDC No"
                                value={vendorEntryFilter.vdcNo}
                                onChange={(e) => handleVendorFilterInput(e)}
                            />
                            <label className="orderInputLabel">VDC No</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "18%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="customerName"
                                placeholder="Enter Customer Name"
                                value={vendorEntryFilter.customerName}
                                onChange={(e) => handleVendorFilterInput(e)}
                            />
                            <label className="orderInputLabel">Customer Name</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "18%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="customerName"
                                placeholder="Enter Vendor Name"
                                value={vendorEntryFilter.vendorName}
                                onChange={(e) => handleVendorFilterInput(e)}
                            />
                            <label className="orderInputLabel">Vendor Name</label>
                        </div>
                    </div>

                    <div className="entryFilterFooterSection">
                        <button className="entryFilterFooterButton">Filter</button>
                    </div>
                </div>
            </div>
        )
    }

    const renderPdfData = () => {
        return (
            <div className="entryFilterContainer">
                <div className="entryFilterBodyContainer" ref={orderPdfRef} style={{height: "85vh"}}>
                    <div className="entryFilterHeaderSection">
                        <X
                            size={25}
                            weight="bold"
                            color="#FFA412"
                            onClick={() => setPdfData(null)}
                        />
                    </div>

                    <div className="filterMiddleSection" style={{margin: 0}}>
                        <iframe src={pdfData} style={{width: "100%"}} />
                    </div>
                </div>
            </div>
        );
    }

    const generatePdf = () => {
        const docDefinition = generateVendorOrderPdf();
        const pdfDocGenerator  = pdfMake.createPdf(docDefinition);
        pdfDocGenerator.getDataUrl((dataUrl) => {
            setPdfData(dataUrl);
        });
    }

    return (
        <div className="mainContainer">

            <Navbar />

            <div className="mainContentContainer" >

                <CustomHeader />

                <div className="orderEntryHeader">

                    <div className="orderEntryHeaderLeftSection" style={{width: "600px"}}>
                        <p className="orderEntryHeaderSubText">Subcontract &nbsp; <CaretRight size={30} weight="bold" /> &nbsp; Vendor Order</p>
                        <div className="orderEntryHeaderIconContainer">
                            <FadersHorizontal
                                size={28}
                                weight="bold"
                                onClick={() => setFilterEntry(true)}
                            />

                            <Printer
                                size={28}
                                weight="bold"
                                onClick={() => generatePdf()}
                            />
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
                                <th className="orderEntryTableHeaderText">Vendor Order DC</th>
                                <th className="orderEntryTableHeaderText">Customer Name</th>
                                <th className="orderEntryTableHeaderText">Vendors Name</th>
                                <th className="orderEntryTableHeaderText">Qty</th>
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

            {(showFilterEntry === true) && VendorOrderEntryFilter()}

            {
                (showAddOrder === true) && 
                (
                    <CreateVendorOrder
                        previewPopUpRef={orderEntryCreateRef}
                        hideOrderPopUp={setAddOrder}
                        setVendorPopUp={setVendorPopUp}
                    />
                )
            }

            {
                (showVendorPopUp === true) &&
                (
                    <VendorEntryPopUpFilter
                        setVendorPopUp={setVendorPopUp}
                    />
                )
            }

            {
                (pdfData !== null) && renderPdfData()
            }

        </div>
    )

}

export default SubContractVendorOrder;