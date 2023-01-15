import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const checkLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      {!checkLoggedIn && <Auth />}
      {checkLoggedIn && <Layout />}
    </>
  );
}

export default App;
