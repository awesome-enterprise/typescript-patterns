import { Vehicle } from "./vehicle";
import { Item } from "../item";

export class Track implements Vehicle {
    deliver(item: Item) {
        console.log("deliver on track");
    }

}
