import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import init from "./rust-wasm/pkg";
const container = document.getElementById("root")!;
init()
  .then(() => {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    setTimeout(() => {
      // set to default
      container.style.height = "";
    }, 0);
  })
  .catch((e) => {
    alert("WebAssembly 초기화에 실패했습니다.\n");
  });
