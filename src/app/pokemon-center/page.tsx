"use client"

import Image from "next/image";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ResponsiveCarousel } from "../../components/ResponsiveCarousel/ResponsiveCarousel";
// import { FaCircleArrowDown } from "react-icons/fa6"

import PokeCenter from "../../../public/images/pokemon-center.jpg";
import NurseJoy from "../../../public/images/nurse-joy.png"

export default function PokemonCenter() {

    return (
        <>
            <Header />
            <div className="z-0 flex flex-col h-auto w-screen bg-black">
                <section className="flex flex-col w-screen text-justify text-sm xl:text-lg min-[2000px]:text-2xl font-light px-6 xl:px-12 min-[2000px]:px-24 min-[600px]:text-center py-4 xl:py-8 min-[2000px]:py-16">
                    <h3 className="font-bold text-lg xl:text-2xl min-[2000px]:text-4xl text-center">Welcome to the Pokémon Center</h3>
                    <Image
                    className="w-screen py-6 px-16"
                    src={NurseJoy}
                    quality={100}
                    fill={false}
                    alt=""
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusantium explicabo, expedita maxime laborum odio, vel cumque nam laboriosam consectetur debitis eos aut nemo quisquam ratione, illo rerum deleniti harum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, in distinctio mollitia blanditiis illum officiis nobis numquam culpa ad vero consequatur ducimus et quae beatae tenetur totam! Nesciunt, explicabo soluta.
                    </p>
                    <a href="/pokemon-center#registration-section" className="text-center mt-8 mx-12">
                        <button className="bg-green-500 hover:bg-green-300 text-black font-bold hover:outline hover:outline-offset-2 hover:outline-green-300 m-auto py-2 px-8 rounded">
                            Register Now
                        </button>
                    </a>
                </section>
                <section>
                    <Image 
                    className="h-1/4 w-screen"
                    src={PokeCenter}
                    quality={100}
                    fill={false}
                    alt=""
                    />
                </section>
                <section className="flex flex-col w-screen text-justify text-sm xl:text-lg min-[2000px]:text-2xl px-6 xl:px-12 min-[2000px]:px-24 min-[600px]:text-center py-4 xl:py-8 min-[2000px]:py-16">
                    <h3 className="font-bold text-lg xl:text-2xl min-[2000px]:text-4xl text-center pb-8">League News</h3>
                    <ResponsiveCarousel />
                </section>
                <section id="registration-section" className="flex flex-col w-screen text-justify text-sm xl:text-lg min-[2000px]:text-2xl px-3 xl:px-6 min-[2000px]:px-12 min-[600px]:text-center py-4 xl:py-8 min-[2000px]:py-16">
                    <h3 className="font-bold text-lg xl:text-2xl min-[2000px]:text-4xl text-center">Register To Compete</h3>
                    <span className="py-2 text-xs text-center font-thin">
                        please upload an image of your QR Battle Code, from the Pokémon GO app, for other trainers to scan
                    </span>
                    <form className="grid grid-col-1 gap-2 max-[385px]:py-8 max-[385px]:px-4 justify-center border rounded text-center">
                        <input className="p-1 rounded-sm text-black" type="text" placeholder="First Name" required/>
                        <input className="p-1 rounded-sm text-black" type="text" placeholder="Last Name"required/>
                        <input className="p-1 rounded-sm text-black" type="text" placeholder="Trainer Name" required/>
                        <input className="p-1 rounded-sm text-black" type="text" placeholder="Trainer Code" pattern="\d{4}\s\d{4}\s\d{4}" title="#### #### ####" required/>
                        <input className="p-1 rounded-sm text-black" type="email" placeholder="Email" required/>
                        <input className="p-1 rounded-sm text-black" type="password" placeholder="Password" required/>
                        <input className="py-2 rounded-sm text-black" type="file" accept=".jpeg, .jpg, .png" required/>
                        <button className="bg-green-500 hover:bg-green-300 text-black font-bold hover:outline hover:outline-offset-2 hover:outline-green-300 py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    )
};
