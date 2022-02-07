// imports
import React, {useState, useRef, useEffect} from "react";
import { Export, Faders, Printer, X, Star } from "phosphor-react";

// local imports
import CustomHeader from "../components/customHeader";
import Navbar from "../components/navbar";
import CircularProgressBar from "../components/circularProgressBar";
import DateFormatter from "../helpers/dateFormatter";

// styles
import "../styles/orderReport.css";

const ProductionReport = () => {
    const dateFormatter = new DateFormatter();
    const orderFilterRef = useRef();

    const currentDate = dateFormatter.getCurrentDate();
    const currentDay = dateFormatter.getCurrentFullDay();
    const currentMonth = dateFormatter.getCurrentMonth();
    const currentYear = dateFormatter.getCurrentYear();

    const [orderEntryFilter, setOrderEntryFilter] = useState({
        date: "",
        orderId: "",
        operator: "",
        operatorName: "",
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
                                id="operator"
                                placeholder="Enter Operator"
                                value={orderEntryFilter.operator}
                                onChange={(e) => handleOrderEntryFilterInput(e)}
                            />
                            <label className="orderInputLabel">Operator</label>
                        </div>

                        <div className="accountReportTextField orderEntryInputMargin">
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="operatorName"
                                placeholder="Enter Operator Name"
                                value={orderEntryFilter.operatorName}
                                onChange={(e) => handleOrderEntryFilterInput(e)}
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

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }

    }, [showFilterEntry]);

    const weekEndDate = new Date();
    const weekStartDate = new Date();
    weekStartDate.setDate(weekEndDate.getDate() - 7);

    return (
        <div className="mainContainer">

            <Navbar />

            <div className="mainContentContainer">

                <CustomHeader />

                <div className="productionReportBodyContainer">

                    <div className="productionGraphContainer">

                        <div className="productionGraphItem">
                            <div className="orderReportHeaderGraphContainer" style={{width: "45%"}}>
                                <CircularProgressBar color="green" number="2100" />
                            </div>

                            <div className="orderReportHeaderTextContainer" style={{width: "55%"}}>
                                <p className="productionReportGraphText">
                                    {`${currentMonth} ${currentDate}, ${currentYear}`}
                                </p>
                                <p className="productionReportGraphSubText">{currentDay}</p>
                            </div>
                        </div>

                        <div className="productionGraphItem">
                            <div className="orderReportHeaderGraphContainer" style={{width: "45%"}}>
                                <CircularProgressBar color="green" number="2100" />
                            </div>

                            <div className="orderReportHeaderTextContainer" style={{width: "55%"}}>
                                <p className="productionReportGraphText">Weekly Production Report</p>
                                <p className="productionReportGraphSubText">
                                    {`${dateFormatter.getFormattedMonth(weekStartDate)} ${dateFormatter.getFormattedDate(weekStartDate)} - ${dateFormatter.getFormattedMonth(weekEndDate)} ${dateFormatter.getFormattedDate(weekEndDate)}`}
                                </p>
                                <div className="productionReportGraphSelectContainer">
                                    <select className="productionReportGraphSelect" value="week1">
                                        <option value="week1">Week 1</option>
                                        <option value="week2">Week 2</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="productionStartSection">

                        <div className="productionStartItemContainer">
                            
                            <p className="productionStartItemHeader">
                                <Star size={20} weight="fill" color="#FFA412" />&nbsp;Star Performer
                            </p>

                            <div className="productionStartBodyContainer">
                                <div className="productionStartItem">
                                    <p className="productionStartItemLeft">User 1</p>
                                    <p className="productionStartItemRight">500 kg</p>
                                </div>
                                <div className="productionStartItem">
                                    <p className="productionStartItemLeft">User 1</p>
                                    <p className="productionStartItemRight">500 kg</p>
                                </div>
                                <div className="productionStartItem">
                                    <p className="productionStartItemLeft">User 1</p>
                                    <p className="productionStartItemRight">500 kg</p>
                                </div>
                            </div>

                        </div>

                        <div className="productionStartItemContainer">
                            
                            <p className="productionStartItemHeader">
                                <Star size={20} weight="fill" color="#FFA412" />&nbsp;Star Fabric
                            </p>

                            <div className="productionStartBodyContainer">
                                <div className="productionStartItem">
                                    <p className="productionStartItemLeft">User 1</p>
                                    <p className="productionStartItemRight">500 kg</p>
                                </div>
                                <div className="productionStartItem">
                                    <p className="productionStartItemLeft">User 1</p>
                                    <p className="productionStartItemRight">500 kg</p>
                                </div>
                                <div className="productionStartItem">
                                    <p className="productionStartItemLeft">User 1</p>
                                    <p className="productionStartItemRight">500 kg</p>
                                </div>
                            </div>

                        </div>

                        <div className="productionStartItemContainer">
                            
                            <p className="productionStartItemHeader">
                                <Star size={20} weight="fill" color="#FFA412" />&nbsp;Star Count's
                            </p>

                            <div className="productionStartBodyContainer">
                                <div className="productionStartItem">
                                    <p className="productionStartItemLeft">User 1</p>
                                    <p className="productionStartItemRight">500 kg</p>
                                </div>
                                <div className="productionStartItem">
                                    <p className="productionStartItemLeft">User 1</p>
                                    <p className="productionStartItemRight">500 kg</p>
                                </div>
                                <div className="productionStartItem">
                                    <p className="productionStartItemLeft">User 1</p>
                                    <p className="productionStartItemRight">500 kg</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="productionReportTableBodyContainer">
                        <div className="orderReportTableBodyContainerHeader">
                            <p className="orderReportTableBodyContainerHeaderText">
                                PRODUCTION REPORT
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
                                    <th className="orderReportTableBodyContainerTableHeaderText">Day</th>
                                    <th className="orderReportTableBodyContainerTableHeaderText"  colSpan="12">Operator Surya Production - Night Shift</th>
                                    <th className="orderReportTableBodyContainerTableHeaderText">Total</th>
                                </tr>
                                <tr className="orderReportTableBodyContainerTableHeader">
                                    <th className="orderReportTableBodyContainerTableHeaderText"></th>
                                    <th className="orderReportTableBodyContainerTableHeaderText"></th>
                                    <th className="orderReportTableBodyContainerTableHeaderText">17</th>
                                    <th className="orderReportTableBodyContainerTableHeaderText">18</th>
                                    <th className="orderReportTableBodyContainerTableHeaderText">19</th>
                                    <th className="orderReportTableBodyContainerTableHeaderText">20</th>
                                    <th className="orderReportTableBodyContainerTableHeaderText">21</th>
                                    <th className="orderReportTableBodyContainerTableHeaderText">22</th>
                                    <th className="orderReportTableBodyContainerTableHeaderText">23</th>
                                    <th className="orderReportTableBodyContainerTableHeaderText">24</th>
                                    <th className="orderReportTableBodyContainerTableHeaderText">25</th>
                                    <th className="orderReportTableBodyContainerTableHeaderText">26</th>
                                    <th className="orderReportTableBodyContainerTableHeaderText">27</th>
                                    <th className="orderReportTableBodyContainerTableHeaderText">28</th>
                                    <th className="orderReportTableBodyContainerTableHeaderText"></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="orderReportTableBodyContainerTableBodyRow">
                                    <td className="orderReportTableBodyContainerTableBodyRowText">3/4/2022</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">Sat</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                </tr>

                                <tr className="orderReportTableBodyContainerTableBodyRow">
                                    <td className="orderReportTableBodyContainerTableBodyRowText">4/4/2022</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">Sun</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                </tr>

                                <tr className="orderReportTableBodyContainerTableBodyRow">
                                    <td className="orderReportTableBodyContainerTableBodyRowText">5/4/2022</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">Mon</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                </tr>

                                <tr className="orderReportTableBodyContainerTableBodyRow">
                                    <td className="orderReportTableBodyContainerTableBodyRowText">6/4/2022</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">Tue</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                </tr>

                                <tr className="orderReportTableBodyContainerTableBodyRow">
                                    <td className="orderReportTableBodyContainerTableBodyRowText">7/4/2022</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">Wed</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                </tr>

                                <tr className="orderReportTableBodyContainerTableBodyRow">
                                    <td className="orderReportTableBodyContainerTableBodyRowText">8/4/2022</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">Thu</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText"></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                </tr>

                                <tr>
                                    <td colSpan={2}><p className="prodcutionReportTableTotalButton">Total</p></td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                    <td className="orderReportTableBodyContainerTableBodyRowText">0</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>

            {(showFilterEntry === true) && OrderEntryFilter()}

        </div>
    )

}

export default ProductionReport;