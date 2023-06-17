FROM node:18-slim

WORKDIR /backend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 2000

CMD [ "node", "index.js" ]