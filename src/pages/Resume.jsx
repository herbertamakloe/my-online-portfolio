import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import Lwt from "../components/Lwt/Lwt";
import Mobilenav from "../components/MobileNav/Mobilenav";
import Navbar from "../components/Navbar/Navbar";
import cvImage from "../images/cv-preview.png";
import "../css/resume.css";
import Footer from "../components/Footer/Footer";

// import useLocoScroll from "../components/hooks/useLocoScroll";
import "../components/hooks/locomotiveScroll.css";
import Preloader from "../components/Preloader/Preloader";

import useLocoResume from "../components/hooks/useLocoResume";

const Resume = () => {
	const [open, setOpen] = useState(false);

	function toggleDropdown() {
		setOpen(!open);
	}

	function closeDropdown() {
		setOpen(!open);
	}

	const [preloader, setPreloader] = useState(true);

	useLocoResume(!preloader);

	const [timer, setTimer] = useState(2);

	const id = useRef(null);

	const clear = () => {
		window.clearInterval(id.current);
		setPreloader(false);
	};

	useEffect(() => {
		id.current = window.setInterval(() => {
			setTimer((timer) => timer - 1);
		}, 1000);
	}, []);

	useEffect(() => {
		if (timer === 0) {
			clear();
		}
	}, [timer]);

	return (
		<>
			{preloader ? (
				<Preloader />
			) : (
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
					<div id="container" data-scroll-container>
						<div className="resume-container" data-scroll-section>
							<div className="cvWrap">
								<div className="cvPic">
									<img src={cvImage} alt="" />
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
						<div className="lwt_holder" data-scroll-section>
							<Lwt />
						</div>

						{/* Footer Section */}
						<div className="footer-section" data-scroll-section>
							<Footer />
						</div>
					</div>
				</motion.div>
			)}
		</>
	);
};

export default Resume;
