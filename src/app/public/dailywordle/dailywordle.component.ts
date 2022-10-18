import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '@public/contact/contact.component';
import { WordleService } from '@public/services/wordle.service';
import { LogInComponent } from '@shared/components/log-in/log-in.component';

// This component creates a wordle with DAILY mode.
@Component({
  selector: 'wordlehome',
  templateUrl: './dailywordle.component.html',
  providers : [WordleService]
})
export class DailyWordleComponent {
  constructor(public wordle : WordleService){wordle.init("DAILY")}
}
