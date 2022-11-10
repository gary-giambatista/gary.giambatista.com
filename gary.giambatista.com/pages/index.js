import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<header>
				<Navbar />
			</header>

			<hero></hero>
			{/* <Hero /> */}

			<main></main>
			{/* <Bio /> */}

			<section></section>
			{/* <Portfolio /> */}

			<section></section>
			{/* <Skills /> */}

			<section></section>
			{/* <Contact /> */}

			<footer></footer>
		</div>
	);
}
