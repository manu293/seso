// imports
import React, { useEffect, useRef, useState } from "react";
import {ClipboardText} from "phosphor-react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {X} from "phosphor-react";
import pdfMake from "pdfmake/build/pdfmake";

// local imports
import CustomHeader from "../components/customHeader";
import Navbar from "../components/navbar";
import DoughnutChart from "../components/customDoughnut";
import {generateGstReportPdf} from "../helpers/pdf";

// styles
import "../styles/accounts.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Accounts = () => {
    const accountPopUpRef = useRef();
    const orderPdfRef = useRef();

    const [showAccountsPopUp, setAccountsPopUp] = React.useState(false);
    const [pdfData, setPdfData] = useState(null);
    const [filterSection, setFilterSection] = useState({
        fromDate: "",
        toDate: "",
    })

    const handleAccountPopUpInputSection = (e) => {
        const intermediateContent = {...filterSection};
        intermediateContent[e.target.id] = e.target.value;
        setFilterSection(intermediateContent);
    }

    useEffect(() => {

        const checkIfClickedOutsideAcountsPopUp = (e) => {
            if (
                (showAccountsPopUp === true) &&
                (accountPopUpRef.current) &&
                (!accountPopUpRef.current.contains(e.target))
            ) {
                setAccountsPopUp(false);
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

        document.addEventListener("mousedown", checkIfClickedOutsideAcountsPopUp);
        document.addEventListener("mousedown", checkIfClickedOutside3);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutsideAcountsPopUp);
            document.removeEventListener("mousedown", checkIfClickedOutside3);
        }

    }, [showAccountsPopUp, pdfData]);

    const showAccountPopUpSection = () => {
        return (
            <div className="entryFilterContainer">
                <div className="entryFilterBodyContainer" ref={accountPopUpRef}>

                    <div className="entryFilterHeaderSection" style={{justifyContent: "space-between"}}>
                        <div />
                        <p className="accountsGrtPopUpReportHeader">
                            Select Accounting Period
                        </p>
                        <X
                            size={25}
                            weight="bold"
                            color="#FFA412"
                            onClick={() => setAccountsPopUp(false)}
                        />
                    </div>

                    <div className="filterMiddleSection" style={{justifyContent: "space-around"}}>
                        <div className="filterTextFieldContainer">
                            <input
                                className="loginInSignUpCustomInput"
                                type="date"
                                id="fromDate"
                                placeholder="Enter Date"
                                value={filterSection.fromDate}
                                onChange={(e) => handleAccountPopUpInputSection(e)}
                            />
                            <label className="orderInputLabel">From Date</label>
                        </div>

                        <div className="filterTextFieldContainer">
                            <input
                                className="loginInSignUpCustomInput"
                                type="date"
                                id="toDate"
                                placeholder="Enter Date"
                                value={filterSection.toDate}
                                onChange={(e) => handleAccountPopUpInputSection(e)}
                            />
                            <label className="orderInputLabel">To Date</label>
                        </div>
                    </div>

                    <div className="entryFilterFooterSection">
                        <button
                            className="entryFilterFooterButton"
                            disabled={(filterSection.fromDate.length > 0) && (filterSection.toDate.length > 0) ? false : true}
                            onClick={() => generatePdf()}
                        >
                            Extract
                        </button>
                    </div>

                </div>
            </div>
        )
    }

    const generatePdf = () => {
        const docDefinition = generateGstReportPdf();
        const pdfDocGenerator  = pdfMake.createPdf(docDefinition);
        pdfDocGenerator.getDataUrl((dataUrl) => {
            setAccountsPopUp(false);
            setPdfData(dataUrl);
        });
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

    return (
        <div className="mainContainer">

            <Navbar />

            <div className="mainContentContainer">
                <CustomHeader />

                <div className="accountCardSection">
            
                    <div className="singleCardContainer">
                        <p className="singleCardHeader">Total Invoice</p>

                        <div className="sigleCardIconContainer">
                            <div className="dashboardOrderCircle">
                                <ClipboardText
                                    weight="bold"
                                    color="#fff"
                                    size={16}
                                    className="dashboardIcon"
                                />
                            </div>
                            <p className="dashboardItemSubText">500</p>
                        </div>
                    </div>

                    <div className="singleCardContainer">
                        <p className="singleCardHeader">Notes Receivable</p>

                        <div className="sigleCardIconContainer">
                            <div className="dashboardNewOrderCircle">
                                <ClipboardText
                                    weight="bold"
                                    color="#fff"
                                    size={16}
                                    className="dashboardIcon"
                                />
                            </div>
                            <p className="dashboardItemSubText">200</p>
                        </div>
                    </div>

                    <div className="singleCardContainer">
                        <p className="singleCardHeader">Notes Payable</p>

                        <div className="sigleCardIconContainer">
                            <div className="dashboardNoteOrderCircle">
                                <ClipboardText
                                    weight="bold"
                                    color="#fff"
                                    size={16}
                                    className="dashboardIcon"
                                />
                            </div>
                            <p className="dashboardItemSubText">150</p>
                        </div>
                    </div>
                
                </div>

                <div className="accountMiddleContainer">

                    <div className="accountSubMiddleSection">

                        <div className="accountSubMiddleLeftSection">
                            
                            <div className="accountValueReportContainer">
                    
                                <p className="valueReportText">Invoice Value Report</p>
                
                                <div className="valueReportHeaderRight">
                                    <select className="accountBodySelect valueReportMarginSelect">
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                    </select>

                                    <select className="accountBodySelect">
                                        <option value="2022">Order Report</option>
                                        <option value="2021">Fabric Report</option>
                                    </select>
                                </div>
                
                            </div>

                            <Bar
                                className="accountsChartContainer"
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            display: false
                                        }
                                    },
                                    scales: {
                                        x: {
                                        grid: {
                                            display: false
                                        }
                                        },
                                        y: {
                                        grid: {
                                            display: false
                                        }
                                        }
                                    }
                                }}
                                data={
                                        {
                                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec"],
                                        datasets: [
                                            {
                                                backgroundColor: "#F88F15",
                                                data: [250, 450, 450, 320, 450, 320, 450, 320, 450,320, 450, 320],
                                            }
                                        ],
                                    }
                                }
                            />

                        </div>

                        <div className="accountSubMiddleRightSection">
                            <button
                                className="accountGstReportButton"
                                onClick={() => setAccountsPopUp(true)}
                            >
                                Extract GST Report
                            </button>

                            <div className="accountBodyContainer">
                                <div className="accountBodyHeaderContainer">
                                    <select className="accountBodySelect">
                                        <option value="today">Today</option>
                                        <option value="yesterday">Yesterday</option>
                                    </select>
                                </div>

                                <DoughnutChart />

                                <p className="accountFooterTxt">Payment Received</p>

                            </div>
                            
                        </div>

                    </div>

                    <div className="accountRecentActivityContainer">

                        <p className="accountRecentAcitivityHeader">High Revenue Customers</p>

                        <div className="accountRecentActivityBodyContainer">

                            <div className="accountRecentSingleActivity">
                                <div className="accountRecentLeft">
                                    <p className="accountRecentLeftText">Sujeesh</p>
                                </div>
                                <div className="accountRecentRight">
                                    <p className="accountRecentRightText">1200</p>
                                </div>
                            </div>

                            <div className="accountRecentSingleActivity">
                                <div className="accountRecentLeft">
                                    <p className="accountRecentLeftText">Sujeesh</p>
                                </div>
                                <div className="accountRecentRight">
                                    <p className="accountRecentRightText">1200</p>
                                </div>
                            </div>

                            <div className="accountRecentSingleActivity">
                                <div className="accountRecentLeft">
                                    <p className="accountRecentLeftText">Sujeesh</p>
                                </div>
                                <div className="accountRecentRight">
                                    <p className="accountRecentRightText">1200</p>
                                </div>
                            </div>

                            <div className="accountRecentSingleActivity">
                                <div className="accountRecentLeft">
                                    <p className="accountRecentLeftText">Sujeesh</p>
                                </div>
                                <div className="accountRecentRight">
                                    <p className="accountRecentRightText">1200</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {
                (showAccountsPopUp === true) && showAccountPopUpSection()
            }

            {
                (pdfData !== null) && renderPdfData()
            }

        </div>
    )

}

export default Accounts;