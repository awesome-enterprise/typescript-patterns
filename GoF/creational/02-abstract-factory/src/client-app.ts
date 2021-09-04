import { OSFactoryChooser, System } from "./domain/OSFactoryChooser";
import { Button, Window } from "./domain/abstract-layer/primitives";

export class ClientApp {
    private window: Window;
    private button: Button;

    public constructor(system: System) {
        const factory = new OSFactoryChooser().getFactory(system);
        this.window = factory.getWindow();
        this.button = factory.getButton();
    }

    public draw() {
        this.window.draw();
        this.button.draw();
    }
}
