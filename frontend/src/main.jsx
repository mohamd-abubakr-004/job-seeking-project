import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import store from "./context/store.js";
import {Provider} from 'react-redux'

import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import AllJobs from "./pages/AllJobs.jsx";
import PostJob from "./pages/PostJob.jsx";
import JobDetails from "./pages/JobDetails.jsx";
import JobApply from "./pages/JobApply.jsx";
import YourApplyPost from "./pages/YourApplyPost.jsx";
import ApplicantApplications from "./pages/ApplicantApplications.jsx";
import ViewYourPost from "./pages/ViewYourPost.jsx";
import UpdatePost from "./pages/UpdatePost.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/all-jobs" element={<AllJobs />} />
      <Route path="/post-job" element={<PostJob />} />
      <Route path="/job/:id" element={<JobDetails />} />
      <Route path="/apply/:id" element={<JobApply />} />
      <Route path="/my-applications" element={<YourApplyPost />} />
      <Route path="/applicant-applications" element={<ApplicantApplications />} />
      <Route path="/your-jobs" element={<ViewYourPost/>} />
      <Route path="/update/:id" element={<UpdatePost/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
