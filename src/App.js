import React, { useEffect, useState } from "react";
import CenterCard from "./components/CenterCard";
import "./App.css";
function App() {
  var today = new Date();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const [areaPincode, setAreaPincode] = useState("");
  const [vaccCenters, setCenters] = useState([]);

  const getCenters = async () => {
    const res = await fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${areaPincode}&date=${date}`
    );
    const sessions = await res.json();
    setCenters(sessions.centers);
  };


  const formSubmit = (e) => {
    e.preventDefault();
    getCenters();
    // setAreaPincode("");
    console.log(vaccCenters);
  };

  const getPincode = (e) => {
    setAreaPincode(e.target.value);
  };
  useEffect(() => {
    getCenters();
  }, []);
  return (
    <div className="App">
      <div className="form__container">
        <form onSubmit={formSubmit}>
          <div className="form__label">
            <label>Pincode</label>
          </div>
          <div className="form__input">
            <input type="text" value={areaPincode} onChange={getPincode} />
          </div>
          <button type="submit">Click me</button>
        </form>
        <p>Found {vaccCenters?.length} vaccine centers</p>
      </div>
      <div className="center__wrapper">
        {vaccCenters && vaccCenters.length === 0 ? (
          <p>Oop's the server didn't sent the data for {areaPincode}</p>
        ) : (
          vaccCenters?.map((center) => {
            return (
              <div>
                <CenterCard center={center} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;

// const getRecipes = async ()=>{
//   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
//   const data = await response.json()
//   setRecipes(data.hits)
// }
// fetch('https://api.github.com/users/hacktivist123/repos')
// .then(response => response.json())
// .then(data => console.log(data));

// const getDate = (e) => {
//   setAreaPincode(e.target.value);
// };
