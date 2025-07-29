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
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
  }

  checkAnswer(answer) {
    let currentQuestion = this.questions[this.currentQuestionIndex];
    let correctAnswerOfCurrentQuestion = currentQuestion.answer;

    if (correctAnswerOfCurrentQuestion === answer) {
      this.correctAnswers++;
    }
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else {
      // this.currentQuestionIndex >= this.questions.length
      return true;
    }
    // return (this.currentQuestionIndex >= this.questions.length);
  }

  filterQuestionsByDifficulty(difficulty) {
    if (difficulty <=3 && difficulty >=1) {
      const diffQuestions = this.questions.filter((question) => {
        //console.log(difficulty, question.difficulty, question.difficulty === difficulty);
        return question.difficulty === difficulty;
      });
      //console.log (diffQuestions)
      this.questions = diffQuestions;
    }
  }
}

/*In the src/Quiz.js file, implement the filterQuestionsByDifficulty() method.

You should use the filter() method to filter the questions array by the difficulty level.

filterQuestionsByDifficulty(difficulty) method:
Filters the questions array by the difficulty level passed as an argument.
should be defined.
should be a function.
should receive 1 argument (difficulty - a number between 1 and 3).
should update the questions array property to contain only the questions with the specified difficulty.
should not change the questions array if the difficulty argument is not a number between 1 and 3.*/
