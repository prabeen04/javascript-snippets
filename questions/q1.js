
//test

const questions = [
    ' Capital of India is ?',
    ' ( a + b )2 = ?',
    '2 * 3 = ?',
    '5 * 5 = ?',
    '100 * 0 = ?'
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
            // this.print(this.data[newIndex])
            this.currentIndex++;
        } else {
            this.print('you are in the last question ')
        }
    }
    prev() {
        let newIndex = this.currentIndex - 1;
        if (newIndex > 0) {
            // this.print(this.data[newIndex])
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
        instance.print(instance.data[instance.currentIndex])
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

