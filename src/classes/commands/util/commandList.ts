import Command from "../interface/command";
import Hello from "../hello";
import Servers from "../servers";

export default abstract class CommandList {
    static comandos: Array<Command> = [
        new Hello(),
        new Servers(),
    ];
}