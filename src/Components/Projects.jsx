import React from "react";
import { AiTwotoneAppstore } from "react-icons/ai";
import { MdOutlineFlipCameraIos } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import "../Components/Global.css";
import project1 from "../Components/SocialLinks/e commerce ss.png"
import project2 from "../Components/SocialLinks/portfolio project ss.png"
import project3 from "../Components/SocialLinks/text analyzer ss.png"


const Projects = ({bgcolor,darkmode}) => {
  return (
    <>
      {/* <div className="p-3"> */}
        <div className={` ${darkmode==="dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg`}>
          <h1 className={`text-3xl font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Projects</h1>

          <div className="flex gap-5 flex-wrap my-5">
          <a href="https://hotel-world-zeta.vercel.app/">
            <div
              className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src={project1}
                className="rounded-lg transition delay-150"
              />
              <div>

                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>E-commerce Watch Website (Tailwind, Reactjs, MongoDB)</h1>
              </div>
            </div>
            </a>

            <a href="https://hotel-world-zeta.vercel.app/">
            <div
              className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#EEF5FA" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src={project2}
                className="rounded-lg transition delay-150"
              />
              <div>

                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Hotel Booking Website (Html, Css, javascript)</h1>
              </div>
            </div>
            </a>
            <a href="https://github.com/akshar2603/tic-tac-toe">
            <div
              className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src={project3}
                className="rounded-lg transition delay-150"
              />
              <div>

                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Tic-Tac-Toe Game (Reactjs)</h1>
              </div>
            </div>
            </a>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Projects;
