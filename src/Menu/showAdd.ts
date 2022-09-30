import PromptSync = require("prompt-sync");
import { show } from "./showAll";

const prompt = PromptSync();

export function add(inventory: string[]){
    show(inventory);

    console.log('Type the item');
    const item = prompt('>> ');

    inventory.push(item);

    console.clear();
}
