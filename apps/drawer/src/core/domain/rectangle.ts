import { Logger } from "../domainServices";
import { Coordinate } from "./coordinate";
import { Frame } from "./frame";
import { Shape } from "./shape";

export class Rectangle extends Shape {
  constructor(frame: Frame, coordinates: Coordinate, logger: Logger) {
    super(frame, coordinates, logger);
  }
}
