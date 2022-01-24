// imports
import React from "react";
import { useLocation } from 'react-router-dom';
import {
    Queue,
    SignOut,
    User,
    ClipboardText,
    CheckSquareOffset,
    ChartPieSlice,
    AddressBook,
    CirclesFour
} from "phosphor-react";

// local imports
import NavbarIcon from "../assets/icon.png";

// styles
import "../styles/navbar.css";

const Navbar = () => {
    let activePath = "dashboard";
    const location = useLocation();

    switch(location.pathname) {
        case "/dashboard":
            activePath = "dashboard";
            break;

        case "/orders":
            activePath = "orders";
            break;

        case "/subcontract":
            activePath = "subcontract";
            break;

        case "/report":
            activePath = "report";
            break;

        case "/admin":
            activePath = "admin";
            break;

        case "/accounts":
            activePath = "accounts";
            break;

        default:
            activePath = "dashboard";
            break;
    }

    return (
        <div className="navbarContainer">
            
            <div className="navbarIconContainer">
                
                <div className="navbarIconSubContainer">
                    <img
                        src={NavbarIcon}
                        alt="Navbar"
                        className="navbarIcon"
                    />

                    <p className="navbarIconText">SESO</p>
                </div>

                <Queue
                    size={22}
                    weight="bold"
                    color="#fff"
                    className="navbarThirdPartIcon"
                />
            </div>

            <div className="navContainer">

                <div className={(activePath === "dashboard") ? "navItemActiveContainer" : "navItemContainer"}>
                    <div className={(activePath === "dashboard") ? "navActivePadding" : "navInactivePadding"}>
                        <CirclesFour size={16} weight="bold" color="#fff" className="navbarThirdPartIcon" />
                        <p className={(activePath === "dashboard") ? "navItemActiveText" : "navItemText"}>Dashboard</p>
                    </div>
                </div>

                <div className={(activePath === "orders") ? "navItemActiveContainer navItemMargin" : "navItemContainer navItemMargin"}>
                    <div className={(activePath === "orders") ? "navActivePadding" : "navInactivePadding"}>
                        <ClipboardText size={16} weight="bold" color="#fff" className="navbarThirdPartIcon" />
                        <p className={(activePath === "orders") ? "navItemActiveText" : "navItemText"}>Orders</p>
                    </div>
                </div>

                <div className={(activePath === "subcontract") ? "navItemActiveContainer navItemMargin" : "navItemContainer navItemMargin"}>
                    <div className={(activePath === "subcontract") ? "navActivePadding" : "navInactivePadding"}>
                        <CheckSquareOffset size={16} weight="bold" color="#fff" className="navbarThirdPartIcon" />
                        <p className={(activePath === "subcontract") ? "navItemActiveText" : "navItemText"}>Subcontract</p>
                    </div>
                </div>

                <div className={(activePath === "report") ? "navItemActiveContainer navItemMargin" : "navItemContainer navItemMargin"}>
                    <div className={(activePath === "orders") ? "navActivePadding" : "navInactivePadding"}>
                        <ChartPieSlice size={16} weight="bold" color="#fff" className="navbarThirdPartIcon" />
                        <p className={(activePath === "report") ? "navItemActiveText" : "navItemText"}>Report</p>
                    </div>
                </div>

                {   (activePath === "report") &&
                    (
                        <ul className="navSubListContainer">
                            <li className="navSubItemText">
                                <div className="navItemCircle" /> &nbsp; Order Report
                            </li>
                            <li className="navSubItemText">
                                <div className="navItemCircle" /> &nbsp; Vendor Report
                            </li>
                            <li className="navSubItemText">
                                <div className="navItemCircle" /> &nbsp; Production Report
                            </li>
                        </ul>
                    )
                }

                <div className={(activePath === "admin") ? "navItemActiveContainer navItemMargin" : "navItemContainer navItemMargin"}>
                    <div className={(activePath === "orders") ? "navActivePadding" : "navInactivePadding"}>
                        <User size={16} weight="bold" color="#fff" className="navbarThirdPartIcon" />
                        <p className={(activePath === "admin") ? "navItemActiveText" : "navItemText"}>Admin</p>
                    </div>
                </div>

                {   (activePath === "admin") &&
                    (
                        <ul className="navSubListContainer">
                            <li className="navSubItemText">
                                <div className="navItemCircle" /> &nbsp; Company
                            </li>
                            <li className="navSubItemText">
                                <div className="navItemCircle" /> &nbsp; Customer
                            </li>
                            <li className="navSubItemText">
                                <div className="navItemCircle" /> &nbsp; Vendor
                            </li>
                            <li className="navSubItemText">
                                <div className="navItemCircle" /> &nbsp; User
                            </li>
                            <li className="navSubItemText">
                                <div className="navItemCircle" /> &nbsp; User
                            </li>
                        </ul>
                    )
                }

                <div className={(activePath === "accounts") ? "navItemActiveContainer navItemMargin" : "navItemContainer navItemMargin"}>
                    <div className={(activePath === "accounts") ? "navActivePadding" : "navInactivePadding"}>
                        <AddressBook size={16} weight="bold" color="#fff" className="navbarThirdPartIcon" />
                        <p className={(activePath === "accounts") ? "navItemActiveText" : "navItemText"}>Accounts</p>
                    </div>
                </div>

                {   (activePath === "accounts") &&
                    (
                        <ul className="navSubListContainer">
                            <li className="navSubItemText">
                            <div className="navItemCircle" /> &nbsp; Accounts Entry
                            </li>
                            <li className="navSubItemText">
                                <div className="navItemCircle" /> &nbsp; Accounts Report
                            </li>
                        </ul>
                    )
                }

            </div>

            <div className="navbarFooterContainer">
                <SignOut
                    size={18}
                    weight="bold"
                    color="#FF6800"
                    className="navbarThirdPartIcon"
                />
                <p className="navbarLogotText">Logout</p>
            </div>

        </div>
    )
    
}

export default Navbar;