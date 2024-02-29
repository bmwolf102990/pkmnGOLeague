"use client"

import Typewriter from "typewriter-effect";

export default function Home() {
  
  return (
    <>
      <div className="flex flex-col-reverse h-screen w-screen">
        <div className="flex h-2/5 w-screen justify-center">
          <button className="bg-white hover:bg-gray-300 lg:text-lg xl:text-xl 2xl:text-2xl text-black border border-gray-300 py-2 px-6 rounded shadow self-center">
            Learn More
          </button>
        </div>
        <div className="flex h-2/5 w-screen px-4 lg:py-2 2xl:py-4 text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-center font-thin justify-center">
          <Typewriter
            options={{
              strings: [
                "Calling all Pokémon GO Trainers",
                "Prepare for the next generation of grassroots PvP",
                "Battle as individuals, or in teams",
                "Compete in regional league conferences",
                "Climb the Battle Tower",
                "Explore the Safari Battle Zone",
                "Or even claim the title of Monarch",
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
        </div>
      </div>
    </>
  );
}
