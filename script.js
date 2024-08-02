let items = [];

document.querySelector("input[type=submit]").addEventListener("click", () => {
  let nomeProduto = document.querySelector("input[name=nome-prduto]");
  let precoProduto = document.querySelector("input[name=price]");

  items.push({
    nome: nomeProduto.value,
    valor: precoProduto.value,
  });

  /* <div class="lista-produto-single">
        <h3>Red bull</h3>
        <h3 class="price-produto"><span>R$:20,00</span></h3>
      </div>


  */

  let listaProdutos = document.querySelector(".lista-produto");
  let soma = 0;
  listaProdutos.innerHTML = "";
  items.map(function (val) {
    soma += parseFloat(val.valor);
    listaProdutos.innerHTML +=
      `
    <div class="lista-produto-single">
        <h3>` +
      val.nome +
      `</h3>
        <h3 class="price-produto"><span>R$:` +
      val.valor +
      `</span></h3>
      </div>
    `;
  });
  soma = soma.toFixed(2);
  nomeProduto.value = "";
  precoProduto.value = "";
  let elementoSoma = document.querySelector(".soma-produto h1");
  elementoSoma.innerHTML = "R$:" + soma;
});

document.querySelector("button[name=limpar]").addEventListener("click", () => {
  items = [];
  document.querySelector(".lista-produto").innerHTML = "";
  document.querySelector(".soma-produto h1").innerHTML = "R$0";
});
