import { useState } from "react";
import Test from "./Test";

const GroceryForm = () => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleBtnClick = async () => {
    //post api call
    try {
      const response = await fetch(
        "http://localhost:8080/api/product/addItem",
        {
          method: "POST",
          body: JSON.stringify({ itemName: itemName, itemQuantity: quantity }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const onItemNameChange = (params) => {
    setItemName(params.target.value);
  };

  const onQuantityChange = (params) => {
    if (params.target.value != "") {
      setQuantity(params.target.value);
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", width: "50%" }}>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Item Name</label>
            <input
              type="text"
              className="form-control"
              id="itemName"
              aria-describedby="itemName"
              placeholder="Enter Item"
              onChange={onItemNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              placeholder="Quantity"
              onChange={onQuantityChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            // onClick={handleBtnClick}
            onClick={handleBtnClick}
          >
            Submit
          </button>
        </form>
        {/* <Test itemName={itemName} quantity={quantity} /> */}
      </div>
    </>
  );
};

export default GroceryForm;
