import { Message } from "discord.js";

export default interface Command {
    name: string;
    invoke(message: Message): void;
    help(): string;
}