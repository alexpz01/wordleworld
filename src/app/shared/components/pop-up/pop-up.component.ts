import { Component, OnInit } from '@angular/core';
import { PublicComponent } from '@public/public.component';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html'
})
export class PopUpComponent implements OnInit {
  
  public loading = false
  public show = false

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true
    }, 1)
  }

  close() {
    this.show = false
    setTimeout(() => {
      PublicComponent.clear()
    }, 300)
  }


  public startLoading() {
    if (!this.loading) {
      this.loading = true
    }
  }

  public stopLoading() {
    if (this.loading) {
      this.loading = false
    }
  }
}
