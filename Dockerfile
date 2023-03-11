

# Selecciona la imagen base de Node.js 18
FROM node:18

# Copia el archivo package.json y package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias
RUN npm install -g npm@latest
RUN npm install -g typescript
RUN npm i
# Run a compile based on a backwards look through the fs for a tsconfig.json
RUN tsc
# Emit JS for just the index.ts with the compiler defaults
RUN tsc index.ts
# Emit JS for any .ts files in the folder src, with the default settings
RUN tsc src/*.ts
# Emit files referenced in with the compiler settings from tsconfig.production.json
RUN tsc --project tsconfig.production.json
# Emit d.ts files for a js file with showing compiler options which are booleans
RUN tsc index.js --declaration --emitDeclarationOnly
# Emit a single .js file from two files via compiler options which take string arguments
RUN tsc app.ts util.ts --target esnext --outfile index.js
RUN npm run build

