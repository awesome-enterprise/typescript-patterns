import { Item } from "./domain/item";
import { Delivery } from "./domain/delivery";

const items = [
    new Item("item1"),
    new Item("item2"),
    new Item("item3"),
    new Item("item4"),
    new Item("item5"),
    //new Item("item6"),
]

const delivery = new Delivery();
delivery.makeDelivery(items);
