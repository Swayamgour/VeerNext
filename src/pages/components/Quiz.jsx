import React, { useEffect, useState } from 'react'
import styles from '../../css/Quiz.module.css'
import { FaArrowRightLong } from 'react-icons/fa6';
// import AllPageHeader from './AllPageHeader';

function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [quizStarted, setQuizStarted] = useState(true);
    const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
    const [userAnswers, setUserAnswers] = useState({});

    const quizQuestions = [
        {
            id: 1,
            question: "What is the capital city of France?",
            options: [
                { id: 'A', text: "London", correct: false },
                { id: 'B', text: "Berlin", correct: false },
                { id: 'C', text: "Paris", correct: true },
                { id: 'D', text: "Madrid", correct: false }
            ],
            explanation: "Paris is the capital and most populous city of France.",
            category: "Geography",
            difficulty: "Easy",
            marks: 1
        },
        {
            id: 2,
            question: "Which planet is known as the Red Planet?",
            options: [
                { id: 'A', text: "Venus", correct: false },
                { id: 'B', text: "Mars", correct: true },
                { id: 'C', text: "Jupiter", correct: false },
                { id: 'D', text: "Saturn", correct: false }
            ],
            explanation: "Mars is often called the Red Planet due to its reddish appearance.",
            category: "Astronomy",
            difficulty: "Easy",
            marks: 1
        },
        {
            id: 3,
            question: "What is the chemical symbol for gold?",
            options: [
                { id: 'A', text: "Go", correct: false },
                { id: 'B', text: "Gd", correct: false },
                { id: 'C', text: "Au", correct: true },
                { id: 'D', text: "Ag", correct: false }
            ],
            explanation: "Au comes from the Latin word 'aurum' meaning gold.",
            category: "Chemistry",
            difficulty: "Medium",
            marks: 2
        },
        {
            id: 4,
            question: "Who wrote 'Romeo and Juliet'?",
            options: [
                { id: 'A', text: "Charles Dickens", correct: false },
                { id: 'B', text: "William Shakespeare", correct: true },
                { id: 'C', text: "Jane Austen", correct: false },
                { id: 'D', text: "Mark Twain", correct: false }
            ],
            explanation: "William Shakespeare wrote this famous tragedy in the late 16th century.",
            category: "Literature",
            difficulty: "Easy",
            marks: 1
        },
        {
            id: 5,
            question: "What is the largest ocean on Earth?",
            options: [
                { id: 'A', text: "Atlantic Ocean", correct: false },
                { id: 'B', text: "Indian Ocean", correct: false },
                { id: 'C', text: "Arctic Ocean", correct: false },
                { id: 'D', text: "Pacific Ocean", correct: true }
            ],
            explanation: "The Pacific Ocean covers about 30% of Earth's surface area.",
            category: "Geography",
            difficulty: "Easy",
            marks: 1
        },
        {
            id: 6,
            question: "What is the value of π (pi) to two decimal places?",
            options: [
                { id: 'A', text: "3.14", correct: true },
                { id: 'B', text: "3.16", correct: false },
                { id: 'C', text: "3.18", correct: false },
                { id: 'D', text: "3.20", correct: false }
            ],
            explanation: "π is approximately 3.14159, so 3.14 when rounded to two decimal places.",
            category: "Mathematics",
            difficulty: "Easy",
            marks: 1
        },
        {
            id: 7,
            question: "Which organ pumps blood throughout the body?",
            options: [
                { id: 'A', text: "Lungs", correct: false },
                { id: 'B', text: "Liver", correct: false },
                { id: 'C', text: "Heart", correct: true },
                { id: 'D', text: "Kidney", correct: false }
            ],
            explanation: "The heart is a muscular organ that pumps blood through the circulatory system.",
            category: "Biology",
            difficulty: "Easy",
            marks: 1
        },
        {
            id: 8,
            question: "What year did World War II end?",
            options: [
                { id: 'A', text: "1943", correct: false },
                { id: 'B', text: "1944", correct: false },
                { id: 'C', text: "1945", correct: true },
                { id: 'D', text: "1946", correct: false }
            ],
            explanation: "World War II ended in 1945 with the surrender of Germany and Japan.",
            category: "History",
            difficulty: "Medium",
            marks: 2
        },
        {
            id: 9,
            question: "What is the speed of light in vacuum?",
            options: [
                { id: 'A', text: "300,000 km/s", correct: true },
                { id: 'B', text: "150,000 km/s", correct: false },
                { id: 'C', text: "450,000 km/s", correct: false },
                { id: 'D', text: "600,000 km/s", correct: false }
            ],
            explanation: "The speed of light in vacuum is exactly 299,792,458 m/s, approximately 300,000 km/s.",
            category: "Physics",
            difficulty: "Hard",
            marks: 3
        },
        {
            id: 10,
            question: "Who painted the Mona Lisa?",
            options: [
                { id: 'A', text: "Vincent van Gogh", correct: false },
                { id: 'B', text: "Leonardo da Vinci", correct: true },
                { id: 'C', text: "Pablo Picasso", correct: false },
                { id: 'D', text: "Michelangelo", correct: false }
            ],
            explanation: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1506.",
            category: "Art",
            difficulty: "Easy",
            marks: 1
        }
    ];



    useEffect(() => {
        if (quizStarted && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [quizStarted, timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleOptionSelect = (optionId) => {
        setSelectedOption(optionId);
        setUserAnswers({
            ...userAnswers,
            [currentQuestion]: optionId
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(userAnswers[currentQuestion + 1] || null);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedOption(userAnswers[currentQuestion - 1] || null);
        }
    };

    const handleStartQuiz = () => {
        setQuizStarted(true);
        setTimeLeft(1800); // Reset timer
        setCurrentQuestion(0);
        setSelectedOption(null);
        setUserAnswers({});
    };

    const handleSubmitQuiz = () => {
        // Calculate score
        let score = 0;
        quizQuestions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            if (userAnswer) {
                const selectedOption = question.options.find(opt => opt.id === userAnswer);
                if (selectedOption?.correct) {
                    score += question.marks;
                }
            }
        });

        alert(`Quiz submitted! Your score: ${score}/${quizQuestions.reduce((acc, q) => acc + q.marks, 0)}`);



        setQuizStarted(false);
    };


    const totalTime = 900; // seconds (15 min)
    // const [timeLeft, setTimeLeft] = useState(totalTime);

    const currentQuestionData = quizQuestions[currentQuestion];

    const getTimerColor = (timeLeft, totalTime) => {
        const percent = (timeLeft / totalTime) * 100;

        if (percent > 60) return "#4CAF50"; // green
        if (percent > 30) return "#FFC107"; // yellow
        return "#F44336";                   // red
    };


    if (!quizStarted) {
        return (
            <>
                {/* <AllPageHeader props='Quiz' /> */}
                <section className={styles.quizSection}>
                    <div className={styles.quizStartScreen}>
                        <div className={styles.quizInfoCard}>
                            <h2 className={styles.quizMainTitle}>General Knowledge Quiz</h2>
                            <div className={styles.quizDetails}>
                                <div className={styles.detailItem}>
                                    <span className={styles.detailLabel}>Total Questions:</span>
                                    <span className={styles.detailValue}>{quizQuestions.length}</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.detailLabel}>Total Marks:</span>
                                    <span className={styles.detailValue}>
                                        {quizQuestions.reduce((acc, q) => acc + q.marks, 0)}
                                    </span>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.detailLabel}>Time Limit:</span>
                                    <span className={styles.detailValue}>30 minutes</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.detailLabel}>Difficulty:</span>
                                    <span className={styles.detailValue}>Mixed</span>
                                </div>
                            </div>

                            <div className={styles.quizInstructions}>
                                <h3>Instructions:</h3>
                                <ul>
                                    <li>Each question has 4 options, select the correct one</li>
                                    <li>You can navigate between questions using Next/Previous buttons</li>
                                    <li>Time limit is 30 minutes for the entire quiz</li>
                                    <li>Questions have different marks based on difficulty</li>
                                    <li>You can review and change your answers before submitting</li>
                                </ul>
                            </div>

                            <button onClick={handleStartQuiz} className={styles.startQuizBtn}>
                                Start Quiz <FaArrowRightLong />
                            </button>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            {/* <AllPageHeader props='Quiz' /> */}
            <section className={styles.quizSection}>
                {/* Quiz Header */}
                <div className={styles.quizHeader}>
                    <div className={styles.quizTitleSection}>
                        <h2 className={styles.quizMainTitle}>General Knowledge Quiz</h2>
                        <div className={styles.questionProgress}>
                            Question {currentQuestion + 1} of {quizQuestions.length}
                        </div>
                    </div>

                    <div className={styles.quizTimer}>
                        <div className={styles.timerWrapper}>
                            <svg className={styles.timerSvg} width="120" height="120">
                                {/* Background circle */}
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="52"
                                    className={styles.timerBg}
                                />

                                {/* Progress circle */}
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="52"
                                    className={styles.timerProgress}
                                    // style={{
                                    //     strokeDashoffset: `${314 - (timeLeft / totalTime) * 314}`,
                                    //     stroke: getTimerColor(timeLeft, totalTime)
                                    // }}

                                    style={{
                                        strokeDashoffset: `${(timeLeft / totalTime) * 314}`,
                                        stroke: getTimerColor(timeLeft, totalTime)
                                    }}

                                />
                            </svg>

                            <div className={styles.timerCenter}>
                                <span className={styles.timerText}>{formatTime(timeLeft)}</span>
                                <span className={styles.timerLabel}>Remaining</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Quiz Content */}
                <div className={styles.quizContent}>
                    {/* Question Info */}
                    <div className={styles.questionHeader}>
                        <div className={styles.questionMeta}>
                            <span className={`${styles.difficultyBadge} ${styles[currentQuestionData.difficulty.toLowerCase()]}`}>
                                {currentQuestionData.difficulty}
                            </span>
                            <span className={styles.questionMarks}>{currentQuestionData.marks} mark{currentQuestionData.marks > 1 ? 's' : ''}</span>
                            <span className={styles.questionCategory}>{currentQuestionData.category}</span>
                        </div>

                        <div className={styles.questionNumber}>
                            Question #{currentQuestion + 1}
                        </div>
                    </div>

                    {/* Question Text with Navigation */}
                    <div className={styles.questionTextCon}>
                        <div className={styles.questionText}>
                            <h3>{currentQuestionData.question}</h3>
                        </div>

                        <div className={styles.navButtons}>
                            <button
                                onClick={handlePrevQuestion}
                                disabled={currentQuestion === 0}
                                className={`${styles.navBtn} ${styles.prevBtn} ${currentQuestion === 0 ? styles.disabled : ''}`}
                            >
                                <span className={styles.navBtnText}>← Previous</span>
                            </button>

                            <button
                                onClick={handleNextQuestion}
                                disabled={currentQuestion === quizQuestions.length - 1}
                                className={`${styles.navBtn} ${styles.nextBtn} ${currentQuestion === quizQuestions.length - 1 ? styles.disabled : ''}`}
                            >
                                <span className={styles.navBtnText}>Next →</span>
                            </button>
                        </div>
                    </div>

                    {/* Options */}
                    <div className={styles.optionsContainer}>
                        <div className={styles.optionsGrid}>
                            {currentQuestionData.options.map((option) => (
                                <div
                                    key={option.id}
                                    className={`${styles.optionCard} ${selectedOption === option.id ? styles.selectedOption : ''}`}
                                    onClick={() => handleOptionSelect(option.id)}
                                >
                                    <div className={styles.optionRadio}>
                                        <div className={`${styles.radioCircle} ${selectedOption === option.id ? styles.radioCircleSelected : ''}`}>
                                            {option.id}
                                        </div>
                                    </div>
                                    <div className={styles.optionText}>
                                        {option.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Question Navigation */}
                    <div className={styles.questionNavigation}>
                        <div className={styles.questionPaletteContainer}>
                            <div className={styles.questionPalette}>
                                {quizQuestions.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.questionDot} ${index === currentQuestion ? styles.currentQuestion :
                                            userAnswers[index] ? styles.answeredQuestion : ''
                                            }`}
                                        onClick={() => {
                                            setCurrentQuestion(index);
                                            setSelectedOption(userAnswers[index] || null);
                                        }}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.progressInfo}>
                            <div className={styles.progressText}>
                                {currentQuestion + 1} of {quizQuestions.length} questions
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quiz Footer */}
                <div className={styles.quizFooter}>
                    <div className={styles.quizActions}>
                        <button
                            onClick={() => {
                                if (window.confirm('Are you sure you want to quit? Your progress will be lost.')) {
                                    setQuizStarted(false);
                                }
                            }}
                            className={styles.quitBtn}
                        >
                            <span className={styles.btnText}>Quit Quiz</span>
                        </button>

                        <button
                            onClick={handleSubmitQuiz}
                            className={styles.submitBtn}
                        >
                            <span className={styles.btnText}>Submit Quiz</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Quiz


//   case 'Quiz':





