"use client"

import Image from "next/image";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6"

import PokeBall from "../../../public/images/pokeball.png"
import IndigoPlateau from "../../../public/images/indigo-plateau-conference.jpg";
import WorldCoronation from "../../../public/images/world-coronation-series.jpg";
import BattleTower from "../../../public/images/battle-tower.jpg";
import SafariBoat from "../../../public/images/safari-boat.jpg";

export default function Info() {
  
  return (
    <>
        <Header />
        <div className="z-0 flex flex-col h-auto w-screen bg-black">
            <section id="info-head" className="flex flex-col h-auto w-screen">
                <div className="flex flex-row justify-center py-10">
                    <Image
                    className="pokeball-spin h-16 w-16 min-[600px]:h-20 min-[600px]:w-20"
                    src={PokeBall}
                    quality={100}
                    alt=""
                    />
                </div>
                <div className="flex flex-col w-screen text-justify text-sm xl:text-lg min-[2000px]:text-2xl font-light px-6 xl:px-12 min-[2000px]:px-24 min-[600px]:text-center">
                    <p className="py-2">
                        Pokémon GO League is inpired by my love of the Pokémon anime series, video games, and, obviously, Pokémon GO.
                    </p>
                    <p className="py-2">
                        As a child, I was captivated by all of the adventures of Ash and crew in the anime (to be honest, I still love rewatching episodes as an adult with a child of my own now). I particularly enjoyed the many Gym battles and the championship tournaments of each region. I also loved the video games, because they allowed me to place myself within the world that I loved so much and live my own adventure (or try my best to mimic the anime as much as possible). 
                    </p>
                    <p className="py-2">
                        When Pokémon GO was released, it was like the anime and video games had actually come to life! To me, I am not catching digital representations of Pokémon, but ACTUAL Pokémon that I can raise and train how I see fit.  
                    </p>
                    <p className="py-2">
                        I want to try and translate that feeling into the battling experience of Pokémon GO as well. I want to give trainers an opportunity to feel like Ash; traveling around the various regions of the Pokémon world, battling in all of the conferences, chasing the dream of becoming a Pokémon Master.
                    </p>
                    <p className="py-2">
                        As a software engineer/web developer, I was able to put my professional skills to work in realizing my dream and building this platform. I hope you all enjoy it!
                    </p>
                    <p className="font-bold text-center py-2">
                        <span className="font-light"> - </span> BackpackerBMW
                    </p>
                </div>
                <div className="flex flex-row justify-center items-end w-screen py-2 min-[600px]:py-16">
                    <a href="/info#info-conferences">
                        <FaCircleArrowDown className="h-[8vh] w-[8vw] md:h-[6vh] md:w-[6vw] lg:h-[5vh] lg:w-[5vw] min-[2000px]:h-[4vh] min-[2000px]:w-[4vw]"/>
                    </a>
                </div>
            </section>
            <section id="info-conferences" className="flex flex-col h-auto w-screen text-justify text-sm xl:text-lg min-[2000px]:text-2xl font-light min-[600px]:flex-row-reverse">
                <Image
                className="h-1/4 w-screen min-[600px]:h-auto min-[600px]:w-[55vw]"
                src={IndigoPlateau}
                quality={100}
                alt=""
                />
                <div className="font-light px-6 xl:px-12 min-[2000px]:px-24 min-[600px]:w-[45vw]">
                    <h3 className="font-bold text-lg xl:text-2xl min-[2000px]:text-4xl text-center py-4 xl:py-8 min-[2000px]:py-16">Regional League Conferences</h3>
                    <p className="py-2">
                        From the Indigo Plateau to Manalo Stadium, follow in the footsteps of Ash Ketchum and compete to become the champion of regional conferences from around the Pokémon world.
                    </p>
                    <p className="py-2">
                        Each conference tournament will begin with preliminary rounds used to rank each competitor; the number of preliminary rounds will reflect the number of badges required in each region. Losing matches in the preliminary rounds will not eliminate you from the competition, it will only affect your preliminary ranking; however, before the championship rounds begin, a cut will be made based on final preliminary rankings.
                    </p>
                    <p className="py-2">
                        After the preliminary rounds conclude, competitors will be organized into brackets and single-elimination matches will begin. The last trainer standing will be crowned the champion of the respective region. 
                    </p>
                    <p className="py-2">
                        Regional conference tournaments will each have unique pokémon eligibility restrictions. 
                    </p>
                    <div className="flex flex-row justify-center w-[40vw] py-4 min-[2000px]:pr-16 max-[600px]:hidden">
                        <a href="/info#info-coronation">
                            <FaCircleArrowDown className="h-[6vh] w-[6vw] lg:h-[5vh] lg:w-[5vw] min-[2000px]:h-[4vh] min-[2000px]:w-[4vw]"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-end w-screen py-2 min-[600px]:hidden">
                    <a href="/info#info-coronation">
                        <FaCircleArrowDown className="h-[8vh] w-[8vw]"/>
                    </a>
                </div>
            </section>
            <section id="info-coronation" className="flex flex-col h-auto w-screen text-justify text-sm xl:text-lg min-[2000px]:text-2xl font-light min-[600px]:flex-row">
                <Image
                className="h-1/4 w-screen min-[600px]:h-auto min-[600px]:w-[55vw]"
                src={WorldCoronation}
                quality={100}
                alt=""
                />
                <div className="font-light px-6 xl:px-12 min-[2000px]:px-24 min-[600px]:h-auto min-[600px]:w-[45vw]">
                    <h3 className=" font-bold text-lg xl:text-2xl min-[2000px]:text-4xl text-center py-4 xl:py-8 min-[2000px]:py-16">World Coronation Series</h3>
                    <p className="py-2">
                        After all of the regional tournaments have concluded, each of the eight regional champions will be invited to compete in the Masters Eight tournament, as part of the World Coronation Series.
                    </p>
                    <p className="py-2">
                        It will be a random draw single-elimination tournament for the title of Monarch.
                    </p>
                    <p className="py-2">
                        There will also be Premier-, Ultra-, Great- and Normal-classed tournaments set up for qualifying trainers, based on their performances in the previous regional tournaments.
                    </p>
                    <div className="flex flex-row justify-center w-[40vw] py-4 min-[2000px]:pr-16 max-[600px]:hidden">
                        <a href="/info#info-tower">
                            <FaCircleArrowDown className="h-[6vh] w-[6vw] lg:h-[5vh] lg:w-[5vw] min-[2000px]:h-[4vh] min-[2000px]:w-[4vw]"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-end w-screen py-2 min-[600px]:hidden">
                    <a href="/info#info-tower">
                        <FaCircleArrowDown className="h-[8vh] w-[8vw]"/>
                    </a>
                </div>
            </section>
            <section id="info-tower" className="flex flex-col h-auto w-screen text-justify text-sm xl:text-lg min-[2000px]:text-2xl font-light min-[600px]:flex-row-reverse">
                <Image
                className="h-1/4 w-screen min-[600px]:h-auto min-[600px]:w-[55vw]"
                src={BattleTower}
                quality={100}
                alt=""
                />
                <div className="font-light px-6 xl:px-12 min-[2000px]:px-24 min-[600px]:h-auto min-[600px]:w-[45vw]">
                    <h3 className=" font-bold text-lg xl:text-2xl min-[2000px]:text-4xl text-center py-4 xl:py-8 min-[2000px]:py-16">Battle Tower</h3>
                    <p className="py-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit necessitatibus, illo dolorum explicabo doloribus debitis corporis mollitia dicta quae placeat magni esse sunt atque vel, asperiores ipsam possimus, facilis quas.
                    </p>
                    <p className="py-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod possimus incidunt molestiae, commodi sapiente harum illum qui architecto accusantium dolore dolorem. Iste molestias nobis veniam dolorem doloremque voluptatem beatae. Obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt hic, nam nemo, commodi magni eius harum nihil quibusdam laudantium tempore voluptatum cum ad veritatis quae aut minima ipsa id.
                    </p>
                    <p className="py-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsa hic consequatur quod culpa voluptatibus debitis assumenda excepturi, repellat totam, impedit enim provident ipsam delectus illum cumque. At, consequuntur ducimus.
                    </p>
                    <div className="flex flex-row justify-center w-[40vw] py-4 min-[2000px]:pr-16 max-[600px]:hidden">
                        <a href="/info#info-safari">
                            <FaCircleArrowDown className="h-[6vh] w-[6vw] lg:h-[5vh] lg:w-[5vw] min-[2000px]:h-[4vh] min-[2000px]:w-[4vw]"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-end w-screen py-2 min-[600px]:hidden">
                    <a href="/info#info-safari">
                        <FaCircleArrowDown className="h-[8vh] w-[8vw]"/>
                    </a>
                </div>
            </section>
            <section id="info-safari" className="flex flex-col h-auto w-screen text-justify text-sm xl:text-lg min-[2000px]:text-2xl font-light min-[600px]:flex-row">
                <Image
                className="h-1/4 w-screen min-[600px]:h-auto min-[600px]:w-[55vw]"
                src={SafariBoat}
                quality={100}
                alt=""
                />
                <div className="font-light px-6 xl:px-12 min-[2000px]:px-24 min-[600px]:h-auto min-[600px]:w-[45vw]">
                    <h3 className=" font-bold text-lg xl:text-2xl min-[2000px]:text-4xl text-center py-4 xl:py-8 min-[2000px]:py-16">Safari Battle Zone</h3>
                    <p className="py-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit necessitatibus, illo dolorum explicabo doloribus debitis corporis mollitia dicta quae placeat magni esse sunt atque vel, asperiores ipsam possimus, facilis quas.
                    </p>
                    <p className="py-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod possimus incidunt molestiae, commodi sapiente harum illum qui architecto accusantium dolore dolorem. Iste molestias nobis veniam dolorem doloremque voluptatem beatae. Obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt hic, nam nemo, commodi magni eius harum nihil quibusdam laudantium tempore voluptatum cum ad veritatis quae aut minima ipsa id.
                    </p>
                    <p className="py-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsa hic consequatur quod culpa voluptatibus debitis assumenda excepturi, repellat totam, impedit enim provident ipsam delectus illum cumque. At, consequuntur ducimus.
                    </p>
                    <div className="flex flex-row justify-center w-[40vw] py-4 min-[2000px]:pr-16 max-[600px]:hidden">
                        <a href="/info#info-head">
                            <FaCircleArrowUp className="h-[6vh] w-[6vw] lg:h-[5vh] lg:w-[5vw] min-[2000px]:h-[4vh] min-[2000px]:w-[4vw]"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-end w-screen py-2 min-[600px]:hidden">
                    <a href="/info#info-head">
                        <FaCircleArrowUp className="h-[8vh] w-[8vw]"/>
                    </a>
                </div>
            </section>
            <Footer />
        </div>
    </>
  );
}
