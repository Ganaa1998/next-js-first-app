import Head from "next/head";
import styles from "../styles/Home.module.css";
import questions from "../data/question.json";
import Router from "next/router";

export default function Home() {
	const HandleClick = (e) => {
		Router.reload(window.location.pathname);
	};

	const AddToCart = () => (
		<div>
			<button onClick={HandleClick} className={styles.card}>
				<p>Өөр</p>
			</button>
		</div>
	);

	const ChangedQuestion = () => {
		const random = Math.floor(Math.random() * questions.questions.length);
		const retQuestionTitle = questions.questions[random].title;
		const retQuestionContent = questions.questions[random].content;
		console.log(retQuestionTitle, retQuestionContent);
		return (
			<div>
				<h2 className={styles.text__center}>{retQuestionTitle}</h2>
				<p className={styles.text__center}>{retQuestionContent}</p>
			</div>
		);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Эзэний үг</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.grid}>
					<div>
						<ChangedQuestion></ChangedQuestion>
					</div>
				</div>
				<AddToCart></AddToCart>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
}
