import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
	const { register, handleSubmit } = useForm();
	const onSubmit = (formData) =>
		(window.location.href = `mailto:gary.giambatista@gmail.com?subject=${formData.subject}&body=${formData.message}`);

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
			className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="opacity-0 md:opacity-100 absolute top-24 sm:top-36 uppercase tracking-[20px] text-[#8899ac] text-2xl z-20">
				Contact
			</h3>
			<div className="flex flex-col space-y-10">
				<h4 className="text-4xl font-semibold text-center">
					<span className="underline decoration-[#1da1f2]">Contact me</span>
				</h4>

				<div className="space-y-10">
					<div className="flex items-center justify-center space-x-5">
						<PhoneIcon className="text-[#1da1f2] h-7 sm:w-7 animate-pulse" />
						<p className="text-2xl">+1 973-862-1294</p>
					</div>
					<div className="flex items-center justify-center space-x-5 ">
						<EnvelopeIcon className="text-[#1da1f2] h-7 w-7 animate-pulse" />
						<p className="text-2xl">Gary.Giambatista@gmail.com</p>
					</div>
					<div className="flex items-center justify-center space-x-5 ">
						<MapPinIcon className="text-[#1da1f2] h-7 w-7 animate-pulse" />
						<p className="text-2xl">New Jersey, USA</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col scale-75 sm:scale-100 space-y-2 w-fit mx-auto"
				>
					<div className="flex space-x-2">
						<input
							{...register("name")}
							placeholder="Name"
							className="contactInput"
							type="text"
						/>
						<input
							{...register("email")}
							placeholder="Email"
							className="contactInput"
							type="email"
						/>
					</div>
					<input
						{...register("subject")}
						placeholder="Subject"
						className="contactInput"
						type="text"
					/>
					<textarea
						{...register("message")}
						placeholder="Message"
						className="contactInput"
					/>
					<button
						type="submit"
						className="bg-[#1da1f2] border-b-4 border-[#1da1f2] py-5 px-10 rounded-md text-white font-bold text-lg hover:scale-105 hover:border-white transition ease-in-out delay-50"
					>
						Submit
					</button>
				</form>
			</div>
		</motion.div>
	);
}
