import { Client } from "discord.js";
import Bot from "./classes/actors/bot";
import {botSettings} from '../config.json';

const client = new Client({ intents: ['GUILDS',
'DIRECT_MESSAGES',
'GUILD_MESSAGES' ],
partials: ['MESSAGE', 'CHANNEL']});


const bot = new Bot(client);

client.login(botSettings.token);

