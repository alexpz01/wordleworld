import {NgModule} from '@angular/core'

import {CommonModule}  from '@angular/common'
import {SharedModule} from '@shared/shared.module'
import {PublicRoutingModule} from './public-routing.module'

import {PublicComponent} from './public.component'
import {DailyWordleComponent} from "./dailywordle/dailywordle.component"

import {HowPlayComponent} from './howplay/howplay.component';
import { ColaboreComponent } from './colabore/colabore.component';
import { ContactComponent } from './contact/contact.component';
import { GamerulesComponent } from './howplay/components/gamerules/gamerules.component';
import { RandomWordleComponent } from './random-wordle/random-wordle.component';
import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './profile/components/user-info/user-info.component';
import { UserProgressbarComponent } from './profile/components/user-progressbar/user-progressbar.component';
import { UserStatsComponent } from './profile/components/user-stats/user-stats.component';
import { SurvivalWordleComponent } from './survival-wordle/survival-wordle.component';
import { SurvivalModeComponent } from './survival-wordle/components/survival-mode/survival-mode.component';

@NgModule({
    imports: [CommonModule, SharedModule, PublicRoutingModule],
    declarations : [
        PublicComponent,
        DailyWordleComponent,
        HowPlayComponent,
        ColaboreComponent,
        ContactComponent,
        GamerulesComponent,
        RandomWordleComponent,
        ProfileComponent,
        UserInfoComponent,
        UserProgressbarComponent,
        UserStatsComponent,
        SurvivalWordleComponent,
        SurvivalModeComponent],
    exports : [
        PublicComponent
    ],
    providers : []
})

export class PublicModule {
    constructor(){}
}