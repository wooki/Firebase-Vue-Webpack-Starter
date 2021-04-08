import Vue from "vue";
import App from "./App";

document.addEventListener("DOMContentLoaded", function() {
  try {
    let app = firebase.app();
    let features = [
      "auth",
      "database",
      "firestore",
      "functions",
      "messaging",
      "storage",
      "analytics",
      "remoteConfig",
      "performance"
    ].filter(feature => typeof app[feature] === "function");

    // loadEl.textContent = `Firebase SDK loaded with ${features.join(", ")}`;

    // Vue.config.productionTip = false;

    new Vue({
      el: "#app",
      template: "<App/>",
      components: { App }
    });
  } catch (e) {
    console.error(e);
  }
});
