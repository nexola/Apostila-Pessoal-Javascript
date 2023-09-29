function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function () {
    this.element().classList.add("ativo");
  };
}

const li = new Dom("li");

li.ativar();

const ul = new Dom("ul");

ul.ativar();
