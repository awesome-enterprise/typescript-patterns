import { ClientApp } from "./client-app";
import { System } from "./domain/OSFactoryChooser";

const app = new ClientApp(System.Windows);
app.draw();
