import IConsole from "../Console/IConsole";
import IPlay from "./IPlay";


export default class Play implements IPlay{
    constructor(private platform : IConsole){}
    plaing(): void {
        console.log("Iniciando o jogo.");
    }
    result(): void {
        console.log("---jogar----");
    }
}