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
    pageOrientation: "porrait",
    pageMargins: 10,
    content: [
      {
        table: {
          widths: ["*", 200],
          body: [
            [
              {
                stack: [
                  {
                    text: "CONFIDENT KNITTING WORKS",
                    color: "#F01717",
                    alignment: "center",
                    fontSize: 18,
                    bold: true,
                    margin: [0, 10, 0, 0],
                  },
                  {
                    text: "Thiyagi palaniswamy nagar",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Pooluvapatti, Tirupur",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Ph.no : 7339580177",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "GSTIN : 33AAIFC7327E1ZP",
                    color: "#2E89E0",
                    alignment: "center",
                    fontSize: 14,
                    bold: true,
                    margin: [0, 5, 0, 10],
                  },
                ],
              },
              {
                stack: [
                  {
                    text: "VENDOR ORDER",
                    color: "#2E89E0",
                    alignment: "center",
                    fontSize: 18,
                    bold: true,
                    colSpan: 2,
                    margin: [0, 10, 0, 0],
                  },
                  {
                    columns: [
                      {
                        text: "V.DC No : 101",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 10,
                        bold: true,
                        margin: [5, 0, 0, 0],
                      },
                      {
                        text: "Date : 27/08/2021",
                        color: "#152F48",
                        alignment: "right",
                        fontSize: 10,
                        bold: true,
                      },
                    ],
                    margin: [0, 15, 0, 0],
                  },
                  {
                    text: "VYR.DC No : 100/K21",
                    color: "#152F48",
                    alignment: "left",
                    fontSize: 10,
                    bold: true,
                    margin: [5, 10, 0, 0],
                  },
                ],
              },
            ],
          ],
        },
      },
      {
        canvas: [
          { type: "line", x1: -10, y1: 0, x2: 600, y2: 0, lineWidth: 1 },
        ],
      },
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
      {
        canvas: [
          { type: "line", x1: -10, y1: 0, x2: 600, y2: 0, lineWidth: 1 },
        ],
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
    pageOrientation: "potrait",
    pageMargins: 10,
    content: [
      {
        table: {
          widths: ["*", 200],
          body: [
            [
              {
                stack: [
                  {
                    text: "CONFIDENT KNITTING WORKS",
                    color: "#F01717",
                    alignment: "center",
                    fontSize: 18,
                    bold: true,
                    margin: [0, 10, 0, 0],
                  },
                  {
                    text: "Thiyagi palaniswamy nagar",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Pooluvapatti, Tirupur",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Ph.no : 7339580177",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "GSTIN : 33AAIFC7327E1ZP",
                    color: "#2E89E0",
                    alignment: "center",
                    fontSize: 14,
                    bold: true,
                    margin: [0, 5, 0, 10],
                  },
                ],
              },
              {
                stack: [
                  {
                    text: "Vendor Yarn DC",
                    color: "#2E89E0",
                    alignment: "center",
                    fontSize: 18,
                    bold: true,
                    colSpan: 2,
                    margin: [0, 10, 0, 0],
                  },
                  {
                    columns: [
                      {
                        text: "VYR.DC No : 100/K21",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 10,
                        bold: true,
                        margin: [0, 0, 0, 0],
                      },
                      {
                        text: "Date : 27/08/2021",
                        color: "#152F48",
                        alignment: "right",
                        fontSize: 10,
                        bold: true,
                      },
                    ],
                    margin: [0, 25, 0, 0],
                  },
                ],
              },
            ],
          ],
        },
      },
      {
        canvas: [
          { type: "line", x1: -10, y1: 0, x2: 600, y2: 0, lineWidth: 1 },
        ],
      },
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
      {
        canvas: [
          { type: "line", x1: -10, y1: 0, x2: 600, y2: 0, lineWidth: 1 },
        ],
      },
      {
        margin: [0, 10, 0, 0],
        layout: "noBorders",
        table: {
          headerRows: 1,
          widths: [50, "*", 50, 50, 100, 100],
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
    pageOrientation: "potrait",
    pageMargins: 10,
    content: [
      {
        table: {
          widths: ["*", 200],
          body: [
            [
              {
                stack: [
                  {
                    text: "CONFIDENT KNITTING WORKS",
                    color: "#F01717",
                    alignment: "center",
                    fontSize: 18,
                    bold: true,
                    margin: [0, 10, 0, 0],
                  },
                  {
                    text: "Thiyagi palaniswamy nagar",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Pooluvapatti, Tirupur",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Ph.no : 7339580177",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "GSTIN : 33AAIFC7327E1ZP",
                    color: "#2E89E0",
                    alignment: "center",
                    fontSize: 14,
                    bold: true,
                    margin: [0, 5, 0, 10],
                  },
                ],
              },
              {
                stack: [
                  {
                    text: "Yarn Return",
                    color: "#2E89E0",
                    alignment: "center",
                    fontSize: 18,
                    bold: true,
                    colSpan: 2,
                    margin: [0, 10, 0, 0],
                  },
                  {
                    columns: [
                      {
                        text: "YR.DC No : 101",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 10,
                        bold: true,
                        margin: [5, 0, 0, 0],
                      },
                      {
                        text: "Date : 27/08/2021",
                        color: "#152F48",
                        alignment: "right",
                        fontSize: 10,
                        bold: true,
                      },
                    ],
                    margin: [0, 15, 0, 0],
                  },
                  {
                    text: "C.DC No : 100/K21",
                    color: "#152F48",
                    alignment: "left",
                    fontSize: 10,
                    bold: true,
                    margin: [5, 10, 0, 0],
                  },
                ],
              },
            ],
          ],
        },
      },
      {
        canvas: [
          { type: "line", x1: -10, y1: 0, x2: 600, y2: 0, lineWidth: 1 },
        ],
      },
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
      {
        canvas: [
          { type: "line", x1: -10, y1: 0, x2: 600, y2: 0, lineWidth: 1 },
        ],
      },
      {
        margin: [0, 10, 0, 0],
        layout: "noBorders",
        table: {
          headerRows: 1,
          widths: [50, "*", 50, 50, 100, 100],
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
    pageOrientation: "potrait",
    pageMargins: 10,
    content: [
      {
        table: {
          widths: ["*", 200],
          body: [
            [
              {
                stack: [
                  {
                    text: "CONFIDENT KNITTING WORKS",
                    color: "#F01717",
                    alignment: "center",
                    fontSize: 18,
                    bold: true,
                    margin: [0, 10, 0, 0],
                  },
                  {
                    text: "Thiyagi palaniswamy nagar",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Pooluvapatti, Tirupur",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Ph.no : 7339580177",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "GSTIN : 33AAIFC7327E1ZP",
                    color: "#2E89E0",
                    alignment: "center",
                    fontSize: 14,
                    bold: true,
                    margin: [0, 5, 0, 10],
                  },
                ],
              },
              {
                stack: [
                  {
                    text: "VENDOR ORDER",
                    color: "#2E89E0",
                    alignment: "center",
                    fontSize: 18,
                    bold: true,
                    colSpan: 2,
                    margin: [0, 10, 0, 0],
                  },
                  {
                    columns: [
                      {
                        text: "V.DC No : 101",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 10,
                        bold: true,
                        margin: [5, 0, 0, 0],
                      },
                      {
                        text: "Date : 27/08/2021",
                        color: "#152F48",
                        alignment: "right",
                        fontSize: 10,
                        bold: true,
                      },
                    ],
                    margin: [0, 15, 0, 0],
                  },
                ],
              },
            ],
          ],
        },
      },
      {
        canvas: [
          { type: "line", x1: -10, y1: 0, x2: 600, y2: 0, lineWidth: 1 },
        ],
      },
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
      {
        canvas: [
          { type: "line", x1: -10, y1: 0, x2: 600, y2: 0, lineWidth: 1 },
        ],
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
              "",
              "",
              {
                text: "Transactional Total",
                color: "#152F48",
                bold: true,
                fontSize: 18,
                alignment: "center",
              },
              {
                text: "Rs. 30,000.00",
                color: "#152F48",
                bold: true,
                fontSize: 18,
                alignment: "center",
              },
              {
                text: "Rs. 20,000.00",
                color: "#152F48",
                bold: true,
                fontSize: 18,
                alignment: "center",
              },
            ],
          ],
        },
      },
    ],
  };
};

const generateInvoicePdf = () => {
  return renderInvoicePdf();
};

const renderInvoicePdf = () => {
  return {
    pageSize: "A3",
    pageOrientation: "potrait",
    pageMargins: [30, 15, 30, 10],
    background: [
      {
        image:
          "data:image/png;base64,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QgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAA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",
        width: 842,
      },
    ],
    content: [
      {
        columns: [
          {
            text: "CONFIDENT KNITTING WORKS",
            bold: true,
            color: "#152F48",
            fontSize: 22,
            margin: [0, 0, 0, 0],
          },
          {
            text: "INVOICE",
            bold: true,
            color: "#0881F6",
            fontSize: 50,
            alignment: "right",
            margin: [0, 0, 25, 0],
          },
        ],
        alignment: "left",
        margin: [0, 20, 0, 0],
      },
      {
        columns: [
          {
            text: "Thiyagi palaniswamy nagar",
            fontSize: 16,
            color: "#152F48",
            margin: [0, 0, 0, 0],
          },
          {
            text: "#IKKA1",
            color: "#0881F6",
            fontSize: 20,
            alignment: "right",
            margin: [0, 0, 150, 0],
          },
        ],
        margin: [0, 20, 0, 0],
      },
      {
        columns: [
          {
            text: "Pooluvapatti, Tirupur",
            fontSize: 16,
            color: "#152F48",
            margin: [0, 0, 0, 0],
          },
          {},
        ],
        margin: [0, 10, 0, 0],
      },
      {
        columns: [
          {
            text: "Ph.no : 7339580177",
            fontSize: 16,
            color: "#152F48",
            margin: [0, 0, 0, 0],
          },
          {
            text: "Inv Date : 27/08/2021",
            color: "#152F48",
            fontSize: 16,
            bold: true,
            alignment: "right",
            margin: [0, 0, 60, 0],
          },
        ],
        margin: [0, 13, 0, 0],
      },
      {
        columns: [
          {
            text: "GSTIN : 33AAIFC7327E1ZP",
            fontSize: 16,
            color: "#152F48",
            bold: true,
            margin: [0, 0, 0, 0],
          },
          {
            text: "Customer DC.NO : KKA12/50",
            color: "#152F48",
            fontSize: 16,
            bold: true,
            alignment: "right",
            margin: [0, 0, 10, 0],
          },
        ],
        margin: [0, 13, 0, 0],
      },
      {
        canvas: [
          { type: "line", x1: 0, y1: 32, x2: 800, y2: 32, lineWidth: 1 },
        ],
      },
      {
        text: "Invoice to",
        color: "#152F48",
        fontSize: 16,
        margin: [5, 20, 0, 0],
      },
      {
        text: "KNIT KING APPARELS",
        color: "#152F48",
        bold: true,
        fontSize: 20,
        margin: [5, 10, 0, 0],
      },
      {
        text: "Thiyagi palaniswamy nagar",
        color: "#152F48",
        fontSize: 16,
        margin: [5, 5, 0, 0],
      },
      {
        text: "Pooluvapatti, Tirupur",
        color: "#152F48",
        fontSize: 16,
        margin: [5, 5, 0, 0],
      },
      {
        text: "GSTIN : 33AAIFC7327E1ZP",
        color: "#152F48",
        bold: true,
        fontSize: 20,
        margin: [5, 5, 0, 0],
      },
      {
        layout: "noBorders",
        margin: [0, 15, 0, 0],
        table: {
          widths: [200, "*", 100, 100, 100],
          headerRows: 1,
          body: [
            [
              {
                text: "S.No",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 18,
                bold: true,
                alignment: "left",
                margin: [10, 10, 5, 10],
              },
              {
                text: "Fabric Description",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 18,
                bold: true,
                alignment: "left",
                margin: [0, 10, 5, 10],
              },
              {
                text: "Quantity",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 18,
                bold: true,
                alignment: "left",
                margin: [0, 10, 5, 10],
              },
              {
                text: "Price",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 18,
                bold: true,
                alignment: "left",
                margin: [0, 10, 5, 10],
              },
              {
                text: "Amount",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 18,
                bold: true,
                alignment: "left",
                margin: [0, 10, 5, 10],
              },
            ],
            [
              {
                text: "1",
                alignment: "left",
                color: "#152F48",
                fontSize: 16,
                margin: [15, 10, 5, 10],
              },
              {
                stack: [
                  {
                    text: "Single Jersey",
                    fontSize: 16,
                    bold: true,
                    color: "#152F48",
                  },
                  {
                    text: "30’s - SSM - LL :31cm - GG: 24",
                    fontSize: 10,
                    color: "#152F48",
                    margin: [0, 5, 0, 0],
                  },
                ],
                alignment: "left",

                margin: [10, 10, 5, 10],
              },
              {
                text: "3000.000",
                alignment: "left",
                color: "#152F48",
                fontSize: 16,
                margin: [5, 10, 5, 10],
              },
              {
                text: "10",
                alignment: "left",
                fontSize: 16,
                color: "#152F48",
                margin: [10, 10, 5, 10],
              },
              {
                text: "30000.00",
                alignment: "left",
                fontSize: 16,
                color: "#152F48",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "1",
                alignment: "left",
                fontSize: 16,
                color: "#152F48",
                margin: [15, 10, 5, 10],
              },
              {
                stack: [
                  {
                    text: "Single Jersey",
                    fontSize: 16,
                    color: "#152F48",
                    bold: true,
                  },
                  {
                    text: "30’s - SSM - LL :31cm - GG: 24",
                    fontSize: 10,
                    color: "#152F48",
                    margin: [0, 5, 0, 0],
                  },
                ],
                alignment: "left",

                margin: [10, 10, 5, 10],
              },
              {
                text: "3000.000",
                alignment: "left",
                color: "#152F48",
                fontSize: 16,
                margin: [5, 10, 5, 10],
              },
              {
                text: "10",
                alignment: "left",
                color: "#152F48",
                fontSize: 16,
                margin: [10, 10, 5, 10],
              },
              {
                text: "30000.00",
                alignment: "left",
                color: "#152F48",
                fontSize: 16,
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "HSN Code : 998821",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 18,
                bold: true,
                alignment: "left",
                margin: [5, 10, 5, 10],
              },
              {
                text: "Total : ",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 18,
                bold: true,
                alignment: "right",
                margin: [5, 10, 5, 10],
              },
              {
                text: "300.00",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 18,
                bold: true,
                alignment: "center",
                margin: [5, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 18,
                bold: true,
                alignment: "center",
                margin: [5, 10, 5, 10],
              },
              {
                text: "300.00",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 18,
                bold: true,
                alignment: "center",
                margin: [5, 10, 5, 10],
              },
            ],
          ],
        },
      },
      {
        layout: {
          hLineWidth: function (i, node) {
            return i === 0 || i === 2 || i === 4 ? 1 : 0;
          },
          vLineWidth: function (i, node) {
            return i === 0 || i === 4 || i === 5 ? 1 : 0;
          },
          hLineColor: function (i, node) {
            return i === 0 || i === 2 || i === 4 ? "#E0E0E0" : null;
          },
          vLineColor: function (i, node) {
            return i === 0 || i === 4 || i === 5 ? "#E0E0E0" : null;
          },
        },
        margin: [0, 20, 0, 0],
        alignment: "center",
        table: {
          widths: ["*", "*", "*", "*", "*"],
          body: [
            [
              {
                text: "Taxable Value",
                alignmnet: "center",
                fontSize: 18,
              },
              {
                text: "CGST - 2.5%",
                alignmnet: "center",
                fontSize: 18,
              },
              {
                text: "SGST - 2.5%",
                alignmnet: "center",
                fontSize: 18,
              },
              {
                text: "Total Tax Value",
                alignmnet: "center",
                fontSize: 18,
              },
              {
                stack: [
                  {
                    text: "Net Amount",
                    bold: true,
                    alignmnet: "center",
                    fontSize: 20,
                  },
                  {
                    text: "Rs. 30,150.00",
                    bold: true,
                    alignmnet: "center",
                    fontSize: 20,
                    color: "#0B82F5",
                    margin: [0, 10, 0, 0],
                  },
                ],
                margin: [0, 30, 0, 0],
                rowSpan: 4,
              },
            ],
            [
              {
                text: "Rs.30,000.00",
                alignmnet: "center",
                bold: true,
                fontSize: 15,
                margin: [0, 5, 0, 0],
                color: "#152F48",
              },
              {
                text: "Rs.75.00",
                alignmnet: "center",
                fontSize: 15,
                bold: true,
                margin: [0, 5, 0, 0],
                color: "#152F48",
              },
              {
                text: "Rs.75.00",
                alignmnet: "center",
                fontSize: 15,
                bold: true,
                margin: [0, 5, 0, 0],
                color: "#152F48",
              },
              {
                text: "Rs.150.00",
                alignmnet: "center",
                fontSize: 15,
                bold: true,
                margin: [0, 5, 0, 0],
                color: "#152F48",
              },
              {},
            ],
            [
              {
                text: "In Words",
                alignmnet: "center",
                fontSize: 18,
                margin: [0, 10, 0, 0],
              },
              {},
              {},
              {},
              {},
            ],
            [
              {
                text: "Thirty Thousand and one hundred fifty Rupees only",
                fontSize: 22,
                bold: true,
                color: "#0B82F5",
                margin: [0, 5, 0, 0],
                colSpan: 4,
              },
              {},
              {},
              {},
              {},
            ],
          ],
        },
      },
      {
        layout: "noBorders",
        margin: [5, 20, 0, 0],
        alignment: "left",
        table: {
          widths: ["*", "*", "*"],
          body: [
            [
              {
                text: "Bank Details",
                bold: true,
                fontSize: 16,
                color: "#152F48",
                margin: [10, 10, 0, 8],
              },
              {},
              {},
            ],
            [
              {
                text: "Account No : ",
                bold: true,
                color: "#152F48",
                fontSize: 16,
                margin: [10, 8, 0, 8],
              },
              {
                text: "IFCS Code : ",
                bold: true,
                color: "#152F48",
                fontSize: 16,
                margin: [30, 8, 0, 8],
              },
              {
                text: "PAN No : ",
                bold: true,
                color: "#152F48",
                fontSize: 16,
                margin: [30, 8, 0, 8],
              },
            ],
            [
              {
                text: "Branch : ",
                bold: true,
                color: "#152F48",
                fontSize: 16,
                margin: [10, 8, 0, 8],
              },
              {
                text: "Brank Name : ",
                bold: true,
                color: "#152F48",
                fontSize: 16,
                margin: [30, 8, 0, 8],
              },
              {},
            ],
          ],
        },
      },
      {
        text: "For Confident Knitting Works",
        alignment: "right",
        color: "#152F48",
        bold: true,
        fontSize: 16,
        margin: [0, 15, 0, 0],
      },
      {
        layout: "noBorders",
        margin: [10, 40, 0, 0],
        table: {
          widths: ["*", "*", "*"],
          body: [
            [
              {
                text: "Received By",
                bold: true,
                color: "#152F48",
                fontSize: 16,
              },
              {
                text: "Prepared By",
                bold: true,
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
              },
              {
                text: "Authorised Signatory",
                bold: true,
                color: "#152F48",
                fontSize: 16,
                alignment: "right",
              },
            ],
          ],
        },
      },
      {
        text: "Thank You for your Business",
        bold: true,
        color: "#152F48",
        alignment: "center",
        fontSize: 20,
        margin: [0, 15, 0, 0],
      },
      {
        text: "*Terms and Conditions",
        bold: true,
        color: "#152F48",
        fontSize: 16,
        margin: [0, 15, 0, 0],
      },
      {
        ul: [
          {
            text: "No purchase or sales involved",
            color: "#152F48",
            fontSize: 16,
          },
          {
            text: "Towards Knitting service charges. No purchase or sales involved",
            color: "#152F48",
            fontSize: 16,
          },
          {
            text: "Arbitrations  subject to Tirupur Jurisdiction",
            color: "#152F48",
            fontSize: 16,
          },
        ],
        margin: [30, 10, 0, 0],
      },
    ],
  };
};

const generateOrderReportPdf = (snapShot) => {
  return renderOrderReportPdf(snapShot);
};

const renderOrderReportPdf = (snapShot) => {
  return {
    pageSize: "A4",
    pageOrientation: "potrait",
    pageMargins: [20, 30, 20, 30],
    background: [
      {
        image:
          "data:image/png;base64,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QgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAACKEEAAAQQgkAACCEEgAAQAglAACAEEoAAAAhlAAAAEIoAQAAhFACAAAIoQQAABBCCQAAIIQSAABACCUAAIAQSgAAACGUAAAAQigBAACEUAIAAAihBAAAEEIJAAAghBIAAEAIJQAAgBBKAAAAIZQAAABCKAEAAIRQAgAA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",
        width: 595,
      },
    ],
    footer: function (currentPage, pageCount) {
      return {
        alignment: "center",
        text: [
          { text: currentPage.toString(), italics: true },
          " of ",
          { text: pageCount.toString(), italics: true },
        ],
      };
    },
    content: [
      {
        text: "CONFIDENT KNITTING WORKS",
        alignment: "center",
        fontSize: 25,
        bold: true,
        margin: [0, 20, 0, 0],
      },
      {
        text: "Order Report",
        alignment: "center",
        fontSize: 22,
        bold: true,
        margin: [0, 10, 0, 0],
      },
      {
        columns: [
          [
            {
              columns: [
                {
                  text: "Total Yarn Recieved",
                  bold: true,
                  fontSize: 16,
                  width: "60%",
                },
                {
                  text: "0",
                  bold: true,
                  fontSize: 16,
                  alignment: "center",
                },
              ],
            },
            {
              columns: [
                {
                  text: "Total Fabric Delivered",
                  bold: true,
                  fontSize: 16,
                  width: "60%",
                },
                {
                  text: "0",
                  bold: true,
                  fontSize: 16,
                  alignment: "center",
                },
              ],
              margin: [0, 20, 0, 20],
            },
            {
              columns: [
                {
                  text: "Total Yarn Returned",
                  bold: true,
                  fontSize: 16,
                  width: "60%",
                },
                {
                  text: "0",
                  bold: true,
                  fontSize: 16,
                  alignment: "center",
                },
              ],
              margin: [0, 0, 0, 50],
            },
            {
              columns: [
                {
                  text: "Total No of Invoice",
                  bold: true,
                  fontSize: 16,
                  width: "60%",
                },
                {
                  text: "4",
                  bold: true,
                  fontSize: 16,
                  alignment: "center",
                },
              ],
              margin: [0, 0, 0, 10],
            },
            {
              columns: [
                {
                  text: "Invoice No",
                  bold: true,
                  fontSize: 16,
                  width: "60%",
                },
                {
                  text: "1,2,3,4",
                  bold: true,
                  fontSize: 16,
                  alignment: "center",
                },
              ],
              margin: [0, 10, 0, 0],
            },
          ],
          [
            {
              image: snapShot,
              width: 100,
              alignment: "center",
            },
            {
              text: "Balance",
              color: "#0281FA",
              alignment: "center",
              fontSize: 18,
              margin: [0, 10, 0, 0],
            },
            {
              text: "Rs. 30,150.00",
              color: "#0281FA",
              alignment: "center",
              bold: true,
              fontSize: 18,
              margin: [0, 20, 0, 0],
            },
            {
              text: "Total Invoice Value",
              color: "#152F48",
              alignment: "center",
              bold: true,
              fontSize: 18,
              margin: [0, 10, 0, 0],
            },
          ],
        ],
        margin: [0, 50, 0, 0],
      },
      {
        text: "Order Detail",
        bold: true,
        fontSize: 20,
        margin: [0, 50, 0, 0],
      },
      {
        layout: "noBorders",
        margin: [0, 15, 0, 15],
        table: {
          widths: ["*", "*", "*", "*"],
          body: [
            [
              {
                text: "Fabric Type",
                color: "#152F48",
                bold: true,
                fontSize: 16,
              },
              {
                text: "Knit King Apparels",
                color: "#152F48",
                fontSize: 16,
              },
              {
                text: "Order ID",
                color: "#152F48",
                bold: true,
                fontSize: 16,
                alignment: "right",
              },
              {
                text: "12345",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
              },
            ],
          ],
        },
      },
      {
        layout: "noBorders",
        margin: [0, 15, 0, 0],
        table: {
          widths: ["*", "*", 70, 70, 70],
          body: [
            [
              {
                text: "Fabric Type",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "Loop Length",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "GSM",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "Dia",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "Weight",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
          ],
        },
      },
      {
        text: "Yarn Details",
        fontSize: 18,
        bold: true,
        margin: [0, 15, 0, 0],
      },
      {
        layout: "noBorders",
        margin: [0, 15, 0, 0],
        table: {
          widths: [70, "*", "*", 70, 70],
          body: [
            [
              {
                text: "Date",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "C.DC No",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "Yarn Details",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "Bag",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "Weight",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {},
              {},
              {
                text: "Total",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
          ],
        },
      },
      {
        text: "Fabric Delivery Details",
        fontSize: 18,
        bold: true,
        margin: [0, 15, 0, 0],
      },
      {
        layout: "noBorders",
        margin: [0, 15, 0, 0],
        table: {
          widths: [70, 70, "*", 70, 70, 70],
          body: [
            [
              {
                text: "Date",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "FDC No",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "Fabric Detail",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "Dia",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "Rolls",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "Weight",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {},
              {},
              {},
              {
                text: "Total",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
          ],
        },
      },
      {
        text: "Yarn Return Details",
        fontSize: 18,
        bold: true,
        margin: [0, 15, 0, 0],
      },
      {
        layout: "noBorders",
        margin: [0, 15, 0, 0],
        table: {
          widths: [70, "*", "*", 70, 70],
          body: [
            [
              {
                text: "Date",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "YRDC No",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "Yarn Details",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "Bag",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "Weight",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                bold: true,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
            [
              {},
              {},
              {
                text: "Total",
                color: "#152F48",
                fontSize: 16,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fillColor: "#E3F4FD",
                fontSize: 16,
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
              {
                text: "11",
                color: "#152F48",
                fontSize: 16,
                fillColor: "#E3F4FD",
                alignment: "center",
                margin: [10, 10, 5, 10],
              },
            ],
          ],
        },
      },
    ],
  };
};

const generateGrnPdf = () => {
  return renderGrnPdf();
};

const renderGrnPdf = () => {
  return {
    pageSize: "A4",
    pageOrientation: "portrait",
    pageMargins: 10,
    content: [
      {
        table: {
          widths: ["*", 200],
          body: [
            [
              {
                stack: [
                  {
                    text: "CONFIDENT KNITTING WORKS",
                    color: "#F01717",
                    alignment: "center",
                    fontSize: 18,
                    bold: true,
                    margin: [0, 10, 0, 0],
                  },
                  {
                    text: "Thiyagi palaniswamy nagar",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Pooluvapatti, Tirupur",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Ph.no : 7339580177",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "GSTIN : 33AAIFC7327E1ZP",
                    color: "#2E89E0",
                    alignment: "center",
                    fontSize: 14,
                    bold: true,
                    margin: [0, 5, 0, 10],
                  },
                ],
              },
              {
                stack: [
                  {
                    text: "GRN",
                    color: "#2E89E0",
                    alignment: "center",
                    fontSize: 18,
                    bold: true,
                    colSpan: 2,
                    margin: [0, 10, 0, 0],
                  },
                  {
                    columns: [
                      {
                        text: "GRN No : 101",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 10,
                        bold: true,
                        margin: [5, 0, 0, 0],
                      },
                      {
                        text: "Date : 27/08/2021",
                        color: "#152F48",
                        alignment: "right",
                        fontSize: 10,
                        bold: true,
                      },
                    ],
                    margin: [0, 15, 0, 0],
                  },
                  {
                    text: "C.DC No : 100/K21",
                    color: "#152F48",
                    alignment: "left",
                    fontSize: 10,
                    bold: true,
                    margin: [5, 10, 0, 0],
                  },
                ],
              },
            ],
          ],
        },
      },
      {
        canvas: [
          { type: "line", x1: -10, y1: 0, x2: 600, y2: 0, lineWidth: 1 },
        ],
      },
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
                text: "KNIT KING APPARELS",
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
          ],
        },
        margin: [10, 10, 10, 10],
        layout: "noBorders",
      },
      {
        canvas: [
          { type: "line", x1: -10, y1: 0, x2: 600, y2: 0, lineWidth: 1 },
        ],
      },
      {
        margin: [0, 10, 0, 0],
        layout: "noBorders",
        table: {
          headerRows: 1,
          widths: [50, "*", 70, 50, 100, 90],
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
      {
        text: "Remarks",
        color: "#152F48",
        alignment: "left",
        margin: [20, 0, 0, 0],
        fontSize: 10,
      },
    ],
  };
};

const generateFabricDc = () => {
  return renderFabricDc();
};

const renderFabricDc = () => {
  return {
    pageSize: "A4",
    pageOrientation: "portrait",
    pageMargins: 10,
    content: [
      {
        table: {
          widths: ["*", 200],
          body: [
            [
              {
                stack: [
                  {
                    text: "CONFIDENT KNITTING WORKS",
                    color: "#F01717",
                    alignment: "center",
                    fontSize: 18,
                    bold: true,
                    margin: [0, 10, 0, 0],
                  },
                  {
                    text: "Thiyagi palaniswamy nagar",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Pooluvapatti, Tirupur",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Ph.no : 7339580177",
                    color: "#152F48",
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "GSTIN : 33AAIFC7327E1ZP",
                    color: "#2E89E0",
                    alignment: "center",
                    fontSize: 14,
                    bold: true,
                    margin: [0, 5, 0, 10],
                  },
                ],
              },
              {
                stack: [
                  {
                    text: "Delivery Challan",
                    color: "#2E89E0",
                    alignment: "center",
                    fontSize: 18,
                    bold: true,
                    colSpan: 2,
                    margin: [0, 10, 0, 0],
                  },
                  {
                    columns: [
                      {
                        text: "F.DC No : 101",
                        color: "#152F48",
                        alignment: "left",
                        fontSize: 10,
                        bold: true,
                        margin: [5, 0, 0, 0],
                      },
                      {
                        text: "Date : 27/08/2021",
                        color: "#152F48",
                        alignment: "right",
                        fontSize: 10,
                        bold: true,
                      },
                    ],
                    margin: [0, 15, 0, 0],
                  },
                  {
                    text: "C.DC No : 100/K21",
                    color: "#152F48",
                    alignment: "left",
                    fontSize: 10,
                    bold: true,
                    margin: [5, 10, 0, 0],
                  },
                ],
              },
            ],
          ],
        },
      },
      {
        canvas: [
          { type: "line", x1: -10, y1: 0, x2: 600, y2: 0, lineWidth: 1 },
        ],
      },
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
                text: "KNIT KING APPARELS",
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
          ],
        },
        margin: [10, 10, 10, 10],
        layout: "noBorders",
      },
      {
        canvas: [
          { type: "line", x1: -10, y1: 0, x2: 600, y2: 0, lineWidth: 1 },
        ],
      },
      {
        margin: [0, 10, 0, 0],
        layout: "noBorders",
        table: {
          headerRows: 1,
          widths: [50, "*", 70, 50, 100, 90],
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
                text: "Rolls",
                color: "#152F48",
                bold: true,
                alignment: "center",
                fillColor: "#E3F4FD",
                margin: [8, 8, 5, 8],
              },
              {
                text: "Weight (kgs)",
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
                text: "30’s - SSM   Grey - Combed",
                color: "#152F48",
                alignment: "center",
                fontSize: 11,
                margin: [8, 8, 5, 8],
              },
              {
                text: "30 cm",
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
                text: "100",
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
                text: "100",
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
      {
        text: "Remarks",
        color: "#152F48",
        alignment: "left",
        margin: [20, 0, 0, 0],
        fontSize: 10,
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
  generateInvoicePdf,
  generateOrderReportPdf,
  generateGrnPdf,
  generateFabricDc,
};
