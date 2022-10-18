import { Injectable } from '@angular/core';


// This class is a singleton that stores and manages the theme of the page.
@Injectable({
  providedIn: 'root'
})
export class NightModeService {

  private static nightModeService : NightModeService;

  private modes : Array<string> = ["day", "night"]

  private actualMode = 0;

  private constructor() {
    this.updateInterface()
  }

  // Get the singleton instance
  public static getNightMode() : NightModeService {
    if (NightModeService.nightModeService == undefined) {
      NightModeService.nightModeService = new NightModeService()
      return NightModeService.nightModeService;
    } else {
      return NightModeService.nightModeService;
    }
  }

  public getMode() : string {
    return this.modes[this.actualMode]
  }

  // Change theme mode and updates interface
  public switchMode() {
    if (this.actualMode == 0) {
      this.actualMode = 1
    } else {
      this.actualMode = 0
    }
    this.updateInterface()
  }

  // Updates all DOM elements with the dynamic class and toggles a night or a day class depending on the currentMode variable
  public updateInterface() {
    const allDynamicElements = document.getElementsByClassName("dynamic")
    for(var i : number = 0; i < allDynamicElements.length; i++) {
      const element = allDynamicElements[i]
      switch(this.getMode()) {    
        case "day" :
          if (element.classList.contains("night")) {
            element.classList.remove("night")
          }
          break;
        case "night" :
          if (!element.classList.contains("night")) {
            element.classList.add("night")
          }        
          break;
      }
    }
    
  }
}
