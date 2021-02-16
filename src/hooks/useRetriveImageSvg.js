import { useState, useEffect } from 'react';

const useRetriveImageSvg = (term) => {
    const [png, setPng] = useState('');
    const [imageProps, setImage] = useState('');


    function svgImgPng() {
        var svg = document.querySelector("svg");
        // let { width, height } = svg.getBBox();
        let cloneSvg = svg.cloneNode(true);
        let outerHtml = cloneSvg.outerHTML;
        let blob = new Blob([outerHtml], { type: "image/svg+xml;charset=utf-8" });
        let URL = window.URL || window.webkitURL || window;
        let blobURL = URL.createObjectURL(blob);
    
        let image = new Image();
        image.onload = () => {
          let canvas = document.createElement("canvas");
          canvas.widht = 300;
          canvas.height = 300;
          let context = canvas.getContext("2d");
          // draw image in canvas starting left-0 , top - 0
          context.drawImage(image, 0, 0, 300, 300);
          //  context.font = "30px Arial";
          //  context.fillStyle = "red";
          //  context.textAlign = "center";
          //  context.fillText("Rubik", 150, 150);
           var png = canvas.toDataURL();
          setPng(png);
           // document.getElementById('dLQrcode').href = png;
        };
    
        image.src = blobURL;
        setImage(image.src);
      }
    
      useEffect(() => {
        var svg = document.querySelector("svg");
        if (svg) {
         svgImgPng();
        }
      }, [term]);

      return [imageProps, png]
}

export default useRetriveImageSvg;