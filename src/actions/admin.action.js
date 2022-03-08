// local imports
import { SESO_BASE_URL } from "../helpers/api";
import { GET_ADMIN_CUSTOMERS, GET_ADMIN_VENDORS } from "../helpers/types";

// admin customers
export const fetchAdminCustomers = (history) => async (dispatch) => {
  await SESO_BASE_URL.get("admin/customer", { withCredentials: true })
    .then((adminCustomerResponse) => {
      if (
        adminCustomerResponse.status === 200 &&
        adminCustomerResponse.data &&
        adminCustomerResponse.data.length > 0
      ) {
        dispatch({
          type: GET_ADMIN_CUSTOMERS,
          payload: adminCustomerResponse.data,
        });
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

export const addAdminCustomer = (history, customerDetail) => async () => {
  await SESO_BASE_URL.post(
    "admin/customer",
    {
      customername: customerDetail.customername,
      email: customerDetail.email,
      mobilenumber: parseInt(customerDetail.mobilenumber, 10),
      gstno: customerDetail.gstno,
      panno: customerDetail.panno,
      address: customerDetail.address,
      imageurl: customerDetail.imageurl,
    },
    { withCredentials: true }
  )
    .then()
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

export const editAdminCustomer = (history, customerDetail) => async () => {
  await SESO_BASE_URL.put(
    "admin/customer",
    {
      customername: customerDetail.customername,
      email: customerDetail.email,
      mobilenumber: parseInt(customerDetail.mobilenumber, 10),
      gstno: customerDetail.gstno,
      panno: customerDetail.panno,
      address: customerDetail.address,
      imageurl: customerDetail.imageurl,
      id: customerDetail.id,
    },
    { withCredentials: true }
  )
    .then()
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

// admin vendors
export const fetchAdminVendors = (history) => async (dispatch) => {
  await SESO_BASE_URL.get("admin/vendor", { withCredentials: true })
    .then((adminVendorResponse) => {
      if (
        adminVendorResponse.status === 200 &&
        adminVendorResponse.data &&
        adminVendorResponse.data.length > 0
      ) {
        dispatch({
          type: GET_ADMIN_VENDORS,
          payload: adminVendorResponse.data,
        });
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

export const addAdminVendors = (history, vendorDetails) => async () => {
  await SESO_BASE_URL.post(
    "admin/vendor",
    {
      customername: vendorDetails.customername,
      email: vendorDetails.email,
      mobile: parseInt(vendorDetails.mobilenumber, 10),
      gstNo: vendorDetails.gstno,
      panNo: vendorDetails.panno,
      address: vendorDetails.address,
      imageurl: vendorDetails.imageurl,
    },
    { withCredentials: true }
  )
    .then()
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

export const editAdminVendor = (history, customerDetail) => async () => {
  await SESO_BASE_URL.put(
    "admin/vendor",
    {
      customername: customerDetail.customername,
      email: customerDetail.email,
      mobile: parseInt(customerDetail.mobile, 10),
      gstNo: customerDetail.gstno,
      panNo: customerDetail.panno,
      address: customerDetail.address,
      imageurl: customerDetail.imageurl,
      id: customerDetail.id,
    },
    { withCredentials: true }
  )
    .then()
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};
