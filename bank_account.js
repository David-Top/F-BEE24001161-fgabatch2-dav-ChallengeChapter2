//Initial balance
let saldo = 1000000;

//testing balance
console.log(saldo);

//Function to add balance
function tambahSaldo() {
  let sum = Number(
    window.prompt("Masukan nominal yang ingin Anda setorkan", "")
  );

  //Handler if amount that inputed is string or negative
  if (isNaN(sum) || sum < 0) {
    window.alert("Nominal yang Anda masukan tidak valid");

    //Adding balance with inputed amount
  } else {
    saldo = saldo + sum;
    console.log("Saldo Anda ", saldo);
  }
  document.getElementById("saldo").innerHTML = saldo;
  return saldo;
}

//Function to reduce balance
function kurangiSaldo() {
  let sum = Number(window.prompt("Masukan nominal yang ingin Anda ambil", ""));
  //Handler if balance less than inputed amount
  if (sum > saldo) {
    window.alert("Saldo Anda tidak mencukupi");

    //Handler if amount that inputed is string or negative
  } else if (isNaN(sum) || sum < 0) {
    window.alert("Nominal yang Anda masukan tidak valid");

    //Reducing balance with inputed amount
  } else {
    saldo = saldo - sum;
    console.log("Saldo Anda ", saldo);
  }
  document.getElementById("saldo").innerHTML = saldo;
  return saldo;
}

document.getElementById("saldo").innerHTML = saldo;
// console.log(tambahSaldo(1000));
