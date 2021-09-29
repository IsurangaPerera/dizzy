The backend API server for Dizzy.

## Dependencies

The server uses a number of node package. You can install them as follows:

```
npm install
```

## Run

You can run the server in the developement or the production mode using NPM scripts (see `package.json`) as follows:

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## Docs

The API documentation is generated from its Postman collection using [DocGen](https://github.com/thedevsaddam/docgen). It is served when you visit the root path of the server as a static HTML file (see `public/index.html`).
