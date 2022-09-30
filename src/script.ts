import PromptSync = require("prompt-sync");
import { add } from "./Menu/showAdd";
import { show } from "./Menu/showAll";
import { remove } from "./Menu/showRemove";
import { update } from "./Menu/showUpdate";
const prompt = PromptSync();

let option = 0

do{
console.log('1 - Armazenar um item');
console.log('2 - Remover um item');
console.log('3 - Atualizar um dado');
console.log('4 - Apresentar todos os dados');
console.log('0 - Sair');


option = Number(prompt('>> '));
 
const inventory: string[] = [];


switch (option) {
    case 1:
        add(inventory);
        break;
    case 2:
        remove(inventory);
        break;
    case 3:
        update(inventory);
        break;
    case 4:
        show(inventory);
        break;
    case 0:
        break
    default:
        console.log('Opção invalida');
        break;
    }
}while(option != 0);
