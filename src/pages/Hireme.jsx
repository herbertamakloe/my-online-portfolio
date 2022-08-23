import { motion } from "framer-motion";
import React, { useState } from "react";
import Mobilenav from "../components/MobileNav/Mobilenav";
import Navbar from "../components/Navbar/Navbar";
import FloatingSocials from "../components/FloatingSocials/FloatingSocials";
import Footer from "../components/Footer/Footer";
import "../css/hireme.css";
import ContactForm from "../components/ContactForm/ContactForm";

const Hireme = () => {
	const [open, setOpen] = useState(false);

	function toggleDropdown() {
		setOpen(!open);
	}

	function closeDropdown() {
		setOpen(!open);
	}
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Navbar toggleBtn={toggleDropdown} />
			<Mobilenav
				mobileTab={{ marginLeft: open ? "0" : "100%" }}
				closeDropdown={closeDropdown}
			/>
			<div className="hiremecontainer">
				<div className="hireme_text">
					<h1 className="hireme_title">let's start something <span className="togetherTxt">together.</span></h1>
				</div>
				<div className="divider"></div>

				{/* Contact Form */}
				<ContactForm />
			</div>
			{/* Social Handle Section */}
			<FloatingSocials />

			{/* Footer Section */}
			<Footer />
		</motion.div>
	);
};

export default Hireme;
