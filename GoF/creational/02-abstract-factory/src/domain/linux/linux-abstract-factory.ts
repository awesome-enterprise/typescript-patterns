import { OSFactory } from "../abstract-layer/os-factory";
import { Button, Window } from "../abstract-layer/primitives";
import { LinuxButton } from "./primitives/linux-button";
import { LinuxWindow } from "./primitives/linux-window";

export class LinuxAbstractFactory implements OSFactory {
    getButton(): Button {
        return new LinuxButton();
    }

    getWindow(): Window {
        return new LinuxWindow();
    }

}
