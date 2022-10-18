import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserManagerService } from '@core/services/user-manager.service';
import { PublicComponent } from '@public/public.component';
import { LogInComponent } from '../log-in/log-in.component';

// This component displays a drop-down menu for navigation.
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  @Input()
  public show : boolean = false;

  @Output() hideEvent = new EventEmitter()

  public logged : UserManagerService = UserManagerService.manage()

  // Login or logout
  public log(n : boolean) {
    if (n) {
      PublicComponent.createPopUp(LogInComponent)
    } else {
      UserManagerService.manage().logOut()
    }
  }


  // Close menu
  close() {
    this.hideEvent.emit()
  }

}
