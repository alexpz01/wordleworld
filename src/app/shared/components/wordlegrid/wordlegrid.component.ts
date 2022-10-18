import { Component, Input, OnDestroy} from '@angular/core';
import {WordleService} from '@public/services/wordle.service'

// This components render the wordles grid
@Component({
  selector: 'wordle-grid',
  templateUrl: './wordlegrid.component.html',
  providers : [WordleService]
})
export class WordleGridComponent implements OnDestroy {

  private ALLOWED :string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'

  // The wordles title
  @Input()
  public title : string = ''

  // The wordle class
  @Input()
  public wordle : any = undefined;

  constructor() {
    this.addLetterEvent()
  }

  // Create eventListenerers for all keys on keyboard
  public addLetterEvent() {
    document.addEventListener('keydown', this.letterEvent)
  }

  private letterEvent = (key : any) => {
    this.addLetter(key.key)
  };

  // Add a letter to wordle, determines whether the key is a delete or submit key.
  public addLetter(key : string) {
    if (key == "Backspace") {
      this.wordle.removeOne()
    } else if(key == 'Enter') {
      this.wordle.submit()
    } else {
      if (this.ALLOWED.includes(key.toUpperCase())) {
        this.wordle.addOne(key)
      }
    }
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.letterEvent)
    console.log("destruido")
  }
}
