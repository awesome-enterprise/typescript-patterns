import { Item } from "./item";
import { Vehicle } from "./vehicle/vehicle";
import { Track } from "./vehicle/track";
import { Ship } from "./vehicle/ship";

export type LogisticParams = {
    tracks: number;
    ships: number;
}

export class Logistic {
    private tracks: number;
    private ships: number;

    public constructor(params: LogisticParams) {
        this.tracks = params.tracks;
        this.ships = params.ships;
    }

    public createTransport(): Vehicle {
        if (this.tracks) {
            this.tracks--;
            return new Track();
        }

        if (this.ships) {
            this.ships--;
            return new Ship();
        }

        throw new Error("no awailable transport");
    }
}
