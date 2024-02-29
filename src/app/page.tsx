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
    <>
      <Image
        className="relative"
        src={newFrontier}
        fill={true}
        quality={100}
        style={bgImageStyle}
        alt=""
      />
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
    </>
  );
}
