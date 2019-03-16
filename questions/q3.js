
//    options: [{ option: 'A', value: 'New Delhi' }],
//Q2
const questions = [
    {
        question: ' Capital of India is ?',
        options: [['A', 'New Delhi'], ['B', 'Bangalore'], ['C', 'Hyderabad']],
        correctAnswer: 'A',
        positive: 1,
        negative: 0.5
    },
    {
        question: ' ( a + b )2 = ?',
        options: [['A', 'New Delhi'], ['B', 'Bangalore'], ['C', 'Hyderabad'], ['D', 'Bhubaneswar']],
        correctAnswer: 'D',
        positive: 1,
        negative: 0.5
    },
    {
        question: '2 * 3 = ?',
        options: [['A', 'New Delhi'], ['B', 'Bangalore'], ['C', 'Hyderabad'], ['D', 'Bhubaneswar']],
        correctAnswer: 'B',
        positive: 1,
        negative: 0.5
    },
    {
        question: ' 5 * 5 = ?',
        options: [['A', 'New Delhi'], ['B', 'Bangalore'], ['C', 'Hyderabad'], ['D', 'Bhubaneswar']],
        correctAnswer: 'A',
        positive: 1,
        negative: 0.5
    },
]

class QuestionSet {
    constructor(data) {
        this.data = data;
        this.currentIndex = 0;
        this.isActive = true;
        this.totalmark = getTotalMark();
        this.markSecured = 0;
    }
    getTotalMark() {
        let mark = 0
        this.data.reduce((acc, item) => {
            mark = acc + item.positive
        }, 0)
        return mark
    }
    next() {
        let newIndex = this.currentIndex + 1;
        if (newIndex < this.data.length) {
            this.currentIndex++;
        } else {
            this.print('you are in the last question ')
        }
    }
    prev() {
        let newIndex = this.currentIndex - 1;
        if (newIndex > 0) {
            this.currentIndex--;
        } else {
            this.print('you are in the first question')
        }
    }
    submit() {
        this.print(` you have secured ${this.markSecured} marks out of ${this.totalmark}`)
    }
    quit() {
        this.currentIndex = 0;
        this.isActive = false
        return;
    }

}

(function driver(questions) {
    let instance = new QuestionSet(questions);
    while (instance.isActive) {
        let key = instance.getInput()
        let current = instance.data[instance.currentIndex];
        let currentQuestion = current.question;
        let correctAnswer = current.correctAnswer;
        instance.print(current['question'])

        for (let i = 0; i < current['options'].length; i++) {
            instance.print(`${current['options'][i][0]} - ${current['options'][i][1]}`)
        }
        let questionMap = {};
        for (let j = 0; j < instance.data.length; j++) {
            questionMap[instance.data[i]['question']] = true;
        }
        if (key === 'A' || key === 'B' || key === 'C' || key === 'D') {
            let answeredQuestion = []

            for (let k = 0; k < answeredQuestion.length; k++) {
                //if question has already have an answer
                if (answeredQuestion && answeredQuestion.length && answeredQuestion[i].question === currentQuestion) {

                } else {
                    //if question is unanswered
                    //check for the answer and add remove mark
                    if (key === correctAnswer) {
                        this.markSecured = this.markSecured + current.positive;
                        answeredQuestion.push(question: currentQuestion, answer: key)
                    } else {
                        this.markSecured = this.markSecured - current.negative;
                        answeredQuestion.push(question: currentQuestion, answer: key)
                    }
                }
            }



        }
        if (key === 'S') {
            instance.submit()
        }
        if (key === 'N') {
            instance.next()
        }
        if (key === 'P') {
            instance.prev()
        }
        if (key === 'Q') {
            instance.quit()
        }
    }
})(questions)

