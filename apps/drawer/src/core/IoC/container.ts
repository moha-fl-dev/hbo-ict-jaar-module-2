import { Container } from "inversify";
import { Logger } from "../domainServices";
import { TYPES } from "./types";
import { Rectangle } from "../domain/rectangle";

const container = new Container();

container.bind<Logger>(TYPES.Logger).to(Logger).inSingletonScope();
container.bind<Rectangle>(TYPES.Rectangle).to(Rectangle);

export { container };
