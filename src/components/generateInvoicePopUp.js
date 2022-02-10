// imports
import React from "react";
import {
    PlusCircle,
    MinusCircle
} from "phosphor-react"

// local imports

const GenerateInvoicePopUp = (props) => {

    const {newOrderInvoice, addNewOrderInvoice, removeNewOrderInvoice,
        setShowNewOrderInvoice} = props;

    const renderInvoiceSection = () => {
        return newOrderInvoice.map((orderInvoice, indexVal) => {
            return (
                                    
                <div className="middleSectionContainer">

                    <div className="middleSectionContainerHeader">
                        <p className="middleSectionContainerMainHeader">ORDER ID</p>
                        <p className="middleSectionContainerSubHeader">ORD1234</p>
                    </div>

                    <div className="middleSectionContainerBody">

                        <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "30%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="documentDate"
                                placeholder="Enter Document Date"
                                value={orderInvoice.documentDate}
                            />
                            <label className="orderInputLabel">Document Date</label>
                        </div>

                        <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "30%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="orderId"
                                placeholder="Enter Order Id"
                                value={orderInvoice.orderId}
                            />
                            <label className="orderInputLabel">Order Id</label>
                        </div>

                        <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "30%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="invoiceNo"
                                placeholder="Enter Invoice No"
                                value={orderInvoice.invoiceNo}
                            />
                            <label className="orderInputLabel">Invoice No</label>
                        </div>

                        <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "70%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="fabricProgram"
                                placeholder="Enter Fabric Program"
                                value={orderInvoice.fabricProgram}
                            />
                            <label className="orderInputLabel">Fabric Program</label>
                        </div>

                        <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "30%"}}>
                            <input
                                className="loginInSignUpCustomInput"
                                type="text"
                                id="price"
                                placeholder="Enter Price"
                                value={orderInvoice.price}
                            />
                            <label className="orderInputLabel">Price</label>
                        </div>

                        <div style={{width: "100%", display: "flex", marginTop: "2%", justifyContent: "space-between"}}>

                            <div style={{width: "65%", display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>

                                <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "40%"}}>
                                    <input
                                        className="loginInSignUpCustomInput"
                                        type="text"
                                        id="fDCNo"
                                        placeholder="Enter F.DC No"
                                        value={orderInvoice.fdcNo}
                                    />
                                    <label className="orderInputLabel">F.DC No</label>
                                </div>

                                <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "40%"}}>
                                    <input
                                        className="loginInSignUpCustomInput"
                                        type="text"
                                        id="status"
                                        placeholder="Enter Status"
                                        value={orderInvoice.status}
                                    />
                                    <label className="orderInputLabel">Status</label>
                                </div>

                                <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "40%"}}>
                                    <input
                                        className="loginInSignUpCustomInput"
                                        type="text"
                                        id="invoiceType"
                                        placeholder="Enter Invoice Type"
                                        value={orderInvoice.invoiceType}
                                    />
                                    <label className="orderInputLabel">Invoice Type</label>
                                </div>

                                <div className="filterTextFieldContainer orderEntryInputMargin" style={{width: "40%"}}>
                                    <input
                                        className="loginInSignUpCustomInput"
                                        type="text"
                                        id="invoiceValue"
                                        placeholder="Enter Invoice Value"
                                        value={orderInvoice.invoiceValue}
                                    />
                                    <label className="orderInputLabel">Invoice Value</label>
                                </div>

                            </div>

                            <div style={{width: "30%", display: "flex", flexDirection: "column", marginTop: "2%", justifyContent: "space-around" }}>

                                <div style={{width: "100%", display: "flex"}}>
                                    <div className="yarnContainer">
                                        <input
                                            type="radio"
                                            id="yarnGrn"
                                            value="yarnGrn"
                                            checked={(orderInvoice.invoiceValue === true) ? true : false}
                                        />
                                        <label className="yarnContainerLabel" htmlFor="yarnGrn">With GST</label>
                                    </div>
                                </div>

                                {
                                    (indexVal === 0)
                                    ?
                                        <div style={{width: "100%", display: "flex", justifyContent: "flex-end"}}>
                                            <PlusCircle size={28} weight="bold" color="#FFA412" onClick={() => addNewOrderInvoice()} />
                                        </div>
                                    :
                                        <div style={{width: "100%", display: "flex", alignItems: "center" ,justifyContent: "space-around"}}>
                                            <PlusCircle size={28} weight="bold" color="#FFA412" onClick={() => addNewOrderInvoice()}/>
                                            <MinusCircle size={28} weight="bold" color="#FFA412" onClick={() => removeNewOrderInvoice(indexVal)} />
                                        </div>
                                }                              
                            </div>

                        </div>

                    </div>

                </div>

            )
        });
    }

    return (
        <div className="entryFilterContainer">
            <div className="enteryFilterSection">

                <div className="selectOrderPopUpHeaderContainer">
                    <p className="selectOrderPopUpHeaderText">Invoice</p>
                </div>

                <div className="generateInvoiceMiddleSection">
                    {renderInvoiceSection()}
                </div>

                <div className="goodReceivedNotePopUpSectionFooter">
                    <button
                        onClick={() => setShowNewOrderInvoice(false)}
                        className="addNewOrderFooterCancel addNewOrderFooterMargin"
                    >
                        Cancel
                    </button>
                    <button className="addNewOrderFooterSubmit">
                        Submit
                    </button>
                </div>

            </div>
        </div>
    )

}

export default GenerateInvoicePopUp;