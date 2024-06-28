import { BankAccount, formatToIDR } from "./bank_account.js";

document.getElementById("deposit").addEventListener("click", () => {
  BankAccount.deposit();
});

document.getElementById("withdraw").addEventListener("click", () => {
  BankAccount.withdraw();
});

document.getElementById("saldo").innerHTML = formatToIDR(BankAccount.balance);
console.log(BankAccount.balance); //testing unit
