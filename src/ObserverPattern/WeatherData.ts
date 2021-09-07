import { IObserver } from "./IObserver"
import { ISubject } from "./ISubject"

export class WeatherData implements ISubject {
    private observers:IObserver[] = []
    private temperature: number = 0
    private humidity: number = 0
    private pressure: number = 0

    registerObserver(o:IObserver):void {
        this.observers.push(o)
    }

    removeObserver(o:IObserver):void {
        let i = this.observers.indexOf(o)
        if (i >= 0) {
            this.observers.splice(i, 1)
            // this.observers.filter(item => item!= o)
        }
    }

    notifyObservers():void {
        for (let observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure)
        }
    }

    // getTemperature() {

    // }

    // getHumidity() {

    // }

    // getPressure() {
        
    // }

    measurementsChanged() {
        this.notifyObservers()
    }

    setMeasurements(temperature:number, humidity:number, pressure:number) {
        this.temperature = temperature
        this.humidity = humidity
        this.pressure = pressure
        this.measurementsChanged()
    }
}
