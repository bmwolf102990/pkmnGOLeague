import { useState } from "react";
import Image from "next/image";
import { BsHeartFill, BsList, BsX, BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

import PokeBall from "../../../public/images/pokeball.png";

export const Header = () => {
    const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
    const [isTrainerResources, setIsTrainerResources] = useState<boolean>(false);

    return(
        <>
            <header className=" min-[1001px]:hidden z-10 sticky top-0">
                <nav className="flex flex-row justify-between w-screen bg-white text-black px-3 py-2">
                    <Image 
                        className="h-10 w-10"
                        src={PokeBall}
                        quality={100}
                        alt=""
                    />
                    {isMobileMenu === false ? 
                    <BsList className="h-10 w-10" onClick={()=> setIsMobileMenu(!isMobileMenu)}/>
                    : 
                    <BsX className="h-10 w-10" onClick={()=> {setIsMobileMenu(!isMobileMenu); setIsTrainerResources(false)}}/>
                    }
                </nav>
                {isMobileMenu === true ? 
                    <ul className="absolute h-screen w-screen bg-transparent text-black text-center border-t-2 border-black overflow-scroll">
                        <li className="py-3 border bg-white hover:bg-zinc-400 hover:text-white">Home</li>
                        <li className="py-3 border bg-white hover:bg-zinc-400 hover:text-white">Pokémon Center</li>
                        <li className="py-3 pl-16 border bg-white hover:bg-zinc-400 hover:text-white" onClick={() => setIsTrainerResources(!isTrainerResources)}>
                            Trainer Resources
                            {isTrainerResources === false ?
                            <BsCaretDownFill className="float-right my-1.5 mx-6" />
                            :
                            <BsCaretUpFill className="float-right my-1.5 mx-6" />
                            }
                        </li>
                        {isTrainerResources === true ?
                        <>
                            <li className="py-3 border bg-zinc-400 hover:bg-slate-600 text-white">News</li>
                            <li className="py-3 border bg-zinc-400 hover:bg-slate-600 text-white">Trainer Dex</li>
                            <li className="py-3 border bg-zinc-400 hover:bg-slate-600 text-white">Rules</li>
                            <li className="py-3 border bg-zinc-400 hover:bg-slate-600 text-white">File A Dispute</li>
                            <li className="py-3 border bg-zinc-400 hover:bg-slate-600 text-white">FAQ</li>
                        </>
                        :
                        null
                        }
                        <li className="py-3 border bg-white hover:bg-zinc-400 hover:text-white">Conferences</li>
                        <li className="py-3 border bg-white hover:bg-zinc-400 hover:text-white">Battle Tower</li>
                        <li className="py-3 border bg-white hover:bg-zinc-400 hover:text-white">Safari Battle Zone</li>
                        <li className="py-3 border bg-white hover:bg-zinc-400 hover:text-white *:hover:fill-white"><BsHeartFill className="inline fill-red-600 hover:parent:fill-white" /> Sponsor Us</li>
                    </ul>
                :null}
            </header>
            <header className=" max-[1000px]:hidden z-10 sticky top-0">
                <nav className="grid grid-cols-8 place-items-stretch w-screen bg-white text-black min-[2000px]:text-xl max-[1295px]:min-[1031px]:text-xs max-[1030px]:min-[1001px]:text-[10px]">
                    <Image 
                        className="w-14 ml-5 border-y-4 border-white"
                        src={PokeBall}
                        quality={100}
                        alt=""
                    />
                    <button className="w-1/8 border-y-4 border-white hover:border-t-zinc-400 hover:border-b-red-600 hover:bg-zinc-400 hover:text-white hover:font-normal">Home</button>
                    <button className="w-1/8 border-y-4 border-white hover:border-t-zinc-400 hover:border-b-red-600 hover:bg-zinc-400 hover:text-white hover:font-normal">Pokémon Center</button>
                    <button className="w-1/8 border-y-4 border-white hover:border-t-zinc-400 hover:border-b-red-600 hover:bg-zinc-400 hover:text-white hover:font-normal max-[1295px]:min-[1001px]:px-2" onClick={() => setIsTrainerResources(!isTrainerResources)}>
                        Trainer Resources
                        {isTrainerResources === false ?
                        <BsCaretDownFill className="inline float-right my-1 mx-1" />
                        :
                        <BsCaretUpFill className="inline float-right my-1 mx-1" />
                        }
                    </button>
                    <button className="w-1/8 border-y-4 border-white hover:border-t-zinc-400 hover:border-b-red-600 hover:bg-zinc-400 hover:text-white hover:font-normal">Conferences</button>
                    <button className="w-1/8 border-y-4 border-white hover:border-t-zinc-400 hover:border-b-red-600 hover:bg-zinc-400 hover:text-white hover:font-normal">Battle Tower</button>
                    <button className="w-1/8 border-y-4 border-white hover:border-t-zinc-400 hover:border-b-red-600 hover:bg-zinc-400 hover:text-white hover:font-normal max-[1295px]:min-[1001px]:px-2">Safari Battle Zone</button>
                    <button className="w-1/8 border-y-4 border-white hover:border-t-zinc-400 hover:border-b-red-600 hover:bg-zinc-400 hover:text-white hover:font-normal *:hover:fill-white"><BsHeartFill className="inline fill-red-600 hover:parent:fill-white" /> Sponsor Us</button>
                </nav>
                {isTrainerResources === true ?
                <ul className="absolute grid grid-cols-8 place-items-stretch w-screen text-black text-center min-[2000px]:text-xl max-[1295px]:min-[1031px]:text-xs max-[1030px]:min-[1001px]:text-[10px]">
                    <li className="col-start-4 py-3 border bg-white hover:bg-zinc-400 hover:text-white">News</li>
                    <li className="col-start-4 py-3 border bg-white hover:bg-zinc-400 hover:text-white">Trainer Dex</li>
                    <li className="col-start-4 py-3 border bg-white hover:bg-zinc-400 hover:text-white">Rules</li> 
                    <li className="col-start-4 py-3 border bg-white hover:bg-zinc-400 hover:text-white">File A Dispute</li> 
                    <li className="col-start-4 py-3 border bg-white hover:bg-zinc-400 hover:text-white">FAQ</li> 
                </ul>
                :
                null}
            </header>
        </>
    );
};
