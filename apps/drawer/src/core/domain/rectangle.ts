import { inject, injectable } from "inversify";
import { Logger } from "../domainServices";
import type { Coordinate } from "./coordinate";
import type { Frame } from "./frame";
import { Shape } from "./shape";
import { TYPES } from "../IoC";

@injectable()
export class Rectangle extends Shape {
  constructor(
    @inject(TYPES.Frame) frame: Frame,
    @inject(TYPES.Coordinate) coordinates: Coordinate,
    @inject(TYPES.Logger) logger: Logger
  ) {
    super(frame, coordinates, logger);
  }
}
