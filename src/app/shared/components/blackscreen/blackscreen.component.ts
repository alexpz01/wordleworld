import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


// This component displays a black background over the entire document that closes when you click on it.
@Component({
  selector: 'app-blackscreen',
  templateUrl: './blackscreen.component.html'
})
export class BlackscreenComponent implements OnInit {

  @Input()
  public show : boolean = false;

  @Output()
  public hideEvent = new EventEmitter()

  public hideMenu() {
    this.hideEvent.emit()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
