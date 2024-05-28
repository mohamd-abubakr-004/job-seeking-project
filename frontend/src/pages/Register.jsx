import Input from "../components/Input";
import Button from "../components/Button";

import logo from "../assets/logo2.png";

import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import { login } from "../context/userSlice";

import swal from "sweetalert";

const Register = () => {
  const dispatch = useDispatch();

  const naviagte = useNavigate();

  const isAuth = useSelector((state) => state.auth.isAuth);

  const { register, handleSubmit } = useForm();

  const submitHander = async (data) => {
    try {
      await axios
        .post("http://localhost:4000/api/v1/user/register", data, {
          headers: {
            "content-type": "application/json",
          },
          withCredentials: true,
        })
        .then((resp) => {
          console.log(resp);
          if (resp.status === 201) {
            dispatch(login(resp.data.user));
            swal(resp.data.message, "You clicked the button!", "success");
            naviagte("/");
          }
        });
    } catch (error) {
      swal(error.response.data.message, "You clicked the button!", "error");
    }
  };

  if (isAuth) {
    return (
      <div className=" flex items-center justify-center flex-col gap-8 w-full h-[90vh] px-5">
        <div className="flex items-center justify-center flex-row gap-4">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>{" "}
          <h2 className="text-4xl font-bold dark:text-white text-black ">
            You have already Login!
          </h2>
        </div>
      </div>
    );
  } else {
    return (
      <form
        onSubmit={handleSubmit(submitHander)}
        className=" flex items-center justify-center flex-col gap-7 w-full h-[90vh] px-5"
      >
        <div className="flex items-center justify-center flex-row gap-4">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>{" "}
          <h2 className="text-4xl font-bold dark:text-white text-black ">
            Create new account
          </h2>
        </div>

        <Input
          placeholder={"inter name"}
          type={"text"}
          {...register("name", { required: true })}
        />

        <Input
          placeholder={"inter email"}
          type={"email"}
          {...register("email", { required: true })}
        />

        <Input
          name={"tel"}
          placeholder={"phone no"}
          type={"number"}
          {...register("phone", { required: true })}
        />

        <Input
          placeholder={"password"}
          type={"password"}
          {...register("password", { required: true })}
        />

        <div className=" flex items-center justify-center gap-2 flex-col w-full">
          <select
            className="select select-info w-full max-w-md"
            {...register("role", { required: true })}
          >
            <option disabled value={"Select Role"}>
              Select Role
            </option>
            <option>Employer</option>
            <option>Job Seeker</option>
          </select>
          <Link
            to={"/login"}
            className="text-black text-sm dark:text-gray-400 text-start"
          >
            login
          </Link>
        </div>

        <Button type={"submit"}>Register</Button>
      </form>
    );
  }
};

export default Register;
