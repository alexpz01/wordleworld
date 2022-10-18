import { Injectable } from '@angular/core';
import { WordleService } from '@public/services/wordle.service';
import { Router, ActivatedRoute, Params} from '@angular/router'

// This component is used when a wordle has a number of difficulties
@Injectable({
    providedIn: 'root'
})
export class DifficultyService {

    public difficulty :string = ''
    constructor(public wordle : WordleService, public _route : ActivatedRoute) {}

    // This method is executed at each redirection inside the wordle and receives the difficulties from the url
    private getDifficultyFromParams() {
        this._route.params.subscribe((params : Params) => {
          this.difficulty = params['diff']
        })
    }

    // This method initializes the service, obtains the difficulty and passes it to the wordle.
    public init(mode : string) {
        this.getDifficultyFromParams()
        if (this.difficulty == undefined) {
            this.wordle.init(mode)
          } else {
            this.wordle.init(mode, this.difficulty)
          }
    }
    
}
