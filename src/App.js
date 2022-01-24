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

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        )
    }

}

export default App;