import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import themeReducer from "./themeSlice";
import entryReducer from "./entrySlice";
import dateReducer from "./dateSlice";

const rootReducer = combineReducers({
  theme: persistReducer({ key: "theme", storage: AsyncStorage }, themeReducer),
  entries: persistReducer({ key: "entries", storage: AsyncStorage }, entryReducer),
  date: persistReducer({ key: "date", storage: AsyncStorage }, dateReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [],
});

export const persistor = persistStore(store);

export default store;
