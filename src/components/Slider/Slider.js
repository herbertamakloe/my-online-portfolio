import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import datas from "../../data/slideData";
import styled from "styled-components";
import Track from "./Track";
import Controls from "./Controls";
import Dots from "./Dots";

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	overflow: hidden;
	ul {
		display: flex;
		position: relative;
		margin: 0px;
		padding: 0px;
		list-style: none;
		transform: translate3d(
			${(p) => (100 - p.slideWidth - p.scrollBarPercent) / 2}vw,
			0,
			0
		);
	}
	li {
		min-width: ${(p) => p.slideWidth}vw;
		max-width: ${(p) => p.slideWidth}vw;
		padding: 0 15px 15px;
	}
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const [scrollBarPercent, setScrollBarPercent] = useState(0);

	useEffect(() => {
		function setScroll() {
			const scrollWidth = window.innerWidth - document.body.clientWidth;
			const scrollWPercent = (100 * scrollWidth) / window.innerWidth;

			setScrollBarPercent(scrollWPercent);
		}
		setScroll();
	}, []);

	const onPrev = () => {
		if (slideIndex > 0) {
			setSlideIndex((prevIndex) => prevIndex - 1);
		} else {
			setSlideIndex(datas.length - 1);
		}
	};

	const onNext = () => {
		if (slideIndex < datas.length - 1) {
			setSlideIndex((prevIndex) => prevIndex + 1);
		} else {
			setSlideIndex(0);
		}
	};

	return (
		<Wrapper scrollBarPercent={scrollBarPercent} slideWidth={55}>
			<div className="slider">
				<Track {...{ slideIndex }} slideWidth={55}>
					<ul>
						{datas.map((data, index) => (
							<li key={index}>
								<Card
									background={data.url}
									link={data.link}
									title={data.title}
								/>
							</li>
						))}
					</ul>
				</Track>
				<Controls
					slideWidth={55}
					scrollBarPercent={scrollBarPercent}
					prev={onPrev}
					next={onNext}
				/>
			</div>
			<Dots slides={datas} index={slideIndex} setIndex={setSlideIndex} />
		</Wrapper>
	);
};

export default Slider;
