import { Button, Window } from "./primitives";

export interface OSFactory {
    getWindow(): Window;
    getButton(): Button;
}
