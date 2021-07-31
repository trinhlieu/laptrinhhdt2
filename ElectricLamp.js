class ElectricLamp {
    status;

    constructor(status) {
        this.status = status;
    }

    light() {
        if(this.status) {
            alert('Lighting');
        }
        else {
            alert('Not lighting');
        }
    }

    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
}