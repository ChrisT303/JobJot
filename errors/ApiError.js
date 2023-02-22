class ApiError extends Error {
  constructor(message, status) {
    super(message);
  }
}

export default ApiError;
