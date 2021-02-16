import React, { useState } from "react";
import InputBar from "./InputBar";
import Qrcode from "./Qrcode";
import Cube from "./Cube";
import DownLoadQrCode from "./DownLoadQrCode";

import useRetriveImageSvg from "../hooks/useRetriveImageSvg";

const App = () => {
  const [term, setTerm] = useState("Non ci sta niente da  leggere!");
  const [imageProps, png] = useRetriveImageSvg(term);

  const onSubmitTerm = (term) => {
    setTerm(term);
    document.querySelector(".space3d ._3dbox").style.transform =
      "rotateY(-90deg)";
  };


  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <InputBar onSubmit={onSubmitTerm} />
      <div className="svg" style={{ minHeight: "600px" }}>
        <Cube faceRight={imageProps} />
      </div>
      <div className="separator"></div>
      <DownLoadQrCode namefile="Qrcode.png" href={png} label="Scarica QrCode" />
      <div className="ui segment">
        <Qrcode value={term} size={50} />
        <p>
          Creato Per gli Amici di
          <a href="https://www.rubikdigitale.it/"> Rubik Digitale </a> da <a href="https://www.linkedin.com/in/fabio-perrone-138250169/" rel="nofollow">Fabio Perrone</a>
        </p>
      </div>
    </div>
  );
};

export default App;
