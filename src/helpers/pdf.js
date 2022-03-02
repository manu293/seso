// imports
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// local imports

pdfMake.vfs = pdfFonts.pdfMake.vfs;

// vendor order definition

const generateVendorOrderPdf = () => {
  return renderVendorOrderPdf();
};

const renderVendorOrderPdf = () => {
  return {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: 10,
    content: [
      {
        table: {
          widths: [550, "*"],
          body: [
            [
              {
                table: {
                  widths: ["*"],

                  body: [
                    [
                      {
                        text: "CONFIDENT KNITTING WORKS",
                        color: "#F01717",
                        alignment: "center",
                        fontSize: 18,
                        bold: true,
                      },
                    ],
                    [
                      {
                        text: "Thiyagi palaniswamy nagar",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                      },
                    ],
                    [
                      {
                        text: "Pooluvapatti, Tirupur",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                      },
                    ],
                    [
                      {
                        text: "Ph.no : 7339580177",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                      },
                    ],
                    [
                      {
                        text: "GSTIN : 33AAIFC7327E1ZP",
                        color: "#2E89E0",
                        alignment: "center",
                        fontSize: 14,
                        bold: true,
                      },
                    ],
                  ],
                },
                layout: "noBorders",
              },
              {
                table: {
                  widths: ["*", "*"],
                  body: [
                    [
                      {
                        text: "VENDOR ORDER",
                        color: "#2E89E0",
                        alignment: "center",
                        fontSize: 18,
                        bold: true,
                        colSpan: 2,
                        margin: [0, 0, 0, 10],
                      },
                      {},
                    ],
                    [
                      {
                        text: "V.DC No : 101",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 10,
                        bold: true,
                        margin: [15, 0, 0, 0],
                      },
                      {
                        text: "Date : 27/08/2021",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                        bold: true,
                      },
                    ],
                    [
                      {
                        text: "VYR.DC No : 100/K21",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 10,
                        bold: true,
                        margin: [15, 10, 0, 0],
                      },
                      {},
                    ],
                  ],
                },
                margin: [0, 10, 0, 0],
                layout: "noBorders",
              },
            ],
          ],
        },
      },
      {
        table: {
          widths: ["*"],
          body: [
            [
              {
                table: {
                  widths: ["*", "*"],
                  body: [
                    [
                      {
                        text: "To,",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 9,
                      },
                      {},
                    ],
                    [
                      {
                        text: "Senior Techno Knits",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 14,
                        bold: true,
                        margin: [10, 0, 0, 0],
                      },
                      {
                        text: "GSTIN : 33BBIFC7327E2ZP",
                        color: "#152F48",
                        alignment: "right",
                        fontSize: 14,
                        bold: true,
                        margin: [0, 0, 10, 0],
                      },
                    ],
                    [
                      {
                        text: "Thiyagi palaniswamy nagar",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 12,
                        margin: [10, 0, 0, 0],
                      },
                      {
                        text: "Phn No : 7339580177",
                        color: "#152F48",
                        alignment: "right",
                        fontSize: 14,
                        bold: true,
                        rowSpan: 2,
                        margin: [0, 10, 10, 0],
                      },
                    ],
                    [
                      {
                        text: "Pooluvapatti, Tirupur",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 12,
                        margin: [10, 0, 0, 0],
                      },
                      {},
                    ],
                  ],
                },
                margin: [10, 10, 10, 10],
                layout: "noBorders",
              },
            ],
          ],
        },
      },
      {
        margin: [0, 10, 0, 0],
        layout: "noBorders",
        table: {
          headerRows: 1,
          widths: [50, "*", 100, 100, 100, 100],
          body: [
            [
              {
                text: "S.No",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Yarn Description",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Cones",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Bag",
                color: "#152F48",
                bold: true,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Gross Weight",
                color: "#152F48",
                bold: true,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Net Weight",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "1",
                color: "#152F48",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "30’s - SSM   Grey - Combed",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "10",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "602.000",
                color: "#152F48",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "600.000",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Total",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "10",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "602.00",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "600.000",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
            ],
          ],
        },
      },
      {
        margin: [0, 10, 0, 0],
        layout: "noBorders",
        table: {
          headerRows: 1,
          widths: [50, "*", 100, 100, 100, 100],
          body: [
            [
              {
                text: "S.No",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Fabric Description",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "LL/GSM",
                color: "#152F48",
                bold: true,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Dia",
                color: "#152F48",
                bold: true,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Weight",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "1",
                color: "#152F48",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "Single Jersey",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "30cm",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "18",
                color: "#152F48",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "1000.000",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Total",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "10",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "602.00",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "600.000",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
            ],
          ],
        },
      },
      {
        margin: [20, 5, 20, 15],
        columns: [
          {
            text: "For Confident Knitting Works",
            alignment: "right",
            color: "#152F48",
            fontSize: 11,
          },
        ],
      },
      {
        margin: [20, 10, 20, 10],
        columns: [
          {
            table: {
              widths: ["*", "*", "*", "*"],
              body: [
                [
                  {
                    text: "Received By",
                    color: "#152F48",
                    alignment: "left",
                    fontSize: 10,
                  },
                  {
                    text: "Vehicle No",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                  },
                  {
                    text: "Prepared By",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                  },
                  {
                    text: "Authorized Signatory",
                    color: "#152F48",
                    alignment: "right",
                    fontSize: 10,
                  },
                ],
              ],
            },
            layout: "noBorders",
          },
        ],
      },
    ],
  };
};

const generateVendorYarnPdf = () => {
  return renderVendorYarnPdf();
};

const renderVendorYarnPdf = () => {
  return {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: 10,
    content: [
      {
        table: {
          widths: [550, "*"],
          body: [
            [
              {
                table: {
                  widths: ["*"],

                  body: [
                    [
                      {
                        text: "CONFIDENT KNITTING WORKS",
                        color: "#F01717",
                        alignment: "center",
                        fontSize: 18,
                        bold: true,
                      },
                    ],
                    [
                      {
                        text: "Thiyagi palaniswamy nagar",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                      },
                    ],
                    [
                      {
                        text: "Pooluvapatti, Tirupur",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                      },
                    ],
                    [
                      {
                        text: "Ph.no : 7339580177",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                      },
                    ],
                    [
                      {
                        text: "GSTIN : 33AAIFC7327E1ZP",
                        color: "#2E89E0",
                        alignment: "center",
                        fontSize: 14,
                        bold: true,
                      },
                    ],
                  ],
                },
                layout: "noBorders",
              },
              {
                table: {
                  widths: ["*", "*"],
                  body: [
                    [
                      {
                        text: "Vendor Yarn DC",
                        color: "#2E89E0",
                        alignment: "center",
                        fontSize: 18,
                        bold: true,
                        colSpan: 2,
                        margin: [0, 0, 0, 10],
                      },
                      {},
                    ],
                    [
                      {
                        text: "V.DC No : 101",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 10,
                        bold: true,
                        margin: [15, 0, 0, 0],
                      },
                      {
                        text: "Date : 27/08/2021",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                        bold: true,
                      },
                    ],
                  ],
                },
                margin: [0, 20, 0, 0],
                layout: "noBorders",
              },
            ],
          ],
        },
      },
      {
        table: {
          widths: ["*"],
          body: [
            [
              {
                table: {
                  widths: ["*", "*"],
                  body: [
                    [
                      {
                        text: "To,",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 9,
                      },
                      {},
                    ],
                    [
                      {
                        text: "Senior Techno Knits",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 14,
                        bold: true,
                        margin: [10, 0, 0, 0],
                      },
                      {
                        text: "GSTIN : 33BBIFC7327E2ZP",
                        color: "#152F48",
                        alignment: "right",
                        fontSize: 14,
                        bold: true,
                        margin: [0, 0, 10, 0],
                      },
                    ],
                    [
                      {
                        text: "Thiyagi palaniswamy nagar",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 12,
                        margin: [10, 0, 0, 0],
                      },
                      {
                        text: "Phn No : 7339580177",
                        color: "#152F48",
                        alignment: "right",
                        fontSize: 14,
                        bold: true,
                        rowSpan: 2,
                        margin: [0, 10, 10, 0],
                      },
                    ],
                    [
                      {
                        text: "Pooluvapatti, Tirupur",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 12,
                        margin: [10, 0, 0, 0],
                      },
                      {},
                    ],
                  ],
                },
                margin: [10, 10, 10, 10],
                layout: "noBorders",
              },
            ],
          ],
        },
      },
      {
        margin: [0, 10, 0, 0],
        layout: "noBorders",
        table: {
          headerRows: 1,
          widths: [50, "*", 100, 100, 100, 100],
          body: [
            [
              {
                text: "S.No",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Yarn Description",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Cones",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Bag",
                color: "#152F48",
                bold: true,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Gross Weight",
                color: "#152F48",
                bold: true,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Net Weight",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "1",
                color: "#152F48",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "30’s - SSM   Grey - Combed",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "10",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "602.000",
                color: "#152F48",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "600.000",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Total",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "10",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "602.00",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "600.000",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
            ],
          ],
        },
      },
      {
        margin: [20, 5, 20, 15],
        columns: [
          {
            text: "For Confident Knitting Works",
            alignment: "right",
            color: "#152F48",
            fontSize: 11,
          },
        ],
      },
      {
        margin: [20, 10, 20, 10],
        columns: [
          {
            table: {
              widths: ["*", "*", "*", "*"],
              body: [
                [
                  {
                    text: "Received By",
                    color: "#152F48",
                    alignment: "left",
                    fontSize: 10,
                  },
                  {
                    text: "Vehicle No",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                  },
                  {
                    text: "Prepared By",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                  },
                  {
                    text: "Authorized Signatory",
                    color: "#152F48",
                    alignment: "right",
                    fontSize: 10,
                  },
                ],
              ],
            },
            layout: "noBorders",
          },
        ],
      },
    ],
  };
};

const generateVendorYarnReturnPdf = () => {
  return renderVendorYarnReturnPdf();
};

const renderVendorYarnReturnPdf = () => {
  return {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: 10,
    content: [
      {
        table: {
          widths: [550, "*"],
          body: [
            [
              {
                table: {
                  widths: ["*"],

                  body: [
                    [
                      {
                        text: "CONFIDENT KNITTING WORKS",
                        color: "#F01717",
                        alignment: "center",
                        fontSize: 18,
                        bold: true,
                      },
                    ],
                    [
                      {
                        text: "Thiyagi palaniswamy nagar",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                      },
                    ],
                    [
                      {
                        text: "Pooluvapatti, Tirupur",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                      },
                    ],
                    [
                      {
                        text: "Ph.no : 7339580177",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                      },
                    ],
                    [
                      {
                        text: "GSTIN : 33AAIFC7327E1ZP",
                        color: "#2E89E0",
                        alignment: "center",
                        fontSize: 14,
                        bold: true,
                      },
                    ],
                  ],
                },
                layout: "noBorders",
              },
              {
                table: {
                  widths: ["*", "*"],
                  body: [
                    [
                      {
                        text: "Yarn Return",
                        color: "#2E89E0",
                        alignment: "center",
                        fontSize: 18,
                        bold: true,
                        colSpan: 2,
                        margin: [0, 0, 0, 10],
                      },
                      {},
                    ],
                    [
                      {
                        text: "V.DC No : 101",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 10,
                        bold: true,
                        margin: [15, 0, 0, 0],
                      },
                      {
                        text: "Date : 27/08/2021",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                        bold: true,
                      },
                    ],
                    [
                      {
                        text: "C.DC No : 100/K21",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 10,
                        bold: true,
                        margin: [15, 10, 0, 0],
                      },
                      {},
                    ],
                  ],
                },
                margin: [0, 10, 0, 0],
                layout: "noBorders",
              },
            ],
          ],
        },
      },
      {
        table: {
          widths: ["*"],
          body: [
            [
              {
                table: {
                  widths: ["*", "*"],
                  body: [
                    [
                      {
                        text: "To,",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 9,
                      },
                      {},
                    ],
                    [
                      {
                        text: "Senior Techno Knits",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 14,
                        bold: true,
                        margin: [10, 0, 0, 0],
                      },
                      {
                        text: "GSTIN : 33BBIFC7327E2ZP",
                        color: "#152F48",
                        alignment: "right",
                        fontSize: 14,
                        bold: true,
                        margin: [0, 0, 10, 0],
                      },
                    ],
                    [
                      {
                        text: "Thiyagi palaniswamy nagar",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 12,
                        margin: [10, 0, 0, 0],
                      },
                      {
                        text: "Phn No : 7339580177",
                        color: "#152F48",
                        alignment: "right",
                        fontSize: 14,
                        bold: true,
                        rowSpan: 2,
                        margin: [0, 10, 10, 0],
                      },
                    ],
                    [
                      {
                        text: "Pooluvapatti, Tirupur",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 12,
                        margin: [10, 0, 0, 0],
                      },
                      {},
                    ],
                  ],
                },
                margin: [10, 10, 10, 10],
                layout: "noBorders",
              },
            ],
          ],
        },
      },
      {
        margin: [0, 10, 0, 0],
        layout: "noBorders",
        table: {
          headerRows: 1,
          widths: [50, "*", 100, 100, 100, 100],
          body: [
            [
              {
                text: "S.No",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Yarn Description",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Cones",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Bag",
                color: "#152F48",
                bold: true,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Gross Weight",
                color: "#152F48",
                bold: true,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Net Weight",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "1",
                color: "#152F48",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "30’s - SSM   Grey - Combed",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "10",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "602.000",
                color: "#152F48",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "600.000",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Total",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "10",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "602.00",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "600.000",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
            ],
          ],
        },
      },
      {
        margin: [20, 5, 20, 15],
        columns: [
          {
            text: "For Confident Knitting Works",
            alignment: "right",
            color: "#152F48",
            fontSize: 11,
          },
        ],
      },
      {
        margin: [20, 10, 20, 10],
        columns: [
          {
            table: {
              widths: ["*", "*", "*", "*"],
              body: [
                [
                  {
                    text: "Received By",
                    color: "#152F48",
                    alignment: "left",
                    fontSize: 10,
                  },
                  {
                    text: "Vehicle No",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                  },
                  {
                    text: "Prepared By",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                  },
                  {
                    text: "Authorized Signatory",
                    color: "#152F48",
                    alignment: "right",
                    fontSize: 10,
                  },
                ],
              ],
            },
            layout: "noBorders",
          },
        ],
      },
    ],
  };
};

const generateVendorFabricPdf = () => {
  console.log("generateVendorFabricPdf is run");
  return renderVendorFabricPdf();
};

const renderVendorFabricPdf = () => {
  return {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: 10,
    content: [
      {
        table: {
          widths: [550, "*"],
          body: [
            [
              {
                table: {
                  widths: ["*"],

                  body: [
                    [
                      {
                        text: "CONFIDENT KNITTING WORKS",
                        color: "#F01717",
                        alignment: "center",
                        fontSize: 18,
                        bold: true,
                      },
                    ],
                    [
                      {
                        text: "Thiyagi palaniswamy nagar",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                      },
                    ],
                    [
                      {
                        text: "Pooluvapatti, Tirupur",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                      },
                    ],
                    [
                      {
                        text: "Ph.no : 7339580177",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                      },
                    ],
                    [
                      {
                        text: "GSTIN : 33AAIFC7327E1ZP",
                        color: "#2E89E0",
                        alignment: "center",
                        fontSize: 14,
                        bold: true,
                      },
                    ],
                  ],
                },
                layout: "noBorders",
              },
              {
                table: {
                  widths: ["*", "*"],
                  body: [
                    [
                      {
                        text: "Vendor Fabric",
                        color: "#2E89E0",
                        alignment: "center",
                        fontSize: 18,
                        bold: true,
                        colSpan: 2,
                        margin: [0, 0, 0, 10],
                      },
                      {},
                    ],
                    [
                      {
                        text: "V.DC No : 101",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 10,
                        bold: true,
                        margin: [15, 0, 0, 0],
                      },
                      {
                        text: "Date : 27/08/2021",
                        color: "#152F48",
                        alignment: "center",
                        fontSize: 10,
                        bold: true,
                      },
                    ],
                  ],
                },
                margin: [0, 20, 0, 0],
                layout: "noBorders",
              },
            ],
          ],
        },
      },
      {
        table: {
          widths: ["*"],
          body: [
            [
              {
                table: {
                  widths: ["*", "*"],
                  body: [
                    [
                      {
                        text: "To,",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 9,
                      },
                      {},
                    ],
                    [
                      {
                        text: "Senior Techno Knits",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 14,
                        bold: true,
                        margin: [10, 0, 0, 0],
                      },
                      {
                        text: "GSTIN : 33BBIFC7327E2ZP",
                        color: "#152F48",
                        alignment: "right",
                        fontSize: 14,
                        bold: true,
                        margin: [0, 0, 10, 0],
                      },
                    ],
                    [
                      {
                        text: "Thiyagi palaniswamy nagar",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 12,
                        margin: [10, 0, 0, 0],
                      },
                      {
                        text: "Phn No : 7339580177",
                        color: "#152F48",
                        alignment: "right",
                        fontSize: 14,
                        bold: true,
                        rowSpan: 2,
                        margin: [0, 10, 10, 0],
                      },
                    ],
                    [
                      {
                        text: "Pooluvapatti, Tirupur",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 12,
                        margin: [10, 0, 0, 0],
                      },
                      {},
                    ],
                  ],
                },
                margin: [10, 10, 10, 10],
                layout: "noBorders",
              },
            ],
          ],
        },
      },
      {
        margin: [0, 10, 0, 0],
        layout: "noBorders",
        table: {
          headerRows: 1,
          widths: [50, "*", 100, 100, 100],
          body: [
            [
              {
                text: "S.No",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Fabric Description",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "LL/GSM",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Dia",
                color: "#152F48",
                bold: true,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Weight",
                color: "#152F48",
                bold: true,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "1",
                color: "#152F48",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "Single Jersey",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "30cm",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "18",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "100.000",
                color: "#152F48",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Total",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
              {
                text: "100.000",
                color: "#152F48",
                bold: true,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [8, 8, 5, 8],
              },
            ],
          ],
        },
      },
      {
        margin: [20, 5, 20, 15],
        columns: [
          {
            text: "For Confident Knitting Works",
            alignment: "right",
            color: "#152F48",
            fontSize: 11,
          },
        ],
      },
      {
        margin: [20, 10, 20, 10],
        columns: [
          {
            table: {
              widths: ["*", "*", "*", "*"],
              body: [
                [
                  {
                    text: "Received By",
                    color: "#152F48",
                    alignment: "left",
                    fontSize: 10,
                  },
                  {
                    text: "Vehicle No",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                  },
                  {
                    text: "Prepared By",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                  },
                  {
                    text: "Authorized Signatory",
                    color: "#152F48",
                    alignment: "right",
                    fontSize: 10,
                  },
                ],
              ],
            },
            layout: "noBorders",
          },
        ],
      },
    ],
  };
};

export {
  generateVendorOrderPdf,
  generateVendorYarnPdf,
  generateVendorYarnReturnPdf,
  generateVendorFabricPdf,
};
