import React from "react";
import QRCode from "react-qr-code";

const Qrcode = (props) => {
  
  return (
      <div>
        <QRCode size={props.size} value={props.value} />
      </div>
  )
};
export default Qrcode;
