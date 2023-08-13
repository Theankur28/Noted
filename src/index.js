import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./state/store";

// Analytics
import { inject } from '@vercel/analytics';
inject();

const container=document.getElementById("root");
const root=ReactDOM.createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);