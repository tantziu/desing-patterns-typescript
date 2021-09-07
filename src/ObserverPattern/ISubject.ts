import { IObserver } from "./IObserver";

export interface ISubject {
    registerObserver(o:IObserver): void
    removeObserver(o:IObserver): void
    notifyObservers(): void
}
