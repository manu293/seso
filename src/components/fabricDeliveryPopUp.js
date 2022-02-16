// imports
import React, {useState, useEffect} from "react";
import {X, PlusCircle, MinusCircle} from "phosphor-react";

const YarnReturnPopUp = (props) => {
    const {fabricDeliveryRef, setFabricDeliveryPopUp} = props;

    const [fabricDeliveryTab, setFabricDeliveryTab] = useState(0);
    const [showYarnSection, setYarnSection] = useState(true);
    const [showBagAndWeight, setBagAndWeight] = useState(false);
    const [showDiaQtySection, setDiaQtySection] = useState(false);
    const [diaQty, setDiaQty] = useState([
        {
            dia: "",
            qty: "",
        }
    ]);
    const [bagWeight, setBagWeight] = useState([
        {
            bag: "",
            weight: "",
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

    const handleAddNewBagWeight = () => {
        const newBagWeight = {
            bag: "",
            weight: "",
        };

        const inerDia = [...bagWeight];
        inerDia.push(newBagWeight);
        setBagWeight(inerDia);
    }

    const handleRemoveBagWeight = (indexVal) => {
        const inerDia = [...bagWeight];
        inerDia.splice(indexVal, 1);
        setBagWeight(inerDia)
    }

    const renderBagAndWeight = () => {
        return (
            <div className="detailPopUpContainer">
                <div className="detailPopUpSection" ref={fabricDeliveryRef}>

                    <div className="detailPopUpSectionHeader">
                        <X size={40} weight="bold" color="#F78D12" onClick={() => setBagAndWeight(false)} />
                    </div>

                    <div className="detailPopUpSectionMiddle">
                        {
                            bagWeight.map((bWeight, indexVal) => {
                                return (
                                    <div className="detailPopUpSectionMiddleElement">

                                        <div className="detailsPopUpLeftSection">

                                            <div className="accountReportTextField">
                                                <input
                                                    className="detailsPopUpInput"
                                                    type="text"
                                                    id="bag"
                                                    placeholder="Enter Bag"
                                                    value={bWeight.bag}
                                                />
                                                <label className="orderInputLabel">Bag</label>
                                            </div>

                                            <div className="accountReportTextField">
                                                <input
                                                    className="detailsPopUpInput"
                                                    type="text"
                                                    id="qty"
                                                    placeholder="Enter Weight"
                                                    value={bWeight.weight}
                                                />
                                                <label className="orderInputLabel">Weight</label>
                                            </div>

                                        </div>

                                        <div className="detailsPopUpRightSection">

                                            <PlusCircle size={28} weight="bold" color="#FFA412" onClick={() => handleAddNewBagWeight()}/>
                                            {
                                                (indexVal !== 0) && <MinusCircle size={28} weight="bold" color="#FFA412" onClick={() => handleRemoveBagWeight(indexVal)} /> 
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
                    {
                        (showYarnSection === true)  &&
                        (
                            <p
                                className={(fabricDeliveryTab === 1) ? "fabricDeliveryHeaderText fabricPopUpHeaderAcitve" : "fabricDeliveryHeaderText"}
                                onClick={() => setFabricDeliveryTab(1)}
                            >
                                Yarn Return
                            </p>
                        )
                    }
                </div>

                <div className="fabricDeliverySubheaderContainer">
                    <p className="fabricDeliverySubHeaderText">
                        Knit king apparels
                    </p>
                    {
                            (fabricDeliveryTab === 0)
                        ?
                           (
                            <div>
                                <p className="fabricDeliverySubHeaderText">
                                    FDC.No : &nbsp; CDNDN222
                                </p>
                                <p className="fabricDeliverySubHeaderText fabricDeliverySubheaderPadding">
                                    Date : &nbsp; 27/21/2222
                                </p>
                            </div>
                           )
                        :
                            (
                                <div>
                                    <p className="fabricDeliverySubHeaderText">
                                        YRDC.No : &nbsp; CDNDN222
                                    </p>
                                    <p className="fabricDeliverySubHeaderText fabricDeliverySubheaderPadding">
                                        Date : &nbsp; 27/21/2222
                                    </p>
                                </div>
                            )
                    }
                </div>

                <div className="fabricDeliveryBodyContainer">

                    <div className="customCheckboxGroup" >
                        <input 
                            type="checkbox"
                            id="yarnReturn"
                            checked={showYarnSection}
                            onClick={() => setYarnSection(!showYarnSection)}
                        />
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
                            onClick={() => (fabricDeliveryTab === 0) ? setDiaQtySection(true) : setBagAndWeight(true)}
                            className="fabricProgramContainerButton orderEntryInputMargin"
                        >
                            {(fabricDeliveryTab === 0) ? "Dia & Weight" : "Bag & Weight"}
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
                            onClick={() => (fabricDeliveryTab === 0) ? setDiaQtySection(true) : setBagAndWeight(true)}
                            className="fabricProgramContainerButton orderEntryInputMargin"
                        >
                            {(fabricDeliveryTab === 0) ? "Dia & Weight" : "Bag & Weight"}
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

            {
                (showBagAndWeight === true) && renderBagAndWeight()
            }
        </div>
    )

}

export default YarnReturnPopUp;