const Test = (...props) => {
  console.log("Inside props", props);
  return (
    <>
      <p>
        Testing state value: {props[0].itemName} and {props[0].quantity}
      </p>
    </>
  );
};

export default Test;
