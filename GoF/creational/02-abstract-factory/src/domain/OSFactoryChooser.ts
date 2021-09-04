import { OSFactory } from "./abstract-layer/os-factory";
import { LinuxAbstractFactory } from "./linux/linux-abstract-factory";
import { WindowsAbstractFactory } from "./windows/windows-abstract-factory"

export enum System {
    Linux,
    Windows,
}
export class OSFactoryChooser {
    public getFactory(system: System): OSFactory {
        if (system === System.Linux) {
            return new LinuxAbstractFactory();
        } else {
            return new WindowsAbstractFactory();
        }
    }
}
