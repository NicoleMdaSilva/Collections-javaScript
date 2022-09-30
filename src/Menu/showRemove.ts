import PromptSync = require("prompt-sync");
import { show } from "./showAll";

const prompt = PromptSync();

export function remove(inventory: string[]){
    show(inventory);
    
    console.log('Type the item you want to remove');
    const remove = prompt('>> ');

    inventory.forEach((item,index) => {
        if (item == remove) {
            inventory.splice (index, 1, item);
            console.clear ();
         }
    })
}
