import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";

const Grid = () => {
  debugger;
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    debugger;
    async function fetchData() {
      const response = await fetch(
        "http://localhost:8080/api/product/getAllItems"
      );
      const data = await response.json();
      setRowData(data);
    }
    fetchData();
  }, [rowData]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { headerName: "Item Id", field: "itemId" },
    { field: "itemName" },
    { field: "quantity" },
    { headerName: "Action" },
  ]);

  return (
    // wrapping container with theme & size
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: 500 }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default Grid;
