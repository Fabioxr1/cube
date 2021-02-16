import React from "react";

const SelectFaceCube = (props) => {
  const { label, icon, rotate, color } = props;

  const rotateCube = (rotate) => {
    document.querySelector(".space3d ._3dbox").style.transform = rotate;
  };

  return (
    <span 
      onClick={() => rotateCube(rotate)}
      className="ui label"
      style={{ margin: "10px", backgroundColor: color, border:'1px solid #000', boxShadow:'9px 7px 15px 1px #000000'}}
    >
      <i className={`${icon} icon`}></i>
      {label}
    </span>
  );
};

export default SelectFaceCube;
