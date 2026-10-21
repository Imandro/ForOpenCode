/**
 * Sistema de logging profesional para el plugin ForOpenCode
 * Niveles: debug < info < warn < error
 */

export type LogLevel = "debug" | "info" | "warn" | "error";

const LEVEL_ORDER: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

export class Logger {
  private level: LogLevel;
  private prefix: string;

  constructor(level: LogLevel = "info", prefix: string = "[foropencode-plugin]") {
    this.level = level;
    this.prefix = prefix;
  }

  setLevel(level: LogLevel): void {
    this.level = level;
  }

  private shouldLog(messageLevel: LogLevel): boolean {
    return LEVEL_ORDER[messageLevel] >= LEVEL_ORDER[this.level];
  }

  private format(level: LogLevel, message: string, ...args: unknown[]): string {
    const timestamp = new Date().toISOString();
    const argsStr = args.length > 0 ? " " + args.map((a) => JSON.stringify(a)).join(" ") : "";
    return `${this.prefix} [${level.toUpperCase()}] ${timestamp} - ${message}${argsStr}`;
  }

  debug(message: string, ...args: unknown[]): void {
    if (this.shouldLog("debug")) {
      console.debug(this.format("debug", message, ...args));
    }
  }

  info(message: string, ...args: unknown[]): void {
    if (this.shouldLog("info")) {
      console.info(this.format("info", message, ...args));
    }
  }

  warn(message: string, ...args: unknown[]): void {
    if (this.shouldLog("warn")) {
      console.warn(this.format("warn", message, ...args));
    }
  }

  error(message: string, ...args: unknown[]): void {
    if (this.shouldLog("error")) {
      console.error(this.format("error", message, ...args));
    }
  }
}
