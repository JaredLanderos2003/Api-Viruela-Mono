# Dockerfile
# Usa una imagen base de Node.js
FROM node:latest

# Configura el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

#Compilar el codigo
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD [ "node", "dist/src/index.js" ]
