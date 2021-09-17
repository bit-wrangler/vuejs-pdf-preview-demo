import {DocumentParagraphData} from "../models/DocumentParagraphData";

export class DocumentElementFactory {
    /**
     *
     * @param {DocumentElement} documentElement
     */
    static build(documentElement) {
        if (documentElement instanceof DocumentParagraphData) {
            // const el = defineComponent(DocumentParagraph);

            return null;
        }
        throw "documentElement of unknown type";
    }
}