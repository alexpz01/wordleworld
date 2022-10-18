import { Component, OnInit } from '@angular/core';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { UserManagerService } from '@core/services/user-manager.service';


// This component manages the user login, extends the PopUp component in order to be added as such.
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html'
})
export class LogInComponent extends PopUpComponent  {
  public user : string = ''
  public pass : string = ''

  // Send values of inputs to UserManagerService, in case of success it executes the onResult method, in case of failure it executes onError.
  public onSubmit() {
    // Loading icon visible
    this.startLoading()

    UserManagerService.manage().logIn(this.user, this.pass)
    .subscribe({next : this.onResult, error : this.onError})
  }


  private onResult = (res : string) => {
    // Loading icon invisible
    this.stopLoading()

    // Close popUp
    this.close()
  }

  private onError = (error : string) => {
    // Loading icon invisible
    this.stopLoading()

    // Close popUp
    this.close()
  }

  
}
