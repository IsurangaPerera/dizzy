FROM node:14-alpine
WORKDIR /app

COPY api/package.json .
RUN npm install --silent

CMD ["npm", "run", "dev"]
