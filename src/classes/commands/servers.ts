import { Message } from "discord.js";
import Bot from "../actors/bot";
import Command from "./interface/command";
import { isHelp, refineMessage, returnArgs, usage, verifyArgs } from "./util/utils";


export default class Servers implements Command {
    name = "servers";

    invoke(message: Message<boolean>): void {
        const msg = refineMessage(message.content);

        if (!verifyArgs(msg)) {
            message.reply(`Atualmente estou em ${Bot.guilds} servidores`);
            return;
        }

        if(isHelp(returnArgs(msg)[1])) {
            message.reply(this.help());
        }
    }
    help(): string {
        return usage(this.name, "\nEsse comando é fácil!");
    }
    
}