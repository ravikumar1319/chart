#stage 1
FROM node:v16.18.0 as node

WORKDIR /my-first
COPY package.json my-first

RUN npm install
RUN npm i -g @angular/cli@15.0.0

RUN ng build --prod