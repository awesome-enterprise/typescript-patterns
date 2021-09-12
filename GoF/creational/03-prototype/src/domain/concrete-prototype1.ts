import { Prototype } from "./prototype";

export class ConcretePrototype1 implements Prototype {
    field1: string;

    public constructor() {
        this.field1 = "very complicated state";
    }

    clone(): Prototype {
        const proto = new ConcretePrototype1();
        proto.field1 = this.field1;
        return proto;
    }
}
