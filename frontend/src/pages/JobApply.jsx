import logo from "../assets/logo2.png";

import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import axios from "axios";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import Input from "../components/Input";

import Button from "../components/Button";

import { useSelector } from "react-redux";

import swal from "sweetalert";

import { useNavigate } from "react-router-dom";

const JobApply = () => {
  
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm();

  const { id } = useParams();

  const [employerID, setEmployerID] = useState();

  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/job/${id}`, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          setEmployerID(res.data.job._id);
        }
      });
  }, [id]);

  let formData = new FormData();

  const fileHandler = (e) => {
    let file = e.target.files[0];
    formData.append("resume", file);
  };

  const loginHandler = async (data) => {
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("coverLetter", data.coverLetter);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    formData.append("applicantID", userData._id);
    formData.append("employerID", employerID);
    formData.append("jobId", id);

    try {
      axios
        .post("http://localhost:4000/api/v1/application/post", formData, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            navigate('/my-applications')
            swal(res.data.message, "You clicked the button!", "success");
          }
        });
    } catch (error) {
      swal(error.response.data.message, "You clicked the button!", "error");
    }
  };

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
          Application Form
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
        placeholder={"inter phone no"}
        type={"tel"}
        {...register("phone", { required: true })}
      />

      <Input
        placeholder={"inter Address"}
        type={"text"}
        {...register("address", { required: true })}
      />

      <textarea
        className="textarea textarea-bordered md:w-[28rem] sm:w-[25rem] w-[25rem]"
        placeholder="Description"
        {...register("coverLetter", { required: true })}
      ></textarea>

      <input
        type="file"
        className="file-input file-input-bordered md:w-[28rem] sm:w-[25rem] w-[25rem]"
        onChange={fileHandler}
      />

      <Button type={"submit"}>Submit Form</Button>
    </form>
  );
};

export default JobApply;
