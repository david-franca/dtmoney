import { createServer, Model } from "miragejs";

export const makeServer = () => {
  const server = createServer({
    models: {
      transactions: Model,
    },
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: "Internet",
            type: "withdraw",
            category: "Contas",
            value: -75.9,
            createdAt: new Date("2022-04-04 10:15:45"),
          },
          {
            id: 2,
            title: "Enel",
            type: "withdraw",
            category: "Contas",
            value: -132.8,
            createdAt: new Date("2022-04-07 13:28:27"),
          },
          {
            id: 3,
            title: "Salário",
            type: "deposit",
            category: "Carteira",
            value: 1212,
            createdAt: new Date("2022-04-07 14:38:55"),
          },
        ],
      });
    },
    routes() {
      this.namespace = "api";

      this.get("/transactions", () => {
        return this.schema.all("transactions");
      });

      this.post("/transactions", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("transactions", data);
      });
    },
  });
  return server;
};
