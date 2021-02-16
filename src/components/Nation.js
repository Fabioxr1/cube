import React, { useEffect, useState } from "react";
import Region from "./Region";

import regions from "../api/datiRegioni";

const ItalyMaps = () => {
  const [srcImage, setSrcImage] = useState("images/cartina_italia.png");

  const handleSetImage = (image) => {
    setSrcImage(image);
  };

  useEffect(() => {
    const imageList = [
      "images/Aosta.png",
      "images/Piemonte.png",
      "images/Lombardia.png",
      "images/Trentino.png",
      "images/Veneto.png",
      "images/Friuli.png",
      "images/Liguria.png",
      "images/Emilia.png",
      "images/Toscana.png",
      "images/Marche.png",
      "images/Umbria.png",
      "images/Molise.png",
      "images/Lazio.png",
      "images/Abruzzo.png",
      "images/Campania.png",
      "images/Puglia.png",
      "images/Calabria.png",
      "images/Sicilia.png",
      "images/Sardegna.png",
    ];
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  const singleRegionMap = (regions) => {
    return regions.map((region) => {
      return (
        <Region
          key={region.region.name}
          nameRegion={region.region.name}
          coords={region.region.coords}
          onSelectImage={handleSetImage}
        />
      );
    });
  };
  return (
    <div>
      <div className="mappa">
        <img
          id="mappaitalia"
          useMap="#Map"
          src={srcImage}
          name="Italia"
          alt="Italia"
        />
        <map id="Map" key="ItalyMap" name="Map">
          {singleRegionMap(regions)}
        </map>
      </div>
    </div>
  );
};

export default ItalyMaps;
