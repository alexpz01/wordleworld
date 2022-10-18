import { Injectable } from '@angular/core';

// This class defines the attributes and methods that are used when playing a wordle.
@Injectable({
  providedIn: 'root'
})
export class WordleGlobalService {

  private static wordleGlobalService : WordleGlobalService;

  public wordleMode = ''
  private word = 'TARTA'


  private gameModes : {DAILY : number, RANDOM : number, SURVIVAL : number} = {
    DAILY : 0,
    RANDOM : 1,
    SURVIVAL : 2
  }

  private gameMode : number = 0

  private constructor() { }

  public static getWordleGlobalService() {
    if (this.wordleGlobalService == undefined) {
      this.wordleGlobalService = new WordleGlobalService()
    }
    return this.wordleGlobalService
  }

  public getDailyWord() :Promise<string>{
    const response = new Promise<string>((resolve, reject) => {
      resolve("avion")
    })
    return response;
  }

  public getRandomWord(difficulty : string):Promise<string> {
    const response = new Promise<string>((resolve, reject) => {
      let w = ''
      switch(difficulty) {
        case "easy": w = "como"
          break;
        case "normal": w = "tarta"
          break;
        case "hard": w = "altura"
          break;
      }
      resolve(w)
    })
    return response;
  }


}
