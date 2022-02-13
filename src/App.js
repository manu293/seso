// imports
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// local imports
import OrderReport from "./pages/orderReport";

import SignUp from "./pages/signUp";
import Login from "./pages/login";

import NotFound from "./pages/notFound";

import Dashboard from "./pages/dashboard";
import OrderEntry from "./pages/orderEntry";
import Accounts from "./pages/accounts";
import AccountReport from "./pages/accountReport";
import VendorOrderReport from "./pages/vendorOrderReport";
import ProductionReport from "./pages/productionReport";
import Customization from "./pages/customization";

import AdminUsers from "./pages/adminUser";
import AdminCustomer from "./pages/adminCustomer";
import AdminVendor from "./pages/adminVendor";
import AdminCompany from "./pages/adminCompany";
import AccountEntry from "./pages/accountEntry";

import OrderGrn from "./pages/orderGrn";
import OrderProductionEntry from "./pages/orderProductionEntry";
import OrderInvoice from "./pages/orderInvoice";
import OrderFabricDelivery from "./pages/orderFabricDelivery";
import OrderYarnReturn from "./pages/orderYarnReturn";

import SubContractVendorOrder from "./pages/subcontractVendorOrder";
import SubContractYarnDelivery from "./pages/subContractYarnDelivery";
import SubContractFabricReceived from "./pages/subContractFabricDelivery";
import SubContractYarnReturn from "./pages/subContractYarnReturn";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/orders/orderEntry" element={<OrderEntry />} />
                    <Route path="/orders/grn" element={<OrderGrn />} />
                    <Route path="/orders/productionEntry" element={<OrderProductionEntry />} />
                    <Route path="/orders/invoices" element={<OrderInvoice />} />
                    <Route path="/orders/fabricDelivery" element={<OrderFabricDelivery />} />
                    <Route path="/orders/yarnReturn" element={<OrderYarnReturn />} />

                    <Route path="/subcontract/vendorOrder" element={<SubContractVendorOrder />} />
                    <Route path="/subcontract/vendorYarnDelivery" element={<SubContractYarnDelivery />} />
                    <Route path="/subcontract/fabricReceived" element={<SubContractFabricReceived />} />
                    <Route path="/subcontract/yarnReceived" element={<SubContractYarnReturn />} />

                    <Route path="/admin/company" element={<AdminCompany />} />
                    <Route path="/admin/users" element={<AdminUsers />} />
                    <Route path="/admin/vendor" element={<AdminVendor />} />
                    <Route path="/admin/customer" element={<AdminCustomer />} />
                    <Route path="/admin/customization" element={<Customization />} />

                    <Route path="/report/orderReport" element={<OrderReport />} />
                    <Route path="/report/vendorOrderReport" element={<VendorOrderReport />} />
                    <Route path="/report/productionReport" element={<ProductionReport />} />

                    <Route path="/accounts" element={<Accounts />} />
                    <Route path="/accounts/report" element={<AccountReport />} />
                    <Route path="/accounts/accountEntry" element={<AccountEntry />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        )
    }

}

export default App;