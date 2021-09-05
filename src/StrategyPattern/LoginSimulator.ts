import { Admin } from "./UserClient";

export abstract class LoginSimulator {
    static main():void {
        const admin = new Admin()
        admin.displayClient()
        admin.getRequirement()
    }
}