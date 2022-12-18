FROM node:latest as build

RUN mkdir /app

WORKDIR /app
COPY package.json package.json
COPY tsconfig.json tsconfig.json

RUN npm install

COPY src ./src
COPY public ./public
COPY astro.config.mjs astro.config.mjs

RUN npm run astro build

FROM caddy:latest
COPY --from=build /app/dist /usr/share/caddy
EXPOSE 80