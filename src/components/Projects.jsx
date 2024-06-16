import React from "react";
import codefeImg from "../assests/images/codefe-5.jpg";
import { Link } from "react-router-dom";

export default function Projects() {
  const porjects = [
    {
      projectName: "CodeFE",
      porjectDiscreption:
        "CodeFE offers an immersive experience filled with exciting challenges and a playground to pratice your front-end skills.",
      projectImage: codefeImg,
      LiveDemoURL: "https://codefe.vercel.app",
      GithubURL: "",
    },
  ];
  return (
    <div className="w-11/12 m-auto px-10 min-h-screen">
      <h2 className="c-100 px-8 pt-20 uppercase text-base font-semibold tracking-widest">
        Projects
      </h2>
      {porjects.map((p) => {
        return (
          <div className="px-8 pt-10 flex">
            <Link to={p.projectURL} target="_blank">
              <img
                src={p.projectImage}
                className="w-11/12 rounded-md hover:scale-105 transition"
                alt="ProjectImg"
              />
            </Link>
            <div>
              <h3 className="c-400 text-5xl font-medium">{p.projectName}</h3>
              <p className="c-200 text-2xl font-medium py-5">
                {p.porjectDiscreption}
              </p>
              {p.LiveDemoURL ? (
                <button>
                  <Link
                    to={p.LiveDemoURL}
                    className="c-200 font-semibold"
                    target="_blank"
                  >
                    Live Demo
                  </Link>
                </button>
              ) : (
                ""
              )}
              {p.GithubURL ? (
                <button>
                  <Link
                    to={p.GithubURL}
                    className="c-200 font-semibold"
                    target="_blank"
                  >
                    Live Demo
                  </Link>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
