import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hello from "../components/Hello";
import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: Hello(),
		};
	}

	updateContent = () => {
		this.setState({ message: Hello() });
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
						<div>
							<button className={styles.card} onClick={this.updateContent}>
								Өөр
							</button>
						</div>
					</main>
					<footer className={styles.footer}></footer>
				</div>
			</div>
		);
	}
}
export default App;
