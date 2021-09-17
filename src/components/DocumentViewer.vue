<template>
  <div class="document-viewer-container">
    <template v-for="(page, index) in data.pages" :key="index">
      <DocumentPage :data="page"/>
      <div class="document-viewer-page-break"></div>
    </template>
  </div>
</template>

<script>
import {AppDocument} from "../models/AppDocument";
import DocumentPage from "./DocumentPage";

export default {
  name: "DocumentViewer",
  components: {DocumentPage},
  props: {
    data: AppDocument
  }
}
</script>

<style scoped>
.document-viewer-container {
  aspect-ratio: 0.7727272727272727;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 40vw;
  /*height: 50vh;*/
  background: dimgray;
  font-size: 0.73vw;
}

@media print {
  .document-viewer-container {
    aspect-ratio: unset;
    margin-left: 0;
    margin-right: 0;
    overflow-x: unset;
    overflow-y: unset;
    width: unset;
    height: unset;
    background: dimgray;
    font-size: 1.875vw;
  }

  .document-viewer-page-break {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  .document-viewer-container {
    margin-left: 0;
    margin-right: 0;
    overflow-x: unset;
    overflow-y: unset;
    width: unset;
    height: unset;
    background: dimgray;
    font-size: 4vw;
  }

  .document-viewer-page-break {
    display: none;
  }
}



.document-viewer-page-break {
  width: 100%;
  height: 0.25rem;
}
</style>