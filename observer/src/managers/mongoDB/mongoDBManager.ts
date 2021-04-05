import { MangaDto } from "../../entities/mangaDto";
import { DataManager } from "../dataManager";
import * as MongoDB from "mongodb";
import { secret } from '../../secret';

export class MongoDBManager implements DataManager {

  private client: MongoDB.MongoClient;

  constructor() {

  }

  loadData() {
    const empty: MangaDto[] = []

    return empty
  }

  updateMangaChapter() {
    
  }
}