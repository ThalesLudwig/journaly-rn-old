import { IEntry } from "../types/EntryType";

export type RootStackParamList = {
  Home: undefined;
  New: undefined;
  Profile: undefined;
  Settings: undefined;
  Journal: undefined;
  Calendar: undefined;
  Edit: { entry: IEntry };
  Entry: { entry: IEntry };
};
