import { Item } from "../item";

export interface Vehicle {
    deliver(item: Item);
}
