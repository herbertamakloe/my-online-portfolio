import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import Mobilenav from "../components/MobileNav/Mobilenav";
import Navbar from "../components/Navbar/Navbar";
import FloatingSocials from "../components/FloatingSocials/FloatingSocials";
import Footer from "../components/Footer/Footer";
import "../css/hireme.css";
import ContactForm from "../components/ContactForm/ContactForm";

// import useLocoScroll from "../components/hooks/useLocoScroll";
import useLocoHireme from "../components/hooks/useLocoHireme";
import "../components/hooks/locomotiveScroll.css";
import Preloader from "../components/Preloader/Preloader";

const Hireme = () => {
	const [open, setOpen] = useState(false);

	function toggleDropdown() {
		setOpen(!open);
	}

	function closeDropdown() {
		setOpen(!open);
	}

	const [preloader, setPreloader] = useState(true);

	useLocoHireme(!preloader);

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
						<div className="hiremecontainer" data-scroll-section>
							<div className="hireme_text">
								<h1 className="hireme_title">
									let's start something{" "}
									<span className="togetherTxt">together.</span>
								</h1>
							</div>
							<div className="hireme-divider"></div>

							{/* Contact Form */}
							<ContactForm />
						</div>
						{/* Social Handle Section */}
						<div className="social-handles-section" data-scroll-section>
							<FloatingSocials />
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

export default Hireme;
