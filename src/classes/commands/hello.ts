import { Message } from "discord.js";
import Command from "./interface/command";
import { verifyArgs, returnArgs, refineMessage, isHelp, usage } from "./util/utils";
import { botSettings } from "../../../config.json";

export default class Hello implements Command {
    name = "hi";

    
    async invoke (message: Message): Promise<void> {

        const msg = refineMessage (message.content); // tratando mensagem

        if(!verifyArgs(msg)) {
            await message.reply("EAE PAPAI DALE");    
        } else if (isHelp(returnArgs(msg)[1])) {
            await message.reply(this.help());
        }
        
    }
    help (): string {
        return usage(this.name, "\nsó isso meu consagrado");
    }

}