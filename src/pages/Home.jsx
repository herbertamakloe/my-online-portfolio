import { motion } from "framer-motion";
import React, { useState } from "react";
import Mobilenav from "../components/MobileNav/Mobilenav";
import Navbar from "../components/Navbar/Navbar";
import sideImage from "../images/hero-photo.png";
import sideRecOne from "../images/sd-rt-blue.svg";
import sideRecTwo from "../images/sd-rt-pink.svg";
import sideRecThree from "../images/sd-rt-bnw.svg";
import sideRecFour from "../images/sd-rt-border.svg";
import Typical from "react-typical";
import "../css/home.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import Lwt from "../components/Lwt/Lwt";
import FloatingSocials from "../components/FloatingSocials/FloatingSocials";
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
			<div className="containerr">
				<div className="header">
					<div className="headerText">
						<h3>hello, I'm</h3>
						<h1>Herbert Tamakloe</h1>
						<span className="typing">
							<Typical
								loop={Infinity}
								wrapper="l"
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
				<div className="portfolio" id="portfolio">
					<p>Selected Projects</p>
					<h1>case studies</h1>
					{/* Slider will go here */}
					<Slider />
				</div>

				{/* LWT Section */}
				<div className="lwt_holder">
					<Lwt />
				</div>

				{/* Social Handle Section */}
				<FloatingSocials />
			</div>
			<Footer />
		</motion.div>
	);
};

export default Home;
