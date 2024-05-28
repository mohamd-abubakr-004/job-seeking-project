import { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/job/getall").then((resp) => {
      if (resp.status === 200) {
        setJobs(resp.data.jobs);
      }
    });
  }, []);

  if (jobs) {
    return (
      <>
        <h3 className="text-2xl font-bold dark:text-white text-center mb-2 tracking-[1px] my-4">
          All Available Jobs
        </h3>
        <section className=" flex items-start justify-center flex-wrap flex-row w-full gap-4 mb-4 min-h-[75vh] mt-4">
          {jobs.map((job) => {
            let descriptionInfo = [];
            let descriptionArray = job.description.split(" ");
            let i = 0;
            while ((i, i <= 12)) {
              descriptionInfo.push(descriptionArray[i]);
              i++;
            }

            {
              return (
                <div key={job._id} className="card w-96 bg-base-100 shadow-xl border-[2px] border-solid border-gray-500 rounded-xl">
                  <div className="card-body">
                    <h2 className="card-title">{job.title}</h2>
                    <p>{descriptionInfo.join(" ")}...</p>
                    <div className="card-actions justify-end">
                      <Link to={`/job/${job._id}`} className="btn btn-primary">
                        View Job
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </section>
      </>
    );
  } else
    <h3 className="text-2xl font-bold dark:text-white text-center mb-2 tracking-[1px] my-4">
      No Jobs Available
    </h3>;
};

export default AllJobs;
