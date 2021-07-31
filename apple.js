class Apple {
    weight;
    color;

    constructor(weight, color) {
        this.weight = weight
        this.color = color
    }

    getWeight() {
        return this.weight
    }

    getColor() {
        return this.color
    }

    setWeight(weight) {
        this.weight = weight
    }

    setColor(color) {
        this.color = color
    }

    isEmpty() {
        return !(this.weight === 0)
    }

    decrease() {
        this.weight--
    }
}