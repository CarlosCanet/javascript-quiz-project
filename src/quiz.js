class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
  }

  checkAnswer(answer) {
    let currentQuestion = this.questions[this.currentQuestionIndex];
    let correctAnswerOfCurrentQuestion = currentQuestion.answer;
    
    if (correctAnswerOfCurrentQuestion === answer) {
      this.correctAnswers++;
    }
  }


  // Checks if the passed answer is correct for the current question and increments correctAnswers by 1 if the answer is correct.
  // should receive 1 argument (answer - string).
// should increase correctAnswers by 1 when called with a correct answer for the current question

  // 6. hasEnded()
}
