<template>
  <div>
    <div class="btn btn-primary" id="download-pdf-button" @click="downloadPdf()">Download PDF</div>
    <div>
      <DocumentViewer :data="doc"/>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import { jsPDF } from 'jspdf';
import {DocumentPageFooterData} from "./models/DocumentPageFooterData";
import {DocumentPageHeaderData} from "./models/DocumentPageHeaderData";
import {DocumentParagraphData} from "./models/DocumentParagraphData";
import {DocumentPageData} from "./models/DocumentPageData";
import DocumentViewer from "./components/DocumentViewer";
import {AppDocument} from "./models/AppDocument";

export default {
  name: "App",
  components: {DocumentViewer},
  data: function () {
    return {
      doc: new AppDocument([
        new DocumentPageData(
            [
              new DocumentParagraphData("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque leo neque, laoreet at tortor eu, pretium ultrices purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus iaculis consequat neque sed fringilla. Duis eleifend suscipit viverra. Nulla placerat interdum lorem non facilisis. Nunc efficitur posuere urna. Phasellus quis libero nec massa suscipit viverra eget et arcu. Nam at pretium purus. Donec at est et magna dictum tempus."),
              new DocumentParagraphData("Sed tempor quam sit amet bibendum suscipit. Phasellus a est felis. Nullam nec neque vulputate elit molestie feugiat a vitae magna. Donec sit amet vehicula felis, venenatis pellentesque dui. Mauris tempor pretium mi, id blandit sapien venenatis eget. Morbi vulputate facilisis massa nec ullamcorper. Nulla tortor ante, ultrices non ullamcorper eu, elementum vel ex. Suspendisse vel ex placerat, fringilla mi et, pharetra velit. In hac habitasse platea dictumst. Maecenas gravida justo a mi consequat ornare. Nullam lectus sapien, mollis quis magna quis, malesuada ornare metus. Nunc at varius lacus. Fusce lacus metus, luctus vitae ex ut, condimentum ullamcorper sem. Mauris blandit commodo velit, sed imperdiet ipsum porttitor at. Nunc eleifend pellentesque eros, convallis tincidunt nisl semper porta. Cras sit amet blandit risus, non mattis nibh."),
              new DocumentParagraphData("Aenean tempor metus nisl, vel sagittis quam rhoncus non. Donec id aliquet sapien. Mauris vehicula tincidunt dui, vitae consequat leo. Praesent feugiat fringilla risus a iaculis. Proin cursus interdum sodales. Aenean fermentum vehicula orci nec pulvinar. Curabitur orci felis, euismod quis ligula non, faucibus efficitur magna. Cras congue nisi at pulvinar bibendum. Fusce dignissim pellentesque tortor, non vulputate nisl condimentum finibus. Integer blandit sapien interdum, porttitor nibh sit amet, pharetra lacus. Morbi consectetur rutrum finibus."),
            ],
            new DocumentPageFooterData(1, 'footer.svg'),
            new DocumentPageHeaderData('header.svg')
        ),
        new DocumentPageData(
            [
              new DocumentParagraphData("Donec egestas dolor leo, in sodales augue commodo eget. Praesent erat nibh, aliquam et fermentum nec, pretium aliquam nisi. Morbi accumsan, ante vel lobortis ultrices, metus lorem condimentum tortor, luctus euismod metus lorem vel velit. Cras eu turpis nec libero euismod convallis. Fusce vitae est vel neque dignissim sagittis non vitae nisi. Aenean non risus et mauris consequat placerat. Pellentesque eget aliquam purus, nec scelerisque nulla. Maecenas in felis non sem lacinia lacinia. Aliquam quis molestie sapien, eget fringilla ante. Fusce sed lacus quis lacus molestie sollicitudin nec et lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce non mi scelerisque, porta nisl sed, scelerisque neque. Etiam quam neque, elementum nec sagittis eu, consectetur in ante. Sed nulla ex, molestie vel purus et, congue cursus lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
              new DocumentParagraphData("Proin porta tempor nisl et eleifend. Ut magna erat, pulvinar ut dui et, varius tincidunt enim. Donec congue urna id est maximus volutpat. Sed non sem leo. Duis libero arcu, sollicitudin a pulvinar tempor, vestibulum et urna. Aliquam at aliquam nulla. Ut vestibulum porttitor bibendum. Cras varius lacus justo, in convallis metus hendrerit sed. Nulla non rutrum metus."),
              new DocumentParagraphData("Nullam at iaculis quam. Morbi lorem augue, accumsan bibendum fringilla eget, suscipit vel quam. Nam varius diam felis, sed eleifend lacus vestibulum ac. Ut in neque vel ligula iaculis venenatis. Duis tempus tincidunt nulla nec sodales. Donec dapibus dui non ipsum dignissim, non sagittis arcu molestie. Vivamus eget elementum nulla. Cras fermentum fermentum elementum. Fusce tempor vel arcu nec consequat. Aliquam in ullamcorper magna, vel scelerisque leo. Phasellus luctus eget dolor id ultricies. In eu ornare odio, a euismod felis. Nullam ac auctor lorem. Integer pretium turpis eu neque mattis, a gravida nunc maximus. In egestas ante vitae elit gravida porttitor. Pellentesque ullamcorper diam pretium eros varius gravida."),
            ],
            new DocumentPageFooterData(2, 'footer.svg'),
            new DocumentPageHeaderData('header.svg')
        )
      ])
    }
  },
  methods: {
    downloadPdf() {
      const pdf = new jsPDF("portrait","in",'es');
      pdf.html(document.documentElement, {}).then((pdf) => {
        console.log(pdf);
      })
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@media print {
  #app {
    margin-top: 0px;
  }

  #download-pdf-button {
    display: none;
  }
}
</style>
