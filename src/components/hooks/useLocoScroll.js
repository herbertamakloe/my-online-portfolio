import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
// import LocomotiveScrollReact from "react-locomotive-scroll";
// import "locomotive-scroll/src/styles/lo";
import "./locomotiveScroll.css";

const useLocoScroll = (start) => {
	useEffect(() => {
		if (!start) return;

		const scrollEl = document.querySelector(".containerr");

		const locoScroll = new LocomotiveScroll({
			el: scrollEl,
			smooth: true,
			multiplier: 1,
			class: "is-reveal",
		});
	}, [start]);
};

export default useLocoScroll;
