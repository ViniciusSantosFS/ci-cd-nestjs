FROM node:16
WORKDIR /usr/src/app

ARG PORT=3000
ENV PORT=$PORT
EXPOSE $PORT


COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run migration
RUN npm run seed:all
RUN npm run build

ENV NODE_ENV production

CMD ["node", "dist/main.js"]