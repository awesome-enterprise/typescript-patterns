import { OSFactory } from "../abstract-layer/os-factory";
import { WindowsButton } from "./primitives/windows-button";
import { WindowsWindow } from "./primitives/windows-window";
import { Button, Window } from "../abstract-layer/primitives";

export class WindowsAbstractFactory implements OSFactory {
    getButton(): Button {
        return new WindowsButton();
    }

    getWindow(): Window {
        return new WindowsWindow();
    }

}
