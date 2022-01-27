// imports
import React, { useState } from "react";

// styles
import "../styles/orders.css";

const NewOrder = (props) => {
    const {setAddOrder} = props;

    const [currentActiveTab, setCurrentActiveTab] = useState(0);
    const [currentRadioButton, setCurrentRadioButton] = useState("yarnGrn");

    let currentSection;

    const renderOrderDetailSection = () => {

        return (
            <>
                <div className="accountReportTextField entryFilterMiddleSectionMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="documentDate"
                        placeholder="Enter Document Date"
                        value=""
                    />
                    <label className="orderInputLabel">Document Date</label>
                </div>

                <div className="accountReportTextField entryFilterMiddleSectionMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="customerName"
                        placeholder="Enter Customer Name"
                        value=""
                    />
                    <label className="orderInputLabel">Customer Name</label>
                </div>

                <div className="accountReportTextField entryFilterMiddleSectionMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="orderId"
                        placeholder="Enter Order Id"
                        value=""
                    />
                    <label className="orderInputLabel">Order Id</label>
                </div>

                <div className="accountReportTextField entryFilterMiddleSectionMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="referenceNumber"
                        placeholder="Enter Reference Number"
                        value=""
                    />
                    <label className="orderInputLabel">References</label>
                </div>
            </>
        )

    }

    const renderFabricDetailSection = () => {
        return (
            <>
                <div className="accountReportSelectField entryFilterMiddleSectionMargin">
                    <select className="loginInSignUpCustomInput">
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                    </select>
                    <label className="orderInputLabel">Fabric Type</label>
                </div>

                <div className="accountReportSelectField entryFilterMiddleSectionMargin">
                    <select className="loginInSignUpCustomInput">
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                    </select>
                    <label className="orderInputLabel">Gauge</label>
                </div>

                <div className="accountReportTextField entryFilterMiddleSectionMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="documentDate"
                        placeholder="Enter Document Date"
                        value=""
                    />
                    <label className="orderInputLabel">Loop Length</label>
                </div>

                <div className="accountReportTextField entryFilterMiddleSectionMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="documentDate"
                        placeholder="Enter Document Date"
                        value=""
                    />
                    <label className="orderInputLabel">GSM</label>
                </div>

                <div className="accountReportSelectField entryFilterMiddleSectionMargin">
                    <select className="loginInSignUpCustomInput">
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                    </select>
                    <label className="orderInputLabel">Knit Type</label>
                </div>

                <div className="accountReportSelectField entryFilterMiddleSectionMargin">
                    <select className="loginInSignUpCustomInput">
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                    </select>
                    <label className="orderInputLabel">Counts</label>
                </div>

                <div className="accountReportSelectField entryFilterMiddleSectionMargin">
                    <select className="loginInSignUpCustomInput">
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                    </select>
                    <label className="orderInputLabel">Mill</label>
                </div>
            </>
        )
    }

    const renderGrnSection = () => {
        return (
            <>
                <div className="renderGrnSelectField entryFilterMiddleSectionMargin">
                    <select className="loginInSignUpCustomInput">
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                    </select>
                    <label className="orderInputLabel">Counts</label>
                </div>

                <div className="renderGrnSelectField entryFilterMiddleSectionMargin">
                    <select className="loginInSignUpCustomInput">
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                    </select>
                    <label className="orderInputLabel">Mill</label>
                </div>

                <div className="renderGrnSelectField entryFilterMiddleSectionMargin">
                    <select className="loginInSignUpCustomInput">
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                    </select>
                    <label className="orderInputLabel">Type Of Yarn</label>
                </div>

                <div className="renderGrnSelectField entryFilterMiddleSectionMargin">
                    <select className="loginInSignUpCustomInput">
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                    </select>
                    <label className="orderInputLabel">Variety Of Yarn</label>
                </div>

                <div className="renderGrnSelectField entryFilterMiddleSectionMargin">
                    <select className="loginInSignUpCustomInput">
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                    </select>
                    <label className="orderInputLabel">Colour</label>
                </div>

            </>
        )
    }

    switch(currentActiveTab) {
        case 0:
            currentSection = renderOrderDetailSection();
            break;
        case 1:
            currentSection = renderFabricDetailSection();
            break;
        case 2:
            currentSection = renderGrnSection();
            break;
        default:
            currentSection = renderOrderDetailSection();
            break;
    }

    return (
        <div className="entryFilterContainer">
            <div className="enteryFilterSection">

                <div className="entryFilterMiddleHeader">

                    <p  className={(currentActiveTab === 0) ? "entryFilterMiddleHeaderText entryFilterMiddleHeaderActiveText" : "entryFilterMiddleHeaderText"}
                        onClick={() => setCurrentActiveTab(0)}
                    >
                        Order Details
                    </p>
                    <p  className={(currentActiveTab === 1) ? "entryFilterMiddleHeaderText entryFilterMiddleHeaderActiveText" : "entryFilterMiddleHeaderText"}
                        onClick={() => setCurrentActiveTab(1)}
                    >
                        Fabric Details
                    </p>
                    {
                        (currentRadioButton === "yarnGrn") &&
                        (
                            <p  className={(currentActiveTab === 2) ? "entryFilterMiddleHeaderText entryFilterMiddleHeaderActiveText" : "entryFilterMiddleHeaderText"}
                                onClick={() => setCurrentActiveTab(2)}
                            >
                                Good Received Notes
                            </p>
                        )
                    }

                </div>

                <div className="entryFilterCircleIndicatorContainer">
                    <div className={(currentActiveTab === 0) ? "circleIndicatorActive" : "circleIndicator"} />
                    <div className={(currentActiveTab === 1) ? "circleIndicatorActive" : "circleIndicator"} />
                    {
                        (currentRadioButton === "yarnGrn") &&
                        (
                            <div className={(currentActiveTab === 2) ? "circleIndicatorActive" : "circleIndicator"} />
                        )
                    }
                    <div className="lineIndicator" />
                </div>

                <div className="entryFilterMiddleSection">
                    
                    {currentSection}

                </div>

                {
                    (currentActiveTab === 0) &&
                    (
                        <div className="yarnAndFabricContainer">

                            <div className="yarnContainer">
                                <input
                                    type="radio"
                                    id="yarnGrn"
                                    value="yarnGrn"
                                    checked={(currentRadioButton === "yarnGrn") ? true : false}
                                    onClick={() => setCurrentRadioButton("yarnGrn")}
                                />
                                <label className="yarnContainerLabel" htmlFor="yarnGrn">With Yarn GRN</label>
                            </div>

                            <div className="yarnContainer">
                                <input
                                    type="radio"
                                    id="fabricDetail"
                                    value="fabricDetail"
                                    checked={(currentRadioButton === "fabricDetail") ? true : false}
                                    onClick={() => setCurrentRadioButton("fabricDetail")}
                                />
                                <label className="yarnContainerLabel" htmlFor="fabricDetail">With Fabric Details</label>
                            </div>

                        </div>
                    )
                }

                {
                    (
                        ((currentActiveTab === 1) && (currentRadioButton === "fabricDetail")) || 
                        (currentActiveTab === 2)
                    ) &&
                    (
                        <div className="addNewOrderFooter">
                            <button
                                onClick={() => setAddOrder(false)}
                                className="addNewOrderFooterCancel addNewOrderFooterMargin"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setAddOrder(false)}
                                className="addNewOrderFooterSubmit"
                            >
                                Submit
                            </button>
                        </div>
                    )
                }

            </div>
        </div>
    )

}

export default NewOrder;