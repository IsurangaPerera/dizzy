FROM node:14-alpine
WORKDIR /app

COPY web/package.json .
RUN npm install --silent

CMD ["npm", "start"]
