FROM node:12-alpine

WORKDIR /app

COPY package*.json ./
COPY ./build ./build
COPY ./server ./server

RUN npm install

RUN apk add --no-cache tini bash

COPY ./scripts/start_server.sh /usr/bin/start_server

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["/usr/bin/start_server"]
