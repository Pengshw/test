module.exports = class violationError extends Error {
    constructor (errorMessage, violations) {
    
      // Calling parent constructor of base Error class.
      super(errorMessage);
      
      // Saving class name in the property of our custom error as a shortcut.
      this.name = this.constructor.name;
  
      // Capturing stack trace, excluding constructor call from it.
      Error.captureStackTrace(this, this.constructor);
      
      this.violations = violations;
    }
  };