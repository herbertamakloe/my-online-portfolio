import React, { useEffect, useRef, useState } from "react";
import datas from "../../data/slideData";
import ProjectsDisplay from "../ProjectsDisplay/ProjectsDisplay";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { refType } from "@mui/utils";

const Wrapper = styled.div`
	margin-right: -5vw;
	margin-left: -5vw;
`;

const ProjectsCarousel = () => {
	const [activeImage, setActiveImage] = useState(1);

	const ref = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			const sections = gsap.utils.toArray(".case-study-wrapper");
			gsap.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: "none",
				scrollTrigger: {
					start: "top top",
					trigger: refType.current,
					scroll: "#home-conatainer",
					pin: true,
					scrub: 0.5,
					span: 1 / (sections.length - 1),
					end: () => `+=${ref.current.offsetWidth}`,
				},
			});

			// ScrollTrigger.refresh();
		});
	}, []);
	return (
		//This Wrapper tag is the gallery for me
		<Wrapper>
			<div className="display-wrap" ref={ref}>
				{datas.map((data, index) => (
					<ProjectsDisplay
						key={index}
						number={index < 9 ? `0${index + 1}` : `${index + 1}`}
						description={data.description}
						background={data.url}
						link={data.link}
						github={data.github}
					/>
				))}
			</div>
		</Wrapper>
	);
};

export default ProjectsCarousel;
