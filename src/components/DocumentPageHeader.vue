<template>
  <div class="document-page-header-container">
    <div v-if="data && data.image"><img :src="getImage()" alt="" class="document-page-header-image"></div>
  </div>
</template>

<script>
import {StaticImage} from "../utilities/StaticImage";
import {DocumentPageHeaderData} from "../models/DocumentPageHeaderData";

export default {
  name: "DocumentPageHeader",
  props: {
    data: {
      type: DocumentPageHeaderData
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
.document-page-header-container {
  margin-bottom: 2rem;
}

.document-page-header-image {
  width: 100%;
}
</style>