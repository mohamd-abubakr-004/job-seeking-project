import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import swal from "sweetalert";

import { useSelector } from "react-redux";

import logo from "../assets/logo2.png";

const YourApplyPost = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const [apply, setApply] = useState([]);

  let [deleteApplyApplication, setDeleteApplyApplication] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/application/jobseeker/getall", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          setApply(res.data.applications);
        }
      });
  }, [deleteApplyApplication]);

  if (isAuth) {
    if (apply.length >= 1) {
      return (
        <>
          <h3 className="text-2xl font-bold dark:text-white text-center mb-2 tracking-[1px] my-4">
            All Available Jobs
          </h3>
          <section className="flex items-start justify-center flex-wrap flex-row w-full gap-4 min-h-[75vh]">
            {apply.map((job) => {
              return (
                <div
                  key={job._id}
                  className="card bg-base-100 shadow-xl border-[2px] border-solid border-gray-500 w-[95%] rounded-xl"
                >
                  <div className="card-body flex items-center justify-around flex-row">
                    <div className=" flex items-start justify-center flex-col gap-2 w-[50%]">
                      <div className=" flex items-center justify-center flex-row gap-2 h-auto">
                        <strong className="font-bold text-center">Name</strong>:
                        <p className="text-black text-sm dark:text-gray-400 text-center">
                          {job.name}
                        </p>
                      </div>

                      <div className=" flex items-center justify-center flex-row gap-2 h-auto">
                        <strong className="font-bold text-center">Email</strong>
                        :
                        <p className="text-black text-sm dark:text-gray-400 text-center">
                          {job.email}
                        </p>
                      </div>

                      <div className=" flex items-center justify-center flex-row gap-2 h-auto">
                        <strong className="font-bold text-center">
                          Phone no
                        </strong>
                        :
                        <p className="text-black text-sm dark:text-gray-400 text-center">
                          {job.phone}
                        </p>
                      </div>

                      <div className=" flex items-start justify-center flex-row gap-2 h-auto">
                        <strong className="font-bold text-center">
                          Cover Latter
                        </strong>
                        :
                        <p className="text-black text-sm dark:text-gray-400 text-start text-wrap">
                          {job.coverLetter}
                        </p>
                      </div>
                    </div>

                    <img src={job.resume.url} alt="" className=" w-[8rem]" />

                    <div className="card-actions justify-end">
                      <Link
                        onClick={() => {
                          let applicationId = job._id;
                          axios
                            .delete(
                              `http://localhost:4000/api/v1/application/delete/${applicationId}`,
                              { withCredentials: true }
                            )
                            .then((res) => {
                              if (res.status === 200) {
                                setDeleteApplyApplication((prev) => !prev);
                                swal(
                                  res.data.message,
                                  "You clicked the button!",
                                  "success"
                                );
                              }
                            });
                        }}
                        className="btn btn-primary"
                      >
                        Delete Application
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </>
      );
    } else {
      return (
        <h3 className="text-2xl font-bold dark:text-white text-center mb-2 tracking-[1px] my-4 h-[80vh]">
          You not apply for any Job
        </h3>
      );
    }
  } else
    <div className=" flex items-center justify-center flex-col gap-8 w-full h-[90vh] px-5">
      <div className="flex items-center justify-center flex-row gap-4">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>{" "}
        <h2 className="text-4xl font-bold dark:text-white text-black ">
          plz Login!
        </h2>
      </div>
    </div>;
};

export default YourApplyPost;
