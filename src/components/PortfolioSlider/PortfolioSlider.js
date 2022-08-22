import React from "react";
import Slider from "react-slick";
import "./PortfolioStyles.css";
import Card from "../Card/Card";

const PortfolioSlider = () => {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "150px",
		slidesToShow: 1,
		swipeToSlide: true,
		autoplay: true,
		speed: 500,
	};

	return (
		<div className="scrollSlider">
			<Slider {...settings}>
				<Card />
				<Card />
				<Card />
			</Slider>
		</div>
	);
};

export default PortfolioSlider;
