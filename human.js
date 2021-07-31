class Human {
    name;
    gender;
    weight;

    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    getName() {
        return this.name
    }

    getWeight() {
        return this.weight
    }

    setName(name) {
        this.name = name
    }

    setWeight(weight) {
        this.weight = weight
    }

    isMale() {
        return this.gender === "Male"
    }

    checkApple(apple) {
        if (apple.isEmpty() === true) {
            document.write(this.name + " đang cầm táo rồi" + "<br>")
            return true
        } else {
            document.write(this.name + " chưa cầm táo" + "<br>")
            return false
        }
    }

    eat(apple) {
        if(this.checkApple(apple)){
            apple.decrease()
        } else {
            document.write("Ăn hết rồi" + "<br>")
        }
    }

    say() {
        return prompt("Muốn nói gì: ")
    }
}