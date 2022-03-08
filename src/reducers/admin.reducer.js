import {
  GET_ADMIN_CUSTOMERS,
  GET_ADMIN_VENDORS,
  GET_ADMIN_EMPLOYEE,
} from "../helpers/types";

const INITIAL_STATE = {
  users: [],
  employees: [],
  machines: [],
  fabrics: [],
  customers: [],
  vendors: [],
  customization: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ADMIN_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };

    case GET_ADMIN_VENDORS:
      return {
        ...state,
        vendors: action.payload,
      };

    case GET_ADMIN_EMPLOYEE:
      return {
        ...state,
        employees: action.payload,
      };

    default:
      return state;
  }
};
