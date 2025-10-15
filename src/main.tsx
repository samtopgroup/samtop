// 正确导入必要的依赖
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // 使用HashRouter确保在GitHub Pages上正常工作
import { Toaster } from 'sonner';
import App from "./App";
import "./index.css";

// 获取根元素并检查是否存在
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// 创建根并渲染应用
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Toaster />
    </HashRouter>
  </React.StrictMode>
);
