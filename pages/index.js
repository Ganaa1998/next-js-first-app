import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Button from "../components/button";

export default function Home() {
	const handleClick = (e) => {
		console.log(ChangedQuestion().props.children[0].props.children);
		// console.log(e);
	};
	const AddToCart = () => (
		<div>
			<button onClick={handleClick} className={styles.card}>
				<p>Refresh</p>
			</button>
		</div>
	);
	const ChangedQuestion = () => (
		<div>
			<h3 className={styles.text__center}>Job 30:32</h3>
			<p>Lord teach me what i cannot see</p>
		</div>
	);

	return (
		<div className={styles.container}>
			<Head>
				<title>Question</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<AddToCart></AddToCart>

				<div className={styles.grid}>
					<div>
						<ChangedQuestion></ChangedQuestion>
					</div>
				</div>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
}
