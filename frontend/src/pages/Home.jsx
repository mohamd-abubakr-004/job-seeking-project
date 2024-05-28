import heroSectionBg from "../assets/heroBg.jpg";

import {
  BsFillPersonPlusFill,
  BsFillSearchHeartFill,
  BsFillSendFill,
} from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="hero max-h-[90vh] min-h-[75vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={heroSectionBg}
            className=" lg:max-w-[30rem] sm:max-w-[30rem] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Find a job that suits your interests and skills!
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              doloribus asperiores quis omnis blanditiis provident ipsam enim
              libero nulla explicabo.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <section>
        <div className="relative items-center w-full px-5 py-3 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <h3 className="text-2xl font-bold dark:text-white text-center mb-2 tracking-[1px]">
            How RomiJob work
          </h3>

          <div className="grid w-full grid-cols-1 gap-3 mx-auto lg:grid-cols-3">
            <div className="p-6">
              <div className="flex items-center justify-center flex-col w-full">
                <BsFillPersonPlusFill className=" text-[30px]" />
                <h6 className="text-lg font-bold">Create account</h6>
              </div>
              <p className="mx-auto text-base font-medium leading-relaxed text-gray-500 mt-2">
                Free and Premium themes, UI Kit's, templates and landing pages
                built with Tailwind CSS, HTML &amp; Next.js.
              </p>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-center flex-col w-full">
                <BsFillSearchHeartFill className=" text-[30px]" />
                <h6 className="text-lg font-bold">Find a job/Post a job</h6>
              </div>
              <p className="mx-auto text-base font-medium leading-relaxed text-gray-500 mt-2">
                Free and Premium themes, UI Kit's, templates and landing pages
                built with Tailwind CSS, HTML &amp; Next.js.
              </p>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-center flex-col w-full">
                <BsFillSendFill className=" text-[30px]" />
                <h6 className="text-lg font-bold">Apply for a job</h6>
              </div>
              <p className="mx-auto text-base font-medium leading-relaxed text-gray-500 mt-2">
                Free and Premium themes, UI Kit's, templates and landing pages
                built with Tailwind CSS, HTML &amp; Next.js.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-8">
        <h2 className="text-4xl font-bold dark:text-white text-center mb-8">
          Popular Catarories
        </h2>
        <div className="relative w-full flex items-center justify-center flex-row flex-wrap gap-6 px-5 mb-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center gap-2 px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <BsFillSendFill className=" text-[30px]" />
            <div className="text-left rtl:text-right">
              <div className="-mt-1 font-sans text-sm font-semibold">
                Graphic Designer
              </div>
              <div className="mb-1 text-xs">200 open position</div>
            </div>
          </div>

          <div className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center gap-2 px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <BsFillSendFill className=" text-[30px]" />
            <div className="text-left rtl:text-right">
              <div className="-mt-1 font-sans text-sm font-semibold">
                Mobile App Development
              </div>
              <div className="mb-1 text-xs">200 open position</div>
            </div>
          </div>

          <div className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center gap-2 px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <BsFillSendFill className=" text-[30px]" />
            <div className="text-left rtl:text-right">
              <div className="-mt-1 font-sans text-sm font-semibold">
                Front-end Web Development
              </div>
              <div className="mb-1 text-xs">200 open position</div>
            </div>
          </div>

          <div className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center gap-2 px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <BsFillSendFill className=" text-[30px]" />
            <div className="text-left rtl:text-right">
              <div className="-mt-1 font-sans text-sm font-semibold">
                Back-end Web Development
              </div>
              <div className="mb-1 text-xs">200 open position</div>
            </div>
          </div>

          <div className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center gap-2 px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <BsFillSendFill className=" text-[30px]" />
            <div className="text-left rtl:text-right">
              <div className="-mt-1 font-sans text-sm font-semibold">
                MERN stack Development
              </div>
              <div className="mb-1 text-xs">200 open position</div>
            </div>
          </div>

          <div className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center gap-2 px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <BsFillSendFill className=" text-[30px]" />
            <div className="text-left rtl:text-right">
              <div className="-mt-1 font-sans text-sm font-semibold">
                Account & Finance
              </div>
              <div className="mb-1 text-xs">200 open position</div>
            </div>
          </div>

          <div className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center gap-2 px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <BsFillSendFill className=" text-[30px]" />
            <div className="text-left rtl:text-right">
              <div className="-mt-1 font-sans text-sm font-semibold">
                Artificial intelligence
              </div>
              <div className="mb-1 text-xs">200 open position</div>
            </div>
          </div>

          <div className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center gap-2 px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <BsFillSendFill className=" text-[30px]" />
            <div className="text-left rtl:text-right">
              <div className="-mt-1 font-sans text-sm font-semibold">
                Video Animation
              </div>
              <div className="mb-1 text-xs">200 open position</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
