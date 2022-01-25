// imports
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// local imports
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import Dashboard from "./pages/dashboard";
import OrderEntry from "./pages/orderEntry";
import Accounts from "./pages/accounts";
import AccountReport from "./pages/accountReport";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/orders" element={<OrderEntry />}>
                        <Route path="orderEntry" element={<OrderEntry />} />
                    </Route>
                    <Route path="/accounts" element={<Accounts />} />
                    <Route path="/accounts/report" element={<AccountReport />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        )
    }

}

export default App;