export class Error {
  type: string;
  code: number;
  message: string;

  constructor(type: string, message: string, code: number) {
    this.type = type;
    this.message = message;
    this.code = code;
  }

  static badRequest(message: string) {
    const error = {
      type: "Bad Request",
      message: message,
      code: 400,
    };
    return new Error(error.type, error.message, error.code);
  }

  static invalidHash(message: string) {
    const error = {
      type: "Invalid Hash",
      message: message,
      code: 400,
    };
    return new Error(error.type, error.message, error.code);
  }

  static internalServer(message: string) {
    const error = {
      type: "Internal Server Error!",
      message: message,
      code: 500,
    };
    return new Error(error.type, error.message, error.code);
  }

  static dbError(message:string) {
    const error = {
      type: "dbError",
      message: message,
      code: 500,
    };
    return new Error(error.type, error.message, error.code);
  }
}
