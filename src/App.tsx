import { useEffect } from "react";
import { WebviewWindow } from "@tauri-apps/api/webviewWindow";
import { getCurrentWindow } from "@tauri-apps/api/window";

function App() {
  useEffect(() => {
    openWebsite();
  }, []);

  async function openWebsite() {
    const webview = new WebviewWindow("whatsapp-web", {
      url: "https://web.whatsapp.com/",
      focus: true,
      x: 0,
      y: 0,
      title: "WhatsApp Web",
    });
    webview.once("tauri://created", async function () {
      console.log("Webview created");
      getCurrentWindow().close();
    });
    webview.once("tauri://error", function (e) {
      console.error(e);
    });
  }

  return null;
}

export default App;
