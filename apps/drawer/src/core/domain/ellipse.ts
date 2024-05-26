import { inject } from "inversify";
import { TYPES } from "../IoC";
import { Logger } from "../domainServices";
import type { Coordinate } from "./coordinate";
import type { Frame } from "./frame";
import { Shape } from "./shape";

export class Ellipse extends Shape {
  constructor(
    @inject(TYPES.Frame) frame: Frame,
    @inject(TYPES.Coordinate) coordinates: Coordinate,
    @inject(TYPES.Logger) logger: Logger
  ) {
    super(frame, coordinates, logger);
  }
}
