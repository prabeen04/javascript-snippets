
//    options: [{ option: 'A', value: 'New Delhi' }],
//Q2
const questions = [
    {
        question: ' Capital of India is ?',
        options: [['A', 'New Delhi'], ['B', 'Bangalore'], ['C', 'Hyderabad']],
        DorrectAnswer: 'A',
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
        this.isActive = true
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
        instance.print(current['question'])

        for (let i = 0; i < current['options'].length; i++) {
            instance.print(`${current['options'][i][0]} - ${current['options'][i][1]}`)
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

