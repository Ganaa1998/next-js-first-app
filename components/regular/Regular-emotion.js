import questions from "../../data/emotion/reuglar/regular.json";
import styles from "../../styles/Home.module.css";

export default function Hello() {
	const random = Math.floor(Math.random() * questions.questions.length);
	const retQuestionTitle = questions.questions[random].title;
	const retQuestionContent = questions.questions[random].content;
	return (
		<div>
			<h2 className={styles.text__center}>{retQuestionTitle}</h2>
			<p className={styles.text__center}>{retQuestionContent}</p>
		</div>
	);
}
