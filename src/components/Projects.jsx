import React from "react";
import codefeImg from "../assests/images/codefe.png";
import medium from "../assests/images/medium.png";
import gandg from "../assests/images/gang.png";
import { Link } from "react-router-dom";

export default function Projects() {
  const porjects = [
    {
      projectName: "G&G Infra Projects (FREELANCING)",
      porjectDiscreption:
        "Made landing page of G&G Infra Projects Telecom Industry",
      projectImage: gandg,
      liveDemoURL: "https://gandginfraprojects.com/",
      githubURL: "https://github.com/Srivardhan12/G-G-Infra-Projects.git",
    },
    {
      projectName: "Blog Website",
      porjectDiscreption:
        "It is a blog website where user can write, read and edit there blogs",
      projectImage: medium,
      liveDemoURL: "https://srivardhan-medium-clone.vercel.app",
      githubURL: "http://github.com/Srivardhan12/medium-clone",
    },
    {
      projectName: "CodeFE",
      porjectDiscreption:
        "CodeFE offers an immersive experience filled with exciting challenges and a playground to pratice your front-end skills.",
      projectImage: codefeImg,
      liveDemoURL: "https://codefe.vercel.app",
      githubURL: "https://github.com/Srivardhan12/CodeFE.git",
    },
  ];
  return (
    <div className="md:lg:px-10 b-100 flex md:justify-center align-middle flex-col w-11/12 m-auto md:lg:min-h-screen h-fit">
      <h2 className="c-100 md:lg:px-8 pt-20 uppercase text-base font-semibold tracking-widest">
        Projects
      </h2>
      {porjects.map((p) => {
        return (
          <div className="pt-10 flex lg:flex-row flex-col border-b border-slate-200 pb-20">
            <Link to={p.liveDemoURL} target="_blank" className="w-fit">
              <img
                src={p.projectImage}
                className="rounded-md hover:scale-105 transition w-10/12 border-4 border-[#8C8C73]"
                alt="ProjectImg"
              />
            </Link>
            <div className="w-10/12">
              <h3 className="c-400 text-5xl font-medium pt-6 lg:pt-0 leading-tight">
                {p.projectName}
              </h3>
              <p className="c-200 text-2xl font-medium py-5">
                {p.porjectDiscreption}
              </p>
              {p.liveDemoURL ? (
                <Link
                  to={p.liveDemoURL}
                  className="c-200 me-2 mb-2 text-sm font-semibold border-b-2"
                  target="_blank"
                >
                  Live Demo
                </Link>
              ) : (
                ""
              )}
              {p.githubURL ? (
                <Link
                  to={p.githubURL}
                  className="c-200 mx-3 me-2 mb-2 text-sm font-semibold border-b-2"
                  target="_blank"
                >
                  GitHub
                </Link>
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
