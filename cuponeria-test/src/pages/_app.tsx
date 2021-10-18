import React from "react";
import App from "next/app";
import { Reset } from "styled-reset";

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<React.Fragment>
				<Reset />
				<Component {...pageProps} />
			</React.Fragment>
		);
	}
}
