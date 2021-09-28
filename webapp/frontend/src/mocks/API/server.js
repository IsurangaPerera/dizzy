// Mirage
import { Server, Model, Response, hasMany, belongsTo } from "miragejs";

// Secrets
import keys from "./secrets";

const mirageServer = new Server({
  // Models
  models: {
    user: Model.extend({
      feedbacks: hasMany(),
      tags: hasMany(),
      alerts: hasMany(),
    }),
    page: Model,
    feedback: Model.extend({
      user: belongsTo(),
    }),
    tag: Model.extend({
      user: belongsTo(),
    }),
    alert: Model.extend({
      user: belongsTo(),
    }),
  },

  // Routes
  routes() {
    this.namespace = "/api";
    this.localStorageKey = "mirage";

    this.initLocalStorage = () => {
      let dbLog = localStorage.getItem(this.localStorageKey);
      if (dbLog) {
        dbLog = JSON.parse(dbLog);
        const isEmpty = Object.values(dbLog).every(
          (records) => records.length === 0
        );
        if (!isEmpty) {
          this.db.loadData(dbLog);
          return true;
        }
      }
      return false;
    };

    this.updateLocalStorage = () => {
      localStorage.setItem(
        this.localStorageKey,
        JSON.stringify(this.db.dump())
      );
    };

    this.post(
      "/auth",
      (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        const user = schema.users.findBy({
          username: attrs.username,
          password: attrs.password,
        });
        if (user) {
          const jwt = require("jsonwebtoken");
          const token = jwt.sign(user.id, keys.jwt);
          user.update({ token: token });
          this.updateLocalStorage();
          return { token: token, id: user.id };
        } else {
          return new Response(
            401,
            { some: "header" },
            { error: { message: "Invalid credentials" } }
          );
        }
      },
      {
        timing: 2000,
      }
    );

    this.get(
      "/users/:id",
      (schema, request) => {
        let id = request.params.id;
        const user = schema.users.find(id);
        if (user) {
          const userData = { ...user.attrs };
          delete userData.password;
          delete userData.token;
          return { user: userData };
        } else {
          return new Response(
            404,
            { some: "header" },
            { error: { message: "User does not exist" } }
          );
        }
      },
      {
        timing: 2000,
      }
    );

    this.get(
      "/users/:id/alerts",
      (schema, request) => {
        let id = request.params.id;
        const user = schema.users.find(id);
        if (user) {
          return { alerts: user.alerts };
        } else {
          return new Response(
            404,
            { some: "header" },
            { error: { message: "User does not exist" } }
          );
        }
      },
      {
        timing: 2000,
      }
    );

    this.del(
      "/users/:id/alerts/:id",
      (schema, request) => {
        let id = request.params.id;
        schema.alerts.find(id).destroy();
        this.updateLocalStorage();
      },
      {
        timing: 2000,
      }
    );

    this.patch(
      "/users/:id",
      (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        const user = schema.users.find(id);
        if (attrs.hasOwnProperty("feedback")) {
          user.createFeedback(attrs.feedback);
          delete attrs.feedback;
        }
        if (attrs.hasOwnProperty("tag")) {
          user.createTag(attrs.tag);
          delete attrs.tag;
        }
        if (attrs.hasOwnProperty("alert")) {
          user.createAlert(attrs.alert);
          delete attrs.alert;
        }
        user.update(attrs);
        this.updateLocalStorage();
        const userData = { ...user.attrs };
        delete userData.password;
        delete userData.token;
        return { user: userData };
      },
      {
        timing: 2000,
      }
    );

    this.del(
      "/users/:id",
      (schema, request) => {
        let id = request.params.id;
        schema.users.find(id).destroy();
        this.updateLocalStorage();
      },
      {
        timing: 2000,
      }
    );

    this.post(
      "/users",
      (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        let user = schema.users.findBy({ username: attrs.username });
        if (user) {
          return new Response(
            400,
            { some: "header" },
            { error: { message: "User already exists" } }
          );
        } else {
          if (!attrs.hasOwnProperty("name")) {
            attrs.name = "";
          }
          if (!attrs.hasOwnProperty("company")) {
            attrs.company = "";
          }
          schema.users.create(attrs);
          this.updateLocalStorage();
          return;
        }
      },
      {
        timing: 2000,
      }
    );

    this.get(
      "/pages",
      (schema, request) => {
        const query = request.queryParams.query.toLowerCase();
        if (query) {
          return schema.pages.where((page) =>
            page.title.toLowerCase().includes(query)
          );
        } else {
          return schema.pages.all();
        }
      },
      {
        timing: 2000,
      }
    );
  },

  // Initialization
  seeds(server) {
    if (!server.initLocalStorage()) {
      server.create("page", {
        id: 1,
        source: "tor",
        url: "http://suw74isz7wqzpmgu.onion",
        title: "WikiLeaks – Know the Truth",
        crawledAt: "Apr 1, 2020",
        body:
          "WikiLeaks is a multi-national media organization and associated " +
          "library. It was founded by its publisher Julian Assange in 2006. " +
          "WikiLeaks specializes in the analysis and publication of censored materials.",
        info: [
          {
            title: "Safety",
            text: "Benign",
          },
          {
            title: "Category",
            text: "Wiki",
          },
          {
            title: "Toshi Rank",
            text: "22 (Mar 22, 2020)",
          },
          {
            title: "Crypto Addresses",
            text: "12 (Bitcoin)",
          },
        ],
      });
      server.create("page", {
        id: 2,
        source: "web",
        url: "https://bitcointalk.org/index.php?action=profile;u=878144",
        title: "View the profile of FanatMonet - Bitcointalk",
        crawledAt: "Apr 22, 2020",
        body:
          "Bitcointalk is an Internet forum dedicated to the discussion " +
          "of bitcoin, blockchain technology and cryptocurrency. The forum " +
          "was initially created by Satoshi Nakamotoa.",
        info: [
          {
            title: "Safety",
            text: "Benign",
          },
          {
            title: "Category",
            text: "Forum",
          },
          {
            title: "Toshi Rank",
            text: "223 (Mar 22, 2020)",
          },
          {
            title: "Crypto Addresses",
            text: "1 (Bitcoin)",
          },
        ],
      });
      server.updateLocalStorage();
    }
  },
});

export default mirageServer;
