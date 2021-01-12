const QuizCollection = () => {

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
    ];

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
                        <div className='question-text'>{questions[0].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        <button>Answer 1</button>
                        <button>Answer 2</button>
                        <button>Answer 3</button>
                        <button>Answer 4</button>
                    </div>
                </>
            )}
        </div>
    );
    }


export default QuizCollection;