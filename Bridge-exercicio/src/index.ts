import IConsole from "./Console/IConsole";
import PlayStation from "./Console/PlayStation";
import Xbox from "./Console/Xbox";
import AdvancedPlay from "./Play/AdvancedPlay";
import Play from "./Play/Play";

function startPlay(platform : IConsole){
    console.log("Aguarde...");
    const play = new Play(platform);
    play.plaing();
    play.result();
}

function startAdvancedPlay(platform : IConsole){
    console.log("Aguarde...");
    const play = new AdvancedPlay(platform);
    play.plaing();
    play.result();
    play.Challenge();
}

startAdvancedPlay(new PlayStation());
startAdvancedPlay(new Xbox());

startPlay(new PlayStation());
startPlay(new Xbox());