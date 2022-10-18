import { Component, Input, OnInit } from '@angular/core';
import { WordleService } from '@public/services/wordle.service';

// This component counts the number of hits in a row and also displays the record
@Component({
  selector: 'app-survival-mode',
  templateUrl: './survival-mode.component.html'
})
export class SurvivalModeComponent implements OnInit {

  @Input()
  public wordle : WordleService

  public actual : number = 1
  public best : number = 31

  // Subscribes to the observable indicating that a wordle has been successfully completed and increments one the actual variable
  ngOnInit(): void {
    this.wordle.onWordleWin.subscribe({
      next : (state) => {
        if(state) {
          this.actual++
        } else {
          this.actual = 1
        }
      }
    })
  }

}
