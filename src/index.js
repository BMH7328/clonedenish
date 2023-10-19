import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const a client
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            breakpoints: {
              xs: "30em",
              sm: "48em",
              md: "64em",
              lg: "74em",
              xl: "90em",
            },
          }}
        >
          <ModalsProvider>
            <App />
            <Notifications />
          </ModalsProvider>
        </MantineProvider>
      </QueryClientProvider>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();