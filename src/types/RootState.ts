import { IEntry } from "./EntryType";

export interface IRootState {
  entries: { value: IEntry[] };
  theme: { value: number };
  date: { value: string };
}
