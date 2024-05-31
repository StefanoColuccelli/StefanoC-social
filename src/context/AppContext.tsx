import { createContext } from "react";
import { Post } from "../types/commonTypes";

export interface IAppContext {
    jsonData: Post[] | undefined
    setJsonData: (args: Post[]) => void
}

export const AppContext = createContext<IAppContext | null>(null);