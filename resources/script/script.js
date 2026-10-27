// // // let body = document.querySelector("body");
// // // let div = document.querySelector("div");
// // // body.removeChild(div);

// // let h1 = document.querySelector("#trocarCor");

// // h1.style.color = "purple";
// // h1.style.background = "pink";
// // h1.style.height = "40px";
// // h1.style.borderRadius = "40px"
// // h1.style.margin = "30px"

// // let body = document.querySelector("body")
// // body.style.background = " #89CFF0"

// // let h1 = document.querySelector("h1");
// // let paragrafo = document.querySelector("p");

// // paragrafo.innerText = h1.innerText;

// function verificarCor(){
//      let cor = document.getElementById("cor").value
//      let resultado = document.getElementById("resultado");

//      document.body.style.backgroundColor = cor;

//     if (cor == "#ff0000" ||
//         cor == "#ffff00" ||
//         cor =="#0000ff"){

//         resultado.innerHTML = "Cor primaria"

//     }
//     else if (cor == "#00ff00" ||
//                cor == "#ff00ff" ||
//                cor == "#00ffff"){

//         resultado.innerHTML = "Cor secundária!";

//     }
//     else {
//         resultado.innerHTML = "Essa cor não está na lista de cores primárias ou secundárias.";
//     }

// }

// let buttom = document.querySelector("button");

//     buttom.addEventListener("click",function(){
//         console.log('clique')
//         buttom.style.borderRadius = "40px"
//         buttom.style.color = "white"
//         buttom.style.backgroundColor = "black"
//     });

document.querySelector("button").addEventListener('click', function(){
document.body.style.backgroundColor = "black"
document.body.style.color = "white"
});
