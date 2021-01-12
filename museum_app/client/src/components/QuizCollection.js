import {useEffect, useState} from 'react';

const QuizCollection = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
        {
            questionText: 'Who dah man?',
            answerOptions: [
                { answerText: 'You dah man', isCorrect: false },
                { answerText: 'I dah man', isCorrect: false },
                { answerText: 'Bob', isCorrect: false },
                { answerText: 'What man?', isCorrect: true },
            ],
        },
        {
            questionText: 'Love is in the (what)',
            answerOptions: [
                { answerText: 'Breakfast', isCorrect: false },
                { answerText: 'word "clove"', isCorrect: false },
                { answerText: 'Imagination', isCorrect: false },
                { answerText: 'Air', isCorrect: true },
            ],
        },
    ];

    const handleAnswerButtonClick = (answerOption) => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            alert('you reached the end of the quiz')
        }
    }

    return (
        <div className='app'>
            {/* HINT: replace "false" with logic to display the 
    score when the user has answered all the questions */}
            {false ? (
                <div className='score-section'>You scored 1 out of {questions.length}</div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question 1</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button onClick={() => handleAnswerButtonClick()}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
    }


export default QuizCollection;