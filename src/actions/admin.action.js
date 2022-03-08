// local imports
import { SESO_BASE_URL } from "../helpers/api";
import {
  GET_ADMIN_CUSTOMERS,
  GET_ADMIN_VENDORS,
  GET_ADMIN_EMPLOYEE,
  GET_ADMIN_MACHINE,
  GET_ADMIN_FABRIC,
} from "../helpers/types";

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

// admin employees
export const fetchAdminEmployees = (history) => async (dispatch) => {
  await SESO_BASE_URL.get("admin/employee", { withCredentials: true })
    .then((adminEmployeeResponse) => {
      if (
        adminEmployeeResponse.status === 200 &&
        adminEmployeeResponse.data &&
        adminEmployeeResponse.data.length > 0
      ) {
        dispatch({
          type: GET_ADMIN_EMPLOYEE,
          payload: adminEmployeeResponse.data,
        });
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

export const addAdminEmployees = (history, employereDetail) => async () => {
  await SESO_BASE_URL.post(
    "admin/employee",
    {
      employeeName: employereDetail.employeeName,
      mobile: parseInt(employereDetail.mobile, 10),
      imageurl: employereDetail.imageurl,
      typeofemployee: employereDetail.typeofemployee,
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

export const editAdminEmployees = (history, employereDetail) => async () => {
  await SESO_BASE_URL.put(
    "admin/employee",
    {
      employeeName: employereDetail.employeeName,
      mobile: parseInt(employereDetail.mobile, 10),
      imageurl: employereDetail.imageurl,
      typeofemployee: employereDetail.typeofemployee,
      id: employereDetail.id,
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

// admin machines
export const fetchAdminMachine = (history) => async (dispatch) => {
  await SESO_BASE_URL.get("admin/machine", { withCredentials: true })
    .then((adminMachineResponse) => {
      if (
        adminMachineResponse.status === 200 &&
        adminMachineResponse.data &&
        adminMachineResponse.data.length > 0
      ) {
        dispatch({
          type: GET_ADMIN_MACHINE,
          payload: adminMachineResponse.data,
        });
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

export const addAdminMachines = (history, machineDetails) => async () => {
  await SESO_BASE_URL.post(
    "admin/machine",
    {
      machineno: machineDetails.machineno,
      machinemake: machineDetails.machinemake,
      dia: machineDetails.dia,
      gauge: machineDetails.gauge,
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

export const editAdminMachines = (history, machineDetails) => async () => {
  await SESO_BASE_URL.put(
    "admin/machine",
    {
      machineno: machineDetails.machineno,
      machinemake: machineDetails.machinemake,
      dia: machineDetails.dia,
      gauge: machineDetails.gauge,
      id: machineDetails.id,
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

// admin fabrics
export const fetchAdminFabric = (history) => async (dispatch) => {
  await SESO_BASE_URL.get("admin/fabrictype", { withCredentials: true })
    .then((adminFabricResponse) => {
      if (
        adminFabricResponse.status === 200 &&
        adminFabricResponse.data &&
        adminFabricResponse.data.length > 0
      ) {
        dispatch({
          type: GET_ADMIN_FABRIC,
          payload: adminFabricResponse.data,
        });
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        history("/login");
      }
    });
};

export const addAdminFabric = (history, fabricDetails) => async () => {
  await SESO_BASE_URL.post(
    "admin/fabrictype",
    {
      fabricname: fabricDetails.fabricname,
      fabrictype: fabricDetails.fabrictype,
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

export const editAdminFabric = (history, fabricDetails) => async () => {
  await SESO_BASE_URL.put(
    "admin/fabrictype",
    {
      fabricname: fabricDetails.fabricname,
      fabrictype: fabricDetails.fabrictype,
      id: fabricDetails.id,
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
