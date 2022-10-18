import { Component, EventEmitter, OnInit, Output } from '@angular/core';


// This component takes care of the on-screen keyboard
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html'
})
export class KeyboardComponent implements OnInit {

  public keys : Array<Array<string>> = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
    ["Z", "X", "C", "V", "B", "N", "M"]]

  constructor() {}

  // Emit an event to execute a method when a key is pressed.
  @Output() addLetterEvent = new EventEmitter()


  public addLetter(letter : string) {
    this.addLetterEvent.emit(letter)
  }

  ngOnInit(): void {

  }

}
