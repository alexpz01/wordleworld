import { Component, Input, OnInit } from '@angular/core';

// This component is used to display statistics in a clear way.
@Component({
  selector: 'app-stat-bar',
  templateUrl: './stat-bar.component.html'
})
export class StatBarComponent implements OnInit{

  // A rgb colors map with string colors keys
  private realColors : Map<string, string> = new Map<string, string>()

  // This array must contain all of the names of the values
  @Input()
  public stateBarDataNames : Array<string> = ["Ganadas", "Perdidas", "Empatadas"]

  // This array must contain all of the values in the same order as the names.
  @Input()
  public stateBarDataValues : Array<number> = [13, 24, 32]

  // This array contains the colors in order for the values
  @Input()
  public stateBarColors : Array<string> = ["green", "red", "blue", "purple", "yellow", "orange", "pink"]

  // This array contains the percentages of each value
  public stateBarPerc : Array<number> = []

  private totalValue : number = 0

  constructor() { this.initColors() }

  ngOnInit(): void {
    this.getPercentaje()
  }

  // Determines if no data is available
  public isVoid() {
    if (this.stateBarDataNames.length == 0) {
      return true
    }

    var key : number = 0
    this.stateBarDataValues.map((value) => {
      if (value == 0) {
        key++
      }
    })

    if (key == this.stateBarDataNames.length) {
      return true
    } else {
      return false
    }
  }

  // Set the real colors
  private initColors(){
    this.realColors.set("red", 'rgb(255, 163, 163)')
    this.realColors.set("green", 'rgb(202, 255, 181)')
    this.realColors.set("blue", 'rgb(192, 186, 255)')
    this.realColors.set("purple", 'rgb(255, 191, 255)')
    this.realColors.set("yellow", 'rgb(252, 255, 193)')
    this.realColors.set("orange", 'rgb(252, 255, 193)')
    this.realColors.set("yellow", 'rgb(252, 255, 193)')
  }


  // Calculates the sum of all values
  private getTotal() {
    this.stateBarDataValues.forEach((value) => {
      this.totalValue = this.totalValue + value
    })
  }

  // Calculates the percentage of each value
  public getPercentaje() {
    this.getTotal()
    this.stateBarDataValues.map((value) => { 
      this.stateBarPerc.push(value * 100 / this.totalValue)}
    )
  }

  // Return the real rgb color by pass a color string
  public getRealColor(color : string) : string | undefined{
    return this.realColors.get(color)
  }

  // Round the percentage of the indicated element and returns it
  public getRoundBar(index : number) {
    return Math.round(this.stateBarPerc[index])
  }

  

}
