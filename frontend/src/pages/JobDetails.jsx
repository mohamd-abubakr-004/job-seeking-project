import axios from "axios";
import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { useSelector } from "react-redux";

const JobDetails = () => {
  const { id } = useParams();

  const [job, setJob] = useState([]);

  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/job/${id}`, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          setJob(res.data.job);
        }
      });
  }, [id]);

  if (job) {
    if (job.fixedSalary) {
      return (
        <div className=" h-[80vh] flex items-start justify-around flex-wrap flex-col py-8 ml-4 mt-4">
          <div className=" flex items-center justify-center flex-row gap-2 h-auto">
            <strong className="font-bold text-center">Title</strong>:
            <p className="text-black text-sm dark:text-gray-400 text-center">
              {job.title}
            </p>
          </div>

          <div className=" flex items-center justify-center flex-row gap-2 h-auto">
            <strong className="font-bold text-center">Catagory</strong>:
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
            <strong className="font-bold text-center">Description</strong>:
            <p className="text-gray-900 text-sm dark:text-gray-400 text-start text-wrap pr-4">
              {job.description}
            </p>
          </div>

          <div className=" flex items-center justify-center flex-row gap-2 h-auto">
            <strong className="font-bold text-center">Job Post on</strong>:
            <p className="text-black text-sm dark:text-gray-400 text-center">
              {job.jobPostedOn}
            </p>
          </div>

          <div className=" flex items-center justify-center flex-row gap-2 h-auto">
            <strong className="font-bold text-center">Salary</strong>:
            <p className="text-black text-sm dark:text-gray-400 text-center">
              {job.fixedSalary}
            </p>
          </div>

          {userData.role == "Job Seeker" && (
            <Link
            to={`/apply/${job._id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[9rem] mt-3"
            >
            Apply for Job
            </Link>
          )}
        </div>
      );
    } else {
      return (
        <div className=" h-[80vh] flex items-start justify-around flex-wrap flex-col py-8 ml-4 mt-4">
          <div className=" flex items-center justify-center flex-row gap-2 h-auto">
            <strong className="font-bold text-center">Title</strong>:
            <p className="text-black text-sm dark:text-gray-400 text-center">
              {job.title}
            </p>
          </div>

          <div className=" flex items-center justify-center flex-row gap-2 h-auto">
            <strong className="font-bold text-center">Catagory</strong>:
            <p className="text-black text-sm dark:text-gray-400 text-center">
              {job.category}
            </p>
          </div>

          <div className=" flex items-center justify-center flex-row gap-2 h-auto">
            <strong className="font-bold text-center">Country</strong>:
            <p className="text-gray-500 text-sm dark:text-gray-400 text-center">
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
            <strong className="font-bold text-center">Description</strong>:
            <p className="text-gray-900 text-sm dark:text-gray-400 text-start text-wrap pr-4">
              {job.description}
            </p>
          </div>

          <div className=" flex items-center justify-center flex-row gap-2 h-auto">
            <strong className="font-bold text-center">Job Post on</strong>:
            <p className="text-black text-sm dark:text-gray-400 text-center">
              {job.jobPostedOn}
            </p>
          </div>

          <div className=" flex items-center justify-center flex-row gap-2 h-auto">
            <strong className="font-bold text-center">Salary</strong>:
            <p className="text-black text-sm dark:text-gray-400 text-center">
              {job.salaryFrom} To {job.salaryTo}
            </p>
          </div>

          {userData.role == "Job Seeker" && (
            <Link
              to={`/apply/${job._id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[9rem] mt-3"
            >
              Apply for Job
            </Link>
          )}
        </div>
      );
    }
  }
};

export default JobDetails;
