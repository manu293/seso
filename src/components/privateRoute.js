// imports
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

// local imports

const PrivateRoute = (props) => {
    const {children, loggedIn} = props;

    if (loggedIn === true) {
        return children;
    } else {
        return (
            <Navigate to="/login" replace={true} />
        )
    }
}

const mapStateToProps = (state) => {

    return {
        loggedIn: state.auth.loggedIn,
    }

}

export default connect(mapStateToProps, null)(PrivateRoute);