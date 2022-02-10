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

// local imports
import CustomHeader from "../components/customHeader";
import Navbar from "../components/navbar";
import DoughnutChart from "../components/customDoughnut";

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

    const [showAccountsPopUp, setAccountsPopUp] = React.useState(false);
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

        document.addEventListener("mousedown", checkIfClickedOutsideAcountsPopUp);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutsideAcountsPopUp)
        }

    }, [showAccountsPopUp])

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
                                id="fromDate"
                                placeholder="Enter Date"
                                value={filterSection.toDate}
                                onChange={(e) => handleAccountPopUpInputSection(e)}
                            />
                            <label className="orderInputLabel">To Date</label>
                        </div>
                    </div>

                    <div className="entryFilterFooterSection">
                        <button className="entryFilterFooterButton">Extract</button>
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

                    {/* <div className="accountRecentActivityContainer">

                        <p className="accountRecentAcitivityHeader">Recent Activity</p>

                        <div className="accountRecentActivityBodyContainer">

                            <div className="accountRecentSingleActivity">
                                <div className="accountRecentLeft">
                                    <p className="accountRecentLeftText">Invoicing</p>
                                </div>
                                <div className="accountRecentRight">
                                    <p className="accountRecentRightText">2 hours</p>
                                </div>
                            </div>

                            <div className="accountRecentSingleActivity">
                                <div className="accountRecentLeft">
                                    <p className="accountRecentLeftText">Create Order</p>
                                </div>
                                <div className="accountRecentRight">
                                    <p className="accountRecentRightText">2 hours</p>
                                </div>
                            </div>

                            <div className="accountRecentSingleActivity">
                                <div className="accountRecentLeft">
                                    <p className="accountRecentLeftText">Report</p>
                                </div>
                                <div className="accountRecentRight">
                                    <p className="accountRecentRightText">2 hours</p>
                                </div>
                            </div>

                            <div className="accountRecentSingleActivity">
                                <div className="accountRecentLeft">
                                    <p className="accountRecentLeftText">Invoicing</p>
                                </div>
                                <div className="accountRecentRight">
                                    <p className="accountRecentRightText">2 hours</p>
                                </div>
                            </div>

                            <div className="accountRecentSingleActivity">
                                <div className="accountRecentLeft">
                                    <p className="accountRecentLeftText">New Order</p>
                                </div>
                                <div className="accountRecentRight">
                                    <p className="accountRecentRightText">2 hours</p>
                                </div>
                            </div>

                            <div className="accountRecentSingleActivity">
                                <div className="accountRecentLeft">
                                    <p className="accountRecentLeftText">Report</p>
                                </div>
                                <div className="accountRecentRight">
                                    <p className="accountRecentRightText">2 hours</p>
                                </div>
                            </div>

                        </div>

                    </div> */}

                </div>

            </div>

            {
                (showAccountsPopUp === true) && showAccountPopUpSection()
            }

        </div>
    )

}

export default Accounts;