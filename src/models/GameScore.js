class GameScore {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    toJson() {
        return JSON.stringify({
            name: this.name,
            score: this.score
        });
    }
}