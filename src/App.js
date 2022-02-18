// imports
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// local imports
import PrivateRoute from "./components/privateRoute";

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

                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/orders/orderEntry"
                        element={
                            <PrivateRoute>
                                <OrderEntry />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/orders/grn"
                        element={
                            <PrivateRoute>
                                <OrderGrn />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/orders/productionEntry"
                        element={
                            <PrivateRoute>
                                <OrderProductionEntry />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/orders/invoices"
                        element={
                            <PrivateRoute>
                                <OrderInvoice />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/orders/fabricDelivery"
                        element={
                            <PrivateRoute>
                                <OrderFabricDelivery />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/orders/yarnReturn"
                        element={
                            <PrivateRoute>
                                <OrderYarnReturn />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/subcontract/vendorOrder"
                        element={
                            <PrivateRoute>
                                <SubContractVendorOrder />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/subcontract/vendorYarnDelivery"
                        element={
                            <PrivateRoute>
                                <SubContractYarnDelivery />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/subcontract/fabricReceived"
                        element={
                            <PrivateRoute>
                                <SubContractFabricReceived />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/subcontract/yarnReceived"
                        element={
                            <PrivateRoute>
                                <SubContractYarnReturn />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/admin/company"
                        element={
                            <PrivateRoute>
                                <AdminCompany />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/admin/users"
                        element={
                            <PrivateRoute>
                                <AdminUsers />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/admin/vendor"
                        element={
                            <PrivateRoute>
                                <AdminVendor />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/admin/customer"
                        element={
                            <PrivateRoute>
                                <AdminCustomer />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/admin/customization"
                        element={
                            <PrivateRoute>
                                <Customization />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/report/orderReport"
                        element={
                            <PrivateRoute>
                                <OrderReport />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/report/vendorOrderReport"
                        element={
                            <PrivateRoute>
                                <VendorOrderReport />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/report/productionReport"
                        element={
                            <PrivateRoute>
                                <ProductionReport />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/accounts"
                        element={
                            <PrivateRoute>
                                <Accounts />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/accounts/report"
                        element={
                            <PrivateRoute>
                                <AccountReport />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/accounts/accountEntry"
                        element={
                            <PrivateRoute>
                                <AccountEntry />
                            </PrivateRoute>
                        }
                    />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        )
    }

}

export default App;