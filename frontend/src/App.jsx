import "./App.css";

import { Outlet } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import axios from "axios";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { login } from "./context/userSlice.js";

function App() {

  const isAuth = useSelector(state => state.auth.isAuth)

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/user/getuser", {withCredentials: true}).then((response) => {
      if (response.status === 200) {
        dispatch(login(response.data.user))
      }
    });
  }, [isAuth, dispatch]);

  return (
    <>
      {isAuth && <Header />}
      <Outlet />
      {isAuth && <Footer />}
    </>
  );
}

export default App;
