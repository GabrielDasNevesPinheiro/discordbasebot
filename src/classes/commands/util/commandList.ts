import Command from "../interface/command";
import Hello from "../hello";

export default abstract class CommandList {
    static comandos: Array<Command> = [
        new Hello(),
    ];
}