export class StaticImage {
    static getUrl(path) {
        return require(`@/assets/${path}`);
    }
}