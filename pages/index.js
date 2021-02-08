import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { Component } from "react";
import Link from "next/link";

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className={styles.container}>
					<Head>
						<title>Эзэний үг</title>
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<main className={styles.main}>
						<p class="m-6 text-center md:text-center ...">
							Та өнөөдөр ямар сэтгэл хөдлөлтэй байна вэ?
						</p>
						<Link href="./emotional/happy/happy">
							<button
								class="m-2 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
								onClick={this.updateContent}
							>
								Баяртай
							</button>
						</Link>
						<Link href="./emotional/angry/angry">
							<button
								class="m-2 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
								onClick={this.updateContent}
							>
								Ууртай
							</button>
						</Link>
						<Link href="./emotional/regular/regular">
							<button
								class="m-2 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none"
								onClick={this.updateContent}
							>
								Энгийн
							</button>
						</Link>
					</main>
					<footer className={styles.footer}></footer>
				</div>
			</div>
		);
	}
}
export default App;
