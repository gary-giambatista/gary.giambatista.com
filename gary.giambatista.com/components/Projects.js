import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { list } from "postcss";
import React from "react";
import aiArtGeneratorPicture from "../public/Ai-art-generator-site.PNG";
import studyListPicture from "../public/StudyListPicture.JPG";
import twitterDemoPic from "../public/Twitter-demo-pic3.PNG";
import esteemDemoPreview from "../public/esteemDemoPreview.PNG";
import katacard from "../public/katacard.png";

export default function Projects() {
	const projects = [
		{
			title: "Esteem Demo",
			description:
				"Currently under development, Esteem is a project started with a big dream, to improve the understanding and reasoning of the world by encouraging people to talk with those who share a different perspective than their own. Built with React Native, Expo, and Firebase.",
			image: esteemDemoPreview,
			link: "https://gary-giambatista.com/EsteemDemo",
		},
		{
			title: "Katacard",
			description:
				"Built with Next.js 13.4 and React server components for my repetitive forgetfullness of the Katakana alphabet! Utilizes local storage, input validation, and map referencing to allow users to drill Katakana flashcards. Validates both hiragana and romaji and has 2 modes, allowing users to cycle through all letters, and to repeat failed letters. ",
			image: katacard,
			link: "https://katacard.vercel.app/",
		},
		{
			title: "Study List",
			description:
				"A modular and collapsibile study list, built with Next.js and SupaBase. Sign in with Google, or sign up with an email. Study List provides a way to take a collection of study resources from across the internet and put them all in 1 place, in 1 tab. It was built to centralize browser sessions and minimize tab overload to keep productivity up. It includes a built in Pomodoro timer.",
			image: studyListPicture,
			link: "https://studylistv2-git-studygroupv10-gary-giambatista.vercel.app/",
		},
		{
			title: "Twitter Clone",
			description:
				"Built with Next.js, TypeScript, and Sanity. A functional clone of Twitter and it's basic features. Login with your real Twitter account, post tweets including pictures, and comment on tweets.",
			image: twitterDemoPic,
			link: "https://twitter-clone-gold-rho.vercel.app/",
		},
		{
			title: "Ai Art Generator",
			description:
				"A user interface for utilizing OpenAI's Dall-E 2 API. First enter your API key, then your image(s) description. Next, select the desired number and size of the image(s) and click submit. Lastly, you will quickly receive your unique AI generated images. Built entirely with React and vanilla CSS.",
			image: aiArtGeneratorPicture,
			link: "https://ai-art-generator-pi.vercel.app/",
		},
	];
	const contentWrapper = React.useRef(null);

	const sideScroll = (element, speed, distance, step) => {
		let scrollAmount = 0;
		const slideTimer = setInterval(() => {
			element.scrollLeft += step;
			scrollAmount += Math.abs(step);
			if (scrollAmount >= distance) {
				clearInterval(slideTimer);
			}
		}, speed);
	};

	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{ duration: 1 }}
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
		>
			<h3 className="absolute top-20 uppercase tracking-[20px] text-[#8899ac] text-2xl z-20">
				Projects
			</h3>
			{/* adjust scroll bar for devices so it is seen below sm:scrollbar */}
			<div
				ref={contentWrapper}
				className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-[#22303c] scrollbar-thumb-[#8899ac] scrollbar"
			>
				{projects.map((project, index) => (
					<div
						key={index}
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-44 h-screen"
					>
						<motion.div
							initial={{
								y: -300,
								opacity: 0,
							}}
							whileInView={{
								y: 0,
								opacity: 1,
							}}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							<Link href={project.link}>
								<Image
									className="rounded-md object-scale-down border border-1-zinc-300  sm:w-[500px] lg:w-[600px] xl:w-[862px] z-15 hover:grayscale hover:scale-105 transition ease-in-out delay-50"
									src={project.image}
									alt="Study list project"
									title="Try it out!"
								/>
							</Link>
						</motion.div>
						<div className="space-y-4 md:space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-2xl md:text-4xl font-semibold text-center">
								<a
									href={project.link}
									className="underline decoration-[#1da1f2]"
								>
									{project.title}
								</a>
							</h4>
							<p className="text-sm md:text-lg text-center md:text-left">
								{" "}
								{project.description}
							</p>
						</div>
						<div className="hidden xl:flex flex-row gap-5">
							<button
								className="heroButton"
								onClick={() => {
									sideScroll(contentWrapper.current, 1, 100, -2000);
								}}
							>
								Prev
							</button>
							<button
								className="heroButton"
								onClick={() => {
									sideScroll(contentWrapper.current, 1, 100, 2000);
								}}
							>
								Next
							</button>
						</div>
					</div>
				))}
			</div>
			{/* <div className="w-full absolute top-[30%] bg-[#8899a6]/10 left-0 h-[350px] md:h-[500px]" /> */}
		</motion.div>
	);
}
