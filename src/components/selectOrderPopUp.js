// imports
import React, {useState} from "react";
import {
    MagnifyingGlass,
    Eye,
    DotsThreeVertical,
    XCircle
} from "phosphor-react";

const SelectOrderPopUp = (props) => {
    const {hideOrderPopUp} = props;
    const [searchField, setSearchField] = useState("");

    return (
        <div className="entryFilterContainer">
            <div className="enteryFilterSection">

                <div className="selectOrderPopUpHeaderContainer">
                    <p className="selectOrderPopUpHeaderText">Select the order</p>
                    <div className="selectOrderPopUpInput">
                        <input
                            className="orderPopUpInputField"
                            placeholder="Search"
                            type="text"
                            onChange={(e) => setSearchField(e.target.value)}
                            value={searchField}
                        />
                        <MagnifyingGlass size={20} weight="bold" color="#C8C8C8" />
                    </div>
                    <XCircle
                        size={30}
                        weight="bold"
                        color="#F78D12"
                        onClick={() => hideOrderPopUp(false)}
                    />
                </div>

                <div className="orderEntryMiddleContainer">
                    <table className="orderEntryTable">
                        <thead>
                            <tr className="orderEntryTableHeader">
                                <th className="orderEntryTableHeaderText">Date</th>
                                <th className="orderEntryTableHeaderText">Order Id</th>
                                <th className="orderEntryTableHeaderText">Customer Name</th>
                                <th className="orderEntryTableHeaderText">Order Description</th>
                                <th className="orderEntryTableHeaderText">Order Status</th>
                                <th className="orderEntryTableHeaderText">Preview</th>
                                <th className="orderEntryTableHeaderText">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="orderPopUpTableRow">
                                <td className="orderEntryTableText">2/20/2022</td>
                                <td className="orderEntryTableText">ORD1235</td>
                                <td className="orderEntryTableText">New Appeal</td>
                                <td className="orderEntryTableText">Jersy</td>
                                <td className="orderEntryTableText">
                                    <div className="orderStatusContainer">
                                        <div className="circleYellow" />
                                        <p className="orderStatusText"> 1000 / 200</p>&nbsp;&nbsp;<p className="orderStatusSubText">in kg</p>
                                    </div>
                                </td>
                                <td className="orderEntryTableText"><Eye size={23} weight="bold" color="#F78D12" /></td>
                                <td className="orderEntryTableText"><DotsThreeVertical size={23} weight="bold" color="#F78D12" /></td>
                            </tr>

                            <tr className="orderPopUpTableRow">
                                <td className="orderEntryTableText">2/20/2022</td>
                                <td className="orderEntryTableText">ORD1235</td>
                                <td className="orderEntryTableText">New Appeal</td>
                                <td className="orderEntryTableText">Jersy</td>
                                <td className="orderEntryTableText">
                                    <div className="orderStatusContainer">
                                        <div className="circleGreen" />
                                        <p className="orderStatusText"> 1000 / 200</p>&nbsp;&nbsp;<p className="orderStatusSubText">in kg</p>
                                    </div>
                                </td>
                                <td className="orderEntryTableText"><Eye size={23} weight="bold" color="#F78D12" /></td>
                                <td className="orderEntryTableText"><DotsThreeVertical size={23} weight="bold" color="#F78D12" /></td>
                            </tr>

                            <tr className="orderPopUpTableRow">
                                <td className="orderEntryTableText">2/20/2022</td>
                                <td className="orderEntryTableText">ORD1235</td>
                                <td className="orderEntryTableText">New Appeal</td>
                                <td className="orderEntryTableText">Jersy</td>
                                <td className="orderEntryTableText">
                                    <div className="orderStatusContainer">
                                        <div className="circleRed" />
                                        <p className="orderStatusText"> 1000 / 200</p>&nbsp;&nbsp;<p className="orderStatusSubText">in kg</p>
                                    </div>
                                </td>
                                <td className="orderEntryTableText"><Eye size={23} weight="bold" color="#F78D12" /></td>
                                <td className="orderEntryTableText"><DotsThreeVertical size={23} weight="bold" color="#F78D12" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="orderEntryFooterContainer orderPopUpBorderTop">

                    <div className="orderEntryFooterPageSection">
                        <p className="orderEntryRightText">Page No</p>
                        <div className="orderEntryPageNumberContainer">
                            <p className="orderEntryActivePageNumber">1</p>
                            <p className="orderEntryInactivePageNumber">2</p>
                            <p className="orderEntryInactivePageNumber">3</p>
                            <p className="orderEntryInactivePageNumber">4</p>
                        </div>
                    </div>

                    <p className="orderEntryRightText">Showing 1 of 4</p>
                </div>

            </div>
        </div>
    )

}

export default SelectOrderPopUp;