export default class Count {
    constructor(textInput) {
        this.textInput = textInput;
        //using arrow funtion as callback for not losing the value of this
        this.textInput.addEventListener('input', () => {
            this.count();
        });
    }

    count() {
        let data = this.getWordStat(this.textInput.value);
        this.eventEmit(data);
    }

    eventEmit(data) {
        let countEvent = new CustomEvent("count", {
            bubbles: true,
            cancelable: true,
            detail: {
                data
            }
        });

        this.textInput.dispatchEvent(countEvent);
    }

    getWordStat(str) {
        return {
            words: str.split(/\b\W+\b/).length,
            letters: str.length
        }
    }
}