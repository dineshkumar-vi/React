/**
 * Exception class used to construct the custom error
 */

// Apollo api Exception
export function apolloException(message, name) {
  this.message = message;
  this.name = name;
}
