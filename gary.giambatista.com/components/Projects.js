import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
			<h3 className="absolute top-20 uppercase tracking-[20px] text-[#8899ac] text-2xl z-20">
				Projects
			</h3>

			<div className="relative w-full  z-10">
				<div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-20 h-screen">
					{/* Enable these above for horizontal scrolling: flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory */}
					<Link href="https://studylistv2-git-studygroupv10-gary-giambatista.vercel.app/">
						<Image
							className="rounded-md object-scale-down border border-1-zinc-300  sm:w-[500px] lg:w-[600px] xl:w-[862px] z-15 hover:grayscale hover:scale-105 transition ease-in-out delay-50"
							src={studyListPicture}
							alt="Study list project"
							title="Try it out!"
						/>
					</Link>
					<div className="space-y-10 px-0 md:px-10 max-w-6xl">
						<h4 className="text-4xl font-semibold text-center">
							<a
								href="https://studylistv2-git-studygroupv10-gary-giambatista.vercel.app/"
								className="underline decoration-[#1da1f2]"
							>
								Study List
							</a>
						</h4>
						<p className="text-lg text-center md:text-left">
							{" "}
							During my software engineering studies, I found a need to organize
							many different reference websites into groups. This gave birth to
							the idea of creating a modular study list in which I could store
							various links with descriptions about them in one place. It&apos;s
							truly the one tab to rule them all, a master tab to organize all
							studying in one place. Built with Next.js and SupaBase.
						</p>
					</div>
				</div>
			</div>

			{/* <div className="w-full absolute top-[30%] bg-[#8899a6]/10 left-0 h-[350px] md:h-[500px]" /> */}
		</motion.div>
	);
}
