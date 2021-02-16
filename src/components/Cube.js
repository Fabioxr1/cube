import React from "react";
import SelectFaceCube from "./SelectFacecube";
import FaceCube from "./FaceCube";

const Cube = (props) => {
  const { faceRight } = props;

  return (
    <div>
      <SelectFaceCube
        radioSelect="radio-front"
        label="HOME"
        icon="home"
        color="#58d568"
        rotate="rotate(352deg)"
      />
      <SelectFaceCube
        radioSelect="radio-left"
        label="ROBERTO COSTANTINI"
        icon="user circle"
        color="#FFFFFF"
        rotate="rotateY(90deg)"
      />
      <SelectFaceCube
        radioSelect="radio-back"
        label="GIANNI INGUSCIO"
        icon="user circle"
        color="#ffaf1c"
        rotate="rotateY(180deg)"
      />
      <SelectFaceCube
        radioSelect="radio-top"
        label="ROBERTO CUPPONE"
        icon="user circle"
        color="#ed3030"
        rotate="rotateX(-90deg)"
      />
      <SelectFaceCube
        radioSelect="radio-right"
        label="QrCode"
        icon="qrcode"
        color="#1c5ffe"
        rotate="rotateY(-90deg)"
      />
      <SelectFaceCube
        radioSelect="radio-bottom"
        label="CONTATTI"
        icon="jenkins"
        color="#f2f215"
        rotate="rotateX(90deg)"
      />

      <div className="separator"></div>
      <FaceCube faceRight={faceRight} />
    </div>
  );
};

export default Cube;
