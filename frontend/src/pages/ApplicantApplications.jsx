import { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

const ApplicantApplications = () => {
  
  const userData = useSelector((state) => state.auth.userData);

  const [applicant, setApplicant] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/application/employer/getall", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          setApplicant(res.data.applications);
        }
      });
  }, []);

  if (userData.role == "Employer") {
    if (applicant.length > 0) {
      return (
        <>
          <h3 className="text-2xl font-bold dark:text-white text-center mb-2 tracking-[1px] my-4">
            Your posted Job
          </h3>
          <section className="flex items-start justify-center flex-wrap flex-row w-full gap-4 min-h-[75vh]">
            {applicant.map((job) => {
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

                    {/* <div className="card-actions justify-end">
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
                    </div> */}
                  </div>
                </div>
              );
            })}
          </section>
        </>
      );
    } else
      <h3 className="text-2xl font-bold dark:text-white text-center mb-2 tracking-[1px] my-4">
        You not Post any Job
      </h3>;
  } else
    <h3 className="text-2xl font-bold dark:text-white text-center mb-2 tracking-[1px] my-4">
      You are Job Seeker
    </h3>;
};

export default ApplicantApplications;
