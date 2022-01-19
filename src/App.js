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

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        )
    }

}

export default App;