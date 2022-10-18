import { Component, OnInit } from '@angular/core';
import { LevelManagerService } from '@core/services/level-manager.service';
import { ProgressBarService } from '@public/services/progress-bar.service';

@Component({
  selector: 'app-progressbarelem',
  templateUrl: './progressbarelem.component.html',
  providers : [ProgressBarService]
})
export class ProgressbarelemComponent {

  constructor(public progressBarService : ProgressBarService) {}

}
