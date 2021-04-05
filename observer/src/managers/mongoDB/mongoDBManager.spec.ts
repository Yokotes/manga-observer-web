import { MongoDBManager } from "./mongoDBManager";
import { DataManager } from "../dataManager"
import { MangaDto } from "../../entities/mangaDto";

describe("MangaDB loader", () => {

    let mongoDBManager: DataManager

    beforeAll(() => {
        mongoDBManager = new MongoDBManager()
    });

    test("should return an array of manga dtos", () => {
        const mangas: MangaDto = mongoDBManager.loadData();
        expect(mangas).toBeInstanceOf(Array<MangaDto>());
    })

    test("should write new chapter to database", () => {
        const newChapterData = '5 (new chapter)'
        let mangas: MangaDto[] = mongoDBManager.loadData();
        let manga: MangaDto = mangas[0];
        manga.latestChapter = newChapterData

        mongoDBManager.updateMangaChapter(manga)

        mangas = mongoDBManager.loadData();
        manga = mangas[0];

        expect(manga.latestChapter).toEqual(newChapterData)
    });
});