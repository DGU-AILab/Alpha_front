import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { init_i18n } from "./lib/i18n";
import { queryClient } from "./lib/queryClient";

init_i18n();

ReactDOM.render(
    <React.StrictMode>
        <HelmetProvider>
            <Helmet>
                <title>Project Name</title>
            </Helmet>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </QueryClientProvider>
            </RecoilRoot>
        </HelmetProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
