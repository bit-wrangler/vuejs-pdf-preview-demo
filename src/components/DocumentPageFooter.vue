<template>
  <div class="document-page-footer-container">
    <div v-if="data && data.pageNumber">Page {{data.pageNumber}}</div>
    <div v-if="data && data.image"><img :src="getImage()" alt="" class="document-page-footer-image"></div>
  </div>
</template>

<script>
import {DocumentPageFooterData} from "../models/DocumentPageFooterData";
import {StaticImage} from "../utilities/StaticImage";

export default {
  name: "DocumentPageFooter",
  props: {
    data: {
      type: DocumentPageFooterData
    }
  },
  methods: {
    getImage() {
      return StaticImage.getUrl(this.data.image);
    }
  }
}
</script>

<style scoped>
.document-page-footer-image {
  width: 100%;
}
</style>