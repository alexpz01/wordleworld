import { Component, HostBinding } from '@angular/core';
import {NightModeService} from '@core/services/night-mode.service'
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public static _http : HttpClient
  
  
  title = 'wordle';

  constructor(private _router : Router, private http : HttpClient) {
    AppComponent._http = http
    _router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        NightModeService.getNightMode().updateInterface()
      }
    })
  }


  showLayoutMode() {
    alert(NightModeService.getNightMode().getMode())
  }
}
