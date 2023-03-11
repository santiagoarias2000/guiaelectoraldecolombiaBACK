FROM node:18-alpine

RUN npm install -g npm@latest
RUN npm install typescript -g

COPY package*.json ./

USER node

RUN npm i

CMD [ "npm", "start" ]