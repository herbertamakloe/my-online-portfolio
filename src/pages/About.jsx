import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Mobilenav from "../components/MobileNav/Mobilenav";
import introImage from "../images/About-me-side-picture@2x.png";
import xdLogo from "../images/xd-logo.png";
import reactLogo from "../images/react-logo.png";
import wpLogo from "../images/wp-logo.png";
import happyLogo from "../images/happy-me.png";
import useLocoScroll from "../components/hooks/useLocoScroll";
import "../css/about.css";

// import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Lwt from "../components/Lwt/Lwt";
import Preloader from "../components/Preloader/Preloader";

import "../components/hooks/locomotiveScroll.css";

const About = () => {
	const [open, setOpen] = useState(false);

	function toggleDropdown() {
		setOpen(!open);
	}

	function closeDropdown() {
		setOpen(!open);
	}

	const [preloader, setPreloader] = useState(true);

	useLocoScroll(!preloader);

	const [timer, setTimer] = useState(3);

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
					<div className="container containerr" data-scroll-container>
						{/* IINTRODUCTION  */}
						<div className="intro_section" data-scroll-section>
							<div className="intro_text">
								<p className="get_to_know_me">GET TO KNOW ME</p>
								<h1>quick intro</h1>
								<p className="intro">
									Well my full name is Herbert Kwabla Tamakloe but you can just
									call me Herbert. I hold a bachelor's degree in Computer
									Science and Technology from the Beijing University Of
									Technology, Beijing-China. While studying in China I picked up
									a few courses online on web development and this led me to
									pursue developing software that run in the browser. I love the
									computer so much and I enjoy building softwares that run on
									it.
								</p>
							</div>
							<div className="intro_image">
								<img src={introImage} alt="" />
							</div>
						</div>

						{/* EXPERTISE */}
						<div className="expert_section" data-scroll-section>
							<div className="expert_text">
								<p className="what_i_do">what i do</p>
								<h1>my expertise</h1>
							</div>
							<div className="expert_cards">
								<div className="cards">
									<div className="card_img">
										<img src={xdLogo} alt="" />
									</div>
									<div className="card_text">
										I design modern web and mobile interfaces using Adobe XD
									</div>
								</div>
								<div className="cards">
									<div className="card_img">
										<img src={reactLogo} alt="" className="App-logo" />
									</div>
									<div className="card_text">
										I build frontend web interfaces with ReactJS.
									</div>
								</div>
								<div className="cards">
									<div className="card_img">
										<img src={wpLogo} alt="" />
									</div>
									<div className="card_text">
										I use Wordpress as my tool for building CMS based websites
									</div>
								</div>
								<div className="cards">
									<div className="card_img">
										<img src={happyLogo} alt="" />
									</div>
									<div className="card_text">
										I am a passionate developer and that is why I make sure I
										have as much fun as possible!
									</div>
								</div>
							</div>
						</div>

						{/* TECHNOLOGIES */}
						<div className="tech_section" data-scroll-section>
							<div className="text_text">
								<p className="what_i_work_with">what i work with</p>
								<h1>technologies i use</h1>
							</div>

							<div className="marquee">
								<div className="marquee--inner">
									<span>
										<div className="tech">xd</div>
										<div className="tech red">react</div>
										<div className="tech yellow">nodejs</div>
										<div className="tech blue">html</div>
										<div className="tech orange">css</div>
										<div className="tech purple">material-ui</div>
										<div className="tech green">git</div>
										<div className="tech">javaScript</div>
									</span>
									<span>
										<div className="tech">xd</div>
										<div className="tech red">react</div>
										<div className="tech yellow">nodejs</div>
										<div className="tech blue">html</div>
										<div className="tech orange">css</div>
										<div className="tech purple">material-ui</div>
										<div className="tech green">git</div>
										<div className="tech">javaScript</div>
									</span>
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

export default About;
