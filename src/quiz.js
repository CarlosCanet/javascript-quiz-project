class Quiz {
    
    constructor (questions, timeLimit, timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    // 2. getQuestion()
    
    // 3. moveToNextQuestion()

    // 4. shuffleQuestions()

    // 5. checkAnswer(answer)

    // 6. hasEnded()
}

/*class Quiz

should receive 3 arguments in the constructor (questions, timeLimit, timeRemaining)
should have 5 properties: questions, timeLimit, timeRemaining, correctAnswers, currentQuestionIndex
should receive questions (array) as its 1st argument and assign it to questions property. The array is meant to contain Question objects
should receive timeLimit (number) as its 2nd argument and assign it to timeLimit property.
should receive timeRemaining (number) as its 3rd argument and assign it to timeRemaining property.
should have a correctAnswers property initially set to 0.
should have a currentQuestionIndex property initially set to 0.*/

