"use client"

import { Carousel } from "react-responsive-carousel";
import { BiEnvelope } from "react-icons/bi";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import PokeBall from "../../../public/images/pokeball.png";

export const ResponsiveCarousel = () => {
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
              <div key={i} className="px-10 py-10 bg-gradient-to-br from-red-300 from-10% via-50% to-red-700 to-90% rounded">
                <div className="mx-20">
                  <Image src={PokeBall} width={100} height={100} alt="slides" />
                </div>
                <div className="my-3">
                  <h2 className="mb-3 text-center">{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
    );
}
