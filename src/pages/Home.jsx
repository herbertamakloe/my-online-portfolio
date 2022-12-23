import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Mobilenav from "../components/MobileNav/Mobilenav";
import Navbar from "../components/Navbar/Navbar";
import sideImage from "../images/hero-photo.png";
import sideRecOne from "../images/sd-rt-blue.svg";
import sideRecTwo from "../images/sd-rt-pink.svg";
import sideRecThree from "../images/sd-rt-bnw.svg";
import sideRecFour from "../images/sd-rt-border.svg";
import Typical from "react-typical";
import "../css/home.css";
// import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
// import Slider from "../components/Slider/Slider";
import ProjectsCarousel from "../components/ProjectsCarousel/ProjectsCarousel";
import Lwt from "../components/Lwt/Lwt";
import FloatingSocials from "../components/FloatingSocials/FloatingSocials";
// import PortfolioSection from "../components/PortfolioSection/PortfolioSection";
import Preloader from "../components/Preloader/Preloader";
import useLocoScroll from "../components/hooks/useLocoScroll";
import "../components/hooks/locomotiveScroll.css";
// import Gallery from "../components/Gallery/Gallery";
// import PortfolioSlider from "../components/PortfolioSlider/PortfolioSlider";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Home = () => {
	const [open, setOpen] = useState(false);

	function toggleDropdown() {
		setOpen(!open);
	}

	function closeDropdown() {
		setOpen(!open);
	}

	const [preloader, setPreloader] = useState(true);

	useLocoScroll(!preloader);

	const [timer, setTimer] = useState(5);

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
					<div className="containerr" data-scroll-container>
						<div className="header" data-scroll-section>
							<div className="headerText">
								<h3>hello, I'm</h3>
								<h1>Herbert Tamakloe</h1>
								<span className="typing">
									<Typical
										loop={Infinity}
										wrapper="div"
										steps={[
											"Web Developer",
											2000,
											"Marvel Fan",
											2000,
											"Foodie",
											2000,
										]}
									/>
								</span>
							</div>
							<div className="headerImage">
								<img src={sideImage} alt="" />
								<img src={sideRecOne} alt="" className="recOne" />
								<img src={sideRecTwo} alt="" className="recTwo" />
								<img src={sideRecThree} alt="" className="recThree" />
								<img src={sideRecFour} alt="" className="recFour" />
							</div>
						</div>
						{/* Portfolio Section */}
						<div className="portfolio" id="portfolio" data-scroll-section>
							<p className="selected-projects-title">Selected Projects</p>
							<h1 className="case-study-title">case studies</h1>
							{/* Slider will go here */}
							{/* <Slider /> */}
							<ProjectsCarousel />
							{/* <Gallery /> */}
							{/* <PortfolioSection /> */}
						</div>

						{/* LWT Section */}
						<div className="lwt_holder" data-scroll-section>
							<Lwt />
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

export default Home;
