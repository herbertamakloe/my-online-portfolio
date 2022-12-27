import React, { useEffect, useRef, useState } from "react";
import datas from "../../data/slideData";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../hooks/useOnScreen";

import GitHubIcon from "@mui/icons-material/GitHub";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import cn from "classnames";


function NewGalleryItem({
	number,
	description,
	background,
	link,
	github,
	updateActiveImage,
	index,
}) {
	const ref = useRef(null);

	const onScreen = useOnScreen(ref, 0.5);

	useEffect(() => {
		if (onScreen) {
			updateActiveImage(index);
		}
	}, [onScreen, index]);

	return (
		<div
			className={cn("case-study-wrapper", { "is-reveal": onScreen })}
			ref={ref}
		>
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
}

export default function NewGallery({ src, index, columnOffset }) {
	const [activeImage, setActiveImage] = useState(1);

	const ref = useRef(null);

	useEffect(() => {
		// This does not seem to work without a settimeout
		setTimeout(() => {
			console.log(ref.current.offsetWidth);
			console.log(ref.current.clientWidth);
			console.log({ current: ref.current });
			let sections = gsap.utils.toArray(".case-study-wrapper");

			gsap.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: "none",
				scrollTrigger: {
					start: "top top",
					trigger: ref.current,
					scroller: "#home-conatainer",
					pin: true,
					scrub: 0.5,
					snap: 1 / (sections.length - 1),
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
		<section data-scroll-section className="section-wrapper gallery-wrap">
			<div className="display-wrap" ref={ref}>
				{datas.map((data, index) => (
					<NewGalleryItem
						key={index}
						number={index < 9 ? `0${index + 1}` : `${index + 1}`}
						description={data.description}
						background={data.url}
						link={data.link}
						github={data.github}
						updateActiveImage={handleUpdateActiveImage}
					/>
				))}
			</div>
		</section>
	);
}
