

# Selecciona la imagen base de Node.js 18
FROM node:18_x  

# Establece el directorio de trabajo
WORKDIR /build/index.js

# Copia el archivo package.json y package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias
RUN npm install -g npm@latest
RUN npm install typescript -g
RUN npm i
RUN npm run build
RUN npm run dev

