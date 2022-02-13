// imports
import React from "react";
import {Info, X} from "phosphor-react";

const SubContractFabricReturnPopUp = (props) => {
    const {setVendorPopUp} = props;

    const [fabricDeliveryTab, setFabricDeliveryTab] = React.useState(0);
    const [showYarnGrn, setShowYarnGrn] = React.useState(true);
    const [showOrderInfoPopUp, setOrderInfoPopUp] = React.useState(false);
    const [showDiaAndWeight, setDiaAndWeight] = React.useState(false);
    const [showBagAndWeight, setBagAndWeight] = React.useState(false);
    const [vendorOrderDetail, setVendorOrderDetail] = React.useState({
        documentDate: "",
        customerName: "",
        orderId: "",
        vendorOrderNo: "",
        vendorName: "",
        fabricProgram: "",
    });

    const vendorOrderInfoPopUp = () => {
        return (
            <div className="entryFilterContainer">
                <div className="entryFilterBodyContainer">

                    <div className="wcb64aae0345e">
                        <X
                            size={22}
                            weight="bold"
                            color="#FD0606"
                            style={{cursor: "pointer"}}
                            onClick={() => setOrderInfoPopUp(false)}
                        />
                    </div>

                    <div className="cb64aae0345e">

                        <div className="filterTextFieldContainer" style={{width: "70%", marginTop: "3%"}}>
                            <select
                                className="loginInSignUpCustomInput"
                                value=""
                            >
                                <option value="">Select a value</option>
                            </select>
                            <label className="orderInputLabel">Fabric Type</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "25%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="gauge"
                                placeholder="Enter Gauge"
                                value=""
                            />
                            <label className="orderInputLabel">Gauge</label>
                        </div>

                    </div>

                    <div className="cb64aae0345e">

                        <div className="filterTextFieldContainer" style={{width: "18%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="loopLength"
                                placeholder="Enter Loop Length"
                                value=""
                            />
                            <label className="orderInputLabel">Loop Length</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "18%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="gsm"
                                placeholder="Enter GSM"
                                value=""
                            />
                            <label className="orderInputLabel">GSM</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "18%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="knitType"
                                placeholder="Enter Knit Type"
                                value=""
                            />
                            <label className="orderInputLabel">Knit Type</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "18%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="counts"
                                placeholder="Enter Counts"
                                value=""
                            />
                            <label className="orderInputLabel">Counts</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "18%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="mill"
                                placeholder="Enter Mill"
                                value=""
                            />
                            <label className="orderInputLabel">Mill</label>
                        </div>

                    </div>

                </div>
            </div>
        )
    }

    const renderFabricReceivedSection = () => {
        return (
            <div className="subContractPopUpVendorMiddleSection">

                <div className="subContractVendorSection1">
                    <div className="filterTextFieldContainer" style={{width: "45%", marginTop: "3%"}}>
                        <input
                            className="loginInSignUpCustomInput"
                            type="date"
                            id="documentDate"
                            placeholder="Enter Document Date"
                            value={vendorOrderDetail.documentDate}
                        />
                        <label className="orderInputLabel">Document Date</label>
                    </div>

                    <div className="filterTextFieldContainer" style={{width: "45%",  marginTop: "3%"}}>
                        <input
                            className="loginInSignUpCustomInput"
                            type="text"
                            id="customerName"
                            placeholder="Enter Customer Name"
                            value={vendorOrderDetail.customerName}
                        />
                        <label className="orderInputLabel">V.FDC No</label>
                    </div>

                </div>

                <div className="subContractVendorSection1">
                    <div className="filterTextFieldContainer" style={{width: "45%", marginTop: "3%"}}>
                        <input
                            className="loginInSignUpCustomInput"
                            type="text"
                            id="vendorOrderNo"
                            placeholder="Enter Vendor Order No"
                            value={vendorOrderDetail.vendorOrderNo}
                        />
                        <label className="orderInputLabel">Vendor Order No</label>
                    </div>

                    <div className="filterTextFieldContainer" style={{width: "45%",  marginTop: "3%"}}>
                        <input
                            className="loginInSignUpCustomInput"
                            type="text"
                            id="vendorName"
                            placeholder="Enter Vendor Name"
                            value={vendorOrderDetail.vendorName}
                        />
                        <label className="orderInputLabel">Vendor Name</label>
                    </div>

                    <div style={{width: "30%",  marginTop: "3%"}} />
                </div>

                <div className="aa9877e43897">
                    <div className="filterTextFieldContainer" style={{width: "95%"}}>
                        <input
                            className="loginInSignUpCustomInput"
                            type="text"
                            id="fabricProgram"
                            placeholder="Enter Fabric Program"
                            value=""
                        />
                        <label className="orderInputLabel">Fabric Program</label>
                    </div>

                    <button
                        className="addNewOrderFooterSubmit"
                        style={{width: "15%"}}
                        onClick={() => setDiaAndWeight(true)}
                    >
                        {"Dia & Weight"}
                    </button>
                </div>

                <div className="e047a33e4e51">
                    <div className="yarnContainer">
                        <input
                            type="radio"
                            id="fabricDetail"
                            value="fabricDetail"
                            checked={(showYarnGrn === true) ? true : false}
                            onClick={() => setShowYarnGrn(!showYarnGrn)}
                        />
                        <label className="yarnContainerLabel" htmlFor="fabricDetail">With YARN GRN</label>
                    </div>
                </div>

            </div>
        );
    }

    const renderYarnReceivedSection = () => {
        return (
            <div className="subContractPopUpVendorMiddleSection">

                <div className="subContractVendorSection1">
                    <div className="filterTextFieldContainer" style={{width: "45%", marginTop: "3%"}}>
                        <input
                            className="loginInSignUpCustomInput"
                            type="date"
                            id="documentDate"
                            placeholder="Enter Document Date"
                            value={vendorOrderDetail.documentDate}
                        />
                        <label className="orderInputLabel">Document Date</label>
                    </div>

                    <div className="filterTextFieldContainer" style={{width: "45%",  marginTop: "3%"}}>
                        <input
                            className="loginInSignUpCustomInput"
                            type="text"
                            id="ydcNo"
                            placeholder="Enter YDC No"
                            value={vendorOrderDetail.customerName}
                        />
                        <label className="orderInputLabel">YDC No</label>
                    </div>

                    
                </div>

                <div className="subContractVendorSection1">
                    <div className="filterTextFieldContainer" style={{width: "45%", marginTop: "3%"}}>
                        <input
                            className="loginInSignUpCustomInput"
                            type="text"
                            id="vendorName"
                            placeholder="Enter Vendor Name"
                            value={vendorOrderDetail.vendorOrderNo}
                        />
                        <label className="orderInputLabel">Vendor Name</label>
                    </div>

                    <div className="filterTextFieldContainer" style={{width: "45%",  marginTop: "3%"}}>
                        <input
                            className="loginInSignUpCustomInput"
                            type="text"
                            id="vendorOrderNo"
                            placeholder="Enter Vendor Order No"
                            value={vendorOrderDetail.orderId}
                        />
                        <label className="orderInputLabel">Vendor Order No</label>
                    </div>
                </div>

                <div className="aa9877e43897">
                    <div className="filterTextFieldContainer" style={{width: "95%",  marginTop: "3%"}}>
                        <input
                            className="loginInSignUpCustomInput"
                            type="text"
                            id="yarnDescription"
                            placeholder="Enter Yarn Description"
                            value=""
                        />
                        <label className="orderInputLabel">Yarn Description</label>
                    </div>

                    <button
                        className="addNewOrderFooterSubmit"
                        style={{width: "15%", marginTop: "3%"}}
                        onClick={() => setBagAndWeight(true)}
                    >
                        {"Bag & Weight"}
                    </button>
                </div>

            </div>
        );
    }

    const renderDiaAndWeightSection = () => {
        return (
            <div className="entryFilterContainer">
                <div className="entryFilterBodyContainer">

                    <div className="entryFilterHeaderSection">
                        <X
                            size={25}
                            weight="bold"
                            color="#FFA412"
                            onClick={() => setDiaAndWeight(false)}
                        />
                    </div>

                    <div className="cb64aae0345e" style={{marginBottom: "3%"}}>

                        <div className="filterTextFieldContainer" style={{width: "30%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="dia"
                                placeholder="Enter Dia"
                                value=""
                            />
                            <label className="orderInputLabel">Dia</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "30%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="dia"
                                placeholder="Enter Weight"
                                value=""
                            />
                            <label className="orderInputLabel">Weight</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "30%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="cone"
                                placeholder="Enter Cone"
                                value=""
                            />
                            <label className="orderInputLabel">Cone</label>
                        </div>

                    </div>

                    <div className="entryFilterFooterSection">
                        <button className="entryFilterFooterButton">Save</button>
                    </div>

                </div>
            </div>
        );
    }

    const renderBagAndWeight = () => {
        return (
            <div className="entryFilterContainer">
                <div className="entryFilterBodyContainer">

                    <div className="entryFilterHeaderSection">
                        <X
                            size={25}
                            weight="bold"
                            color="#FFA412"
                            onClick={() => setBagAndWeight(false)}
                        />
                    </div>

                    <div className="cb64aae0345e" style={{marginBottom: "3%"}}>

                        <div className="filterTextFieldContainer" style={{width: "30%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="dia"
                                placeholder="Enter Weight"
                                value=""
                            />
                            <label className="orderInputLabel">Bag</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "30%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="sourcingQty"
                                placeholder="Enter Sorucing Qty"
                                value=""
                            />
                            <label className="orderInputLabel">Cones</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "30%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="weight"
                                placeholder="Enter Weight"
                                value=""
                            />
                            <label className="orderInputLabel">Weight</label>
                        </div>

                    </div>

                    <div className="entryFilterFooterSection">
                        <button className="entryFilterFooterButton">Save</button>
                    </div>

                </div>
            </div>
        );
    }

    const renderFooterSection = () => {
        let renderContent = (
            <button
                onClick={() => setFabricDeliveryTab(1)}
                className="addNewOrderFooterSubmit"
            >
                Next
            </button>
        );

        if (
            ((fabricDeliveryTab === 1) &&
            (showYarnGrn === true)) ||
            ((fabricDeliveryTab === 0) &&
            (showYarnGrn === false))
        ) {
            renderContent = (
                <>
                    <button
                        onClick={() => setVendorPopUp(false)}
                        className="addNewOrderFooterCancel addNewOrderFooterMargin"
                    >
                        Cancel
                    </button>
                    <button
                        className="addNewOrderFooterSubmit"
                    >
                        Submit
                    </button>
                </>
            )
        }

        return renderContent;
    }

    return (
        <div className="entryFilterContainer">
            <div className="entryFilterBodyContainer">

                <div className="fabricDeliveryHeaderContainer">
                    <p
                        className={(fabricDeliveryTab === 0) ? "fabricDeliveryHeaderText fabricPopUpHeaderAcitve" : "fabricDeliveryHeaderText"}
                        onClick={() => setFabricDeliveryTab(0)}
                    >
                        Fabric Received
                    </p>
                    {
                        (showYarnGrn === true) &&
                        (
                            <p
                                className={(fabricDeliveryTab === 1) ? "fabricDeliveryHeaderText fabricPopUpHeaderAcitve" : "fabricDeliveryHeaderText"}
                                onClick={() => setFabricDeliveryTab(1)}
                            >
                                Yarn Received
                            </p>
                        )
                    }
                </div>

                {
                    (showYarnGrn === true) &&
                    (
                        <div className="entryFilterCircleIndicatorContainer" style={{left: "22%", width: "59%"}}>
                            <div className={(fabricDeliveryTab === 0) ? "circleIndicatorActive" : "circleIndicator"} />
                            <div className={(fabricDeliveryTab === 1) ? "circleIndicatorActive" : "circleIndicator"} />  
                            <div className="lineIndicator" />
                        </div>
                    )
                }

                {
                    (
                        fabricDeliveryTab === 0
                    )
                    ?
                        renderFabricReceivedSection()
                    :
                        renderYarnReceivedSection()
                }

                <div className="addNewOrderFooter">
                    {renderFooterSection()}
                </div>

            </div>

            {
                (showOrderInfoPopUp === true) && vendorOrderInfoPopUp()
            }

            {
                (showDiaAndWeight === true) && renderDiaAndWeightSection()
            }

            {
                (showBagAndWeight === true) && renderBagAndWeight()
            }
        </div>
    )

}

export default SubContractFabricReturnPopUp;