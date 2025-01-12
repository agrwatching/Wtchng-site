import React, { useState, useEffect } from "react";

function Profil() {
  const [currentText, setCurrentText] = useState("");
  const messages = [
    "Hello World, Welcome to My Space 🌐",
    "Dream Big, Code Bigger 🚀",
    "Turning Ideas into Reality ✨",
    "Code Your Dreams, Build the Future 💡",
    "Consistency Beats Talent 🔥",
    "Building the Web, One Line at a Time 💻",
    "Code. Create. Conquer. 🚀",
    "Crafting My Digital Legacy 🖥️"
  ];
  const [deleting, setDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1500;

    const cursorBlinking = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    const typingEffect = setInterval(() => {
      const message = messages[index];
      if (!deleting) {
        setCurrentText((prev) => message.substring(0, prev.length + 1));
        if (currentText === message) {
          clearInterval(typingEffect);
          setTimeout(() => setDeleting(true), pauseTime);
        }
      } else {
        setCurrentText((prev) => message.substring(0, prev.length - 1));
        if (currentText === "") {
          setDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }
      }
    }, deleting ? deletingSpeed : typingSpeed);

    return () => {
      clearInterval(typingEffect);
      clearInterval(cursorBlinking);
    };
  }, [currentText, deleting, index, messages]);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen -mt-24 md:-mt-0 mb-40">
      <div className="absolute top-0 right-0 text-center text-lg text-teal-300 bg-black w-full font-mono">
        {currentTime}
      </div>

      <div className="w-[160px] md:w-[250px] p-4 md:p-5 m-5 border-4 border-purple-500 bg-black rounded-xl bg-opacity-60 shadow-xl shadow-black">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 mb-2 rounded-xl overflow-hidden border-black border-2">
            <img src="/Profil12.png" alt="icon" className="w-full h-full object-cover" />
          </div>
          <p className="text-sm md:text-2xl font-bold text-center text-teal-200 font-mono">
            Wtchng Nickname
          </p>
        </div>
      </div>

      <div className="w-[350px] md:w-[600px] h-[300px] p-2 md:p-5 m-5 border-4 border-purple-500 bg-black rounded-xl bg-opacity-60 shadow-xl shadow-black flex flex-col justify-between">
        <div className="flex-grow">
          <h1
            className="text-5xl font-extrabold text-center pb-2 text-teal-300 font-mono animate-glow"
            style={{
              fontFamily: "'Orbitron', sans-serif", // Ganti dengan font teknologi
              textShadow: "0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4)", // Efek cahaya
            }}
          >
            {currentText}
            <span
              className={`text-white ${showCursor ? "opacity-100" : "opacity-0"}`}
            >
              |
            </span>
          </h1>
        </div>
        <a
          href="#"
          className="text-sm md:text-lg font-bold text-center text-black font-mono hover:text-red-400 transform transition-all duration-300 group relative flex items-center justify-center overflow-hidden px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-700 rounded-full shadow-xl group-hover:from-purple-700 group-hover:to-blue-600"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-blue-500 opacity-30 rounded-full"></span>
          <span className="relative z-10">Play Now🚀</span>
          <svg
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white group-hover:rotate-180 transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Profil;
