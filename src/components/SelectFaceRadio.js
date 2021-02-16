import React, { Fragment } from "react";

const SelectFaceRadio = (props) => {
  const { label, radioSelect } = props;
  return (
    <Fragment>
        <input
          type="radio"
          id={radioSelect}
          name="select-face"
          style={{ margin: "0 10px 0 10px" }}
        />
        <label htmlFor="radio-front" style={{ textTransform: "uppercase" }}>
          {label} |
        </label>
    </Fragment>
  );
};

export default SelectFaceRadio;
