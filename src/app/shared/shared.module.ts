import {NgModule} from '@angular/core'
import {CommonModule}  from '@angular/common'
import {RouterModule} from '@angular/router'

import {UtilsBarComponent} from './components/utils-bar/utils-bar.component'
import {BlackscreenComponent} from './components/blackscreen/blackscreen.component'
import {MenuComponent} from './components/menu/menu.component'
import { WordleGridComponent } from './components/wordlegrid/wordlegrid.component'
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { DifficultLevelComponent } from './components/difficult-level/difficult-level.component';
import { ProgressbarelemComponent } from './components/progressbarelem/progressbarelem.component';
import { StatBarComponent } from './components/stat-bar/stat-bar.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PopUpComponent } from './components/pop-up/pop-up.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
    declarations : [
        UtilsBarComponent, 
        BlackscreenComponent,
        MenuComponent,
        WordleGridComponent,
        KeyboardComponent,
        DifficultLevelComponent,
        ProgressbarelemComponent,
        StatBarComponent,
        LogInComponent,
        PopUpComponent,
    ],
    exports : [
        UtilsBarComponent, 
        BlackscreenComponent, 
        MenuComponent,
        WordleGridComponent,
        KeyboardComponent,
        DifficultLevelComponent,
        ProgressbarelemComponent,
        StatBarComponent,
        LogInComponent,
        PopUpComponent,
        FormsModule,
        HttpClientModule],
    providers : []
})

export class SharedModule {
    constructor(){}
}