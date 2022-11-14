import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import DeerPicture from "../public/DeerPic.jpg";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="bg-[#15202b] text-white h-screen snap-mandatory snap-y overflow-y-scroll overflow-x-hidden z-0 sm:scrollbar scrollbar-track-[#22303c] scrollbar-thumb-[#8899ac] scrollbar-thin">
			<Navbar />

			<section id="hero" className="snap-start">
				<Hero />
			</section>

			<section id="about" className="snap-center">
				<About />
			</section>

			<section id="skills" className="snap-start">
				<Skills />
			</section>

			<section id="projects" className="snap-start">
				<Projects />
			</section>

			<section id="contact" className="snap-start">
				<Contact />
			</section>

			<Link href="#hero">
				<footer className="sticky bottom-5 w-full cursor-pointer">
					<div className="flex items-center justify-center">
						<Image
							className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
							src={DeerPicture}
							alt="home"
						/>
					</div>
				</footer>
			</Link>
		</div>
	);
}
