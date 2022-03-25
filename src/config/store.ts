import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import themeReducer from "./themeSlice";

const rootReducer = combineReducers({
  theme: persistReducer({ key: "theme", storage: AsyncStorage }, themeReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [],
});

export const persistor = persistStore(store);

export default store;