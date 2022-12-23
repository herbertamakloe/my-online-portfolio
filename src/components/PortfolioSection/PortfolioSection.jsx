import React, { useState } from "react";
import galleryData from "../../data/slideData";
// import ProjectsDisplay from "../ProjectsDisplay/ProjectsDisplay";
import "./portfolioSection.css"

const PorfolioItem = ({
	link,
	url,
	title,
	github,
	description,
	updateActiveProject,
	index,
}) => {
	//This code right here is just like creating another component folder and calling it. But the tutor decided to do it within the this component
	return (
		<div className="gallery-item-wrapper">
    <div></div>
			<div className="gallery-item">
				<div className="gallery-item-info">
					<h1 className="gallery-info-title">{title}</h1>
					<h1 className="gallery-info-subtitle">{description}</h1>
				</div>
				<div
					className="gallery-item-image"
					style={{ backgroundImage: `url(${url})` }}
				></div>
			</div>
      <div></div>
		</div>
	);
};

const PortfolioSection = () => {
	const [activeProject, setActiveProject] = useState(1);

	return (
		<section className="section-wrapper gallery-wrap">
			<div className="gallery">
				<div className="gallery-counter">
          <span>{activeProject}</span>
          <span className="divider"></span>
          <span>{galleryData.length}</span>
        </div>

				{galleryData.map((data, index) => (
					<PorfolioItem 
						key={data.url}
						index={index}
						{...data} //This the same as writing all the props you want to display
						updateActiveProject={(index) => setActiveProject(index + 1)}
					/>
				))}
			</div>
		</section>
	);
};

export default PortfolioSection;
