"use client"

import Image from "next/image";
import PokeBall from "../../../public/images/pokeball.png"
import IndigoPlateau from "../../../public/images/indigo-plateau-conference.jpg";
import WorldCoronation from "../../../public/images/world-coronation-series.jpg";
import BattleTower from "../../../public/images/battle-tower.jpg";

export default function Home() {
  
  return (
    <>
        <div className="h-screen w-screen bg-black">
            <div className="flex flex-row justify-center py-12">
                <Image
                className="pokeball"
                src={PokeBall}
                height={150}
                width={150}
                quality={100}
                alt=""
                />
            </div>
        </div>
        <div className="h-screen w-screen bg-black">
            <Image
            className="h-[100vh] w-[60vw] float-right"
            src={IndigoPlateau}
            quality={100}
            alt=""
            />
        </div>
        <div className="h-screen w-screen bg-black">
            <Image
            className="h-[100vh] w-[60vw]"
            src={WorldCoronation}
            quality={100}
            alt=""
            />
        </div>
        <div className="h-screen w-screen bg-black">
            <Image
            className="h-[100vh] w-[60vw] float-right"
            src={BattleTower}
            quality={100}
            alt=""
            />
        </div>
    </>
  );
}
