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
		words: [
			"My dream is to build applications that change the world positively  ",
		],
		loop: 1,
		delaySpeed: 3000,
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
				className="relative rounded-full h-32 w-32 mx-auto object-cover sm:h-56 sm:w-56 xl:rounded-lg"
				src={DeerPicture}
				alt="/"
			/>
			<h1 className="text-xs uppercase text-[#8899A6] pb-2 tracking-[15px] md:text-lg">
				Software Engineer
			</h1>
			<div>
				<h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold px-10">
					<span>{text}</span>
					<Cursor cursorColor="#1da1f2" />
				</h1>
			</div>
			<hr className="h-1 w-4/5 lg:w-2/5"></hr>
			<div className="pt-5">
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
			<div className="text-[#22303c] text 5-xl font-semibold px-10 md:text-4xl">
				<span className="">{backgroundText}</span>
				<Cursor cursorColor="#1da1f2" />
			</div>
		</motion.div>
	);
}
