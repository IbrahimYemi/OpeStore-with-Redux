import { StrictMode } from "react";
import {Provider} from "react-redux"
import store from "./DataStore/index"
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider> 
);
