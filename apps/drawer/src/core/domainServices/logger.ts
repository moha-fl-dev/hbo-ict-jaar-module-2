import { injectable } from "inversify";

export enum LogLevel {
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
}

const logLevelsWithColor: Record<LogLevel, string> = {
  INFO: "color: green",
  WARN: "color: yellow",
  ERROR: "color: red",
};

@injectable()
export class Logger {
  constructor(private logLevel: LogLevel = LogLevel.INFO) {}

  private getTimeStamp(): string {
    return new Date().toISOString();
  }

  private log(level: LogLevel, message: string, ...args: unknown[]): void {
    if (this.shouldLog(level)) {
      console.log(
        `[${this.getTimeStamp()}] %c[${level}] ${message}`,
        logLevelsWithColor[level],
        ...args
      );
    }
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = Object.values(LogLevel);
    return levels.indexOf(level) >= levels.indexOf(this.logLevel);
  }

  public info(message: string, ...args: unknown[]): void {
    this.log(LogLevel.INFO, message, ...args);
  }

  public warn(message: string, ...args: unknown[]): void {
    this.log(LogLevel.WARN, message, ...args);
  }

  public error(message: string, ...args: unknown[]): void {
    this.log(LogLevel.ERROR, message, ...args);
  }

  public setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }
}
