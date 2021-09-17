export class DocumentPageData {
    /**
     *
     * @param {DocumentElement[]} content
     * @param {DocumentPageFooterData | undefined} footer
     * @param {DocumentPageHeaderData | undefined} header
     */
    constructor(content, footer, header) {
        this.content = content;
        this.footer = footer;
        this.header = header;
    }
}