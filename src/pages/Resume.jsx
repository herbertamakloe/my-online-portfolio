import { motion } from "framer-motion";
import React, { useState } from "react";
import Lwt from "../components/Lwt/Lwt";
import Mobilenav from "../components/MobileNav/Mobilenav";
import Navbar from "../components/Navbar/Navbar";
import cvImage from "../images/cv-preview.png";
import "../css/resume.css";
import Footer from "../components/Footer/Footer";

const Resume = () => {
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

			<div className="resume-container">
				<div className="cvWrap">
					<div className="cvPic">
						<img src={cvImage} />
						<div className="cv-overlay">
							<div className="btn">
								<form action="https://drive.google.com/file/d/1ttlVzw0o3tqtkUjyvdtae8inS69-jbqN/view?usp=sharing">
									<button type="submit">view</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* LWT Section */}
			<div className="lwt_holder">
				<Lwt />
			</div>

			<Footer />
		</motion.div>
	);
};

export default Resume;
