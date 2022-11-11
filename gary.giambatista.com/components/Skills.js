import { motion } from "framer-motion";
import React from "react";
import cssImage from "../public/skills/css.png";
import gitImage from "../public/skills/git.png";
import githubImage from "../public/skills/github.png";
import htmlImage from "../public/skills/html.png";
import javascriptImage from "../public/skills/javascript.png";
import nodeImage from "../public/skills/node.png";
import reactImage from "../public/skills/react.png";
import supabaseImage from "../public/skills/supabase-logo.png";
import taiwindImage from "../public/skills/tailwind.png";
import Skill from "./Skill";

export default function Skills() {
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
			transition={{ duration: 1 }}
			className="flex relative flex-col text-center md:text-left xl:flew-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
		>
			<h3 className="absolute top-40 md:top-36 uppercase tracking-[20px] text-[#8899ac] text-2xl">
				Skills
			</h3>

			<div className="grid grid-cols-4 gap-5 lg:gap-10">
				<Skill
					text={"JavaScript"}
					directionLeft={true}
					image={javascriptImage}
				/>
				<Skill text={"React"} directionLeft={true} image={reactImage} />
				<Skill text={"CSS"} directionLeft={true} image={cssImage} />
				<Skill text={"HTML"} directionLeft={true} image={htmlImage} />
				<Skill text={"Git"} directionLeft={false} image={gitImage} />
				<Skill text={"GitHub"} directionLeft={false} image={githubImage} />
				<Skill text={"Tailwind"} directionLeft={false} image={taiwindImage} />
				<Skill text={"Supabase"} directionLeft={false} image={supabaseImage} />
				<Skill text={"Node.js"} directionLeft={true} image={nodeImage} />
			</div>
		</motion.div>
	);
}
