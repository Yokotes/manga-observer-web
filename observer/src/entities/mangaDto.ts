type MangaDtoData = {
    _id: string;
    title: string;
    img: string;
    description: string;
    latestChapter: string;
    subscribers: string[];
}

export class MangaDto {
    _id: string;
    title: string;
    img: string;
    description: string;
    latestChapter: string;
    subscribers: string[];

    constructor(mangaData: MangaDtoData) {
        this._id = mangaData._id
        this.title = mangaData.title
        this.img = mangaData.img
        this.description = mangaData.description
        this.latestChapter = mangaData.latestChapter
        this.subscribers = mangaData.subscribers
    }
}