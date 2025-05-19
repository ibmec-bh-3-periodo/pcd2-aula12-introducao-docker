# Usa a imagem oficial do Node.js
FROM node:18

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia arquivos de configuração e instalação
COPY package*.json ./
RUN npm install

# Copia o restante do projeto
COPY . .

# Compila TypeScript
RUN npm run build

# Expõe a porta do servidor no container
EXPOSE 3000

# Rodar o servidor em modo de desenvolvimento
CMD ["npx", "tsx", "watch", "src/server.ts"]
