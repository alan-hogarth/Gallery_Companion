import {useState} from 'react';

const QuizCollection = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [showCorrectAnswers, setShowCorrectAnswers] = useState([]);

    const questions = [
        {
            questionText: '"The Seven Works of Mercy, 1504" is a artwork by which artist?', 
            answerOptions: [
                { answerText: 'Master of Almaar', isCorrect: true },
                { answerText: 'Cornelis Troost', isCorrect: false },
                { answerText: 'Leonardo Da Vinci', isCorrect: false },
                { answerText: 'Pablo Picasso', isCorrect: false },
            ],
        },
        {
            questionText: "In which century was Gabriel Metsu's 'The Sick Child' painted?",
            answerOptions: [
                { answerText: '18th Century', isCorrect: false },
                { answerText: '16th Century', isCorrect: false },
                { answerText: '15th Century', isCorrect: false },
                { answerText: '17th Century', isCorrect: true },
            ],
        },
        {
            questionText: 'Adriaen Thomasz painted a portrait of this man in 1579. He emerged as the leader of the inurrection against Spain. Who was this man?',
            answerOptions: [
                { answerText: 'Miguel de Cervantes', isCorrect: false },
                { answerText: 'Gustavus Adolphus', isCorrect: false },
                { answerText: 'Bob Spatchula', isCorrect: false },
                { answerText: 'William of Orange', isCorrect: true },
            ],
        },
        {
            questionText: 'Jozef Israels painted "Children of the Sea" in which decade of the 1800s?',
            answerOptions: [
                { answerText: '1850s', isCorrect: false },
                { answerText: '1890s', isCorrect: false },
                { answerText: '1840s', isCorrect: false },
                { answerText: '1870s', isCorrect: true },
            ],
        },
        {
            questionText: "Johannes Vermeer painted a women in the morning, having a quiet moment reading something. What is she reading?",
            answerOptions: [
                { answerText: 'A book', isCorrect: false },
                { answerText: 'Holy Scripture', isCorrect: false },
                { answerText: 'A Letter', isCorrect: true },
                { answerText: 'A recipe', isCorrect: false },
            ],
        },
    ];


    const handleAnswerButtonClick = (isCorrect, answerText) => {
         
        
        if (isCorrect) {
            setScore(score + 1);
            const updatedArray = [...showCorrectAnswers, answerText];
            setShowCorrectAnswers(updatedArray);
        } 
        

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        } 
    }
        



    
    
    
    

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    <p>You scored {score} out of {questions.length}.</p>
                <ul>{showCorrectAnswers.map(answer => <li>{answer} ✅</li>)}</ul>
                    <p>Click on 'Gallery' to return to home page.</p>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect, answerOption.answerText)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
    }


export default QuizCollection;