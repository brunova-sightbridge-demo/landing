import React from "react";
import { createRoot } from "react-dom/client";
import { AgentChatBubble } from "./widget/AgentChatBubble";
import "./widget/styles.css";

declare global {
  interface Window { SIGHTBRIDGE_API_BASE?: string }
}

const host = document.getElementById("sightbridge-demo-chat");
if (host) {
  createRoot(host).render(
    <AgentChatBubble
      baseUrl={window.SIGHTBRIDGE_API_BASE || "http://localhost:8001"}
      language="en"
      placement="bottom-right"
      theme={{ primary: "#1E1E24", primaryDark: "#14141A" }}
    />,
  );
}
