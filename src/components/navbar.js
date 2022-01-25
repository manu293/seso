// imports
import React from "react";
import { useLocation, Link } from 'react-router-dom';
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
    let subActivePath = "";
    const location = useLocation();

    console.log("location", location.pathname)

    switch(location.pathname) {
        case "/dashboard":
            activePath = "dashboard";
            break;

        case "/orders/orderEntry":
            activePath = "orders";
            subActivePath = "orderEntry";
            break;

        case "/orders/grn":
            activePath = "orders";
            subActivePath = "grn";
            break;

        case "/orders/productionEntry":
            activePath = "orders";
            subActivePath = "productionEntry";
            break;

        case "/orders/fabricDelivery":
            activePath = "orders";
            subActivePath = "fabricDelivery";
            break;

        case "/orders/yarnReturn":
            activePath = "orders";
            subActivePath = "yarnReturn";
            break;
        
        case "/orders/invoices":
            activePath = "orders";
            subActivePath = "invoices";
            break;

        case "/subcontract/vendorOrder":
            activePath = "subcontract";
            subActivePath = "vendorOrder";
            break;

        case "/subcontract/fabricReceived":
            activePath = "subcontract";
            subActivePath = "fabricReceived";
            break;

        case "/subcontract/vendorYarnDelivery":
            activePath = "subcontract";
            subActivePath = "yarnDelivery";
            break;

        case "/subcontract/yarnReceived":
            activePath = "subcontract";
            subActivePath = "yarnReceived";
            break;

        case "/report/orderReport":
            activePath = "report";
            subActivePath = "orderReport";
            break;

        case "/report/vendorOrderReport":
            activePath = "report";
            subActivePath = "vendorOrderReport";
            break;

        case "/report/productionReport":
            activePath = "report";
            subActivePath = "productionReport";
            break;

        case "/admin/company":
            activePath = "admin";
            subActivePath = "company";
            break;

        case "/admin/customer":
            activePath = "admin";
            subActivePath = "customer";
            break;


        case "/admin/vendor":
            activePath = "admin";
            subActivePath = "vendor";
            break;


        case "/admin/user":
            activePath = "admin";
            subActivePath = "user";
            break;


        case "/admin/customization":
            activePath = "admin";
            subActivePath = "customization";
            break;

        case "/accounts":
            activePath = "accounts";
            subActivePath = "";
            break;

        case "/accounts/entry":
            activePath = "accounts";
            subActivePath = "accountEntry";
            break;

        case "/accounts/report":
            activePath = "accounts";
            subActivePath = "accountReport";
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

                <Link to="/dashboard" className="linkStyle">
                    <div className={(activePath === "dashboard") ? "navItemActiveContainer" : "navItemContainer"}>
                        <div className={(activePath === "dashboard") ? "navActivePadding" : "navInactivePadding"}>
                            <CirclesFour size={16} weight="bold" color="#fff" className="navbarThirdPartIcon" />
                            <p className={(activePath === "dashboard") ? "navItemActiveText" : "navItemText"}>Dashboard</p>
                        </div>
                    </div>
                </Link>

                <Link to="/orders/orderEntry" className="linkStyle">
                    <div className={(activePath === "orders") ? "navItemActiveContainer navItemMargin" : "navItemContainer navItemMargin"}>
                        <div className={(activePath === "orders") ? "navActivePadding" : "navInactivePadding"}>
                            <ClipboardText size={16} weight="bold" color="#fff" className="navbarThirdPartIcon" />
                            <p className={(activePath === "orders") ? "navItemActiveText" : "navItemText"}>Orders</p>
                        </div>
                    </div>
                </Link>

                {   (activePath === "orders") &&
                    (
                        <ul className="navSubListContainer">
                            <li className="navSubItemText">
                                <div className={(subActivePath === "orderEntry") ? "navItemActiveCircle" : "navItemCircle"} />
                                &nbsp;&nbsp; <p className={(subActivePath === "orderEntry") ? "navSubItemActiveText" : ""}>Order Entry</p>
                            </li>
                            <li className="navSubItemText">
                                <div className={(subActivePath === "grn") ? "navItemActiveCircle" : "navItemCircle"} />
                                &nbsp;&nbsp; <p className={(subActivePath === "grn") ? "navSubItemActiveText" : ""}>GRN</p>
                            </li>
                            <li className="navSubItemText">
                                <div className={(subActivePath === "productionEntry") ? "navItemActiveCircle" : "navItemCircle"} />
                                &nbsp;&nbsp; <p className={(subActivePath === "productionEntry") ? "navSubItemActiveText" : ""}>Production Entry</p>
                            </li>
                            <li className="navSubItemText">
                                <div className={(subActivePath === "fabricDelivery") ? "navItemActiveCircle" : "navItemCircle"} />
                                &nbsp;&nbsp; <p className={(subActivePath === "fabricDelivery") ? "navSubItemActiveText" : ""}>Fabric Delivery</p>
                            </li>
                            <li className="navSubItemText">
                                <div className={(subActivePath === "yarnReturn") ? "navItemActiveCircle" : "navItemCircle"} /> &nbsp; Yarn Return Note
                            </li>
                            <li className="navSubItemText">
                                <div className={(subActivePath === "invoices") ? "navItemActiveCircle" : "navItemCircle"} />
                                &nbsp;&nbsp; <p className={(subActivePath === "invoices") ? "navSubItemActiveText" : ""}>Invoices</p>
                            </li>
                        </ul>
                    )
                }

                <div className={(activePath === "subcontract") ? "navItemActiveContainer navItemMargin" : "navItemContainer navItemMargin"}>
                    <div className={(activePath === "subcontract") ? "navActivePadding" : "navInactivePadding"}>
                        <CheckSquareOffset size={16} weight="bold" color="#fff" className="navbarThirdPartIcon" />
                        <p className={(activePath === "subcontract") ? "navItemActiveText" : "navItemText"}>Subcontract</p>
                    </div>
                </div>

                {   (activePath === "subcontract") &&
                    (
                        <ul className="navSubListContainer">
                            <li className="navSubItemText">
                                <div className={(subActivePath === "vendorOrder") ? "navItemActiveCircle" : "navItemCircle"} />
                                &nbsp;&nbsp; <p className={(subActivePath === "vendorOrder") ? "navSubItemActiveText" : ""}>Vendor Order</p>
                            </li>
                            <li className="navSubItemText">
                                <div className={(subActivePath === "yarnDelivery") ? "navItemActiveCircle" : "navItemCircle"} />
                                &nbsp;&nbsp; <p className={(subActivePath === "yarnDelivery") ? "navSubItemActiveText" : ""}>Yarn Delivery</p>
                            </li>
                            <li className="navSubItemText">
                                <div className={(subActivePath === "fabricReceived") ? "navItemActiveCircle" : "navItemCircle"} />
                                &nbsp;&nbsp; <p className={(subActivePath === "fabricReceived") ? "navSubItemActiveText" : ""}>Fabric Received</p>
                            </li>
                            <li className="navSubItemText">
                                <div className={(subActivePath === "yarnReurn") ? "navItemActiveCircle" : "navItemCircle"} />
                                &nbsp;&nbsp; <p className={(subActivePath === "yarnReurn") ? "navSubItemActiveText" : ""}>Yarn Return</p>
                            </li>
                        </ul>
                    )
                }

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
                                <div className={(subActivePath === "orderReport") ? "navItemActiveCircle" : "navItemCircle"} />
                                &nbsp;&nbsp; <p className={(subActivePath === "orderReport") ? "navSubItemActiveText" : ""}>Order Report</p>
                            </li>
                            <li className="navSubItemText">
                                <div className={(subActivePath === "vendorOrderReport") ? "navItemActiveCircle" : "navItemCircle"} />
                                &nbsp;&nbsp; <p className={(subActivePath === "vendorOrderReport") ? "navSubItemActiveText" : ""}>Vendor Order Report</p>
                            </li>
                            <li className="navSubItemText">
                                <div className={(subActivePath === "productionReport") ? "navItemActiveCircle" : "navItemCircle"} />
                                &nbsp;&nbsp; <p className={(subActivePath === "productionReport") ? "navSubItemActiveText" : ""}>Production Report</p>
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

                <Link to="/accounts" className="linkStyle">
                    <div className={(activePath === "accounts") ? "navItemActiveContainer navItemMargin" : "navItemContainer navItemMargin"}>
                        <div className={(activePath === "accounts") ? "navActivePadding" : "navInactivePadding"}>
                            <AddressBook size={16} weight="bold" color="#fff" className="navbarThirdPartIcon" />
                            <p className={(activePath === "accounts") ? "navItemActiveText" : "navItemText"}>Accounts</p>
                        </div>
                    </div>
                </Link>

                {   (activePath === "accounts") &&
                    (
                        <ul className="navSubListContainer">
                            <li className="navSubItemText">
                                <div className={(subActivePath === "orderReport") ? "navItemActiveCircle" : "navItemCircle"} />
                                &nbsp;&nbsp; <p className={(subActivePath === "accountEntry") ? "navSubItemActiveText" : ""}>Account Entry</p>
                            </li>

                            <li className="navSubItemText">
                                <div className={(subActivePath === "orderReport") ? "navItemActiveCircle" : "navItemCircle"} />
                                &nbsp;&nbsp; <p className={(subActivePath === "accountReport") ? "navSubItemActiveText" : ""}>Account Report</p>
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