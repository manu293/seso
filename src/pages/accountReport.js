// imports
import React, { useState } from "react";

// local imports
import CustomHeader from "../components/customHeader";
import Navbar from "../components/navbar";
import CustomerLedger from "../components/customerLedger";
import CustomerStatement from "../components/customerStatement";
import AgeingReport from "../components/ageingReport";

// styles
import "../styles/accounts.css";

const AccountReport = () => {

    const [currentTab, setCurrentTab] = useState(0);

    let currentActiveSection = <CustomerLedger />;

    switch (currentTab) {
        case 0:
            currentActiveSection = <CustomerLedger />;
            break;
        case 1:
            currentActiveSection = <CustomerStatement />;
            break;
        case 2:
            currentActiveSection = <AgeingReport />;
            break;
    }

    return (
        <div className="mainContainer">

            <Navbar />
            
            <div className="mainContentContainer">

                <CustomHeader />

                <div className="accountReportHeaderContainer">
                    <p className="accountReportText">Account Report</p>
                </div>

                <div className="accountReportTabContainer">
                    
                    <div
                        onClick={() => setCurrentTab(0)}
                        className={(currentTab === 0) ? "accountSingleTabActiveContainer" : "accountSingleTabContainer"}>
                        <p className="accountTabHeader">CUSTOMER LEDGER</p>
                    </div>

                    <div
                        onClick={() => setCurrentTab(1)}
                        className={(currentTab === 1) ? "accountSingleTabActiveContainer" : "accountSingleTabContainer"}>
                        <p className="accountTabHeader">CUSTOMER STATEMENT</p>
                    </div>

                    <div
                        onClick={() => setCurrentTab(2)}
                        className={(currentTab === 2) ? "accountSingleTabActiveContainer" : "accountSingleTabContainer"}>
                        <p className="accountTabHeader">AGEING REPORT</p>
                    </div>

                </div>

                <div className="accountReportBodyContainer">

                    {currentActiveSection}

                </div>

            </div>

        </div>
    )

}

export default AccountReport;