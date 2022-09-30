import PromptSync = require("prompt-sync");
import { show } from "./showAll";

const prompt = PromptSync();

export function update(inventory: string[]){
    show(inventory);

    console.log('Type the item you want to update');
    const update = prompt('>> ');

    inventory.forEach((item, index) => {
        if (item == update){
            console.log('Type the change');
            const new_item = prompt('>>')

            inventory.splice(index, 1, new_item);

            console.clear
        }
    })
}