// imports
import React, {useState} from "react";
import {X, PlusCircle, MinusCircle} from "phosphor-react";

const FabricDeliveryPopUp = (props) => {
    const {fabricDeliveryRef, setFabricDeliveryPopUp} = props;

    const [fabricDeliveryTab, setFabricDeliveryTab] = React.useState(0);
    const [showDiaQtySection, setDiaQtySection] = React.useState(false);
    const [diaQty, setDiaQty] = useState([
        {
            dia: "",
            qty: "",
        }
    ]);

    const renderDiaQtyPopUp = () => {
        return (
            <div className="detailPopUpContainer">
                <div className="detailPopUpSection" ref={fabricDeliveryRef}>

                    <div className="detailPopUpSectionHeader">
                        <X size={40} weight="bold" color="#F78D12" onClick={() => setDiaQtySection(false)} />
                    </div>

                    <div className="detailPopUpSectionMiddle">
                        {
                            diaQty.map((dQty, indexVal) => {
                                return (
                                    <div className="detailPopUpSectionMiddleElement">

                                        <div className="detailsPopUpLeftSection">

                                            <div className="accountReportTextField">
                                                <input
                                                    className="detailsPopUpInput"
                                                    type="text"
                                                    id="dia"
                                                    placeholder="Enter Document Date"
                                                    value={dQty.dia}
                                                />
                                                <label className="orderInputLabel">Dia</label>
                                            </div>

                                            <div className="accountReportTextField">
                                                <input
                                                    className="detailsPopUpInput"
                                                    type="text"
                                                    id="qty"
                                                    placeholder="Enter Document Date"
                                                    value={dQty.qty}
                                                />
                                                <label className="orderInputLabel">Qty</label>
                                            </div>

                                        </div>

                                        <div className="detailsPopUpRightSection">

                                            <PlusCircle size={28} weight="bold" color="#FFA412" onClick={() => handleAddNewDiaQty()}/>
                                            {
                                                (indexVal !== 0) && <MinusCircle size={28} weight="bold" color="#FFA412" onClick={() => handleRemoveDiaQty(indexVal)} /> 
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="detailPopUpSectionFooter">
                        <button className="addNewOrderFooterSubmit">Save</button>
                    </div>

                </div>
            </div>
        )
    }

    const handleAddNewDiaQty = () => {
        const newDiaQty = {
            dia: "",
            qty: "",
        };

        const inerDia = [...diaQty];
        inerDia.push(newDiaQty);
        setDiaQty(inerDia);
    }

    const handleRemoveDiaQty = (indexVal) => {
        const inerDia = [...diaQty];
        inerDia.splice(indexVal, 1);
        setDiaQty(inerDia)
    }

    return (
        <div className="entryFilterContainer">
            <div className="enteryFilterSection" ref={fabricDeliveryRef}>

                <div className="fabricDeliveryHeaderContainer">
                    <p
                        className={(fabricDeliveryTab === 0) ? "fabricDeliveryHeaderText fabricPopUpHeaderAcitve" : "fabricDeliveryHeaderText"}
                        onClick={() => setFabricDeliveryTab(0)}
                    >
                        Fabric Delivery
                    </p>
                    <p
                        className={(fabricDeliveryTab === 1) ? "fabricDeliveryHeaderText fabricPopUpHeaderAcitve" : "fabricDeliveryHeaderText"}
                        onClick={() => setFabricDeliveryTab(1)}
                    >
                        Yarn Return
                    </p>
                </div>

                <div className="fabricDeliverySubheaderContainer">
                    <p className="fabricDeliverySubHeaderText">
                        Knit king apparels
                    </p>
                    <div>
                        <p className="fabricDeliverySubHeaderText">
                            FDC.No : &nbsp; CDNDN222
                        </p>
                        <p className="fabricDeliverySubHeaderText fabricDeliverySubheaderPadding">
                            Date : &nbsp; 27/21/2222
                        </p>
                    </div>
                </div>

                <div className="fabricDeliveryBodyContainer">

                    <div className="customCheckboxGroup">
                        <input type="checkbox" id="yarnReturn" checked={true} />
                        <label for="yarnReturn">With Yarn Return</label>
                    </div>

                    <div className="fabricProgramContainer">
                        <div className="accountReportTextField orderEntryInputMargin" style={{width: "75%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="fabricProgram"
                                placeholder={
                                    (fabricDeliveryTab === 0) ? "Fabric Program 1" : "Yarn Description 1"
                                }
                                value=""
                            />
                            <label className="orderInputLabel">
                                {
                                    (fabricDeliveryTab === 0) ? "Fabric Program" : "Yarn Description"
                                }
                            </label>
                        </div>

                        <button
                            onClick={() => setDiaQtySection(true)}
                            className="fabricProgramContainerButton orderEntryInputMargin"
                        >
                            {"Dia & Weight"}
                        </button>
                    </div>

                    <div className="fabricProgramContainer">
                        <div className="accountReportTextField orderEntryInputMargin" style={{width: "75%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="fabricProgram"
                                placeholder={
                                    (fabricDeliveryTab === 0) ? "Fabric Program 2" : "Yarn Description 2"
                                }
                                value=""
                            />
                            <label className="orderInputLabel">
                                {
                                    (fabricDeliveryTab === 0) ? "Fabric Program" : "Yarn Description"
                                }
                            </label>
                        </div>

                        <button
                            onClick={() => setDiaQtySection(true)}
                            className="fabricProgramContainerButton orderEntryInputMargin"
                        >
                            {"Dia & Weight"}
                        </button>
                    </div>

                </div>

                <div className="goodReceivedNotePopUpSectionFooter">
                    <button
                        className="addNewOrderFooterCancel addNewOrderFooterMargin"
                        onClick={() => setFabricDeliveryPopUp(false)}
                    >
                        Cancel
                    </button>
                    <button className="addNewOrderFooterSubmit">
                        Submit
                    </button>
                </div>
            </div>

            {
                (showDiaQtySection === true) && renderDiaQtyPopUp()
            }
        </div>
    )

}

export default FabricDeliveryPopUp;