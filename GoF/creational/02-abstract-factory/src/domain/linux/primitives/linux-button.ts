import { Button } from "../../abstract-layer/primitives";

export class LinuxButton implements Button {
    draw() {
        console.log("Draw linux button");
    }
}
