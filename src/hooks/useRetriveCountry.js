import { useState,useEffect} from "react";
import covid19apiCountrylist from "../api/covid19apiCountrylist";

const useRetriveCountry = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    retriveCountry();
  },[]);

  const retriveCountry = async () => {
    const response = await covid19apiCountrylist.get();
     setCountry(response.data);
  };

  return country;
};

export default useRetriveCountry;