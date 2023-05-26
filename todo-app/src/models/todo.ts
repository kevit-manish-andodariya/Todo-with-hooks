import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}

export interface Todo {
  todos: {
    completed: boolean;
    id: number;
    text: string;
  }[];
  filter: string;
}

export interface TodoAction {
  type: string;
  payload?: any;
}
