import { Message } from "discord.js";
import Bot from "../actors/bot";
import Command from "./interface/command";
import { usage } from "./util/utils";


export default class Servers implements Command {
    name = "servers";

    invoke(message: Message<boolean>): void {
        message.reply(`Atualmente estou em ${Bot.guilds} servidores`);
    }
    help(): string {
        return usage(this.name, "\nEsse comando é fácil!");
    }
    
}