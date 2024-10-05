"use client";
import React from "react";
import { Carousel } from "react-bootstrap";
import slides from "@/helpers/data/slider.json";
import Image from "next/image";

const Slider = () => {
  return (
    <Carousel>
      {slides.map((item) => (
        <Carousel.Item key={item.id} style={{height:"50vh"}}>
          <Image
            src={`/images/${item.image}`}
            alt="slider"
            // width={1640}
            // height={624}
            fill
            
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
