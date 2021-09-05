import { EmailLogin, ILoginStrategy, NoLogin } from "./ILoginStrategy";

export abstract class UserClient {
    constructor(public requirement:ILoginStrategy) {}

    abstract displayClient():void

    getRequirement():void {
        this.requirement.require()
    }
}

export class Admin extends UserClient {
    constructor() {
        super(new EmailLogin())
    }

    displayClient():void {
        console.log("Sign in as Admin")
    }
}

export class Visitor extends UserClient {
    constructor() {
        super(new NoLogin())
    }
    displayClient():void {
        console.log("Sign in as a visitor")
    }
}