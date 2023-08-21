export class RedisConnectionFailedError extends Error {
  constructor(...args) {
    super(...args)
    this.message = "Redis connection is failed."
  }
}

export class ValidationError extends Error {
  constructor(message, ...args) {
    super(message, ...args)
  }
}

export class OutOfRangeError extends Error {
  constructor(message, errorCode, ...args) {
    super(message, ...args)
    this.errorCode = errorCode
  }
}

export class UnexpectedError extends Error {
  constructor(message, ...args) {
    super(message, ...args)
    this.message = "Something unexpected happened. " + message
  }
}
