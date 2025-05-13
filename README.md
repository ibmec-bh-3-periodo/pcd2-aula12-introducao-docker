# [DW] AULA 18 - Adição e Remoção de Elementos e Classes com DOM

## 🎯 Objetivos de Aprendizagem

Ao final desta aula, você será capaz de:

* Adicionar elementos dinamicamente ao HTML com JavaScript.
* Remover elementos do DOM.
* Adicionar e remover classes CSS com `classList`.
* Criar interações dinâmicas entre HTML, CSS e JS.

---

## 🧠 Conceitos Fundamentais

### O que é o DOM?

O DOM (Document Object Model) é a representação da estrutura da sua página HTML. Com ele, podemos acessar, modificar, criar e excluir elementos da página via JavaScript.

---

## 🛠️ Manipulando Elementos com JavaScript

### 1. Criando um novo elemento

```js
const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Este parágrafo foi criado via JavaScript!';
```

### 2. Adicionando um elemento na página

```js
const container = document.querySelector('#container');
container.appendChild(novoParagrafo);
```

📌 `appendChild` adiciona o novo elemento como **último filho** do elemento pai.

---

### 3. Removendo um elemento

```js
const elementoARemover = document.querySelector('#item-remover');
elementoARemover.remove(); // remove diretamente
```

Também é possível remover com o pai:

```js
const pai = document.querySelector('#lista');
const filho = document.querySelector('#item-remover');
pai.removeChild(filho);
```

---

## 🎨 Manipulando Classes com `classList`

### Adicionando uma classe

```js
const elemento = document.querySelector('#meuElemento');
elemento.classList.add('ativo');
```

### Removendo uma classe

```js
elemento.classList.remove('ativo');
```

### Alternando uma classe (toggle)

```js
elemento.classList.toggle('ativo');
```

---

## 🧪 Exemplo Prático

### HTML

```html
<div id="caixa"></div>
<button id="adicionar">Adicionar</button>
<button id="remover">Remover</button>
```

### CSS

```css
.novo-item {
  background-color: lightblue;
  padding: 10px;
  margin: 5px;
}
```

### JavaScript

```js
const caixa = document.querySelector('#caixa');
const btnAdd = document.querySelector('#adicionar');
const btnRemover = document.querySelector('#remover');

btnAdd.addEventListener('click', () => {
  const div = document.createElement('div');
  div.textContent = 'Item criado!';
  div.classList.add('novo-item');
  caixa.appendChild(div);
});

btnRemover.addEventListener('click', () => {
  const ultimo = caixa.lastElementChild;
  if (ultimo) {
    caixa.removeChild(ultimo);
  }
});
```

## 🧩 Dica Extra

Você pode usar `classList.contains('classe')` para verificar se um elemento já tem uma classe antes de adicionar/remover.
