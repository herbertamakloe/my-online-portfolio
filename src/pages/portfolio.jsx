import { motion } from "framer-motion";
import React from "react";
import Mobilenav from "../components/MobileNav/Mobilenav";
import Navbar from "../components/Navbar/Navbar";

const portfolio = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div>
				<Navbar />
				<Mobilenav />
			</div>
		</motion.div>
	);
};

export default portfolio;
