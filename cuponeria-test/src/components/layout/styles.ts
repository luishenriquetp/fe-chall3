import styled from "styled-components";

const Container = styled.div`
	max-width: 1024px;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	display: flex;
	min-height: 100vh;
	flex-direction: column;
`;

const Header = styled.header`
	#brand {
		height: 109px;
		background: transparent
			linear-gradient(95deg, var(---ff0000) 0%, var(---f91e96) 100%) 0% 0%
			no-repeat padding-box;
		background: transparent linear-gradient(95deg, #ff0000 0%, #f91e96 100%) 0%
			0% no-repeat padding-box;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	nav {
		background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
		background: #ffffff 0% 0% no-repeat padding-box;
		box-shadow: 0px 3px 6px #00000029;
		ul {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 60px;
		}
	}
`;

const Main = styled.main`
	flex: 1;
	width: 100%;
`;

const Footer = styled.footer`
	height: 49px;
	background: transparent
		linear-gradient(95deg, var(---ff0000) 0%, var(---f91e96) 100%) 0% 0%
		no-repeat padding-box;
	background: transparent linear-gradient(95deg, #ff0000 0%, #f91e96 100%) 0% 0%
		no-repeat padding-box;
`;

export { Header, Footer, Main, Container, Wrapper };
