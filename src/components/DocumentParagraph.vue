<template>
  <div class="document-paragraph-container">{{ data.text }}</div>
</template>

<script>
// import {DocumentParagraphData} from "../models/DocumentParagraphData";

export default {
  name: "DocumentParagraph",
  props: {
    data: Object
  }
}
</script>

<style scoped>
.document-paragraph-container {
  width: 100%;
  padding: 0.5em 2em;
  text-align: left;
}
</style>