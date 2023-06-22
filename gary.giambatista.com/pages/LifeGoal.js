import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import d0 from "../public/lifegoal/LG-dark-0.png";
import d1 from "../public/lifegoal/LG-dark-1.png";
import d2 from "../public/lifegoal/LG-dark-2.png";
import d3 from "../public/lifegoal/LG-dark-3.png";
import l0 from "../public/lifegoal/light/LG-light-0.png";
import l1 from "../public/lifegoal/light/LG-light-1.png";
import l2 from "../public/lifegoal/light/LG-light-2.png";
import l3 from "../public/lifegoal/light/LG-light-3.png";

export default function EsteemDemo() {
	//state for managing which pictures are displayed
	const [isDarkMode, setIsDarkMode] = React.useState(true);
	const screens = [d0, d1, d2, d3];
	const screensLight = [l0, l1, l2, l3];

	//array to be mapped out conditionally
	let pictureArray = isDarkMode ? screens : screensLight;

	return (
		<div className="bg-[#15202b] text-white h-screen sm:scrollbar scrollbar-track-[#22303c] scrollbar-thumb-[#8899ac] scrollbar-thin flex flex-col">
			<nav className="bg-[#192734] dropShadow flex items-center justify-center  relative p-6">
				<h1 className="text-2xl md:text-4xl">LifeGoal</h1>
				<div className="flex fixed left-1 md:left-10 items-center gap-2">
					<Link href="/#projects">
						<IoIosArrowBack size="2em" />{" "}
					</Link>
					<Link className="text-lg md:text-2xl" href="/#projects">
						Back
					</Link>
				</div>
			</nav>
			<section className="flex relative p-10 gap-4 items-center w-full sm:scrollbar scrollbar-track-[#22303c] scrollbar-thumb-[#8899ac] scrollbar-thin overflow-x-scroll overflow-y-hidden xl:justify-center ">
				{pictureArray.map((screen, index) => (
					<div key={index} className="flex-shrink-0 ">
						<Image
							className="h-full w-32 md:w-52 xl:w-64"
							src={screen}
							alt="Life goal screens"
						/>
					</div>
				))}
			</section>
			<div className="flex flex-row justify-center items-center pt-6">
				<button
					className="heroButton"
					onClick={() => setIsDarkMode(!isDarkMode)}
				>
					{isDarkMode ? "Light Mode" : "Dark Mode"}{" "}
				</button>
			</div>
			<section className="flex flex-col p-4 pt-4 md:p-10 items-center justify-center">
				<h2 className="text-2xl md:text-4xl pb-4 md:pb-4">
					<span className="underline decoration-[#1da1f2]">
						Project Information
					</span>
				</h2>

				<p className="md:text-xl mx-auto xl:max-w-screen-2xl">
					Currently under development, LifeGoal is designed to help people set
					goals, and to remind them of those goals on a daily accord. The idea
					is, goals are like seeds planted in our minds, and we must water them
					with attention before they grow into reality. You are what you think.
					Based on a 30 day period, LifeGoal has an adjustable notification
					which alerts users of their goals throughout the day. Additional
					features are an anonymous goal sharing feed, customizable plans to
					acheive goals, and famous and personal quotes. Built for production
					with React Native, Expo, and Firebase.
				</p>
			</section>
		</div>
	);
}
