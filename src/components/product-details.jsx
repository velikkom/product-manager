import Image from "next/image";
import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { ButtonReturnBack } from "./button-return-back";

export const ProductDetails = ({ product }) => {
	const { title, description, price, image } = product;

	return (
		<Row>
			<Col md={6}>
				<Image src={image} alt={title} width={500} height={500} className="img-fluid" />
			</Col>

			<Col md={6} className="d-flex flex-column justify-content-center align-items-start">
				<h2>{title}</h2>
				<p>{description}</p>
				<Badge bg="primary">${price}</Badge>

                <ButtonReturnBack/>
			</Col>
		</Row>
	);
};