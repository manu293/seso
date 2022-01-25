// imports
import React from "react";
import {Export, FadersHorizontal, Printer} from "phosphor-react";

// styles
import "../styles/accounts.css";

const CustomerStatement = () => {

    return (
        <div className="customerLedgerContainer">
            
            <div className="customerLedgerHeaderContainer">

                <div className="customerLedgerNoCardItemContainer">
                    <p className="customerLedgerNoCardHeader">STATEMENT OF ACCOUNTS</p>
                    <p className="customerLedgerNoCardSubHeader">04/08/2022 to 05/08/2022</p>
                </div>
                
                <div className="customerLedgerCardItemContainer">
                    <p className="customerLedgerCardHeader">OPENING BALANCE</p>
                    <p className="customerLedgerCardHeader customerLedgerHeaderMargin">1000</p>
                </div>

                <div className="customerLedgerCardItemContainer">
                    <p className="customerLedgerCardHeader">INVOICED AMOUNT</p>
                    <p className="customerLedgerCardHeader customerLedgerHeaderMargin">1000</p>
                </div>

                <div className="customerLedgerCardItemContainer">
                    <p className="customerLedgerCardHeader">RECEIVED</p>
                    <p className="customerLedgerCardHeader customerLedgerHeaderMargin">1000</p>
                </div>

                <div className="customerLedgerCardItemContainer">
                    <p className="customerLedgerCardHeader">BALANCE</p>
                    <p className="customerLedgerCardHeader customerLedgerHeaderMargin">1000</p>
                </div>

            </div>

            <div className="iconContainer">

                <div className="iconSection iconMargin">
                    <FadersHorizontal
                        size={22}
                        weight="bold"
                        color="#FFA412"
                    />
                </div>

                <div className="iconSection iconMargin">
                    <Printer
                        size={22}
                        weight="bold"
                        color="#FFA412"
                    />
                </div>

                <div className="iconSection iconMargin">
                    <Export
                        size={22}
                        weight="bold"
                        color="#FFA412"
                    />
                </div>

            </div>

            <div className="tableContainer">

                <table className="tableContainer">

                    <thead className="tableHeaderSection">
                        <tr className="tableHeaderSection">
                            <th className="tableHeaderContainer">Inv Date</th>
                            <th className="tableHeaderContainer">Customer Name</th>
                            <th className="tableHeaderContainer">Type</th>
                            <th className="tableHeaderContainer">Details</th>
                            <th className="tableHeaderContainer">Amount</th>
                            <th className="tableHeaderContainer">Payment Received</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr key="tabl1" className="tableDepthContainer">
                            <td className="tableDepth">08/04/2022</td>
                            <td className="tableDepth">vijay</td>
                            <td className="tableDepth">Service Invoice</td>
                            <td className="tableDepth">Invoice No:1 Due on 20/02/2022</td>
                            <td className="tableDepth">1088</td>
                            <td className="tableDepth"></td>
                        </tr>

                        <tr key="tabl2" className="tableDepthContainer">
                            <td className="tableDepth">08/04/2022</td>
                            <td className="tableDepth">Supreeth</td>
                            <td className="tableDepth">Payment Invoice</td>
                            <td className="tableDepth">Invoice No:1 Due on 20/02/2022</td>
                            <td className="tableDepth">1088</td>
                            <td className="tableDepth"></td>
                        </tr>

                        <tr key="tabl3" className="tableDepthContainer">
                            <td className="tableDepth">08/04/2022</td>
                            <td className="tableDepth">Ajay</td>
                            <td className="tableDepth">Service Invoice</td>
                            <td className="tableDepth">Invoice No:1 Due on 20/02/2022</td>
                            <td className="tableDepth">1088</td>
                            <td className="tableDepth">2211</td>
                        </tr>

                        <tr key="tabl4" className="tableDepthContainer">
                            <td className="tableDepth">08/04/2022</td>
                            <td className="tableDepth">vijay</td>
                            <td className="tableDepth">Service Invoice</td>
                            <td className="tableDepth">Invoice No:1 Due on 20/02/2022</td>
                            <td className="tableDepth">1088</td>
                            <td className="tableDepth"></td>
                        </tr>

                        <tr key="tabl5" className="tableDepthContainer">
                            <td className="tableDepth">08/04/2022</td>
                            <td className="tableDepth">vijay</td>
                            <td className="tableDepth">Service Invoice</td>
                            <td className="tableDepth">Invoice No:1 Due on 20/02/2022</td>
                            <td className="tableDepth">1088</td>
                            <td className="tableDepth">1222</td>
                        </tr>
                    </tbody>

                </table>

            </div>

        </div>
    )

}

export default CustomerStatement;