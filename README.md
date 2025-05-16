# [PCD2] AULA 12 - Introdução ao Docker

## 🎯 Objetivo da Aula

Apresentar os conceitos básicos do Docker e ensinar como criar um ambiente containerizado simples, utilizando um `Dockerfile`, `.dockerignore` e `docker-compose.yml`.

---

## 🐳 O que é Docker?

**Docker** é uma plataforma para desenvolver, empacotar e executar aplicações em contêineres. Com ele, você pode garantir que a aplicação rode da mesma forma em qualquer lugar: no seu computador, no servidor ou na nuvem.

---

## 🔑 Conceitos Principais

| Termo          | Definição                                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Imagem**     | Um blueprint (modelo) para o container. Contém o código da aplicação, dependências e instruções de configuração. |
| **Container**  | Uma instância em execução de uma imagem. É isolado, leve e portátil.                                             |
| **Host**       | A máquina que roda o Docker Engine (Linux, Mac ou Windows).                                                      |
| **Dockerfile** | Um arquivo com instruções para montar uma imagem Docker.                                                         |

---

## ⚙️ Instalação do Docker

1. Acesse: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
2. Baixe a versão para o seu sistema operacional.
3. Siga o processo de instalação.
4. Verifique a instalação com:

```bash
docker --version
```

---

## 📁 Estrutura do Projeto

```
hello-docker/
├── app.js
├── package.json
├── Dockerfile
├── .dockerignore
└── docker-compose.yml
```

---

## 👨‍💻 Exemplo de Aplicação Node.js

### `app.js`

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello Docker!');
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

### `package.json`

```json
{
  "name": "hello-docker",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {}
}
```

---

## 🛠️ Dockerfile

```Dockerfile
# Usa imagem base do Node.js
FROM node:18

# Define diretório de trabalho
WORKDIR /app

# Copia arquivos necessários
COPY package*.json ./
COPY app.js ./

# Instala dependências
RUN npm install

# Expõe a porta usada pela aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
```

### 💬 Explicação

* `FROM`: define a imagem base.
* `WORKDIR`: define onde os comandos seguintes serão executados.
* `COPY`: traz arquivos para dentro da imagem.
* `RUN`: executa comandos durante o *build* da imagem.
* `EXPOSE`: informa a porta a ser usada (não abre a porta por si só).
* `CMD`: comando a ser executado ao iniciar o container.

---

## 🚫 .dockerignore

```plaintext
node_modules
npm-debug.log
```

### 💬 Explicação

Evita copiar arquivos desnecessários para a imagem, reduzindo o tamanho e acelerando o processo.

---

## 📦 docker-compose.yml

```yaml
version: '3'
services:
  app:
    build: .
    ports:
      - "3000:3000"
```

### 💬 Explicação

* `version`: versão da especificação do Compose.
* `services`: define os containers (neste caso, apenas `app`).
* `build`: usa o `Dockerfile` atual.
* `ports`: mapeia a porta local 3000 para a porta 3000 do container.

---

## ▶️ Como Executar

1. **Build da imagem (caso não use o Compose):**

```bash
docker build -t hello-docker .
```

2. **Executar com Docker:**

```bash
docker run -p 3000:3000 hello-docker
```

3. **OU Executar com Docker Compose:**

```bash
docker-compose up --build
```

4. **Acesse no navegador:**

```
http://localhost:3000
```

Você verá: **"Hello Docker!"**

---

## 🧠 O que aconteceu por trás dos panos?

| Etapa                   | Impacto no projeto                                                   |
| ----------------------- | -------------------------------------------------------------------- |
| `Dockerfile`            | Criou uma receita para empacotar sua aplicação.                      |
| `docker build`          | Gerou uma imagem contendo tudo o que a aplicação precisa para rodar. |
| `docker run` ou Compose | Criou um container isolado com a aplicação rodando.                  |
| `.dockerignore`         | Ignorou arquivos desnecessários durante o build.                     |
| `docker-compose.yml`    | Simplificou o gerenciamento e execução do container.                 |

---

## ✅ Conclusão

Este exemplo simples demonstrou o poder do Docker: você empacotou uma aplicação inteira em um contêiner e a executou com apenas um comando. A partir daqui, você pode escalar esse projeto, adicionar banco de dados, serviços externos e muito mais — tudo isolado, reproduzível e fácil de versionar.

