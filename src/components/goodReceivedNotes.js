// imports
import React from "react";
import {XCircle} from "phosphor-react";

const GoodReceivedNotes = () => {

    return (
        <div className="entryFilterContainer">
            <div className="enteryFilterSection">

                <div className="selectOrderPopUpHeaderContainer">
                    <p className="selectOrderPopUpHeaderText">Good Received Notes</p>
                </div>

                <div className="goodReceivedNotePopUpSection">

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
                    
                        <div className="accountReportTextField">
                            <select value="">
                                <option value="">Select Counts</option>
                                <option value="c1">Count</option>
                            </select>
                            <label className="orderInputLabel" style={{top: "10%"}}>Counts</label>
                        </div>

                        <div className="accountReportTextField">
                            <select value="">
                                <option value="">Select Counts</option>
                                <option value="c1">Count</option>
                            </select>
                            <label className="orderInputLabel" style={{top: "10%"}}>Counts</label>
                        </div>

                    </div>

                    <div className="goodReceivedNotePopUpSectionFooter">
                        <button className="addNewOrderFooterCancel addNewOrderFooterMargin">
                            Cancel
                        </button>
                        <button className="addNewOrderFooterSubmit">
                            Submit
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default GoodReceivedNotes;