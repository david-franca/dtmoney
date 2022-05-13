import { createServer } from "miragejs";

export const makeServer = () => {
  const server = createServer({
    routes() {
      this.namespace = "api";

      this.get("/transactions", () => {
        return [
          {
            id: 1,
            title: "Transaction",
            amount: 400,
            type: "deposit",
            category: "Food",
            createdAt: new Date(),
          },
        ];
      });
    },
  });
  return server;
};
