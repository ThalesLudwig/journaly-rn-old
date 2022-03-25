import { IEntry } from "./IEntry";

export interface IRootState {
  entries: { value: IEntry[] };
  theme: { value: number };
}
