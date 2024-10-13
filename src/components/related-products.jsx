"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { ProductCard } from "./product-card";

export const RelatedProducts = ({ relatedProducts }) => {
	return (
		<div>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{relatedProducts.map((item) => (
					<SwiperSlide key={item}>
                        <ProductCard {...item} />
                    </SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};