FROM node:17-alpine

WORKDIR /frontend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npx", "serve", "-s", "build"]