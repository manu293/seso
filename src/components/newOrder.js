// imports
import { MinusCircle, PlusCircle, X } from "phosphor-react";
import React, { useState } from "react";

// styles
import "../styles/orders.css";

const NewOrder = (props) => {
    const {setAddOrder} = props;

    const [currentActiveTab, setCurrentActiveTab] = useState(0);
    const [showDiaQtySection, setDiaQtySection] = useState(false);
    const [showBagWeightSection, setBagWeightSection] = useState(false);
    const [currentRadioButton, setCurrentRadioButton] = useState("yarnGrn");
    const [orderDetailSection, setOrderDetailSection] = useState([
       {
           documentDate: "",
           customerName: "",
           orderId: "",
           reference: "",
       } 
    ]);
    const [fabricDetaiSection, setFabricDetailSection] = useState([
        {
            fabricType: "",
            gauge: "",
            loopLength:  "",
            gsm: "",
            kintType: "",
            counts: "",
            mill: "",
        }
    ]);
    const [goodNoteSection, setGoodNoteSection] = useState([
        {
            counts: "",
            mill: "",
            typeOfYarn: "",
            varietyOfYarn: "",
            colour: "",
        }
    ]);
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

    let renderCurrentSection;
    let currentSection;

    const handleAddNewDetailSection = (sectionTab) => {
        const newOrderSection = {
            documentDate: "",
            customerName: "",
            orderId: "",
            reference: "",
            doNo: "",
        };

        const newFabricSection = {
            fabricType: "",
            gauge: "",
            loopLength:  "",
            gsm: "",
            kintType: "",
            counts: "",
            mill: "",
        };

        const newGoodSection = {
            counts: "",
            mill: "",
            typeOfYarn: "",
            varietyOfYarn: "",
            colour: "",
        };

        switch(sectionTab) {

            case 0: 
                const intermediateOrderSection = [...orderDetailSection];
                intermediateOrderSection.push(newOrderSection);
                setOrderDetailSection(intermediateOrderSection);
                break;

            case 1: 
                const interFabricSection = [...fabricDetaiSection];
                interFabricSection.push(newFabricSection);
                setFabricDetailSection(interFabricSection);
                break;

            case 2: 
                const interNoteSection = [...goodNoteSection];
                interNoteSection.push(newGoodSection);
                setGoodNoteSection(interNoteSection);
                break;

            default: 
                const interDefaultSection = [...orderDetailSection];
                interDefaultSection.push(newOrderSection);
                setOrderDetailSection(interDefaultSection);
                break;

        }

    }

    const handleRemoveNewDetailsSection = (sectionTab, indexVal) => {
        switch(sectionTab) {
            case 0:
                const intOrderDetail = [...orderDetailSection];
                intOrderDetail.splice(indexVal, 1);
                setOrderDetailSection(intOrderDetail);
                break;

            case 1:
                const intFabDetail = [...fabricDetaiSection];
                intFabDetail.splice(indexVal, 1);
                setFabricDetailSection(intFabDetail);
                break;

            case 2:
                const intGoodNoteSection = [...goodNoteSection];
                intGoodNoteSection.splice(indexVal, 1);
                setGoodNoteSection(intGoodNoteSection);
                break;

            default:
                const defaultOrderDetail = [...orderDetailSection];
                defaultOrderDetail.splice(indexVal, 1);
                setOrderDetailSection(defaultOrderDetail);
                break;
        }
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

    const renderOrderDetailSection = (singleOrder) => {

        return (
            <div className="fabricDetailContainer">
                <div className="accountReportTextField entryFilterMiddleSectionMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="date"
                        id="documentDate"
                        placeholder="Enter Document Date"
                        value={singleOrder.documentDate}
                    />
                    <label className="orderInputLabel">Document Date</label>
                </div>

                <div className="accountReportTextField entryFilterMiddleSectionMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="customerName"
                        placeholder="Enter Customer Name"
                        value={singleOrder.customerName}
                    />
                    <label className="orderInputLabel">Customer Name</label>
                </div>

                <div className="accountReportTextField entryFilterMiddleSectionMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="orderId"
                        placeholder="Enter Order Id"
                        value={singleOrder.orderId}
                    />
                    <label className="orderInputLabel">Order Id</label>
                </div>

                <div className="accountReportTextField entryFilterMiddleSectionMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="reference"
                        placeholder="Enter Reference Number"
                        value={singleOrder.reference}
                    />
                    <label className="orderInputLabel">References</label>
                </div>

                <div className="accountReportTextField entryFilterMiddleSectionMargin">
                    <input
                        className="loginInSignUpCustomInput"
                        type="text"
                        id="dcNo"
                        placeholder="Enter Customer DC Number"
                        value={singleOrder.dcNo}
                    />
                    <label className="orderInputLabel">Customer DC No</label>
                </div>
            </div>
        )

    }

    const renderFabricDetailSection = (singleFabric, indexVal) => {
        return (
            <>
                <div className="fabricDetailContainer">
                    <div className="accountReportSelectField entryFilterMiddleSectionMargin" style={{width: "45%"}}>
                        <select
                            className="loginInSignUpCustomInput"
                            id="fabricType"
                            value={singleFabric.fabricType}
                        >
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                        </select>
                        <label className="orderInputLabel">Fabric Type</label>
                    </div>

                    <div className="accountReportSelectField entryFilterMiddleSectionMargin" style={{width: "45%"}}>
                        <select
                            className="loginInSignUpCustomInput"
                            id="gauge"
                            value={singleFabric.gauge}
                        >
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                        </select>
                        <label className="orderInputLabel">Gauge</label>
                    </div>

                    <div className="accountReportTextField entryFilterMiddleSectionMargin" style={{width: "20%"}}>
                        <input
                            className="loginInSignUpCustomInput"
                            type="text"
                            id="loopLength"
                            placeholder="Enter Document Date"
                            value={singleFabric.loopLength}
                        />
                        <label className="orderInputLabel">Loop Length</label>
                    </div>

                    <div className="accountReportTextField entryFilterMiddleSectionMargin" style={{width: "12%"}}>
                        <input
                            className="loginInSignUpCustomInput"
                            type="text"
                            id="gsm"
                            placeholder="Enter Document Date"
                            value={singleFabric.gsm}
                        />
                        <label className="orderInputLabel">GSM</label>
                    </div>

                    <div className="accountReportSelectField entryFilterMiddleSectionMargin" style={{width: "15%"}}>
                        <select
                            id="knitType"
                            value={singleFabric.knitType}
                            className="loginInSignUpCustomInput"
                        >
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                        </select>
                        <label className="orderInputLabel">Knit Type</label>
                    </div>

                    <div className="accountReportSelectField entryFilterMiddleSectionMargin" style={{width: "15%"}}>
                        <select
                            id="counts"
                            value={singleFabric.counts}
                            className="loginInSignUpCustomInput"
                        >
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                        </select>
                        <label className="orderInputLabel">Counts</label>
                    </div>

                    <div className="accountReportSelectField entryFilterMiddleSectionMargin" style={{width: "15%"}}>
                        <select
                            id="mill"
                            value={singleFabric.mill}
                            className="loginInSignUpCustomInput"
                        >
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                        </select>
                        <label className="orderInputLabel">Mill</label>
                    </div>
                </div>

                <div className="accountReportBottomButtonContainer">
                    <div />
                    <button className="addNewOrderFooterSubmitPopUp" onClick={() => setDiaQtySection(true)}>{`Dia & Qty`}</button>
                    
                    {
                            (indexVal === 0)
                        ?
                            <div style={{display: "flex", width: "120px", justifyContent: "space-around"}}><div /><PlusCircle size={28} weight="bold" color="#FFA412" onClick={() => handleAddNewDetailSection(1)} /></div>

                        :
                            <div style={{display: "flex", width: "120px", justifyContent: "space-evenly"}}>
                                <PlusCircle size={28} weight="bold" color="#FFA412" onClick={() => handleAddNewDetailSection(1)} />
                                <MinusCircle size={28} weight="bold" color="#FFA412" onClick={() => handleRemoveNewDetailsSection(1, indexVal)}  />
                            </div>
                    }
                </div>
            </>
        )
    }

    const renderGrnSection = (singleGoodNode, indexVal) => {
        return (
            <>
                <div className="fabricDetailContainer">
                    <div className="renderGrnSelectField entryFilterMiddleSectionMargin" style={{width: "35%"}}>
                        <select
                            className="loginInSignUpCustomInput"
                            value={singleGoodNode.counts}
                            id="counts"
                        >
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                        </select>
                        <label className="orderInputLabel">Counts</label>
                    </div>

                    <div className="renderGrnSelectField entryFilterMiddleSectionMargin" style={{width: "45%"}}>
                        <select
                            className="loginInSignUpCustomInput"
                            value={singleGoodNode.mill}
                            id="mill"
                        >
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                        </select>
                        <label className="orderInputLabel">Mill</label>
                    </div>

                    <div className="renderGrnSelectField entryFilterMiddleSectionMargin" style={{width: "30%"}}>
                        <select
                            className="loginInSignUpCustomInput"
                            value={singleGoodNode.typeOfYarn}
                            id="typeOfYarn"
                        >
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                        </select>
                        <label className="orderInputLabel">Type Of Yarn</label>
                    </div>

                    <div className="renderGrnSelectField entryFilterMiddleSectionMargin" style={{width: "30%"}}>
                        <select
                            className="loginInSignUpCustomInput"
                            value={singleGoodNode.varietyOfYarn}
                            id="varietyOfYarn"
                        >
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                        </select>
                        <label className="orderInputLabel">Variety Of Yarn</label>
                    </div>

                    <div className="renderGrnSelectField entryFilterMiddleSectionMargin" style={{width: "30%"}}>
                        <select
                            className="loginInSignUpCustomInput"
                            value={singleGoodNode.colour}
                            id="colour"
                        >
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                        </select>
                        <label className="orderInputLabel">Colour</label>
                    </div>

                    <div className="accountReportBottomButtonContainer">
                        <div />
                        <button className="addNewOrderFooterSubmitPopUp" onClick={() => setBagWeightSection(true)}>{`Bag & Weight`}</button>
                        {
                            (indexVal === 0)
                            ?
                                <div style={{display: "flex", width: "120px", justifyContent: "space-around"}}><div /><PlusCircle size={28} weight="bold" color="#FFA412" onClick={() => handleAddNewDetailSection(1)} /></div>

                            :
                                <div style={{display: "flex", width: "120px", justifyContent: "space-evenly"}}>
                                    <PlusCircle size={28} weight="bold" color="#FFA412" onClick={() => handleAddNewDetailSection(2)} />
                                    <MinusCircle size={28} weight="bold" color="#FFA412" onClick={() => handleRemoveNewDetailsSection(2, indexVal)}  />
                                </div>
                        }
                        
                    </div>

                </div>
            </>
        )
    }

    const renderDiaQtyPopUp = () => {
        return (
            <div className="detailPopUpContainer">
                <div className="detailPopUpSection">

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

                                            <div className="accountReportTextField entryFilterMiddleSectionMargin">
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

    const renderBagWeightSection = () => {
        return (
            <div className="detailPopUpContainer">
                <div className="detailPopUpSection">

                    <div className="detailPopUpSectionHeader">
                        <X size={40} weight="bold" color="#F78D12" onClick={() => setBagWeightSection(false)} />
                    </div>

                    <div className="detailPopUpSectionMiddle">
                        {
                            bagWeight.map((bWegight, indexVal) => {
                                return (
                                    <div className="detailPopUpSectionMiddleElement">

                                        <div className="detailsPopUpLeftSection">

                                            <div className="accountReportTextField">
                                                <input
                                                    className="detailsPopUpInput"
                                                    type="text"
                                                    id="bag"
                                                    placeholder="Enter Document Date"
                                                    value={bWegight.bag}
                                                />
                                                <label className="orderInputLabel">Bag</label>
                                            </div>

                                            <div className="accountReportTextField entryFilterMiddleSectionMargin">
                                                <input
                                                    className="detailsPopUpInput"
                                                    type="text"
                                                    id="weight"
                                                    placeholder="Enter Document Date"
                                                    value={bWegight.weight}
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

    switch(currentActiveTab) {
        case 0:
            renderCurrentSection = renderOrderDetailSection;
            currentSection = orderDetailSection;
            break;
        case 1:
            renderCurrentSection = renderFabricDetailSection;
            currentSection = fabricDetaiSection;
            break;
        case 2:
            renderCurrentSection = renderGrnSection;
            currentSection = goodNoteSection;
            break;
        default:
            renderCurrentSection = renderOrderDetailSection;
            currentSection = orderDetailSection;
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
                    
                    {
                        currentSection.map((cValue, index) => {
                            return renderCurrentSection(cValue, index)
                        })
                    }

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

            {
                (showDiaQtySection === true) && renderDiaQtyPopUp()
            }

{
                (showBagWeightSection === true) && renderBagWeightSection()
            }
        </div>
    )

}

export default NewOrder;