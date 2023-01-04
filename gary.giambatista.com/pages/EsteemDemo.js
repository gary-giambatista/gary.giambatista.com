import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import chatScreen from "../public/screens/chatScreen.PNG";
import homeScreen from "../public/screens/homeScreen.PNG";
import lightChatScreen from "../public/screens/light/lightChatScreen.PNG";
import lightHomeScreen from "../public/screens/light/lightHomeScreen.PNG";
import lightMessageScreen from "../public/screens/light/lightMessageScreen.PNG";
import lightQuestionScreen from "../public/screens/light/lightQuestionScreen.PNG";
import lightQuestionScreen2 from "../public/screens/light/lightQuestionScreen2.PNG";
import lightLoginScreen from "../public/screens/light/loginScreen.PNG";
import loginScreen from "../public/screens/loginScreen.PNG";
import messageScreen from "../public/screens/messageScreen.PNG";
import questionScreen from "../public/screens/questionScreen.PNG";
import questionScreen2 from "../public/screens/questionScreen2.PNG";

export default function EsteemDemo() {
	//state for managing which pictures are displayed
	const [isDarkMode, setIsDarkMode] = React.useState(true);
	const screens = [
		loginScreen,
		homeScreen,
		questionScreen,
		questionScreen2,
		chatScreen,
		messageScreen,
	];
	const screensLight = [
		lightLoginScreen,
		lightHomeScreen,
		lightQuestionScreen,
		lightQuestionScreen2,
		lightChatScreen,
		lightMessageScreen,
	];
	//array to be mapped out conditionally
	let pictureArray = isDarkMode ? screens : screensLight;

	return (
		<div className="bg-[#15202b] text-white h-screen sm:scrollbar scrollbar-track-[#22303c] scrollbar-thumb-[#8899ac] scrollbar-thin flex flex-col">
			<nav className="bg-[#192734] dropShadow flex items-center justify-center  relative p-6">
				<h1 className="text-2xl md:text-4xl">Esteem Demo</h1>
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
							className="h-full w-32 md:w-52 xl:w-60"
							src={screen}
							alt="Esteem screens"
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
					Currently under development, Esteem is a project started with a big
					dream, to improve the understanding and reasoning of the world by
					encouraging people to talk with others whom share a different
					perspective than their own. Built with React Native, Expo, and
					Firebase.
				</p>
			</section>
		</div>
	);
}
