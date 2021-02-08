import Head from "next/head";
import styles from "../styles/Home.module.css";
import Quiz from "../components/Quiz";
import React, { Component } from "react";
import Link from "next/link";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: Quiz(),
		};
	}

	updateContent = () => {
		this.setState({ message: Quiz() });
	};

	render() {
		return (
			<div>
				<div className={styles.container}>
					<Head>
						<title>Эзэний үг</title>
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<main className={styles.main}>
						<div className={styles.grid}>{this.state.message}</div>
					</main>
					<footer className={styles.footer}></footer>
				</div>
			</div>
		);
	}
}
export default App;
