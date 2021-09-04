import { Item } from "./item";
import { Logistic } from "./logistic";

export class Delivery {
    private logistic: Logistic;
    public constructor() {
        this.logistic = new Logistic({
            tracks: 3,
            ships: 2,
        });
    }
    public makeDelivery(items: Item[]) {
        for (let item of items) {
            const transport = this.logistic.createTransport();
            transport.deliver(item);
        }
    }
}
