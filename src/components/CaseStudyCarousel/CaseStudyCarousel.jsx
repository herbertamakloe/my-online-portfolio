import React, { useEffect, useRef, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import datas from "../../data/slideData";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { refType } from "@mui/utils";
import useOnScreen from "../hooks/useOnScreen";
import cn from "classnames";
import "./styles.css";

const CaseStudy = ({
	number,
	description,
	background,
	github,
	link,
	updateActiveImage,
	index,
}) => {
	const ref = useRef(null);

	const onScreen = useOnScreen(ref, 0.5);

	useEffect(() => {
		if (onScreen) {
			updateActiveImage(index);
		}
	}, [onScreen, index]);

	return (
		<div className={cn("case-study-item", { "is-reveal": onScreen })} ref={ref}>
			<div></div>
			<div className="case-study">
				<div className="case-study-text">
					<div className="case-study-number">{number}</div>
					<div className="case-study-description">{description}</div>
				</div>

				<div className="case-study-preview">
					<div className="case-study-img">
						<img src={`${background}`} alt="" />
					</div>
					<div className="case-study-buttons">
						<a href={github} className="view-btn">
							<span className="view-on-hover">View Project</span>
							<RemoveRedEyeIcon />
						</a>
						<a href={link} className="github-btn">
							<GitHubIcon />
							<span className="view-on-hover">View GitHub</span>
						</a>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
};

const CaseStudyCarousel = () => {
	const [activeImage, setActiveImage] = useState(1);

	const ref = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			let sections = gsap.utils.toArray(".case-study-item");
			gsap.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: "none",
				scrollTrigger: {
					start: "top top",
					trigger: ref.current,
					scroll: "#container",
					pin: true,
					scrub: 0.5,
					span: 1 / (sections.length - 1),
					end: () => `+=${ref.current.offsetWidth}`,
				},
			});

			ScrollTrigger.refresh();
		});
	}, []);

	const handleUpdateActiveImage = (index) => {
		setActiveImage(index + 1);
	};

	return (
		<div className="case-study-wrapper">
			<div className="display-wrap" ref={ref}>
				{datas.map((data, index) => (
					<CaseStudy
						key={data.url}
						index={index}
						number={index < 9 ? `0${index + 1}` : `${index + 1}`}
						description={data.description}
						background={data.url}
						link={data.link}
						github={data.github}
						updateActiveImage={handleUpdateActiveImage}
					/>
				))}
			</div>
		</div>
	);
};

export default CaseStudyCarousel;
