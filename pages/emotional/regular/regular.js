import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import HappyEmotion from "../../../components/happy/Happy-emotion";
import React, { Component } from "react";
import Link from "next/link";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: HappyEmotion(),
		};
	}

	updateContent = () => {
		this.setState({ message: HappyEmotion() });
	};

	render() {
		return (
			<div>
				<div className={styles.container}>
					<Head>
						<title>Эзэний үг</title>
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<Link href="../../">
						<button class="px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none">
							Буцах
						</button>
					</Link>
					<main className={styles.main}>
						<div className={styles.grid}>{this.state.message}</div>
					</main>
					<footer className={styles.footer}>
						<div>
							<button
								class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none"
								onClick={this.updateContent}
							>
								Өөр
							</button>
							{/* <button className={styles.card}>
								<Link href="/quiz" className={styles.card}>
									Асуулт хариулт
								</Link>
							</button> */}
						</div>
					</footer>
				</div>
			</div>
		);
	}
}
export default App;
