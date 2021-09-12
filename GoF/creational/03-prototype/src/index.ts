import { ConcretePrototype1 } from "./domain/concrete-prototype1";
import { ConcretePrototype2 } from "./domain/concrete-prototype2";

const instance1_1 = new ConcretePrototype1();
instance1_1.field1 = "other value";
const instance1_2 = instance1_1.clone() as ConcretePrototype1;
console.log(instance1_1.field1 === instance1_2.field1);
const instance2_1 = new ConcretePrototype2();
instance2_1.field2 = "other value";
const instance2_2 = instance2_1.clone() as ConcretePrototype2;
console.log(instance2_1.field2 === instance2_2.field2);
