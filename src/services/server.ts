import { createServer, Model } from "miragejs";

export const makeServer = () => {
  const server = createServer({
    models: {
      transaction: Model,
    },
    routes() {
      this.namespace = "api";

      this.get("/transactions", () => {
        return this.schema.all("transactions");
      });

      this.post("/transactions", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("transaction", data);
      });
    },
  });
  return server;
};