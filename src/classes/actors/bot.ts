import { Client, Message } from "discord.js";
import User from "./user";
import { botSettings } from "../../../config.json";
import CommandList  from '../commands/util/commandList';


export default class Bot extends User {
  client: Client;//atributos da classe Bot
  guilds: number;

  constructor(client: Client) { // construtor
    super();
    this.client = client;
    if (!this.initSystem()) {
      //caso retorne FALSE
      console.log("erro na inicialização.");
    }
    console.log("INICIALIZADO.");
  }

  private initSystem(): boolean {
    try {
      //init bot
      this.client.on("ready", (evt) => {
        // Setando atributos
        this.setId(Number(this.client.user.id));
        this.setName(this.client.user.username);
        this.guilds = this.calculateGuilds();
      });

      this.client.on("messageCreate", (msg) => {
        // calma que vamos mudar isso
        const refined = msg.content.split(" ")[0].toLowerCase();
        if (
          msg.author.id != this.client.user.id && refined.startsWith(botSettings.prefix)) {
          this.commandHandle(msg, refined.replace("!", ""));
        }
      });
      return true; //deu certo
    } catch (error) {
      return false; // deu errado
    }
  }

  private async commandHandle(msg: Message, command: string) {
        CommandList.comandos.forEach((com) => {
            if (com.name === command) {
                com.invoke(msg);
            }
        });
  }

  private calculateGuilds(): number {
    //calcula em quantos servers estou!
    let guildCount = 0;
    this.client.guilds.cache.forEach((guild) => {
      guildCount++;
    });
    return guildCount;
  }
}
