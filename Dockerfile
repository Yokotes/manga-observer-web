FROM node:14-alpine

WORKDIR /manga-observer-web
COPY . .
RUN npm i

CMD ["node", "dist/server/main.js"]