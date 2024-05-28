import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import axios from "axios";

import swal from "sweetalert";

import { useNavigate } from "react-router-dom";

const ViewYourPost = () => {

    const navigate = useNavigate()

    const [jobChangerState, setJobChangerState] = useState(true)

  const userData = useSelector((state) => state.auth.userData);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/job/getmyjobs", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status == 200) {
          setJobs(res.data.myJobs);
        }
      });
  }, [jobChangerState]);

  if (userData.role == "Employer") {
    if (jobs.length > 0) {
      return (
        <>
          <h3 className="text-2xl font-bold dark:text-white text-center mb-2 tracking-[1px] my-4">
            Your Posted Jobs
          </h3>
          {jobs.map((job) => {
            return (
              <div
                key={job._id}
                className=" h-[30vh] flex items-center justify-center flex-wrap flex-row gap-6 py-8 ml-4 mt-4 border-[2px] border-solid border-gray-500 rounded-xl"
              >
                <div className=" flex items-center justify-center flex-row gap-2 h-auto">
                  <strong className="font-bold text-center">Title</strong>:
                  <p className="text-black text-sm dark:text-gray-400 text-center">
                    {job.title}
                  </p>
                </div>

                <div className=" flex items-center justify-center flex-row gap-2 h-auto">
                  <strong className="font-bold text-center">Category</strong>:
                  <p className="text-black text-sm dark:text-gray-400 text-center">
                    {job.category}
                  </p>
                </div>

                <div className=" flex items-center justify-center flex-row gap-2 h-auto">
                  <strong className="font-bold text-center">Country</strong>:
                  <p className="text-black text-sm dark:text-gray-400 text-center">
                    {job.country}
                  </p>
                </div>

                <div className=" flex items-center justify-center flex-row gap-2 h-auto">
                  <strong className="font-bold text-center">City</strong>:
                  <p className="text-black text-sm dark:text-gray-400 text-center">
                    {job.city}
                  </p>
                </div>

                <div className=" flex items-center justify-center flex-row gap-2 h-auto">
                  <strong className="font-bold text-center">Location</strong>:
                  <p className="text-black text-sm dark:text-gray-400 text-center">
                    {job.location}
                  </p>
                </div>

                <div className=" flex items-start justify-center flex-row gap-2 h-auto">
                  <strong className="font-bold text-center">Description</strong>
                  :
                  <p className="text-gray-900 text-sm dark:text-gray-400 text-start text-wrap pr-4">
                    {job.description}
                  </p>
                </div>

                <div className=" flex items-center justify-center flex-row gap-2 h-auto">
                  <strong className="font-bold text-center">Job Post on</strong>
                  :
                  <p className="text-black text-sm dark:text-gray-400 text-center">
                    {job.jobPostedOn}
                  </p>
                </div>

                {job.fixedSalary ? (
                  <div className=" flex items-center justify-center flex-row gap-2 h-auto">
                    <strong className="font-bold text-center">Salary</strong>:
                    <p className="text-black text-sm dark:text-gray-400 text-center">
                      {job.fixedSalary}
                    </p>
                  </div>
                ) : (
                  <div className=" flex items-center justify-center flex-row gap-2 h-auto">
                    <strong className="font-bold text-center">Salary</strong>:
                    <p className="text-black text-sm dark:text-gray-400 text-center">
                      {job.salaryFrom} To {job.salaryTo}
                    </p>
                  </div>
                )}

                <Link
                  id={job._id}
                  onClick={(e) => {
                    axios.delete(`http://localhost:4000/api/v1/job/delete/${e.target.getAttribute('id')}`, {withCredentials: true}).then((res) => {
                        setJobChangerState(prev => prev ? false : true)
                        swal(res.data.message, "You clicked the button!", "success");
                    })
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[8rem] mt-3"
                >
                  Delete Job
                </Link>

                <Link
                id={job._id}
                onClick={(e) => navigate(`/update/${e.target.getAttribute('id')}`)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[8rem] mt-3"
                >
                  Update Job
                </Link>
              </div>
            );
          })}
        </>
      );
    } else
      <h3 className="text-2xl font-bold dark:text-white text-center mb-2 tracking-[1px] my-4">
        You not Posted any job
      </h3>;
  }
};

export default ViewYourPost;
