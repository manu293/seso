import { GET_CREDIT_NOTES } from "../helpers/types";

const INITIAL_STATE = {
  creditNotes: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CREDIT_NOTES:
      return {
        ...state,
        creditNotes: action.payload,
      };

    default:
      return state;
  }
};
