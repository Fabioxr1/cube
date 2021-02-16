import React from "react";

const Region = (props) => {
  const {nameRegion, coords, onSelectImage} = props;
  
  const onMouseEnterImage = () => {
    onSelectImage(`images/${nameRegion}.png`);
  };

  const onMouseOutImage = () => {
    onSelectImage("images/cartina_italia.png");
  };

  return (
    <area
      shape="poly"
      coords={coords}
      href="#"
      alt={nameRegion}
      title={nameRegion}
      onMouseEnter={onMouseEnterImage}
      onMouseOut={onMouseOutImage}
    />
  );
};

export default Region;
