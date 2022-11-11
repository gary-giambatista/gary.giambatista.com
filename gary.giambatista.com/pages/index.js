import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="bg-[#15202b] text-white h-screen snap-mandatory snap-y overflow-scroll z-0">
			<Navbar />

			<section id="hero" className="snap-start">
				<Hero />
			</section>

			<section id="about" className="snap-center">
				<About />
			</section>

			<section></section>
			{/* <Projects /> */}

			<section></section>
			{/* <Skills /> */}

			<section></section>
			{/* <Contact /> */}

			<footer></footer>
		</div>
	);
}
