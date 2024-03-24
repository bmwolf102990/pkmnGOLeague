"use client"

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Pokeball from "../../../public/images/pokeball.png";

export const NewsCarousel = () => {
    const items = [
        {
          "title": "News Example 01",
          "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        },
        {
          "title": "News Example 02",
          "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        },
        {
          "title": "News Example 03",
          "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        },
        {
          "title": "News Example 04",
          "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        },
        {
          "title": "News Example 05",
          "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        },
    ];

    return (
        <div className="">
          <Carousel
            autoPlay={false}
            infiniteLoop={true}
            interval={5000}
            dynamicHeight={false}
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            className=""
          >
            {items.map((item, i) => (
              <div key={i} className="px-10 py-10 bg-gradient-to-br from-zinc-400 from-10% via-50% to-zinc-800 to-90% rounded">
                <div className="mx-16 min-[370px]:mx-24 min-[400px]:mx-28 min-[500px]:mx-36 min-[550px]:mx-44 min-[600px]:mx-52 min-[650px]:mx-56 min-[700px]:mx-64 min-[750px]:mx-72 min-[800px]:mx-80 min-[1000px]:mx-[420px] min-[1100px]:mx-[450px] min-[1400px]:mx-[595px] min-[2000px]:mx-[815px] min-[2500px]:mx-[1100px]">
                  <Image src={Pokeball} width={100} height={100} quality={100} alt="slides" className="pokeball-spin" />
                </div>
                <div className="my-3">
                  <h2 className="mb-3 text-center text-xl">{item.title}</h2>
                  <p className="">{item.text}</p>
                </div>
                <div className="my-5">
                  <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-zinc-500 py-2 px-4 border border-white hover:border-transparent rounded">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
    );
}
