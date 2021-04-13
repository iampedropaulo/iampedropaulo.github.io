var hamburguer = document.querySelector(".hamburguer"); /*  busca o seletor */

hamburguer.addEventListener("click", function(){ /*  escuta o evento de clique e vai exectuar a função */
    document.querySelector("aside").classList.toggle("show-menu"); /*  pega o elemento aside e a partir da fazer uma alteração onde tem a classe show-menu  */
    document.querySelector(".hamburguer").classList.toggle("show-menu");
});

// orçamento
document.querySelector("#qte").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})
function atualizarPreco(){
    const qtde = document.querySelector("#qte").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    let preco = qtde * 100;
    if (temJS) preco *= 2
    if (incluiLayout) preco += 1000
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia
    document.querySelector("#preco").innerHTML = `Total R$ ${preco.toFixed(2)}`
}