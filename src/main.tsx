import "@/styles/global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "@/components/ui/theme-switcher";
import { SidebarProvider } from "@/components/ui/sidebar";
import { App } from "@/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="zocket-chat-assistant-theme">
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
);
