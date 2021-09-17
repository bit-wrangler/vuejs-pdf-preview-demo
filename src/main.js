import { createApp } from "vue";
import App from "./App.vue";
import DocumentParagraph from "./components/DocumentParagraph";
import {DocumentParagraphData} from "./models/DocumentParagraphData";

const app = createApp(App);
app.component(DocumentParagraphData.getTypeName(), DocumentParagraph);
app.mount("#app");