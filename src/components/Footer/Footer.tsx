import { AiOutlineCopyright } from "react-icons/ai"
import { BsHeart } from "react-icons/bs";

export const Footer = () => {

    return(
        <footer className="flex place-content-center w-screen py-2 bg-white text-black text-sm max-[425px]:text-[8px] max-[375px]:text-[7px] max-[320px]:text-[6px]">
            <div className="pr-1">
                <span><AiOutlineCopyright className="inline"/> 2024 Pokémon GO League | </span>
            </div>
            <div>
                <span>developed with <BsHeart className="inline"/> by <a className="underline hover:text-zinc-500" href="https://github.com/bmwolf102990">backpackerBMW</a></span>
            </div>
        </footer>
    );
};
