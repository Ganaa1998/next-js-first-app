import quiz from "../data/quiz.json";
import styles from "../styles/Home.module.css";

export default function Quiz() {
	const random = Math.floor(Math.random() * quiz.quiz.length);
	const question = quiz.quiz[random].question;
	const correctAnswer = quiz.quiz[random].answer[0].result.Correct_Answer;
	const variantA = quiz.quiz[random].answer[0].choiceA;
	const variantB = quiz.quiz[random].answer[0].choiceB;
	const variantC = quiz.quiz[random].answer[0].choiceC;
	const variantD = quiz.quiz[random].answer[0].choiceD;
	let count = 0;

	function CorrectAnswer(e) {
		if (e.target.innerText === correctAnswer) {
			count++;
		} else {
			console.log("Uncorrect");
		}
	}

	return (
		<div>
			<div>
				<p>{count}</p>
			</div>
			<h4 className={styles.text__center}>{question}</h4>
			<button
				onClick={CorrectAnswer}
				className={(styles.text__center, styles.card)}
			>
				{variantA}
			</button>
			<button
				onClick={CorrectAnswer}
				className={(styles.text__center, styles.card)}
			>
				{variantB}
			</button>
			<button
				onClick={CorrectAnswer}
				className={(styles.text__center, styles.card)}
			>
				{variantC}
			</button>
			<button
				onClick={CorrectAnswer}
				className={(styles.text__center, styles.card)}
			>
				{variantD}
			</button>
		</div>
	);
}
