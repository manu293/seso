import {
    GET_ADMIN_CUSTOMERS
} from "../helpers/types";

const INITIAL_STATE = {
    users: [],
    companies: [],
    customers: [],
    vendors: [],
    customization: null,
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case GET_ADMIN_CUSTOMERS:
            return {
                ...state,
                customers: action.payload,
            }

        default:
            return state;
    }

}