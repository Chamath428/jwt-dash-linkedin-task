export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function serviceErrorHandler(
  error: unknown,
  defaultMessage: string,
  defaultStatusCode: number = 500,
): AppError {
  console.log("Error in service:", error);
  if (error instanceof AppError) {
    throw error;
  } else {
    throw new AppError(defaultMessage, defaultStatusCode);
  }
}
