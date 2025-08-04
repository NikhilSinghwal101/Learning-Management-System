import { LiaCertificateSolid } from "react-icons/lia";
import { FiArrowUpRight } from "react-icons/fi";

export default function GetCertificate() {
  return (
    <>
    <div className="md:bg-vertical-gradient-md lg:bg-vertical-gradient-md sm:bg-vertical-gradient-md bg-vertical-gradient">
      <div className="mx-8 md:mx-36 md:mt-44 mt-8 md:pb-12 pb-8 px-20 pt-12 lg:flex md:flex sm:flex items-center justify-between bg-blue-700 rounded-xl md:relative relative z-0">
        <div>
          <div className="flex items-center text-[16px] text-white gap-1">
            <LiaCertificateSolid />
            <p>Get Certificate</p>
          </div>
          <h1 className="text-3xl my-4 text-white">
            Get Quality Skills Certificate <br /> From the EduAll
          </h1>
          <button className="flex items-center gap-2 border-none bg-white text-blue-800 font-semibold rounded-full text-[12px] md:px-6 md:py-3 px-4 py-2 hover:scale-105 transition ease-in-out">
            Get Started Now
            <FiArrowUpRight />
          </button>
        </div>
        <div className="md:absolute top-[-160px] right-[1px] md:mt-0 mt-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/045/963/206/original/cute-cartoon-boy-student-isolated-on-transparent-background-png.png"
            alt=""
            className="md:w-[450px] md:h-[420px] w-[220px] h-[200px]"
          />
        </div>
      </div>
      </div>
    </>
  );
}
