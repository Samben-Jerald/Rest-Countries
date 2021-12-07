import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "./Pages/HomePage";
import Header from "./Component/PageComponent/Header";
import CountryDetails from "./Pages/CountryDetails";
import { darkModeActions } from "./Store/index";

function App() {
  
  const darkModeState = useSelector((state) => state.darkmode.darstateMode);
  const dispatch = useDispatch();
  const [darkmode, setDarkmode] = React.useState(getMode);

  React.useEffect(() => {
    localStorage.setItem("Theme", JSON.stringify(darkmode));
    dispatch(
      darkModeActions.toogleMode(darkmode)
    );
  }, [darkmode,dispatch]);

  function getMode() {
    const getState = JSON.parse(localStorage.getItem("Theme"));
    return getState || false;
  }

  const ThemeHandler = () => {
    setDarkmode((prev) => !prev);
  };

  return (
    <div
      style={{
        backgroundColor: darkModeState && "hsl(207, 26%, 17%)",
        color: darkModeState && "hsl(0, 0%, 100%)",
      }}
      className="App"
    >
      <Header onClick={ThemeHandler} />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/" element={<Navigate redirect to="/homepage" />} />
        <Route path="/country/:country" element={<CountryDetails />} />
        <Route
          path="*"
          element={<h1 style={{ textAlign: "center" }}>404 Page Not Found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
