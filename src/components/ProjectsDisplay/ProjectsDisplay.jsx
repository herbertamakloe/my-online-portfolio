import React, { useEffect, useRef } from "react";
import "./projectsDisplayStyles.css";
// import GitHub from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import useOnScreen from "../hooks/useOnScreen";
import cn from "classnames";

const ProjectsDisplay = (props) => {
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
					<div className="case-study-number">{props.number}</div>
					<div className="case-study-description">{props.description}</div>
				</div>

				<div className="case-study-preview">
					<div className="case-study-img">
						<img src={`${props.background}`} alt="" />
					</div>
					<div className="case-study-buttons">
						<a href={props.github} className="view-btn">
							<span className="view-on-hover">View Project</span>
							<RemoveRedEyeIcon />
						</a>
						<a href={props.link} className="github-btn">
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

export default ProjectsDisplay;
