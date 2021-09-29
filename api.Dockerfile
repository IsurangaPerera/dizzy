FROM node:13.12.0-alpine

RUN npm install -g pm2

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY api ./

RUN npm install --silent

CMD pm2 start --no-daemon  processes.json
