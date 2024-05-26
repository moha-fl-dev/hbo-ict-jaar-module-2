import { Container } from "inversify";
import { Frame, Coordinate, Rectangle } from "../../domain";
import { TYPES } from "../types";
import { Logger } from "../../domainServices";

export function createRectangle(
  container: Container,
  frame: Frame,
  coordinates: Coordinate
): Rectangle {
  const logger = container.get<Logger>(TYPES.Logger);
  return new Rectangle(frame, coordinates, logger);
}
