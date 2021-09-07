import { CurrentConditionsDisplay } from "./IDisplayElement";
import { WeatherData } from "./WeatherData";

export abstract class WeatherStation {
    static main(): void {
        const weatherData:WeatherData = new WeatherData()
        let currentDisplay:CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData)

        weatherData.setMeasurements(30, 65, 30.4)
    }
}