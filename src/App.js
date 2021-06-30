import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route,useHistory } from "react-router-dom";
import CenterCard from "./components/CenterCard";
import CenterDetails from "./components/CenterDetails";
import Centers from "./components/Centers";
import "./App.css";

const App = () => {
  const history = useHistory()
  var today = new Date();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const [areaPincode, setAreaPincode] = useState("");
  const [vaccCenters, setCenters] = useState([]);

  const getCenters = async () => {
    const res = await fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${areaPincode}&date=${date}`
    );
    const centers = await res.json();
    setCenters(centers.centers);
    // history.push('/centers')
  };

  // const getSessions = async () => {
  //   const res = await fetch(
  //     `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${areaPincode}&date=${date}`
  //   );
  //   const sessions = await res.json();
  //   setVaccSessions(sessions.slots);
  const formSubmit = (e) => {
    e.preventDefault();
    getCenters();
    console.log(vaccCenters);
  };

  const getPincode = (e) => {
    setAreaPincode(e.target.value);
  };
  useEffect(() => {
    getCenters();
  }, []);
  return (
    <>
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
          
            <div className="form__container">
              <form onSubmit={formSubmit}>
                <div className="form__label">
                  <label>Find vaccine center</label>
                </div>
                <div className="form__input">
                  <input
                    type="text"
                    placeholder="Enter pincode...."
                    value={areaPincode}
                    onChange={getPincode}
                  />
                </div>
                <button type="submit">Click me</button>
              </form>
            </div>
            <div
              className={
                vaccCenters && vaccCenters.length !== 0
                  ? "center__container"
                  : "center__container_none"
              }
            >
              <div className="center__header">
                {vaccCenters && vaccCenters?.length !== 0 ? (
                  <p> Found {vaccCenters?.length} centers</p>
                ) : null}
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
        </Route>
        </Switch>
      </Router>
      </div>
    </>
  );
};

export default App;
