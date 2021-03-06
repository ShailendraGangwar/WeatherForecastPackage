/** @format */
import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import App from "./App";
import { name as appName } from "./app.json";
import { PersistGate } from "redux-persist/integration/react";
const { persistor, store } = configureStore();
import { BallIndicator } from "react-native-indicators";

const RNRedux = () => (
  <Provider store={store}>
    <PersistGate
      loading={<BallIndicator color="black" />}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>
);
 //AppRegistry.registerComponent(appName, () => RNRedux);
 export default RNRedux;