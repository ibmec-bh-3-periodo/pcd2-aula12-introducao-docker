# Etapa 1: Build com Node
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Imagem final para produção
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

# Copia apenas o necessário
COPY --from=build /app/dist ./dist
COPY index.html ./index.html
COPY styles ./styles
COPY services ./services
COPY src/data ./dist/data 

EXPOSE 3000

CMD ["node", "dist/server.js"]
