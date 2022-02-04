// imports
import { CheckSquareOffset, ClipboardText } from "phosphor-react";
import React, { useState } from "react";
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

// local imports
import Navbar from "../components/navbar";
import DateFormatter from "../helpers/dateFormatter";

// styles
import "../styles/dashboard.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const [reportSection, setReport] = useState("orderReport");

    const orderList = {
        orderReport: "Order Report",
        vendorReport: "Vendor Report",
        productionReport: "Production Report"
    }
    const dateFormatter = new DateFormatter();

    const currentDate = dateFormatter.getCurrentDate();
    const currentDay = dateFormatter.getCurrentDay();
    const currentMonth = dateFormatter.getCurrentMonth();
    const currentYear = dateFormatter.getCurrentYear();

    return (
        <div className="mainContainer">
            <Navbar />

            <div className="mainContentContainer">
                
                <div className="dashbaordHeaderContainer">

                    <div className="dashboardDateContainer">
                        <p className="dashboardDayText">{currentDay}</p>
                        <p className="dashbaordDateText">{currentDate}</p>
                        <p className="dashboardDayText">{currentMonth} {currentYear}</p>
                    </div>

                    <div className="dashboardItemContainer">
                        <p className="dashboardItemHeader">Total Orders</p>

                        <div className="dashboardSubItemContainer">
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

                    <div className="dashboardItemContainer">
                        <p className="dashboardItemHeader">Running Orders</p>

                        <div className="dashboardSubItemContainer">
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

                    <div className="dashboardItemContainer">
                        <p className="dashboardItemHeader">Completed Orders</p>

                        <div className="dashboardSubItemContainer">
                            <div className="dashboardPendingOrderCircle">
                                <ClipboardText
                                    weight="bold"
                                    color="#fff"
                                    size={16}
                                    className="dashboardIcon"
                                />
                            </div>
                            <p className="dashboardItemSubText">100</p>
                        </div>
                    </div>

                    <div className="dashboardItemContainer">
                        <p className="dashboardItemHeader">Pending Orders</p>

                        <div className="dashboardSubItemContainer">
                            <div className="dashboardCompleteOrderCircle">
                                <CheckSquareOffset
                                    weight="bold"
                                    color="#fff"
                                    size={16}
                                    className="dashboardIcon"
                                />
                            </div>
                            <p className="dashboardItemSubText">50</p>
                        </div>
                    </div>

                </div>

                <div className="mainMiddleConainer">
                    
                    <div className="chartContainer">

                        <div className="orderReportContainer">
                            <div className="orderReportHeaderContainer">

                                <p className="orderReportHeaderText">
                                    {orderList[reportSection]}
                                </p>

                                <div className="orderReportRightSection">
                                    <select className="orderHeaderSelect orderSelectMargin">
                                        <option value="2022">2022</option>
                                    </select>

                                    <select
                                        className="orderHeaderSelect"
                                        value={reportSection}
                                        onChange={(e) => setReport(e.target.value)}
                                    >
                                        <option value="orderReport">Order Report</option>
                                        <option value="vendorReport">Vendor Report</option>
                                        <option value="productionReport">Production Report</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div className="orderChartContainer">
                            <Bar
                                className="chartCanvas"
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
                    </div>

                    <div className="middleContainerLastSection">

                        <div className="priorityContainer">
                                
                            <p className="lastSectionHeader">Order Status</p>

                            <div className="lastSectionBody">
                                <table className="lastSectionTable">
                                    <thead className="lastSectionTableContainer">
                                        <tr className="lastSectionTableContainer">
                                            <th className="lastSectionTableHeader">Order Id</th>
                                            <th className="lastSectionTableHeader">Customer Name</th>
                                            <th className="lastSectionTableHeader">Fabric Details</th>
                                            <th className="lastSectionTableHeader">Status</th>
                                        </tr>
                                    </thead>

                                    <tbody className="lastSectionTableContainer">

                                        <tr className="lastSectionTableContainer">
                                            <td className="lastSectionTableBody">
                                                <p className="lastSectionTableText">100</p>
                                            </td>
                                            <td className="lastSectionTableBody">
                                                <p className="lastSectionTableActiveText">Total order</p>
                                            </td>
                                            <td className="lastSectionTableBody">
                                                <p className="lastSectionTableActiveText">Total order</p>
                                            </td>
                                            <td className="lastSectionTableBody">
                                                <div className="lastSectionCompleted">
                                                    <p className="lastSectionButtonText">Completed</p>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="lastSectionTableContainer">
                                            <td className="lastSectionTableBody">
                                                <p className="lastSectionTableText">100</p>
                                            </td>
                                            <td className="lastSectionTableBody">
                                                <p className="lastSectionTableActiveText">Total order</p>
                                            </td>
                                            <td className="lastSectionTableBody">
                                                <p className="lastSectionTableActiveText">Total order</p>
                                            </td>
                                            <td className="lastSectionTableBody">
                                                <div className="lastSectionOnGoing">
                                                    <p className="lastSectionButtonOnGoing">On Going</p>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="lastSectionTableContainer">
                                            <td className="lastSectionTableBody">
                                                <p className="lastSectionTableText">100</p>
                                            </td>
                                            <td className="lastSectionTableBody">
                                                <p className="lastSectionTableActiveText">Total order</p>
                                            </td>
                                            <td className="lastSectionTableBody">
                                                <p className="lastSectionTableActiveText">Total order</p>
                                            </td>
                                            <td className="lastSectionTableBody">
                                                <div className="lastSectionCompleted">
                                                    <p className="lastSectionButtonText">Completed</p>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="lastSectionTableContainer">
                                            <td className="lastSectionTableBody">
                                                <p className="lastSectionTableText">100</p>
                                            </td>
                                            <td className="lastSectionTableBody">
                                                <p className="lastSectionTableActiveText">Total order</p>
                                            </td>
                                            <td className="lastSectionTableBody">
                                                <p className="lastSectionTableActiveText">Total order</p>
                                            </td>
                                            <td className="lastSectionTableBody">
                                                <div className="lastSectionCompleted">
                                                    <p className="lastSectionButtonText">Completed</p>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>

                        <div className="recentActivityContainer">
                                
                            <p className="lastSectionHeader">Recent Actitiy</p>

                            <div className="lastSectionBody">
                                <div className="lastSectionBodyItems">
                                    <p className="lastSectionBodyItemsHeader">Invoicing</p>
                                    <p className="lastSectionBodyItemsSubHeader"> 1 hours ago</p>
                                </div>
                                <div className="lastSectionBodyItems">
                                    <p className="lastSectionBodyItemsHeader">Report</p>
                                    <p className="lastSectionBodyItemsSubHeader"> 2 hours ago</p>
                                </div>
                                <div className="lastSectionBodyItems">
                                    <p className="lastSectionBodyItemsHeader">Order</p>
                                    <p className="lastSectionBodyItemsSubHeader"> 1 hours ago</p>
                                </div>
                                <div className="lastSectionBodyItems">
                                    <p className="lastSectionBodyItemsHeader">Invoicing</p>
                                    <p className="lastSectionBodyItemsSubHeader"> 4 hours ago</p>
                                </div>
                                <div className="lastSectionBodyItems">
                                    <p className="lastSectionBodyItemsHeader">Report</p>
                                    <p className="lastSectionBodyItemsSubHeader"> 7 hours ago</p>
                                </div>
                                <div className="lastSectionBodyItems">
                                    <p className="lastSectionBodyItemsHeader">New Order</p>
                                    <p className="lastSectionBodyItemsSubHeader"> 12 hours ago</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )

}

export default Dashboard;