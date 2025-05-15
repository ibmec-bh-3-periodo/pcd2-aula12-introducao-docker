## [PCD2] Mini-projeto Full Stack - Formulário de Contato

Este repositório apresenta um projeto **Full Stack** simples e didático, cuidadosamente elaborado para demonstrar, de forma prática e passo a passo, o uso de **JavaScript assíncrono** para uma experiência de usuário fluida, a manipulação dinâmica do **DOM**, a poderosa integração entre o front-end e o **API Express** (construído com **Node.js** e a tipagem robusta do **TypeScript**), e a persistência de dados de forma simplificada utilizando um arquivo **.json**. Este projeto é ideal para iniciantes e estudantes que desejam compreender o fluxo completo de uma aplicação web moderna.

### 📚 Índice

  * [🔧 Tecnologias Utilizadas](###tecnologias-utilizadas)
  * [🗂️ Estrutura do Projeto](#estrutura-do-projeto)
  * [🌐 Front-end](#front-end)
      * [📄 `index.html`](#indexhtml)
      * [🎨 `style.css`](#stylecss)
      * [📜 `scripts.js`](#scriptsjs)
  * [🚀 Back-end](#back-end)
      * [📦 `package.json`](#packagejson)
      * [🧠 `server.ts`](#serverts)
  * [📬 Comunicação Assíncrona](https://www.google.com/search?q=%23-comunica%C3%A7%C3%A3o-ass%C3%ADncrona)
  * [📥 Salvando Mensagens no Back-end](https://www.google.com/search?q=%23-salvando-mensagens-no-back-end)
  * [📤 Recuperando Mensagens](https://www.google.com/search?q=%23-recuperando-mensagens)
  * [🎯 Conclusão e Recomendações](https://www.google.com/search?q=%23-conclus%C3%A3o-e-recomenda%C3%A7%C3%B5es)

### 🔧 Tecnologias Utilizadas

Aqui estão as tecnologias chave que impulsionam este projeto:

  * **HTML5 + CSS3**: A base para a estrutura e a estilização visual da nossa página web. O HTML define o conteúdo, enquanto o CSS cuida da apresentação, incluindo um tema dark mode para uma experiência personalizada.
  * **JavaScript (ES6+)**: A linguagem de programação dinâmica que roda no navegador, responsável pela interatividade, manipulação do DOM e comunicação assíncrona com o back-end. Utilizamos as funcionalidades mais recentes do ECMAScript para um código moderno e conciso.
  * **Node.js**: O ambiente de execução JavaScript no servidor, que nos permite construir o back-end da aplicação utilizando a mesma linguagem do front-end, facilitando o desenvolvimento full stack.
  * **Express**: Um framework minimalista e flexível para Node.js, essencial para criar a API REST que receberá e enviará dados entre o front-end e o back-end de forma organizada e eficiente.
  * **TypeScript**: Um superset do JavaScript que adiciona tipagem estática ao código. Isso melhora a legibilidade, facilita a detecção de erros durante o desenvolvimento e torna o código mais robusto e manutenível, especialmente em projetos maiores.
  * **`fs` (File System - Node)**: Um módulo nativo do Node.js que fornece funcionalidades para interagir com o sistema de arquivos. Neste projeto, é utilizado para ler e escrever dados no arquivo `messages.json`, simulando uma persistência de dados simples.
  * **Fetch API (JavaScript Assíncrono)**: Uma interface moderna do JavaScript para fazer requisições HTTP (como POST para enviar dados e GET para receber dados) de forma assíncrona, sem bloquear a execução da página e proporcionando uma melhor experiência ao usuário.

### 🗂️ Estrutura do Projeto

A organização dos arquivos e diretórios é crucial para a clareza e manutenção do projeto. Aqui está um panorama da estrutura:

```
pcd2-exemplo-full-stack/
├── data/
│   └── messages.json        # Arquivo JSON onde as mensagens recebidas são armazenadas.
├── dist/
│   └── server.js            # Versão compilada do código do servidor TypeScript para JavaScript.
├── src/
│   └── server.ts            # Código-fonte do servidor back-end escrito em TypeScript.
├── styles/
│   └── style.css            # Arquivo contendo as regras de estilo CSS para o formulário e a página em geral.
├── services/
│   ├── scripts.js           # Arquivo JavaScript com a lógica para interagir com a interface do usuário (UI) e realizar as chamadas assíncronas para a API.
│   └── api_requests.js      # (Atualmente não utilizado, reservado para futura modularização das chamadas à API).
├── index.html               # O arquivo HTML principal que define a estrutura da interface do formulário de contato e do botão para verificar as mensagens.
├── package.json             # Arquivo de manifesto do Node.js, listando as dependências do projeto e os scripts para executar e construir a aplicação.
├── tsconfig.json            # Arquivo de configuração do compilador TypeScript, definindo as opções para a transpilação do código TypeScript para JavaScript.
```

### 🌐 Front-end

A parte visual e interativa da aplicação, com a qual o usuário interage diretamente.

#### 📄 `index.html`

Este arquivo representa a espinha dorsal da interface de contato. Ele contém a estrutura básica do formulário para o usuário inserir seu nome, e-mail e mensagem. O formulário utiliza o método `POST` para enviar os dados para a rota `/contato` do nosso back-end (rodando localmente na porta 3000).

```html
<form class="formulario" method="post" action="http://localhost:3000/contato">
  <label for="nome">Nome</label>
  <input type="text" id="nome" name="nome" required />

  <label for="email">E-mail</label>
  <input type="email" id="email" name="email" required />

  <label for="mensagem">Mensagem</label>
  <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

  <button type="submit">Enviar Mensagem</button>
</form>

<button id="btn-verificar-mensagens">Verificar mensagens enviadas</button>
```

Além do formulário de envio, há um botão com o id `btn-verificar-mensagens`. Ao ser clicado, este botão dispara uma requisição para a API no endereço `/mensagens` para buscar as mensagens que já foram salvas no servidor.

#### 🎨 `style.css`

Este arquivo contém todas as regras de estilo que tornam o formulário e a página visualmente agradáveis e responsivos. Embora o código completo não esteja incluído aqui, ele abrange estilos para o layout do formulário, a aparência dos campos de entrada, botões e, crucialmente, a implementação de um tema dark mode que pode ser ativado e desativado pelo usuário. O arquivo `style.css` está localizado dentro da pasta `/styles`.

#### 📜 `scripts.js`

Este arquivo JavaScript é onde a mágica da interatividade e da comunicação assíncrona acontece no lado do cliente (navegador). Ele contém dois blocos de funcionalidade principais:

  * **Modo Escuro:** Este trecho de código adiciona um ouvinte de eventos ao botão com o id `toggle-dark-mode` (que presumivelmente existe no `index.html`). Quando o botão é clicado, ele alterna a classe `modo-escuro` no elemento `body` da página. Essa classe é definida no `style.css` para aplicar o tema escuro. O texto do botão também é atualizado para "Light Mode" ou "Dark Mode" dependendo do tema atual.

    ```javascript
    document.getElementById("toggle-dark-mode").addEventListener("click", function () {
      document.body.classList.toggle("modo-escuro");
      this.innerText = document.body.classList.contains("modo-escuro") ? "Light Mode" : "Dark Mode";
    });
    ```

  * **Envio Assíncrono da Mensagem:** Este bloco de código seleciona o formulário com a classe `formulario` e adiciona um ouvinte de eventos para o evento de `submit`. Quando o formulário é enviado:

      * `e.preventDefault()` impede o comportamento padrão de envio do formulário (que geralmente recarrega a página).
      * Os valores dos campos de nome, e-mail e mensagem são obtidos através dos seus respectivos IDs.
      * A função `fetch()` é utilizada para fazer uma requisição `POST` para a rota `/contato` no servidor (http://localhost:3000/contato).
      * As opções da requisição incluem o método `POST`, cabeçalhos indicando que o corpo da requisição está no formato JSON (`"Content-Type": "application/json"`), e o corpo da requisição, que é uma string JSON contendo os dados do formulário.
      * A palavra-chave `await` pausa a execução do código até que a promessa retornada por `fetch()` seja resolvida (ou seja, recebamos uma resposta do servidor).
      * A variável `resposta` conterá a resposta do servidor, que pode ser processada posteriormente (embora não haja processamento explícito no trecho fornecido).

    <!-- end list -->

    ```javascript
    document.querySelector(".formulario").addEventListener("submit", async function (e) {
      e.preventDefault();
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const mensagem = document.getElementById("mensagem").value;

      const resposta = await fetch("http://localhost:3000/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem }),
      });
      // Aqui você pode adicionar código para lidar com a resposta do servidor,
      // como exibir uma mensagem de sucesso para o usuário.
    });
    ```

  * **Busca Assíncrona de Mensagens Salvas:** Este bloco adiciona um ouvinte de eventos ao botão com o id `btn-verificar-mensagens`. Quando clicado:

      * Uma requisição `GET` é feita para a rota `/mensagens` do servidor usando `fetch()`.
      * Novamente, `await` garante que o código espere a resposta do servidor.
      * A resposta é então convertida para um objeto JavaScript usando `resposta.json()`, e o resultado é armazenado na variável `mensagens`.
      * Um loop `forEach` itera sobre cada mensagem recebida, e dentro do loop (cujo corpo não está totalmente detalhado), elementos HTML são criados dinamicamente para exibir o conteúdo de cada mensagem na página.

    <!-- end list -->

    ```javascript
    document.getElementById("btn-verificar-mensagens").addEventListener("click", async function () {
      const resposta = await fetch("http://localhost:3000/mensagens");
      const mensagens = await resposta.json();
      const listaMensagens = document.getElementById("lista-mensagens"); // Supondo que haja um elemento com este ID para exibir as mensagens

      // Limpa a lista de mensagens antes de adicionar as novas
      if (listaMensagens) {
        listaMensagens.innerHTML = "";
      }

      mensagens.forEach((mensagem) => {
        const divMensagem = document.createElement("div");
        divMensagem.classList.add("mensagem"); // Adiciona uma classe para estilização
        divMensagem.innerHTML = `
          <p><strong>Nome:</strong> ${mensagem.nome}</p>
          <p><strong>E-mail:</strong> ${mensagem.email}</p>
          <p><strong>Mensagem:</strong> ${mensagem.mensagem}</p>
          <p class="data">Enviado em: ${new Date(mensagem.data).toLocaleDateString()} às ${new Date(mensagem.data).toLocaleTimeString()}</p>
          <hr>
        `;
        if (listaMensagens) {
          listaMensagens.appendChild(divMensagem);
        }
      });
    });
    ```

### 🚀 Back-end

A lógica que roda no servidor, responsável por receber as requisições do front-end, processar os dados e interagir com a camada de persistência (neste caso, o sistema de arquivos).

#### 📦 `package.json`

Este é um arquivo fundamental para qualquer projeto Node.js. Ele lista as dependências externas das quais o projeto depende (como `express` e `cors`), além de definir scripts úteis para automatizar tarefas comuns durante o desenvolvimento e a execução da aplicação.

```json
{
  "name": "pcd2-exemplo-full-stack",
  "version": "1.0.0",
  "description": "Exemplo didático de formulário de contato full stack com JavaScript assíncrono",
  "main": "dist/server.js",
  "scripts": {
    "start": "node dist/server.js",
    "dev": "tsx watch src/server.ts",
    "build": "tsc" // Adicionado script para compilar o TypeScript
  },
  "keywords": ["fullstack", "javascript", "async", "express", "nodejs", "typescript"],
  "author": "Seu Nome",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "@types/cors": "^2.8.10",
    "@types/express": "^4.17.11",
    "@types/node": "^14.14.31",
    "ts-node": "^9.1.1",
    "tsx": "^3.7.0", // Alternativa mais rápida para ts-node em desenvolvimento
    "typescript": "^4.1.5"
  }
}
```

  * **`scripts`**: Define comandos que podem ser executados usando `npm run <nome_do_script>`.

      * `start`: Executa o servidor a partir do arquivo JavaScript compilado (`dist/server.js`).
      * `dev`: Utiliza o `tsx watch` (ou `ts-node-dev`) para executar o arquivo TypeScript do servidor (`src/server.ts`) e reiniciar o servidor automaticamente sempre que houver uma mudança no código, facilitando o desenvolvimento.
      * `build`: (Adicionado) Compila os arquivos TypeScript (`.ts`) na pasta `src` para arquivos JavaScript (`.js`) na pasta `dist` usando o compilador TypeScript (`tsc`).

  * **`dependencies`**: Lista as bibliotecas que são necessárias para a aplicação rodar em produção.

      * `express`: O framework web para Node.js.
      * `cors`: Um middleware do Express para habilitar o Cross-Origin Resource Sharing (CORS), permitindo que o front-end (rodando em um domínio/porta diferente) faça requisições para o back-end.

  * **`devDependencies`**: Lista as bibliotecas que são úteis durante o desenvolvimento, mas não são necessariamente necessárias em produção.

      * `@types/cors` e `@types/express`: Definições de tipo para as bibliotecas `cors` e `express`, essenciais para usar TypeScript.
      * `@types/node`: Definições de tipo para as APIs do Node.js.
      * `ts-node` ou `tsx`: Permite executar arquivos TypeScript diretamente sem precisar compilá-los para JavaScript primeiro (útil para desenvolvimento). `tsx` é uma alternativa mais rápida.
      * `typescript`: O compilador TypeScript.

#### 🧠 `server.ts`

Este arquivo contém o código do nosso servidor back-end, escrito em TypeScript e utilizando o framework Express. Ele define as rotas da API e a lógica para receber e responder às requisições do front-end.

  * **Configuração do Servidor:** O código inicializa o Express, configura o middleware `cors` para permitir requisições de diferentes origens (o que é importante quando o front-end e o back-end rodam em portas diferentes durante o desenvolvimento), e define a porta em que o servidor irá escutar (geralmente a porta 3000). Também é configurado o middleware `express.json()` para que o servidor possa entender o corpo das requisições que são enviadas no formato JSON.

    ```typescript
    import express, { Request, Response } from 'express';
    import cors from 'cors';
    import fs from 'fs';
    import path from 'path';

    const app = express();
    const port = 3000;
    const filePath = path.join(__dirname, '..', 'data', 'messages.json');

    app.use(cors());
    app.use(express.json());

    // Garante que o arquivo de mensagens exista
    if (!fs.existsSync(path.join(__dirname, '..', 'data'))) {
      fs.mkdirSync(path.join(__dirname, '..', 'data'));
    }
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '[]');
    }
    ```

  * **Rota `POST /contato`:** Esta rota é responsável por receber as mensagens enviadas pelo formulário no front-end.

      * Ela extrai os campos `nome`, `email` e `mensagem` do corpo da requisição (`req.body`).
      * Cria um novo objeto `novaMensagem` adicionando um timestamp (`data`) para registrar o momento em que a mensagem foi recebida.
\* Utiliza o módulo `fs` para ler o conteúdo atual do arquivo `messages.json`.
\* Converte o conteúdo lido (que está em formato JSON) para um array JavaScript (`mensagens`).
\* Adiciona a nova mensagem (`novaMensagem`) a este array.
\* Escreve o array atualizado de volta para o arquivo `messages.json`. O `JSON.stringify(mensagens, null, 2)` converte o array para uma string JSON formatada com 2 espaços de indentação, o que torna o arquivo mais legível.
\* Envia uma resposta com status 200 (OK) para o front-end, indicando que a mensagem foi recebida e salva com sucesso.

````
```typescript
app.post('/contato', (req: Request, res: Response) => {
  const { nome, email, mensagem } = req.body;
  const novaMensagem = {
    nome,
    email,
    mensagem,
    data: new Date().toISOString(),
  };

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return res.status(500).send('Erro ao salvar a mensagem.');
    }
    try {
      const mensagens = JSON.parse(data);
      mensagens.push(novaMensagem);
      fs.writeFile(filePath, JSON.stringify(mensagens, null, 2), (err) => {
        if (err) {
          console.error('Erro ao escrever no arquivo:', err);
          return res.status(500).send('Erro ao salvar a mensagem.');
        }
        res.status(200).send('Mensagem recebida com sucesso!');
      });
    } catch (error) {
      console.error('Erro ao analisar o JSON:', error);
      return res.status(500).send('Erro ao processar as mensagens.');
    }
  });
});
```
````

  * **Rota `GET /mensagens`:** Esta rota é acessada quando o usuário clica no botão "Verificar mensagens enviadas" no front-end.

      * Utiliza `fs.readFile` para ler o conteúdo do arquivo `messages.json`.
      * Converte o conteúdo JSON para um array JavaScript (`mensagens`).
      * A função `reverse()` é chamada no array `mensagens` para inverter a ordem, garantindo que as mensagens mais recentes sejam exibidas primeiro.
      * Envia o array de mensagens (agora na ordem inversa) de volta para o front-end como uma resposta JSON.
      * Em caso de erro na leitura do arquivo, envia uma resposta com status 500 (Internal Server Error).

    <!-- end list -->

    ```typescript
    app.get('/mensagens', (req: Request, res: Response) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Erro ao ler o arquivo:', err);
          return res.status(500).send('Erro ao carregar as mensagens.');
        }
        try {
          const mensagens = JSON.parse(data);
          res.json(mensagens.reverse());
        } catch (error) {
          console.error('Erro ao analisar o JSON:', error);
          return res.status(500).send('Erro ao processar as mensagens.');
        }
      });
    });
    ```

  * **Início do Servidor:** Finalmente, o código inicia o servidor Express para escutar as requisições na porta especificada (3000) e exibe uma mensagem no console indicando que o servidor está rodando.

    ```typescript
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
    ```

### 📬 Comunicação Assíncrona

A comunicação assíncrona é um padrão fundamental neste projeto para garantir uma experiência de usuário responsiva e eficiente. A principal vantagem reside na capacidade do front-end de interagir com o back-end sem bloquear a interface do usuário.

  * O envio de dados do formulário (através da requisição `POST` para `/contato`) e a leitura das mensagens salvas (através da requisição `GET` para `/mensagens`) são realizados utilizando a moderna **Fetch API**. Esta API permite fazer requisições HTTP de forma assíncrona, retornando Promises que representam o resultado futuro da operação.

  * A utilização da palavra-chave `async` declara funções assíncronas, e a palavra-chave `await` dentro dessas funções pausa a execução do código até que a Promise retornada pela chamada `fetch()` seja resolvida (ou seja, o servidor envie uma resposta). Isso permite escrever código assíncrono que se parece e se comporta de forma mais síncrona, facilitando a leitura e a manutenção. No entanto, é crucial entender que, por baixo dos panos, a operação é não bloqueante.

  * O feedback ao usuário é imediato, pois a página não precisa recarregar ou ficar congelada enquanto espera a resposta do servidor. Assim que o servidor responde (seja com sucesso ao salvar a mensagem ou ao enviar a lista de mensagens), o JavaScript no front-end pode manipular o DOM para atualizar a interface, por exemplo, exibindo uma mensagem de sucesso após o envio ou renderizando a lista de mensagens recebidas.

### 📥 Salvando Mensagens no Back-end

Neste projeto didático, optamos por uma estratégia de persistência de dados simples, utilizando um arquivo JSON em vez de um banco de dados tradicional.

  * A variável `filePath` no `server.ts` define o caminho para o arquivo `messages.json`, localizado dentro de um diretório `data` na raiz do projeto.

    ```typescript
    const filePath = path.join(__dirname, '..', 'data', 'messages.json');
    ```

  * Cada vez que uma nova mensagem é recebida na rota `POST /contato`, ela é adicionada ao array de mensagens que é lido do arquivo.

    ```javascript
    mensagens.push(novaMensagem);
    ```

  * Em seguida, o array completo (incluindo a nova mensagem) é convertido de volta para uma string JSON formatada e sobrescreve o conteúdo do arquivo `messages.json` usando a função `fs.writeFile`. A formatação com `null, 2` melhora a legibilidade do arquivo JSON.

    ```javascript
    fs.writeFile(filePath, JSON.stringify(mensagens, null, 2), (err) => {
      // ... tratamento de erro ...
    });
    ```

### 📤 Recuperando Mensagens

Quando o usuário interage com o botão "Verificar mensagens enviadas", o front-end envia uma requisição `GET` para a rota `/mensagens` no back-end. O processo de recuperação ocorre da seguinte forma:

  * O servidor lê o conteúdo do arquivo `messages.json` utilizando `fs.readFile`.
  * O conteúdo lido (uma string JSON) é então convertido para um array JavaScript de objetos de mensagem usando `JSON.parse(data)`.
  * Para exibir as mensagens na ordem cronológica inversa (as mais recentes primeiro), o método `reverse()` é chamado no array de mensagens.
  * Finalmente, este array invertido é enviado de volta para o front-end como uma resposta no formato JSON (`res.json(mensagens.reverse())`). O front-end, por sua vez, itera sobre este array e manipula o DOM para exibir cada mensagem na página.

### 🎯 Conclusão e Recomendações

Este projeto oferece uma excelente base para compreender os conceitos fundamentais do desenvolvimento web full stack, com um foco especial na comunicação assíncrona utilizando JavaScript moderno. Através deste exemplo prático, você pode aprender sobre:

  * **O fluxo completo de uma aplicação web:** Desde a interação do usuário no front-end até o processamento dos dados no back-end e a persistência das informações.
  * **Como funciona a comunicação assíncrona** utilizando a Fetch API e as palavras-chave `async/await` para criar interfaces de usuário responsivas.
  * **Como montar um formulário funcional** que envia dados para um back-end e como exibir dados recebidos do servidor de forma dinâmica.
  * **Como salvar e recuperar dados com Node.js sem a necessidade de um banco de dados** relacional ou NoSQL, o que é particularmente útil para prototipagem rápida e projetos de menor escala.
  * **A importância de uma interface responsiva e uma experiência do usuário fluida**, que são aprimoradas pelo uso de comunicação assíncrona.

💡 Para continuar evoluindo este projeto e aprofundar seus conhecimentos, considere as seguintes recomendações:

  * **Substitua o `fs` por um banco de dados real:** Explore a integração com bancos de dados como MongoDB (NoSQL) ou PostgreSQL (SQL) para uma solução de persistência mais robusta e escalável. Isso envolverá a instalação de drivers de banco de dados no back-end e a modificação das rotas para interagir com o banco em vez de arquivos JSON.
  * **Implemente tratamento de erros robusto:** Utilize blocos `try/catch` em todas as chamadas assíncronas (`fetch` no front-end e operações de leitura/escrita de arquivos no back-end) para lidar com possíveis falhas de rede ou erros no servidor de forma mais elegante e informativa para o usuário.
  * **Adicione validações de formulário mais robustas:** Implemente validações no front-end (com JavaScript) para garantir que os dados inseridos pelo usuário sejam válidos antes de serem enviados ao servidor. Além disso, adicione validações no back-end para garantir a integridade dos dados antes de serem salvos.
  * **Modularize os arquivos JS e TS:** À medida que o projeto cresce, considere dividir os arquivos `scripts.js` e `server.ts` em módulos menores e mais focados para melhorar a organização, a legibilidade e a manutenibilidade do código.
  * **Explore outras funcionalidades:** Adicione recursos como paginação para exibir um grande número de mensagens, ordenação das mensagens por diferentes critérios, ou até mesmo a possibilidade de editar ou excluir mensagens.
  * **Implemente testes:** Escreva testes unitários e de integração para o back-end e testes de ponta a ponta para o front-end para garantir a qualidade e a confiabilidade do seu código.
