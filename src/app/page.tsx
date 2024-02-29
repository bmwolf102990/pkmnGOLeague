"use client"

// import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import newFrontier from  "../../public/images/new-frontier.jpg";
// import Typewriter from "typewriter-effect";

export default function Home() {

  // const [windowHeight, setWindowHeight] = useState<number|undefined>(0);
  // const [windowWidth, setWindowWidth] = useState<number|undefined>(0);

  // useEffect(() => {
  //   setWindowHeight(window.visualViewport?.height);
  //   setWindowWidth(window.visualViewport?.width);
  // }, []);

  const bgImageStyle = {
    zIndex: -1,
  };
  
  return (
    <div className="h-screen w-screen">
      <Image
        className="relative"
        src={newFrontier}
        fill={true}
        quality={100}
        style={bgImageStyle}
        alt=""
      />
      <div className="flex flex-col-reverse h-screen w-screen">
        <div className="flex h-2/5 w-screen justify-center">
          <button className="bg-white hover:bg-gray-300 lg:text-lg xl:text-xl 2xl:text-2xl text-black border border-gray-300 py-2 px-6 rounded shadow self-center">
            Learn More
          </button>
        </div>
      </div>
      {/* <div className="">
        <Typewriter
          options={{
            strings: [
              "Calling all Pokémon GO Trainers",
              "Prepare for the next generation of grassroots PvP",
              "Battle as individuals, or in teams",
              "Compete in regional league conferences",
              "Climb the Battle Tower",
              "Or explore the Safari Battle Zone",
              "",
              "The Pokémon GO League is coming soon!",
              "",
            ],
            wrapperClassName:"",
            cursorClassName: "font-thin",
            autoStart: true,
            loop: true,
          }}
        />
      </div> */}
    </div>
  );
}
