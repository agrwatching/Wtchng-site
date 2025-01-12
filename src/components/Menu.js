import React from "react";

const projects = [
  {
    title: "Developer Group Community",
    image: "/gambar1.png",
    description: "We focus on developing innovative and effective technology solutions.",
    link: "https://dgc-web-serves.vercel.app/"
  },
  {
    title: "Portfolio",
    image: "/logo512.png",
    description: "Portfolio Website with modern theme using React and TailwindCSS.",
    link: "https://agra-portfolio-website.vercel.app/"
  },
  {
    title: "My Github",
    image: "/github.png",
    description: "A collection of my open-source projects and development repositories, including various web applications, backend systems, and the latest technology experiments. Find my source code and contributions to improve my software development skills.",
    link: "https://github.com/agrwatching"
  }
];

function Menu() {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div id="Menu" className="grid grid-cols-2 md:grid-cols-5 gap-5 min-h-screen p-5 bg-gradient-to-r from-purple-900 via-blue-900 to-black">
      {projects.map((project, index) => (
        <div
          key={index}
          className="border-4 border-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-gray-900 rounded-xl shadow-xl shadow-black overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
          onClick={() => handleClick(project.link)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover border-b-4 border-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transform transition-all duration-300 hover:scale-110"
          />
          <div className="p-2 text-center">
            <h2 className="text-lg font-bold text-gradient text-teal-300 font-mono hover:text-teal-200 transition-all duration-300">
              {project.title}
            </h2>
            <p className="text-xs text-teal-400 font-mono mt-1 hover:underline">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
