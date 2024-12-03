import GroceryForm from "./components/GroceryForm";
import Header from "./components/Header";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import Grid from "./components/Grid";

function App() {
  return (
    <>
      <Header />
      <GroceryForm />
      <Grid />
    </>
  );
}

export default App;
