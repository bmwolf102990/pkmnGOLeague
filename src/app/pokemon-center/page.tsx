"use client"

import Image from "next/image";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { NewsCarousel } from "../../components/NewsCarousel/NewsCarousel";

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
                    className="w-screen py-6 px-16 min-[370px]:px-20 min-[400px]:px-24 min-[500px]:px-32 min-[550px]:px-40 min-[600px]:px-44 min-[650px]:px-52 min-[700px]:px-64  min-[1000px]:px-96 min-[1400px]:px-[550px] min-[2000px]:px-[800px] min-[2500px]:px-[1100px]"
                    src={NurseJoy}
                    quality={100}
                    fill={false}
                    alt=""
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusantium explicabo, expedita maxime laborum odio, vel cumque nam laboriosam consectetur debitis eos aut nemo quisquam ratione, illo rerum deleniti harum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, in distinctio mollitia blanditiis illum officiis nobis numquam culpa ad vero consequatur ducimus et quae beatae tenetur totam! Nesciunt, explicabo soluta.
                    </p>
                    <a href="/pokemon-center#registration-section" className="text-center my-8 mx-12">
                        <button className="bg-green-500 hover:bg-green-300 text-black font-bold hover:outline hover:outline-offset-2 hover:outline-green-300 m-auto py-2 px-8 rounded">
                            Register Now
                        </button>
                    </a>
                </section>
                <section>
                    <Image 
                    className="w-screen h-1/4 min-[700px]:h-[350px] min-[1000px]:h-[500px] min-[1400px]:h-[700px] min-[2000px]:h-[1000px] min-[2500px]:h-[1250px]"
                    src={PokeCenter}
                    quality={100}
                    fill={false}
                    alt=""
                    />
                </section>
                <section className="flex flex-col w-screen text-justify text-sm xl:text-lg min-[2000px]:text-2xl px-6 xl:px-12 min-[2000px]:px-24 min-[600px]:text-center py-4 xl:py-8 min-[2000px]:py-16">
                    <h3 className="font-bold text-lg xl:text-2xl min-[2000px]:text-4xl text-center py-4">League News</h3>
                    <NewsCarousel />
                </section>
                <section id="registration-section" className="flex flex-col w-screen text-justify text-sm xl:text-lg min-[2000px]:text-2xl px-3 xl:px-6 min-[2000px]:px-12 min-[600px]:text-center py-4 xl:py-8 min-[2000px]:py-16">
                    <h3 className="font-bold text-lg xl:text-2xl min-[2000px]:text-4xl text-center">Register To Compete</h3>
                    <span className="py-2 text-xs text-center font-thin">
                        please upload an image of your QR Battle Code, from the Pokémon GO app, for other trainers to scan
                    </span>
                    <form className="grid grid-cols-2 gap-2 justify-center border rounded text-center">
                        <input className="max-[420px]:col-span-2 p-1 mt-4 mx-4 min-[420px]:ml-4 min-[420px]:mr-0 rounded-sm text-black" type="text" placeholder="First Name" required/>
                        <input className="max-[420px]:col-span-2 p-1 min-[420px]:mt-4 mx-4 min-[420px]:mr-4 min-[420px]:ml-0 rounded-sm text-black" type="text" placeholder="Last Name"required/>
                        <input className="max-[420px]:col-span-2 p-1 mx-4 min-[420px]:ml-4 min-[420px]:mr-0 rounded-sm text-black" type="text" placeholder="Trainer Name" required/>
                        <input className="max-[420px]:col-span-2 p-1 mx-4 min-[420px]:mr-4 min-[420px]:ml-0 rounded-sm text-black" type="text" placeholder="Trainer Code" pattern="\d{4}\s\d{4}\s\d{4}" title="#### #### ####" required/>
                        <input className="max-[420px]:col-span-2 p-1 mx-4 min-[420px]:ml-4 min-[420px]:mr-0 rounded-sm text-black" type="email" placeholder="Email" required/>
                        <input className="max-[420px]:col-span-2 p-1 mx-4 min-[420px]:mr-4 min-[420px]:ml-0 rounded-sm text-black" type="password" placeholder="Password" required/>
                        <input className="col-span-2 py-2 mx-4 rounded-sm text-black" type="file" accept=".jpeg, .jpg, .png" required/>
                        <button className="col-span-2 mb-4 mx-4 bg-green-500 hover:bg-green-300 text-black font-bold hover:outline hover:outline-offset-2 hover:outline-green-300 py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    )
};
