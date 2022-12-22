import React from "react";
import datas from "../../data/slideData";
import ProjectsDisplay from "../ProjectsDisplay/ProjectsDisplay";
import styled from "styled-components";

const Wrapper = styled.div`
	margin-right: -5vw;
	margin-left: -5vw;
`;

const ProjectsCarousel = () => {
	return (
		//This Wrapper tag is the gallery for me
		<Wrapper>
			<div className="display-wrap">
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
