import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Skill({ text, directionLeft, image }) {
	return (
		<motion.div
			className="group relative flex cursor-pointer"
			initial={{
				x: directionLeft ? -800 : 800,
				opacity: 0,
				scale: 0,
			}}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
			whileInView={{ x: 0, opacity: 1, scale: 1 }}
		>
			<Image
				className=" object-fill w-16 h-16 md:w-32 md:h-32 lg:w-48 lg:h-48 filter group-hover:grayscale group-hover:opacity-60 transition duration-300 ease-in-out "
				src={image}
				alt={text}
			/>
			<div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out  w-16 h-16 md:w-32 md:h-32 lg:w-48 lg:h-48">
				<div className="flex items-center justify-center h-full">
					<p className="text-1xl sm:text-2xl md:text-3xl font-bold text-[#FFFFFF] opacity-100">
						{text}
					</p>
				</div>
			</div>
		</motion.div>
	);
}
