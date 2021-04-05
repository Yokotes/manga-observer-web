import { MangaDto } from "../entities/mangaDto";

export interface DataManager {
    loadData(): any[];
    updateMangaChapter(): void;
}