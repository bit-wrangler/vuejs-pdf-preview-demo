import {DocumentParagraphData} from "./DocumentParagraphData";

export class DocumentElement {
    /**
     * @param {string} type
     */
    constructor(type) {
        this.type = type;
    }

    /**
     *
     * @param dto
     */
    static hydrate(dto) {
        switch (dto.type) {
            case DocumentParagraphData.getTypeName():
                return new DocumentParagraphData(dto.text);
            default:
                throw "unknown DocumentElement type";
        }
    }
}