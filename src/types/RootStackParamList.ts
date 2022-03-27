import { IEntry } from "../interfaces/IEntry";

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
