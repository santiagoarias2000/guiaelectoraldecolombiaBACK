

# Selecciona la imagen base de Node.js 18
FROM node:18

# Establece el directorio de trabajo
WORKDIR /build/index.js

# Copia el archivo package.json y package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias
RUN npm install -g npm@latest
RUN npm install -g typescript
RUN npm i
RUN npm run start
