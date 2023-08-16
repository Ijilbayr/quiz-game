import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Цэнхэр шар өнгөний дундаас ямар өнгө гардаг вэ?',
			answerOptions: [
				{ answerText: ' ягаан ', isCorrect: false },
				{ answerText: 'бор', isCorrect: false },
				{ answerText: 'ногоон', isCorrect: true },
				{ answerText: 'шар', isCorrect: false },
			],
		},
		{
			questionText: 'МУ-ын үндсэн хууль хэдэн бүлэгтэй вэ?',
			answerOptions: [
				{ answerText: '23', isCorrect: false },
				{ answerText: '6', isCorrect: true },
				{ answerText: '5', isCorrect: false },
				{ answerText: '16', isCorrect: false },
			],
		},
		{
			questionText: 'Дэлхийн хэдэн хувийг ус эзэлдэг вэ?',
			answerOptions: [
				{ answerText: '71', isCorrect: true },
				{ answerText: '72', isCorrect: false },
				{ answerText: '73', isCorrect: false },
				{ answerText: '80', isCorrect: false },
			],
		},
		{
			questionText: 'Агаарын хэдэн хувийг О2 эзэлдэг вэ?',
			answerOptions: [
				{ answerText: '20%', isCorrect: false },
				{ answerText: '18.56%', isCorrect: false },
				{ answerText: '25.14%', isCorrect: false },
				{ answerText: '20.95%', isCorrect: true },
			],
		},
		{
			questionText: 'Hьютон нэгжийг хэн зохиосон бэ?',
			answerOptions: [
				{ answerText: 'Да Винчи', isCorrect: true },
				{ answerText: 'Алберт Эйнштэйн', isCorrect: false },
				{ answerText: 'Элон Маск', isCorrect: false },
				{ answerText: 'Жефф Безос', isCorrect: false },
			],
		},
		{
			questionText: 'Сагсанбөмбөг анх хэдэн онд зохиогдсон бэ?',
			answerOptions: [
				{ answerText: '1890', isCorrect: false },
				{ answerText: '1888', isCorrect: false },
				{ answerText: '1900', isCorrect: false },
				{ answerText: '1891', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Та {questions.length} асуултаас {score} оноо авсан байна.
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Асуулт {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
