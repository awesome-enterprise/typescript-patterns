import { Vehicle } from "./vehicle";
import { Item } from "../item";

export class Ship implements Vehicle {
    deliver(item: Item) {
        console.log("deliver on ship");
    }

}
