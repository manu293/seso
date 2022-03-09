// local imports
import { SESO_BASE_URL } from "../helpers/api";
import { GET_CREDIT_NOTES, GET_DEBIT_NOTES } from "../helpers/types";

// credit notes
export const addAccountsCreditNotes = (history, creditNotes) => async () => {
  await SESO_BASE_URL.post(
    "/accounts/creditnote",
    { ...creditNotes },
    { withCredentials: true }
  )
    .then()
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

export const getAccountsCreditNotes = (history) => async (dispatch) => {
  await SESO_BASE_URL.get("/accounts/creditnote", { withCredentials: true })
    .then((creditNoteResp) => {
      if (
        creditNoteResp.status === 200 &&
        creditNoteResp.data &&
        creditNoteResp.data.length > 0
      ) {
        dispatch({
          type: GET_CREDIT_NOTES,
          payload: creditNoteResp.data,
        });
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

// debit notes
export const addAccountsDebitNotes = (history, debitNotes) => async () => {
  await SESO_BASE_URL.post(
    "/accounts/debitnote",
    { ...debitNotes },
    { withCredentials: true }
  )
    .then()
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

export const getAccountsDebitNotes = (history) => async (dispatch) => {
  await SESO_BASE_URL.get("/accounts/debitnote", { withCredentials: true })
    .then((debitNoteResp) => {
      if (
        debitNoteResp.status === 200 &&
        debitNoteResp.data &&
        debitNoteResp.data.length > 0
      ) {
        dispatch({
          type: GET_DEBIT_NOTES,
          payload: debitNoteResp.data,
        });
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

// tds payable
export const addAccountsTdsPayable = (history, tsPayable) => async () => {
  await SESO_BASE_URL.post(
    "/accounts/tdspayable",
    { ...tsPayable },
    { withCredentials: true }
  )
    .then()
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

export const getAccountsTdsPayable = (history) => async (dispatch) => {
  await SESO_BASE_URL.get("/accounts/tdspayable", { withCredentials: true })
    .then((tdsPayableResp) => {
      if (
        tdsPayableResp.status === 200 &&
        tdsPayableResp.data &&
        tdsPayableResp.data.length > 0
      ) {
        dispatch({
          type: GET_DEBIT_NOTES,
          payload: tdsPayableResp.data,
        });
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

// tds receivable
export const addAccountsTdsReceivable =
  (history, tdsReceivable) => async () => {
    await SESO_BASE_URL.post(
      "/accounts/Tdsreceivable",
      { ...tdsReceivable },
      { withCredentials: true }
    )
      .then()
      .catch((err) => {
        if (err.response.status === 401) {
          history("/login");
        }
      });
  };

export const getAccountsTdsReceivable = (history) => async (dispatch) => {
  await SESO_BASE_URL.get("/accounts/Tdsreceivable", { withCredentials: true })
    .then((tdsReceivableResp) => {
      if (
        tdsReceivableResp.status === 200 &&
        tdsReceivableResp.data &&
        tdsReceivableResp.data.length > 0
      ) {
        dispatch({
          type: GET_DEBIT_NOTES,
          payload: tdsReceivableResp.data,
        });
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

// payments
export const addAccountsPayment = (history, paymentrs) => async () => {
  await SESO_BASE_URL.post(
    "/accounts/payment",
    { ...paymentrs },
    { withCredentials: true }
  )
    .then()
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

export const getAccountsPayment = (history) => async (dispatch) => {
  await SESO_BASE_URL.get("/accounts/payment", { withCredentials: true })
    .then((paymentResp) => {
      if (
        paymentResp.status === 200 &&
        paymentResp.data &&
        paymentResp.data.length > 0
      ) {
        dispatch({
          type: GET_DEBIT_NOTES,
          payload: paymentResp.data,
        });
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

// receipt
export const addReceipt = (history, receipts) => async () => {
  await SESO_BASE_URL.post(
    "/accounts/receipt",
    { ...receipts },
    { withCredentials: true }
  )
    .then()
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

export const getReceipt = (history) => async (dispatch) => {
  await SESO_BASE_URL.get("/accounts/receipt", { withCredentials: true })
    .then((receiptResp) => {
      if (
        receiptResp.status === 200 &&
        receiptResp.data &&
        receiptResp.data.length > 0
      ) {
        dispatch({
          type: GET_DEBIT_NOTES,
          payload: receiptResp.data,
        });
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};
