import Input from "../components/Input";
import Button from "../components/Button";

import logo from "../assets/logo2.png";

import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { login } from "../context/userSlice";

import swal from "sweetalert";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth);

  const loginHandler = async (data) => {
    try {
      axios
        .post("http://localhost:4000/api/v1/user/login", data, {
          withCredentials: true,
        })
        .then((resp) => {
          if (resp.status === 201) {
            navigate("/");
            dispatch(login(resp.data.user));
            swal(resp.data.message, "You clicked the button!", "success");
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
        onSubmit={handleSubmit(loginHandler)}
        className=" flex items-center justify-center flex-col gap-8 w-full h-[90vh] px-5"
      >
        <div className="flex items-center justify-center flex-row gap-4">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>{" "}
          <h2 className="text-4xl font-bold dark:text-white text-black ">
            Login your account
          </h2>
        </div>

        <select
          className="select select-info w-full max-w-md"
          {...register("role", { required: true })}
        >
          <option disabled value={"Select Role"}>
            Select Role
          </option>
          <option>Employer</option>
          <option>Job seeker</option>
        </select>

        <Input
          placeholder={"inter password"}
          type={"text"}
          {...register("password", { required: true })}
        />

        <div className=" flex items-center justify-center gap-2 flex-col w-full">
          <Input
            placeholder={"inter email"}
            type={"email"}
            {...register("email", { required: true })}
          />
          <Link to={'/register'} className="text-black text-sm dark:text-gray-400 text-start">
            Create new account
          </Link>
        </div>

        <Button type={"submit"}>Login</Button>
      </form>
    );
  }
};

export default Login;
