import IConsole from "../Console/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(platform : IConsole){
        super(platform);
    }

    Challenge() : void{
        console.log("Desafios liberados");
    }

}