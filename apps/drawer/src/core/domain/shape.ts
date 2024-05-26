import { inject, injectable } from "inversify";
import { Logger } from "../domainServices/logger";
import { generateRandomId } from "../utils/utils";
import type { Coordinate } from "./coordinate";
import type { Frame } from "./frame";
import { TYPES } from "../IoC";

@injectable()
export abstract class Shape {
  #ID: string = "";

  constructor(
    private frame: Frame,
    private coordinates: Coordinate,
    @inject(TYPES.Logger) private logger: Logger
  ) {
    this.#ID = generateRandomId();

    this.#log(
      `%c[${this.constructor.name}]`,
      "color: white; font-weight: bold;",
      {
        id: this.#ID,
        size: { width: this.frame.width, height: this.frame.height },
        coordinates: { x: this.coordinates.x, y: this.coordinates.y },
      }
    );
  }

  #log(message: string, ...args: unknown[]): void {
    if (this.logger) {
      this.logger.info(message, ...args);
    }
  }

  getID(): string {
    this.#log(`Getting ID: ${this.#ID}`);
    return this.#ID;
  }

  getCoordinates(): Coordinate {
    this.#log(
      `Getting coordinates: (${this.coordinates.x}, ${this.coordinates.y})`
    );
    return this.coordinates;
  }

  getFrame(): Frame {
    this.#log(`Getting frame of the shape`);
    return this.frame;
  }
}
