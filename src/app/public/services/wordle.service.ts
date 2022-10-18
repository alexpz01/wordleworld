import { Injectable } from '@angular/core';
import { WordleGlobalService } from '@core/services/wordle-global.service';
import { Observable, Subject } from 'rxjs';

// This class defines the inner workings of a wordle.

@Injectable({
  providedIn: 'root'
})
export class WordleService {

  private word : string = ''

  private wordleMode : string = ''
  private difficulty = ''

  private win$ : Subject<boolean> = new Subject<boolean>()
  public onWordleWin : Observable<boolean> = this.win$.asObservable()

  public wordleData : Array<Array<string>> = [];
  public wordleResults : Array<Array<number>> = [];

  private line : number = 0;
  private block : number = 0;
  private finished : boolean = false;

  private length : number = 0
  private lastIndex : number = 0;


  // Check that the correct word is of the indicated length.

  public init(mode : string, difficulty : string = "normal") {
    if (this.finished) {
      this.resetState()
      this.finished = false
    }
    this.wordleMode = mode
    this.difficulty = difficulty
    this.getWord()
  }

  private getWord() {
    const wgs = WordleGlobalService.getWordleGlobalService()
    switch(this.wordleMode) {
      case "DAILY":
        wgs.getDailyWord()
        .then((data: string) => {this.word = data.toUpperCase()}).
        then(() => {this.wordleGenerator()})
        break;
      case "RANDOM":
        wgs.getRandomWord(this.difficulty)
        .then((data: string) => {this.word = data.toUpperCase()}).
        then(() => {this.wordleGenerator()})
        break;
      case "SURVIVAL":
        wgs.getRandomWord(this.difficulty)
        .then((data: string) => { this.word = data.toUpperCase() }).
        then(() => {this.wordleGenerator()})
        break;
    }
    
  }

  // Create the wordle grid 

  public wordleGenerator() {
    this.length = this.word.length
    this.lastIndex = this.word.length - 1

    this.wordleData = []
    this.wordleResults = []
    while(this.wordleData.length < this.length) {
      const wordleLine = []
      const wordleResultsLine = []
      for (var i = 0; i < this.length; i++) {
        wordleLine.push('')
        wordleResultsLine.push(-1)
      }
      this.wordleData.push(Array.from(wordleLine))
      this.wordleResults.push(Array.from(wordleResultsLine))
    }
    
  }

  public addOne(letter : string) : number {
    if (this.finished) {
      return 0;
    }
    if (this.wordleData[this.line][this.lastIndex] == '') {
      this.wordleData[this.line][this.block] = letter.toUpperCase()
      this.block++;
    }
    return 1;
  }

  public removeOne() {
    if (this.finished) {
      return 0;
    }
    if (this.block > 0) {
      this.wordleData[this.line][this.block - 1] = ''
      this.block--;
    }
    return 1;
  }


  //Check that the line is complete to allow submit or not.

  public submit() {
    if (this.wordleData[this.line][this.lastIndex] !=  '') {
      if (this.comprobe()) {
        alert("HAS GANADO")
        this.win()
      } else {
        if (this.line == this.lastIndex) {
          alert("HAS PERDIDO")
          //LOSE
        } else {
          this.block = 0
          this.line++
        }
      }
    }
  }


  // Check if the wordle is correct
  // The processed variables are copies of the correct word and the entered word.
  // These will be used to avoid processing the same letter twice, deleting them when they have already been processed.

  private comprobe() : boolean {
    let key = 0;
    let processedWord = this.word.split("")
    let processedWordIntroduced = this.wordleData[this.line].slice(0)

    // Checks for correct letters and processes them, adding 1 to the key variable for each letter.
    for(var i : number = 0; i < this.length; i++) {
      const introduced = processedWordIntroduced[i]
      const correct = this.word[i]
      if (introduced == correct) {
        this.setState(introduced, i, 1)
        processedWord[i] = ''
        processedWordIntroduced[i] = ''
        key++
      }
    }

    // Process the rest of the letters

    for(var i : number = 0; i < this.length; i++) {
      const introduced = processedWordIntroduced[i]
      if (introduced != '' && processedWord.includes(introduced)) {
        this.setState(introduced, i, 2)
        var indexOfFirstCoincidence = processedWord.indexOf(introduced)
        processedWord[indexOfFirstCoincidence] = ""
      } else if(introduced != '') {
        this.setState(introduced, i, 0)
      }
    }


    if (key == this.length) {
      return true;
    } else {
      return false;
    }
  }


  // Style DOM elements according to whether they are correct or incorrect.
  // A letter is passed to identify the keyboard elements and the position of that letter in the wordle.

  private setState(letter : string, position : number, value : number) {
    const wordle = document.querySelectorAll(".block[data-line='" + this.line + "'][data-block='" + position + "']")
    const keyboard = document.querySelectorAll(".block[data-letter='" + letter + "']")
    const all = Array.from(wordle).concat(Array.from(keyboard))
    this.wordleResults[this.line][position] = value
    all.forEach((letter) => {
      switch(value) {
        case 0:
          letter.classList.add("incorrect")
          break;
        case 1:
          letter.classList.add("correct")
          break
        case 2:
          letter.classList.add("half")
          break;
      }
      
    })
    
  }

  // Resets the wordle status
  private resetState() {
    this.line = 0
    this.block = 0
    const all = document.querySelectorAll(".block")
    all.forEach(e => {
      if (e.classList.contains("correct")) {
        e.classList.remove("correct")
      }
      if (e.classList.contains("incorrect")) {
        e.classList.remove("incorrect")
      }
      if (e.classList.contains("half")) {
        e.classList.remove("half")
      }
    })
  }

  //Win the wordle
  private win() {
    this.finished = true

    // Update observable
    this.win$.next(true)

    // If gameMode is survival create a new wordle
    if (this.wordleMode == "SURVIVAL") {
      this.init("SURVIVAL", this.difficulty)
    }
  }

  
}
