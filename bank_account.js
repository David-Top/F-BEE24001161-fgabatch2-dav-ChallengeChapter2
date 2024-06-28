export class BankAccount {
  constructor(amount) {
    this.amount = amount;
  }
  static balance = 50000;

  //Error Handling
  static errorHandler() {
    //For alphabet input
    if (isNaN(this.amount)) {
      throw new Error("The amount you enter must be a number");
    }

    //For negative number input
    if (this.amount < 0) {
      throw new Error("The amount you enter mus be positive number");
    }
  }

  //Static Method to deposit
  static deposit() {
    this.amount = Number(
      window.prompt("Enter the nominal amount you wish to deposit")
    );
    try {
      BankAccount.errorHandler(this.amount);
      setTimeout(() => {
        BankAccount.balance = BankAccount.balance + this.amount;
        console.log(BankAccount.balance); //testing unit
        document.getElementById("saldo").innerHTML = formatToIDR(
          BankAccount.balance
        );
      }, 500);
    } catch (error) {
      window.alert(error);
    }
  }

  //Static method to withdraw
  static withdraw() {
    this.amount = Number(
      window.prompt("Masukan nominal yang ingin Anda ambil")
    );
    try {
      BankAccount.errorHandler(this.amount);
      //Error handling for amount more than balance
      if (this.amount > BankAccount.balance) {
        throw new Error("Your balance is insufficient");
      }
      setTimeout(() => {
        BankAccount.balance = BankAccount.balance - this.amount;
        console.log(BankAccount.balance); //testing unit
        document.getElementById("saldo").innerHTML = formatToIDR(
          BankAccount.balance
        );
      }, 500);
    } catch (error) {
      window.alert(error);
    }
  }
}

//function to format number to  IDR(upiah urrency)
export function formatToIDR(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}
