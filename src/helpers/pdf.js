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

const generateGstReportPdf = () => {
  return renderGstReportPdf();
};

const renderGstReportPdf = () => {
  const pdfData = [
    [
      {
        text: "S.no",
        color: "#152F48",
        bold: true,
        fillColor: "#E3F4FD",
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "Inv date",
        color: "#152F48",
        bold: true,
        fillColor: "#E3F4FD",
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "Inv no",
        color: "#152F48",
        bold: true,
        fillColor: "#E3F4FD",
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "Customer name",
        color: "#152F48",
        bold: true,
        fillColor: "#E3F4FD",
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "C.GST No",
        color: "#152F48",
        bold: true,
        fillColor: "#E3F4FD",
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "State",
        color: "#152F48",
        bold: true,
        fillColor: "#E3F4FD",
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "State  ID",
        color: "#152F48",
        bold: true,
        fillColor: "#E3F4FD",
        margin: [8, 8, 5, 8],
      },
      {
        text: "Goods value",
        color: "#152F48",
        bold: true,
        alignment: "center",
        fillColor: "#E3F4FD",
        margin: [8, 8, 5, 8],
      },
      {
        text: "Taxable value",
        color: "#152F48",
        bold: true,
        alignment: "center",
        fillColor: "#E3F4FD",
        margin: [8, 8, 5, 8],
      },
      {
        text: "SGST %",
        color: "#152F48",
        bold: true,
        alignment: "center",
        fillColor: "#E3F4FD",
        margin: [8, 8, 5, 8],
      },
      {
        text: "CGST %",
        color: "#152F48",
        bold: true,
        alignment: "center",
        fillColor: "#E3F4FD",
        margin: [8, 8, 5, 8],
      },
      {
        text: "IGST %",
        color: "#152F48",
        bold: true,
        alignment: "center",
        fillColor: "#E3F4FD",
        margin: [8, 8, 5, 8],
      },
      {
        text: "SGST value",
        color: "#152F48",
        bold: true,
        alignment: "center",
        fillColor: "#E3F4FD",
        margin: [8, 8, 5, 8],
      },
      {
        text: "CGST value",
        color: "#152F48",
        bold: true,
        fillColor: "#E3F4FD",
        margin: [8, 8, 5, 8],
      },
      {
        text: "IGST value",
        color: "#152F48",
        bold: true,
        alignment: "center",
        fillColor: "#E3F4FD",
        margin: [8, 8, 5, 8],
      },
      {
        text: "GST tax",
        color: "#152F48",
        bold: true,
        alignment: "center",
        fillColor: "#E3F4FD",
        margin: [8, 8, 5, 8],
      },
      {
        text: "Inv value",
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
        fontSize: 9,
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "31/02/2022",
        color: "#152F48",
        fontSize: 9,
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "Inv1234",
        color: "#152F48",
        fontSize: 9,
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "Vijay ananth GK",
        color: "#152F48",
        fontSize: 9,
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "GSTIN1234567890",
        color: "#152F48",
        fontSize: 9,
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "TN",
        color: "#152F48",
        fontSize: 9,
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "33",
        color: "#152F48",
        fontSize: 9,
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "2047.90",
        color: "#152F48",
        fontSize: 9,
        margin: [8, 8, 5, 8],
      },
      {
        text: "26,603.70",
        color: "#152F48",
        fontSize: 9,
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "2.5",
        color: "#152F48",
        fontSize: 9,
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "2.5",
        color: "#152F48",
        fontSize: 9,
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "0.00",
        color: "#152F48",
        fontSize: 9,
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "665",
        color: "#152F48",
        fontSize: 9,
        margin: [8, 8, 5, 8],
      },
      {
        text: "665",
        color: "#152F48",
        fontSize: 9,
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "0.00",
        color: "#152F48",
        fontSize: 9,
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "1300",
        color: "#152F48",
        fontSize: 9,
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
      {
        text: "27500",
        color: "#152F48",
        fontSize: 9,
        alignment: "center",
        margin: [8, 8, 5, 8],
      },
    ],
  ];

  return {
    pageSize: "A3",
    pageOrientation: "landscape",
    pageMargins: [15, 10, 15, 10],
    content: [
      {
        text: "Confident knitting works",
        bold: true,
        fontSize: 20,
        color: "#000",
      },
      {
        columns: [
          {
            text: "Accounting period",
            color: "#000",
            fontSize: 14,
          },
          {
            text: "From 31/02/2022",
            color: "#000",
            fontSize: 14,
          },
          {
            text: "To 31/04/2022",
            color: "#000",
            fontSize: 14,
          },
        ],
        margin: [0, 12, 0, 12],
      },
      {
        margin: [10, 10, 20, 10],
        layout: "noBorders",
        table: {
          widths: [
            38,
            75,
            70,
            "*",
            "*",
            45,
            45,
            48,
            55,
            40,
            40,
            40,
            50,
            50,
            50,
            50,
            50,
          ],
          headerRows: 1,
          body: [
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
          ],
        },
      },
      {
        layout: "noBorders",
        table: {
          style: {
            fillColor: "#E3F4FD",
          },
          widths: ["*", "*", "*", "*", "*", "*", "*", "*"],
          margin: [20, 0, 20, 0],
          body: [
            [
              {
                text: "COMPANY NAME",
                color: "#152F48",
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "CONFIDENT KNITTING",
                color: "#152F48",
                bold: true,
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "TOTAL GOODS VALUE",
                color: "#152F48",
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "18,176. kgs",
                color: "#152F48",
                fontSize: 9,
                bold: true,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "TOTAL CGST",
                color: "#152F48",
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Rs.6451.00 ",
                color: "#152F48",
                bold: true,
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "TOTAL VALUE BEFORE TAX",
                color: "#152F48",
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Rs. 258,077.00",
                color: "#152F48",
                bold: true,
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "COMPANY GSTIN",
                color: "#152F48",
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "33AAIFC757876969",
                color: "#152F48",
                bold: true,
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "TOTAL NUMBER OF INVOICES",
                color: "#152F48",
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "10",
                color: "#152F48",
                fontSize: 9,
                bold: true,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "TOTAL SGST",
                color: "#152F48",
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Rs.6451.00",
                color: "#152F48",
                bold: true,
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "TOTAL TAX VALUE",
                color: "#152F48",
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Rs. 258,077.00",
                color: "#152F48",
                bold: true,
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
            [
              {
                text: "",
                color: "#152F48",
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "",
                color: "#152F48",
                bold: true,
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "HSN/SAC CODE",
                color: "#152F48",
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "99821",
                color: "#152F48",
                fontSize: 9,
                bold: true,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "TOTAL IGST",
                color: "#152F48",
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Rs.0.00",
                color: "#152F48",
                bold: true,
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "TOTAL VALUE AFTER TAX",
                color: "#152F48",
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Rs. 258,077.00",
                color: "#152F48",
                bold: true,
                fontSize: 9,
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
            ],
          ],
        },
      },
    ],
  };
};

const generateAccountLedger = () => {
  return renderAccountLedger();
};

const renderAccountLedger = () => {
  const pdfData = [
    [
      {
        text: "08/04/2020",
        color: "#152F48",
        bold: true,
        fillColor: "#E3F4FD",
        alignment: "center",
        fontSize: 16,
        margin: [8, 8, 5, 8],
      },
      {
        text: "Credit note",
        color: "#152F48",
        bold: true,
        fillColor: "#E3F4FD",
        alignment: "center",
        fontSize: 16,
        margin: [8, 8, 5, 8],
      },
      {
        text: "payment received cheque",
        color: "#152F48",
        bold: true,
        fillColor: "#E3F4FD",
        alignment: "center",
        fontSize: 16,
        margin: [8, 8, 5, 8],
      },
      {
        text: "",
        color: "#152F48",
        bold: true,
        fillColor: "#E3F4FD",
        alignment: "center",
        fontSize: 16,
        margin: [8, 8, 5, 8],
      },
      {
        text: "Rs. 10,000.00",
        color: "#152F48",
        bold: true,
        fillColor: "#E3F4FD",
        alignment: "center",
        fontSize: 16,
        margin: [8, 8, 5, 8],
      },
    ],
    [
      {
        text: "08/04/2020",
        color: "#152F48",
        bold: true,
        alignment: "center",
        fontSize: 16,
        margin: [8, 8, 5, 8],
      },
      {
        text: "Credit note",
        color: "#152F48",
        bold: true,
        alignment: "center",
        fontSize: 16,
        margin: [8, 8, 5, 8],
      },
      {
        text: "INVOICE NO : 1 Due on 08/08/2021 ",
        color: "#152F48",
        bold: true,
        alignment: "center",
        fontSize: 16,
        margin: [8, 8, 5, 8],
      },
      {
        text: "Rs. 10,000.00",
        color: "#152F48",
        bold: true,
        alignment: "center",
        fontSize: 16,
        margin: [8, 8, 5, 8],
      },
      "",
    ],
  ];

  return {
    pageSize: "A3",
    pageOrientation: "potrait",
    pageMargins: [15, 10, 15, 10],
    content: [
      {
        text: "CONFIDENT KNITTING WORKS",
        fontSize: 24,
        color: "#D01414",
        bold: true,
        alignment: "center",
      },
      {
        text: "Thiyagi palaniswamy nagar",
        fontSize: 20,
        alignment: "center",
        margin: [0, 10, 0, 0],
        color: "#152F48",
      },
      {
        text: "Pooluvapatti, Tirupur",
        fontSize: 20,
        alignment: "center",
        margin: [0, 10, 0, 0],
        color: "#152F48",
      },
      {
        layout: "noBorders",
        margin: 20,
        table: {
          widths: ["*", "*"],
          body: [
            [
              {
                text: "To",
                fontSize: 22,
                bold: true,
                color: "#152F48",
              },
              "",
            ],
            [
              {
                stack: [
                  {
                    text: "Sujeesh",
                    fontSize: 22,
                    bold: true,
                    color: "#152F48",
                  },
                  {
                    text: "Thiyagi palaniswamy nagar",
                    fontSize: 20,
                    color: "#152F48",
                    margin: [0, 10, 0, 0],
                  },
                  {
                    text: "Pooluvapatti, Tirupur",
                    fontSize: 20,
                    color: "#152F48",
                    margin: [0, 10, 0, 0],
                  },
                ],
                margin: [20, 20, 0, 0],
              },
              {
                stack: [
                  {
                    text: "ACCOUNTS LEDGER",
                    fontSize: 22,
                    bold: true,
                    color: "#152F48",
                  },
                  {
                    text: "04/08/2020  To  04/08/2021",
                    fontSize: 16,
                    color: "#152F48",
                  },
                  {
                    columns: [
                      {
                        text: "Total Debit",
                        color: "#152F48",
                        fontSize: 20,
                        bold: true,
                      },
                      {
                        text: "Rs. 30,000.00",
                        color: "#0682FA",
                        fontSize: 20,
                        bold: true,
                        alignment: "right",
                      },
                    ],
                    margin: [0, 20, 0, 0],
                  },
                  {
                    columns: [
                      {
                        text: "Total Credit",
                        color: "#152F48",
                        fontSize: 20,
                        bold: true,
                      },
                      {
                        text: "Rs. 30,000.00",
                        color: "#0682FA",
                        fontSize: 20,
                        bold: true,
                        alignment: "right",
                      },
                    ],
                    margin: [0, 20, 0, 0],
                  },
                  {
                    columns: [
                      {
                        text: "CLOSING BALANCE",
                        color: "#152F48",
                        fontSize: 20,
                        bold: true,
                      },
                      {
                        text: "Rs. 30,000.00",
                        color: "#0682FA",
                        fontSize: 20,
                        bold: true,
                        alignment: "right",
                      },
                    ],
                    margin: [0, 20, 0, 0],
                  },
                ],
                margin: [20, 20, 0, 0],
              },
            ],
          ],
        },
      },
      {
        layout: "noBorders",
        margin: [0, 10, 0, 0],
        table: {
          widths: [120, 150, "*", "*", 120],
          headerRows: 1,
          body: [
            [
              {
                text: "Date",
                color: "#fff",
                fillColor: "#152F48",
                alignment: "center",
                fontSize: 18,
                margin: [0, 10, 0, 10],
                bold: true,
              },
              {
                text: "Transaction Type",
                color: "#fff",
                fillColor: "#152F48",
                alignment: "center",
                fontSize: 18,
                margin: [0, 10, 0, 10],
                bold: true,
              },
              {
                text: "Narration",
                color: "#fff",
                fillColor: "#152F48",
                alignment: "center",
                fontSize: 18,
                margin: [0, 10, 0, 10],
                bold: true,
              },
              {
                text: "Debit",
                color: "#fff",
                fillColor: "#152F48",
                alignment: "center",
                fontSize: 18,
                margin: [0, 10, 0, 10],
                bold: true,
              },
              {
                text: "Credit",
                color: "#fff",
                fillColor: "#152F48",
                alignment: "center",
                fontSize: 18,
                margin: [0, 10, 0, 10],
                bold: true,
              },
            ],
            [
              "",
              "",
              {
                text: "OPENING BALANCE",
                color: "",
                fontSize: 17,
                bold: true,
                alignment: "center",
                margin: [0, 10, 0, 10],
              },
              {
                text: "Rs. 10,000.00",
                color: "",
                fontSize: 17,
                alignment: "center",
                bold: true,
                margin: [0, 10, 0, 10],
              },
              "",
            ],
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            ...pdfData,
            [
              '',
              '',
              {
                text: 'Transactional Total',
                color: '#152F48',
                bold: true,
                fontSize: 18,
                alignment: 'center',
              },
              {
                text: 'Rs. 30,000.00',
                color: '#152F48',
                bold: true,
                fontSize: 18,
                alignment: 'center',
              },
              {
                text: 'Rs. 20,000.00',
                color: '#152F48',
                bold: true,
                fontSize: 18,
                alignment: 'center',
              },

            ]
          ],
        },
      },
    ],
  };
};

export {
  generateVendorOrderPdf,
  generateVendorYarnPdf,
  generateVendorYarnReturnPdf,
  generateVendorFabricPdf,
  generateGstReportPdf,
  generateAccountLedger,
};
