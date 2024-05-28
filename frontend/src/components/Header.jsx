import { useEffect, useState } from "react";

import Button from "./Button";

import { BsBrightnessHighFill, BsMoonStarsFill } from "react-icons/bs";

import { Link } from "react-router-dom";

import logo from "../assets/logo2.png";

import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import swal from "sweetalert";

import { logout as logoutRTK } from "../context/userSlice";

import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);

  const logout = () => {

    axios
      .get("http://localhost:4000/api/v1/user/logout", {
        withCredentials: true,
      })
      .then((resp) => {
        console.log(resp);
        if (resp.status === 201) {
          navigate('/login')
          dispatch(logoutRTK());
          swal(resp.data.message, "You clicked the button!", "success");
        }
      });

  };

  let $html = document.getElementById("$html");

  const [theme, setTheme] = useState("");

  let navListforJobSeekr = [
    { name: "Home", url: "/" },
    { name: "All Jobs", url: "/all-jobs" },
    { name: "My Applications", url: "/my-applications" },
  ];

  let navListforEmployer = [
    { name: "Home", url: "/" },
    { name: "All Jobs", url: "/all-jobs" },
    {
      name: "Applicant's Applications",
      url: "/applicant-applications",
      role: "employer",
    },
    { name: "Post new Job", url: "/post-job", role: "employer" },
    { name: "View your Jobs", url: "/your-jobs", role: "employer" },
  ];

  const themeChanger = () => {
    if (theme === "light") {
      setTheme("night");
      localStorage.setItem("theme", "night");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }

    $html.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "night");
      setTheme("night");
      $html.setAttribute("data-theme", "night");
    } else {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  $html.setAttribute("data-theme", theme);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <Link className=" text-black dark:text-white">Submenu 1</Link>
                </li>
                <li>
                  <Link className=" text-black dark:text-white">Submenu 2</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to={"/"} className=" ml-3">
          <img src={logo} width={"50px"} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {userData?.role === "Employer"
            ? navListforEmployer.map((item) => (
                <li key={item.name}>
                  <Link to={item.url}>{item.name}</Link>
                </li>
              ))
            : navListforJobSeekr.map((item) => (
                <li key={item.name}>
                  <Link to={item.url}>{item.name}</Link>
                </li>
              ))}
        </ul>
      </div>
      <div className="navbar-end flex items-center justify-end flex-row gap-4">
        <Button onClick={logout}>Logout</Button>
        <Button onClick={themeChanger}>
          {theme === "night" ? (
            <BsMoonStarsFill className="text-[20px] w-[40px]" />
          ) : (
            <BsBrightnessHighFill className="text-[20px] w-[40px]" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Header;
