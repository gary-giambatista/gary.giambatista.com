import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
	return (
		<header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20">
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
				transition={{ duration: 1 }}
				className="flex flex-row items-center"
			>
				<SocialIcon
					url="https://github.com/gary-giambatista"
					fgColor="grey"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.linkedin.com/in/gary-giambatista-85132ba7/"
					fgColor="grey"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.instagram.com/garygiambatista/"
					fgColor="grey"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.facebook.com/gary.giambatista"
					fgColor="grey"
					bgColor="transparent"
				/>
			</motion.div>

			<motion.div
				initial={{
					x: 200,
					opacity: 0,
					scale: 0,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{ duration: 1 }}
				className="flex flex-row items-center text-gray-300 cursor-pointer"
			>
				<SocialIcon
					className="cursor-pointer"
					network="email"
					fgColor="grey"
					bgColor="transparent"
				/>
				<p className="uppercase hidden md:inline-flex text-sm text-gray-400">
					{" "}
					Contact Me
				</p>
			</motion.div>
		</header>
	);
}
