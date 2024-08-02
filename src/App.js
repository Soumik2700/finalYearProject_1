import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Header from "./Conponents/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyContext = createContext();
function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Select location");

  useEffect(() => {
    getCountry("https://restcountries.com/v3.1/all");
  }, []);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response.data);  // Ensure the correct data is being logged
      setCountryList(response.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const values = {
    countryList,
    selectedCountry,
    setSelectedCountry
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header/>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
