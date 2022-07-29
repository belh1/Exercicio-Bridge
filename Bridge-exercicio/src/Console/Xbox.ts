import IConsole from "./IConsole";


export default class Xbox implements IConsole{
    constructor(){
        this.configureGame();
        console.log("Xbox:Iniciada.")
    }
    configureGame(): void{
        this.authToken();
        console.log("Xbox: Configurando.")
    }
    authToken():void{
        console.log("Xbox autorizado")
    }
}