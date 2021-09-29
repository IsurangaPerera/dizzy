FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY web ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

CMD ["npm", "start"]
