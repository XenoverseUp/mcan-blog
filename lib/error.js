export class RedisConnectionFailedError extends Error {
  constructor(...args) {
    super(...args)
    this.name = "RedisConnectionFailedError"
    this.message = "Redis connection is failed."
    this.errorCode = 500
  }
}

export class ValidationError extends Error {
  constructor(message, ...args) {
    super(message, ...args)
    this.name = "ValidationError"
    this.errorCode = 400
  }
}

export class OutOfRangeError extends Error {
  constructor(message, ...args) {
    super(message, ...args)
    this.name = "OutOfRangeError"
    this.errorCode = 400
  }
}

export class UnexpectedError extends Error {
  constructor(message, ...args) {
    super(message, ...args)
    this.name = "UnexpectedError"
    this.message = "Something unexpected happened. " + message
    this.errorCode = 500
  }
}
