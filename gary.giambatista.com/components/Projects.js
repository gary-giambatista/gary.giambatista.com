import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import studyListPicture from "../public/StudyListPicture.JPG";

export default function Projects() {
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
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
		>
			<h3 className="absolute top-24 md:top-36 uppercase tracking-[20px] text-[#8899ac] text-2xl z-20">
				Projects
			</h3>

			<div className="relative w-full  z-10">
				<div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-20 h-screen">
					{/* Enable these above for horizontal scrolling: flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory */}
					<Image
						className="rounded-md object-scale-down border border-1-zinc-300  w-[862px] z-15"
						src={studyListPicture}
						alt="Study list project"
					/>
					<div className="space-y-10 px-0 md:px-10 max-w-6xl">
						<h4 className="text-4xl font-semibold text-center">
							<span className="underline decoration-[#1da1f2]">Study List</span>
						</h4>
						<p className="text-lg text-center md:text-left">
							{" "}
							During my software engineering studies, I found a need to organize
							many different reference websites into groups. This gave birth to
							the idea to create a modular study list in which I could store
							various links with description about them in one place. It's truly
							the one tab to rule them all, a master tab to organize all
							studying in one place.
						</p>
					</div>
				</div>
			</div>

			{/* <div className="w-full absolute top-[30%] bg-[#8899a6]/10 left-0 h-[350px] md:h-[500px]" /> */}
		</motion.div>
	);
}
