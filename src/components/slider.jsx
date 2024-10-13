"use client"
import React from "react";
import { Carousel } from "react-bootstrap";
import slides from "@/helpers/data/slider.json";
import Image from "next/image";

export const Slider = () => {
	return (
		<Carousel>
			{slides.map((item) => (
				<Carousel.Item key={item.id} style={{ height: "70vh" }}>

					<Image
						src={`/images/${item.image}`}
						alt="slider"
						fill
                        style={{ objectFit: "cover" }}

					/>
				</Carousel.Item>
			))}
		</Carousel>
	);
};
export default Slider;
