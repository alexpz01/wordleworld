import { Component } from '@angular/core';
import {NightModeService} from '@core/services/night-mode.service'
import { UserManagerService } from '@core/services/user-manager.service';
import {WordleGlobalService} from '@core/services/wordle-global.service'
import { PublicComponent } from '@public/public.component';
import { AppComponent } from 'src/app/app.component';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'utils-bar',
  templateUrl: './utils-bar.component.html'
})
export class UtilsBarComponent {

  public logged : UserManagerService = UserManagerService.manage()

  public showMenu : boolean = false;

  constructor(
    public wordleGlobalService : WordleGlobalService = WordleGlobalService.getWordleGlobalService()
    ) { 
  }

  // Change the page theme
  public changeLayoutMode() {
    NightModeService.getNightMode().switchMode()
  }

  // Opens or closes the drop-down menu
  swichMenuVisibility(mode : boolean = false) {
    this.showMenu = mode
  }

  // Open a popUp for logIn
  public openLogIn() {
    PublicComponent.createPopUp(LogInComponent)
  }

}
