export class ErrorHandler {
  static newErrorCondition(numb) {
    //For alphabet input
    if (isNaN(numb)) {
      throw new Error("The amount you enter must be a number");
    }

    //For negative number input
    if (numb < 0) {
      throw new Error("The amount you enter mus be positive number");
    }
  }
}
