import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params, RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle} from '@angular/router'


// This component deals with the difficulty of wordle
@Component({
  selector: 'app-difficult-level',
  templateUrl: './difficult-level.component.html'
})
export class DifficultLevelComponent {

  @Input()
  public rootRoute : string = '';

  public difficulty : string = '';

  public dropdownMenu : boolean = false

  constructor(public _route : ActivatedRoute, public _router : Router) {
    _route.params.subscribe((params : Params) => {
      if (params["diff"] != undefined) {
        this.difficulty = params["diff"]
      } else {
        this.difficulty = "Normal"
      }
    })
    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  // Drop-down opens or close
  toggleDropdownMenu() {
    if (this.dropdownMenu) {
     this.dropdownMenu = false
    } else {
      this.dropdownMenu = true
    }
    
  }

}
