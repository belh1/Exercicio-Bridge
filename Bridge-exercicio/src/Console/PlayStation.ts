import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
    constructor(){
        this.configureGame();
        console.log("Game:Transmissão Iniciada.")
    }
    configureGame(): void{
        this.authToken();
        console.log("Game: Configurandoo.")
    }
    authToken():void{
        console.log("Game autorizado")
    }
}

