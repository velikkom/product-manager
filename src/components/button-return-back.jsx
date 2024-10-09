"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

export const ButtonReturnBack = () => {
	const router = useRouter();

	return (
		<Button
			variant="secondary"
			className="mt-3"
			onClick={() => router.back()}
		>
			Return back
		</Button>
	);
};