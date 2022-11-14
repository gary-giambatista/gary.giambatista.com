import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DeerPicture from "../public/DeerPic.jpg";

import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Hero() {
	const [text, count] = useTypewriter({
		words: ["Hi, my name is Gary  "],

		loop: 1,
	});

	const [backgroundText, countt] = useTypewriter({
		words: ["My dream is to build a better world with software  "],
		loop: 1,

		typeSpeed: 95,
	});

	return (
		<motion.div
			initial={{
				opacity: 0,
				scale: 0,
			}}
			animate={{
				opacity: 1,
				scale: 1,
			}}
			transition={{ duration: 1 }}
			className="h-screen flex flex-col space-y-8 items-center  justify-center overflow-hidden text-center"
		>
			<Image
				priority
				className="relative rounded-full h-32 w-32 mx-auto object-cover sm:h-56 sm:w-56 xl:rounded-lg"
				src={DeerPicture}
				alt="profile picture"
			/>
			<h1 className="text-xs uppercase text-[#8899A6] lg:pb-2 tracking-[10px] sm:tracking-[15px] md:text-lg">
				Software Engineer
			</h1>
			<div>
				<h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold px-10">
					<span>{text}</span>
					<Cursor cursorColor="#1da1f2" />
				</h1>
			</div>
			<hr className="h-1 w-4/5 lg:w-2/5"></hr>
			<div className="md:pt-5">
				<Link href="#about">
					<button className="heroButton">About</button>
				</Link>
				<Link href="#projects">
					<button className="heroButton">Projects</button>
				</Link>
				<Link href="#skills">
					<button className="heroButton">Skills</button>
				</Link>
				<Link href="#contact">
					<button className="heroButton">Contact</button>
				</Link>
			</div>
			<div className="text-[#22303c] text-2xl font-semibold px-10 md:text-6xl justify-end md:pt-8">
				<motion.div
					initial={{
						x: -200,
						opacity: 0,
						scale: 0,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{ delay: 1, duration: 1 }}
					className="font-windsong"
				>
					<span className="font-windsong hover:animate-pulse">
						{backgroundText}
					</span>
					{/* <Cursor cursorColor="#1da1f2" /> */}
				</motion.div>
			</div>
		</motion.div>
	);
}
