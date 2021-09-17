<template>
  <div class="document-page-container">
    <DocumentPageHeader v-if="data.header" :data="data.header"/>
    <div class="document-page-content">
      <template v-for="(element, index) in data.content" :key="index">
        <component :is="element.type" :data="element"></component>
      </template>
    </div>
    <DocumentPageFooter v-if="data.header" :data="data.footer"/>
  </div>
</template>

<script>
import {DocumentPageData} from "../models/DocumentPageData";
import DocumentPageHeader from "./DocumentPageHeader";
import DocumentPageFooter from "./DocumentPageFooter";

export default {
  name: "DocumentPage",
  components: {DocumentPageFooter, DocumentPageHeader},
  props: {
    data: DocumentPageData
  }
}
</script>

<style scoped>
.document-page-container {
  aspect-ratio: 0.7727272727272727;
  background: white;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}

@media print{
  .document-page-container {
    aspect-ratio: unset;
    width: 100vw;
    height: 100vh;
  }
}

.document-page-content {
  flex-grow: 1;
}
</style>