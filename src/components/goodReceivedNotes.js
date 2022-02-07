// imports
import React, { useState } from "react";
import {PlusCircle, MinusCircle, X} from "phosphor-react";

const GoodReceivedNotes = (props) => {
    const {
        grnSection,
        addGrnSection,
        removeGrnSection,
        bagWeight,
        handleAddNewBagWeight,
        handleRemoveBagWeight,
        setShowGrnSection,
        previewAddGrnRef
    } = props;
    const [showBagSection, setBagSection] = useState(false);

    const renderGrnMiddleSection = (grn, indexVal) => { 
        return (
            <>
                <div
                    className="accountReportTextField"
                    style={{
                        height: "50px",
                        margin: "2% 0",
                        width: "35%"
                    }}
                >
                    <select
                        className="loginInSignUpCustomInput"
                        value={grn.counts}
                    >
                        <option value="">None</option>
                    </select>
                    <label className="orderInputLabel">Counts</label>
                </div>

                <div
                    className="accountReportTextField"
                    style={{
                        height: "50px",
                        margin: "2% 0",
                        width: "45%"
                    }}
                >
                    <select
                        className="loginInSignUpCustomInput"
                        value={grn.mills}
                    >
                        <option value="">None</option>
                    </select>
                    <label className="orderInputLabel">Mill</label>
                </div>

                <div
                    className="accountReportTextField"
                    style={{
                        height: "50px",
                        margin: "2% 0",
                        width: "30%"
                    }}
                >
                    <select
                        className="loginInSignUpCustomInput"
                        value={grn.typeOfYarn}
                    >
                        <option value="">None</option>
                    </select>
                    <label className="orderInputLabel">Type of Yarn</label>
                </div>

                <div
                    className="accountReportTextField"
                    style={{
                        height: "50px",
                        margin: "2% 0",
                        width: "30%"
                    }}
                >
                    <select
                        className="loginInSignUpCustomInput"
                        value={grn.varietyOfYarn}
                    >
                        <option value="">None</option>
                    </select>
                    <label className="orderInputLabel">Variety Of Yarn</label>
                </div>

                <div
                    className="accountReportTextField"
                    style={{
                        height: "50px",
                        margin: "2% 0",
                        width: "30%"
                    }}
                >
                    <select
                        className="loginInSignUpCustomInput"
                        value={grn.colour}
                    >
                        <option value="">None</option>
                    </select>
                    <label className="orderInputLabel">Colour</label>
                </div>

                <div className="accountReportBottomButtonContainer">
                    <div />
                    <button className="addNewOrderFooterSubmitPopUp" onClick={() => setBagSection(true)}>
                        {`Bag & Weight`}
                    </button>
                    {
                        (indexVal === 0)
                        ?
                            <div style={{display: "flex", width: "120px", justifyContent: "space-around"}}><div /><PlusCircle size={28} weight="bold" color="#FFA412" onClick={() => addGrnSection()} /></div>

                        :
                            <div style={{display: "flex", width: "120px", justifyContent: "space-evenly"}}>
                                <PlusCircle size={28} weight="bold" color="#FFA412" onClick={() => addGrnSection()} />
                                <MinusCircle size={28} weight="bold" color="#FFA412" onClick={() => removeGrnSection(indexVal)}  />
                            </div>
                    }
                    
                </div>

            </>
        )
    }

    const renderBagWeightSection = () => {
        return (
            <div className="detailPopUpContainer">
                <div className="detailPopUpSection">

                    <div className="detailPopUpSectionHeader">
                        <X size={40} weight="bold" color="#F78D12" onClick={() => setBagSection(false)} />
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
                                                (indexVal !== 0) && <MinusCircle size={28} weight="bold" color="#FFA412" onClick={() => handleRemoveBagWeight(indexVal)}/> 
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
        <div className="entryFilterContainer" >
            <div className="enteryFilterSection" ref={previewAddGrnRef}>

                <div className="selectOrderPopUpHeaderContainer">
                    <p className="selectOrderPopUpHeaderText">Good Received Notes</p>
                </div>

                <div className="goodReceivedNotePopUpNameSection">
                    <p className="goodReceivedNotePopUpNameHeaderText">Knit King Appeal</p>

                    <div>
                        <p className="goodReceivedNotePopUpNameHeaderText">FDC No: CKWNMFN9292</p>
                        <p className="goodReceivedNotePopUpNameHeaderText" style={{marginTop: "5%"}}>
                            Date: 23/12/2022
                        </p>
                    </div>
                </div>

                <div className="goodReceivedNotePopUpMiddleSection">

                    {
                        grnSection.map((grn, indexVal) => {
                            return renderGrnMiddleSection(grn, indexVal)
                        })
                    }

                </div>

                <div className="goodReceivedNotePopUpSectionFooter">
                    <button
                        className="addNewOrderFooterCancel addNewOrderFooterMargin"
                        onClick={() => setShowGrnSection(false)}
                    >
                        Cancel
                    </button>
                    <button className="addNewOrderFooterSubmit">
                        Submit
                    </button>
                </div>

            </div>

            {
                (showBagSection === true) && renderBagWeightSection()
            }
        </div>
    )

}

export default GoodReceivedNotes;