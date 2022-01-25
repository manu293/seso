// imports
import React from "react";
import {Bell, MagnifyingGlass} from "phosphor-react";

// styles
import "../styles/customHeader.css";

const CustomHeader = () => {

    return (
        <div className="customHeaderContainer">
            
            <div className="customHeaderSearchContainer">
                <input
                    type="text"
                    className="customHeaderInput"
                    placeholder="Search"
                />
                <MagnifyingGlass size={18} weight="bold" />
            </div>

            <div className="customHeaderNotificationContainer">
                <Bell size={18} weight="bold" />
            </div>

            <div className="customProfileContainer" />

        </div>
    )

}

export default CustomHeader;