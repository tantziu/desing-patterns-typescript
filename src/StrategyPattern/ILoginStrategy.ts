export interface ILoginStrategy {
    require():void
}

export class EmailLogin implements ILoginStrategy {
    require():void {
        console.log("Email Login required")
    }  
}

// export class NameAndPassword implements ILoginStrategy {
//     require():void {
//         console.log("Name and Password")
//     }
// }

export class FacebookLogin implements ILoginStrategy {
    require():void {
        console.log("Facebook Login")
    }
}

export class NoLogin implements ILoginStrategy {
    require():void {
        console.log("No login required")
    }
}
