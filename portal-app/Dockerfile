FROM mhart/alpine-node:12 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN yarn run build

FROM mhart/alpine-node
RUN npm install
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "3000", "-s", "."]
