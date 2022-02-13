// imports
import React from "react";
import {Info, X} from "phosphor-react";

const YarnDeliveryPopUp = (props) => {
    const {setVendorPopUp} = props;

    const [showOrderInfoPopUp, setOrderInfoPopUp] = React.useState(false);
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
                            <label className="orderInputLabel">Variety Of Yarn</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "25%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="gauge"
                                placeholder="Enter Gauge"
                                value=""
                            />
                            <label className="orderInputLabel">Type Of Yarn</label>
                        </div>

                    </div>

                    <div className="cb64aae0345e">

                        <div className="filterTextFieldContainer" style={{ marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="mill"
                                placeholder="Enter Mill"
                                value=""
                            />
                            <label className="orderInputLabel">Mill</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{ marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="counts"
                                placeholder="Enter Counts"
                                value=""
                            />
                            <label className="orderInputLabel">Counts</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{ marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="color"
                                placeholder="Enter Color"
                                value=""
                            />
                            <label className="orderInputLabel">Color</label>
                        </div>
                    </div>

                </div>
            </div>
        )
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

                        <div className="filterTextFieldContainer" style={{width: "18%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="yarnStock"
                                placeholder="Enter Yarn Stock"
                                value=""
                            />
                            <label className="orderInputLabel">Yarn Stock</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "18%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="dia"
                                placeholder="Enter Weight"
                                value=""
                            />
                            <label className="orderInputLabel">Bag</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "18%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="sourcingQty"
                                placeholder="Enter Sorucing Qty"
                                value=""
                            />
                            <label className="orderInputLabel">Cones</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "18%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="sourcingQty"
                                placeholder="Enter Sorucing Qty"
                                value=""
                            />
                            <label className="orderInputLabel">Net Weight</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "18%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="sourcingQty"
                                placeholder="Enter Sorucing Qty"
                                value=""
                            />
                            <label className="orderInputLabel">Gross Weight</label>
                        </div>

                    </div>

                    <div className="entryFilterFooterSection">
                        <button className="entryFilterFooterButton">Save</button>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="entryFilterContainer">
            <div className="entryFilterBodyContainer">

                <div className="fabricDeliveryHeaderContainer">
                    <p className="fabricDeliveryHeaderText fabricPopUpHeaderAcitve">
                        Yarn Delivery
                    </p>
                </div>

                <div className="subContractPopUpVendorMiddleSection">

                    <div className="subContractVendorSection1">
                        <div className="filterTextFieldContainer" style={{width: "44%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="date"
                                id="documentDate"
                                placeholder="Enter Document Date"
                                value={vendorOrderDetail.documentDate}
                            />
                            <label className="orderInputLabel">Document Date</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "44%",  marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="ydcNo"
                                placeholder="Enter Y.DC No"
                                value={vendorOrderDetail.customerName}
                            />
                            <label className="orderInputLabel">Y.DC No</label>
                        </div>
                    </div>

                    <div className="subContractVendorSection1">
                        <div className="filterTextFieldContainer" style={{width: "44%", marginTop: "3%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="vendorOrderNo"
                                placeholder="Enter Vendor Order No"
                                value={vendorOrderDetail.vendorOrderNo}
                            />
                            <label className="orderInputLabel">Vendor Order No</label>
                        </div>

                        <div className="filterTextFieldContainer" style={{width: "44%",  marginTop: "3%"}}>
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

                    <div className="c66b3be50" onClick={() => setOrderInfoPopUp(true)}>
                        <p className="e1f5a1fc0dfc">Yarn Info</p>
                        <Info size={22} color="" weight="bold" color="#F78D12" />
                    </div>

                    <div className="aa9877e43897">
                        <div className="filterTextFieldContainer" style={{width: "95%",  marginTop: "3%"}}>
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
                            style={{width: "15%", marginTop: "3%"}}
                            onClick={() => setBagAndWeight(true)}
                        >
                            {"Bag & Weight"}
                        </button>
                    </div>

                </div>

                <div className="addNewOrderFooter">
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
                </div>

            </div>

            {
                (showOrderInfoPopUp === true) && vendorOrderInfoPopUp()
            }

            {
                (showBagAndWeight === true) && renderBagAndWeight()
            }
        </div>
    )

}

export default YarnDeliveryPopUp;