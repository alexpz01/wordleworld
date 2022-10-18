import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import { DailyWordleComponent } from './dailywordle/dailywordle.component'
import { ProfileComponent } from './profile/profile.component'
import { HowPlayComponent } from './howplay/howplay.component'
import { ContactComponent } from './contact/contact.component'
import { ColaboreComponent } from './colabore/colabore.component'
import { RandomWordleComponent } from './random-wordle/random-wordle.component'
import { SurvivalWordleComponent } from './survival-wordle/survival-wordle.component'

const routes : Routes = [
    {path : "", component : DailyWordleComponent},
    {path : "profile", component : ProfileComponent},
    {path : "howtoplay", component : HowPlayComponent},
    {path : "wordle", component : RandomWordleComponent},
    {path : "wordle/:diff", component : RandomWordleComponent},
    {path : "survival", component : SurvivalWordleComponent},
    {path : "survival/:diff", component : SurvivalWordleComponent},
    {path : "contact", component : ContactComponent},
    {path : "colabore", component : ColaboreComponent}
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class PublicRoutingModule {

}