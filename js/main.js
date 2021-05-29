function clicou(){
    document.getElementById("agradecimento").innerHTML ="<b>Obrigado por clicar</b>";

   // console.log(document.getElementById("agradecimento"));
//alert(" Obrigado por clicar")
}
function redirecionar(){
    window.open("https://www.global-lab.playblackdesert.com/Main/Index")
//window.location.href = "https://www.global-lab.playblackdesert.com/Main/Index";
}
function trocar(elemento){
    elemento.innerHTML = "obrigado por passar o mouse";
   // document.getElementById("mousemove").innerHTML ="obrigado por passar o mouse";
 //alert("trocar texo");

}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = 
    elemento.innerHTML = "Passe o mouse aqui";
}

function  load(){
    alert("pagina carregaada");
}
function funcaoChange(elemento) {
    console.log(elemento.value)
}
/*
function soma( n1, n2) {
    return n1 + n2;
}

var validar = 0

function validaIdade(idade){
     validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
return validar;
}


var idade = prompt("Qual a sua idade?")
validaIdade(idade)
console.log(validar);
 
//alert(soma(5, 10));
/*
var d = new Date ();
alert (d.getMinutes());
alert (d.getHours());
alert (d.getMinutes());
/*




/*
var count;
for(count = 0; count <= 5; count++) {
    alert(count);
};

*/

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
};
*/
//var idade =prompt("Qual a sua idade?");
//var idade = 18;
//if (idade > 18){
  //  alert ("maior de idade");
//}else{
    //alert ("menor de idade");
//};





//var fruta = {nome: "maçã", cor: "vermelha"}
//console.log(fruta);
//alert(fruta.cor);




//var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva",cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);





//var fruta = {nome: "maçã", cor: "vermelha"}
//console.log(fruta);
//alert(fruta.cor);


//var lista = ["maçã ", "pêra","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista[0]);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Marcio Leal";
//var n1 = 5;
//var n2 = 3;
//var frase = "japão e o melhor time do mundo";
//alert(nome + " tem " + idade +" anos ");
//alert(idade + idade);
//console.log(nome);
//console.log(n1*n2)
//console.log(frase.toLowerCase());
    //alert(frase.replace("japão", "Brasil"));
