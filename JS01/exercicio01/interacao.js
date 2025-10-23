function calcular(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
  

    let texto = document.getElementById("txtResultado");

    texto.innerHTML = "Soma: "+ (num1+num2);
    texto.innerHTML += "<br>Subtração: "+(num1-num2);
    texto.innerHTML += "<br>Multiplicação: "+(num1*num2);
    texto.innerHTML += "<br>Divisão: "+(num1/num2);
    texto.innerHTML += "<br>Resto: "+(num1%num2);
    texto.innerHTML += "<br>Potência: "+(num1**num2);
}