import { Window } from "../../abstract-layer/primitives";

export class LinuxWindow implements Window {
    draw() {
        console.log("Draw linux window");
    }
}
