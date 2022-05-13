import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  type: "deposit" | "withdraw";
  createdAt: string;
  category: string;
  value: number;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api
      .get("transactions")
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  const createTransaction = (transaction: TransactionInput) => {
    api.post("transactions", transaction);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
