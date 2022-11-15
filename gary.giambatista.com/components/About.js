import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import StatuePicture from "../public/StatuePic.jpg";

export default function About() {
	return (
		<motion.div
			initial={{
				opacity: 0,
				scale: 0,
			}}
			whileInView={{
				opacity: 1,
				scale: 1,
			}}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-20 md:top-36 uppercase tracking-[20px] text-[#8899ac] text-2xl">
				{" "}
				About{" "}
			</h3>

			<div className="flex flex-col space-y-44 text-center md:text-left md:flex-row justify-evenly items-center">
				<Image
					className="-mb-40 md:mob-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-65 md:h-95 xl:w-[500px] xl:h-[600px] hover:grayscale hover:scale-110 transition ease-in-out delay-50"
					src={StatuePicture}
					alt="/"
				/>
				<div className="px-0 md:px-10">
					<h4 className="text-4xl font-semibold">
						My <span className="underline decoration-[#1da1f2]">story</span>
					</h4>
					<p className="text-sm lg:text-base">
						It took a long time for me to find my passion in building software
						and applications. I started like many, a business student who went
						on to work in real estate and later at an advertising agency doing
						marketing. With a clear eye on what my future was, I decided to walk
						a different path, one which took me overseas to Japan for over 3
						years. Living abroad was the best experience of my life. I worked as
						an English teacher and got to teach many children while learning
						about a new culture and way of life. While life was amazing, I
						sought a path to have a larger impact on the world. That path led me
						to fostering many ideas to create things, and software is the key to
						making my ideas into real life utilties.
					</p>
				</div>
			</div>
		</motion.div>
	);
}
