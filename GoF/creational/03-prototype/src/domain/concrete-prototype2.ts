import { Prototype } from "./prototype";

export class ConcretePrototype2 implements Prototype {
    field2: string;
    public constructor() {
        this.field2 = "very complicated state 2";
    }
    clone(): Prototype {
        const result = new ConcretePrototype2();
        result.field2 = this.field2;
        return result;
    }

}
