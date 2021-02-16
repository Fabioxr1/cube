import React from 'react';


const FaceCube = ({faceRight}) => {

    return (
        <div className="space3d">
        <div className="_3dbox">
          <div
            className="_3dface _3dface--front"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/rubik_logo.png)`,
              border: "1px solid #58d568",
            }}
          ></div>
          <div
            className="_3dface _3dface--top"
            style={{
              border: "1px solid #ed3030",
            }}
          ></div>
          <div
            className="_3dface _3dface--bottom"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/contact.png)`,
              border: "1px solid #f2f215",
            }}
          ></div>
          <div
            className="_3dface _3dface--left"
            style={{
              border: "1px solid #FFFFFF",
            }}
          ></div>
          <div
            className="_3dface _3dface--right"
            style={{
              backgroundImage: `url(${faceRight})`,
              border: "1px solid #1c5ffe",
            }}
          ></div>
          <div className="_3dface _3dface--back"
          style={{
            border: "1px solid #ffaf1c",
          }}></div>
        </div>
      </div>
    )
}

export default FaceCube;