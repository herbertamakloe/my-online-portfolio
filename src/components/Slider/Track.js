import styled from "styled-components";

const StyledTrack = styled.div`
	transition: transform 300ms cubic-bezier(0.42, 0, 0.58, 1) 0s;
	transform: translate3d(${(p) => p.slideWidth * -p.slideIndex}vw, 0, 0);
`;

const Track = (props) => {
	return <StyledTrack {...props}>{props.children}</StyledTrack>;
};

export default Track;
