import { IObserver } from "./IObserver";
import { ISubject } from "./ISubject";

export interface IDisplayElement {
    display(): void
}

export class CurrentConditionsDisplay implements IObserver, IDisplayElement{
    private temperature:number = 0
    private humidity:number = 0

    constructor(private weatherData:ISubject) {
        weatherData.registerObserver(this)
    }

    update(temperature:number, humidity:number, pressure:number):void {
        this.temperature = temperature
        this.humidity = humidity
        this.display()

    }

    display() {
        console.log("Current conditions: " + this.temperature + "C degrees and " +
            this.humidity + "% humidity")
    }
}

export class StatisticsDisplay {
    update() {

    }

    display() {

    }
}

export class ForecastDisplay {
    update() {

    }

    display() {

    }
}
