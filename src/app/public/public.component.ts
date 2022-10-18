import {Component, ViewContainerRef} from '@angular/core'
import { LogInComponent } from '@shared/components/log-in/log-in.component'


@Component({
    selector : 'app-public',
    templateUrl : './public.component.html'
}) 
export class PublicComponent {

    // Creates a container in which components can be dynamically generated.
    private static popUpManager : ViewContainerRef

    constructor(public vcr  : ViewContainerRef) {
        PublicComponent.popUpManager = vcr
    }


    // Adds a component to popUp container
    public static createPopUp(popUp : any) {
        this.popUpManager.clear()
        this.popUpManager.createComponent(popUp)
    }

    // Clear popUp container
    public static clear() {
        this.popUpManager.clear()
    }
}