import { Link } from "react-router-dom";

import logo from "../assets/logo2.png";

import { useSelector } from "react-redux";

import { useForm } from "react-hook-form";

import { useState } from "react";

import axios from "axios";

import swal from "sweetalert";

import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const { register, handleSubmit } = useForm();

  const isAuth = useSelector((state) => state.auth.isAuth);

  const [value, setValue] = useState('Fixed Salary');

  const navigate = useNavigate()

  let handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    console.log(value);
  };

  const submitHander = async (data) => {
    let apiData = {}
    for(let i in data){
      if(value == 'Ranged Salary'){
        if(i !== 'fixedSalary'){
          apiData[i] = data[i]
        }
      }
      if(value == 'Fixed Salary'){
        if(i!== 'salaryFrom' || i !== 'salaryTo'){
          apiData[i] = data[i]
        }
      }
    }
    try {
      console.log(apiData);
      axios
        .post("http://localhost:4000/api/v1/job/post", apiData, {
          headers: {
            "content-type": "application/json",
          },
          withCredentials: true,
        })
        .then((resp) => {
          if(resp.status === 200){
            navigate(`/job/${resp.data.job._id}`)
            swal(resp.data.message, "You clicked the button!", "success");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuth) {
    return (
      <form className="max-w-md mx-auto" onSubmit={handleSubmit(submitHander)}>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            {...register("title", { required: true })}
          />

          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Job Title
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            {...register("country", { required: true })}
          />

          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Country
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            {...register("city", { required: true })}
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            City
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            {...register("location", { required: true })}
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Location
          </label>
        </div>

        <select
          className="select select-bordered w-full mb-2"
          {...register("category", { required: true })}
        >
          <option disabled selected>
            Select Category
          </option>
          <option>Graphic Designer</option>
          <option>Mobile App Development</option>
          <option>Front-end Web Development</option>
          <option>Back-end Web Development</option>
          <option>MERN stack Development</option>
          <option>Account & Finance</option>
          <option>Artificial intelligence</option>
          <option>Video Animation</option>
        </select>

        <select
          className="select select-bordered w-full mb-3"
          onChange={handleChange}
        >
          <option disabled>Salary type</option>
          <option selected>Fixed Salary</option>
          <option>Ranged Salary</option>
        </select>

        {value == "Fixed Salary" ? (
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("fixedSalary", {required: true})}
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Fixed Salary
            </label>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                {...register("salaryFrom", {required: true})}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Salary From
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                {...register("salaryTo", {required: true})}
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Salary To
              </label>
            </div>
          </div>
        )}

        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mt-3"
        >
          Post Job
        </button>
      </form>
    );
  } else {
    return (
      <div className=" flex items-center justify-center flex-col gap-8 w-full h-[90vh] px-5">
        <div className="flex items-center justify-center flex-row gap-4">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>{" "}
          <h2 className="text-4xl font-bold dark:text-white text-black ">
            You are not Login
          </h2>
        </div>
      </div>
    );
  }
};

export default PostJob;
