import React from 'react';

const DownLoadQrCode = ({href, label}) => {
    return (
        <div className="ui segment">
        <a download="Qrcode.png" className="ui primary button" id="dLQrcode" href={href}>
         {label}
        </a>
      </div>
    )
}

export default DownLoadQrCode;