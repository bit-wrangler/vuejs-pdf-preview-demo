import {DocumentElement} from "./DocumentElement";

export class DocumentParagraphData extends DocumentElement {
    /**
     * @param {string} text
     */
    constructor(text) {
        super(DocumentParagraphData.getTypeName());
        this.text = text;
    }

    static getTypeName() {
        return "DocumentParagraph";
    }
}