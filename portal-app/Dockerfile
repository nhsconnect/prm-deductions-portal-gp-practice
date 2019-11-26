FROM mhart/alpine-node:12 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM mhart/alpine-node
RUN npm install
RUN npm install serve -g
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "3000", "-s", "."]
