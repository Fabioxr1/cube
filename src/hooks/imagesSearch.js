import { useState} from "react";
import unsplash from "../api/unsplash";

const useImagesSearch = () => {
  const [images, setImages] = useState([]);

  const search = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    setImages(response.data.results);
  };

  return [images,search];
};

export default useImagesSearch;
