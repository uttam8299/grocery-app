import { AgGridReact } from "ag-grid-react";
import { useCallback, useEffect, useRef, useState } from "react";

const Grid = () => {
  const [rowData, setRowData] = useState([]);
  const gridRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:8080/api/product/getAllItems"
      );
      const data = await response.json();
      setRowData(data);
    }
    fetchData();
  }, []);

  const onEditBtnClicked = (params) => {
    alert("Edit");
  };

  const onDeleteBtnClicked = async (params) => {
    debugger;
    const response = await fetch(
      `http://localhost:8080/api/product/deleteItem/` + params.data.itemId,
      {
        method: "DELETE",
      }
    );
    const data = await response.text();
    alert(data);
    window.location.reload();
  };

  const getRowId = (params) => {
    return String(params.data.itemId);
  };

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { headerName: "Item Id", field: "itemId" },
    { field: "itemName" },
    { field: "quantity" },
    {
      headerName: "Edit",
      cellRenderer: (params) => {
        return (
          <button onClick={() => onEditBtnClicked(params)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
            </svg>
          </button>
        );
      },
    },
    {
      headerName: "Delete",
      cellRenderer: (params) => {
        return (
          <button onClick={() => onDeleteBtnClicked(params)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
          </button>
        );
      },
    },
  ]);

  return (
    // wrapping container with theme & size
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: 500 }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={colDefs}
        getRowId={getRowId}
      />
    </div>
  );
};

export default Grid;
