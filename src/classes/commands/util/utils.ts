import * as dotenv from 'dotenv';

dotenv.config();

export function verifyArgs (msg: string): boolean { // verifica se há argumentos

    return (msg.split(" ").length > 1 ? true : false);

}

export function returnArgs (msg: string): string[] { // retorna string tratada em Array
    return refineMessage(msg).split(" ");
}

export function refineMessage (msg: string): string { // retorna uma string tratada
    return msg.replace(process.env.PREFIX, '').toLowerCase();
}

export function isHelp(text: string): boolean {
    return text === "help" ? true : false;
}

export function usage(cmdname: string, helptext: string): string {
    return `use: ${process.env.PREFIX}${cmdname} ${helptext}`;
}