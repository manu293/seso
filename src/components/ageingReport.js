// imports
import React from "react";
import {Export, FadersHorizontal, Printer} from "phosphor-react";

// styles
import "../styles/accounts.css";

const AgeingReport = () => {

    return (
        <div className="customerLedgerContainer">
            
            <div className="customerLedgerHeaderContainer">

                <div className="customerLedgerNoCardItemContainer">
                    <p className="customerLedgerNoCardHeader">AGEING REPORT</p>
                    <p className="customerLedgerNoCardSubHeader">04/08/2022 to 05/08/2022</p>
                </div>
                
                <div className="customerLedgerCardItemContainer">
                    <p className="customerLedgerCardHeader">0 - 30 Days</p>
                    <p className="customerLedgerCardHeader customerLedgerHeaderMargin">1000</p>
                </div>

                <div className="customerLedgerCardItemContainer">
                    <p className="customerLedgerCardHeader">31 - 60 Days</p>
                    <p className="customerLedgerCardHeader customerLedgerHeaderMargin">1000</p>
                </div>

                <div className="customerLedgerCardItemContainer">
                    <p className="customerLedgerCardHeader">61 - 90 Days</p>
                    <p className="customerLedgerCardHeader customerLedgerHeaderMargin">1000</p>
                </div>

                <div className="customerLedgerCardItemContainer">
                    <p className="customerLedgerCardHeader">Above 90 Days</p>
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

                <table id="customerLedgerTable" className="tableContainer">

                    <thead className="tableHeaderSection">
                        <tr className="tableHeaderSection">
                            <th className="tableHeaderContainer">Inv Date</th>
                            <th className="tableHeaderContainer">Customer Name</th>
                            <th className="tableHeaderContainer">Details</th>
                            <th className="tableHeaderContainer">Amount</th>
                            <th className="tableHeaderContainer">No Of Days</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr key="fb0db953-e3b1-4727-a670-487201cd757d" className="tableDepthContainer">
                            <td className="tableDepth">08/04/2022</td>
                            <td className="tableDepth">vijay</td>
                            <td className="tableDepth">Invoice No:1 Due on 20/02/2022</td>
                            <td className="tableDepth">1088</td>
                            <td className="tableDepth"></td>
                        </tr>

                        <tr key="fb0db953-e3b1-4727-a670-487201cd758e" className="tableDepthContainer">
                            <td className="tableDepth">08/04/2022</td>
                            <td className="tableDepth">Supreeth</td>
                            <td className="tableDepth">Invoice No:1 Due on 20/02/2022</td>
                            <td className="tableDepth">1088</td>
                            <td className="tableDepth"></td>
                        </tr>

                        <tr key="fb0db953-e3b1-4727-a670-487201cd759f" className="tableDepthContainer">
                            <td className="tableDepth">08/04/2022</td>
                            <td className="tableDepth">Ajay</td>
                            <td className="tableDepth">Invoice No:1 Due on 20/02/2022</td>
                            <td className="tableDepth">1088</td>
                            <td className="tableDepth">2211</td>
                        </tr>

                        <tr key="fb0db953-e3b1-4727-a670-487201cd751g" className="tableDepthContainer">
                            <td className="tableDepth">08/04/2022</td>
                            <td className="tableDepth">vijay</td>
                            <td className="tableDepth">Invoice No:1 Due on 20/02/2022</td>
                            <td className="tableDepth">1088</td>
                            <td className="tableDepth"></td>
                        </tr>

                        <tr key="fb0db953-e3b1-4727-a670-487201cd752h" className="tableDepthContainer">
                            <td className="tableDepth">08/04/2022</td>
                            <td className="tableDepth">vijay</td>
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

export default AgeingReport;