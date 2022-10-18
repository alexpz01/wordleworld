import { Injectable } from '@angular/core';
import { LevelManagerService } from '@core/services/level-manager.service';

// This service is used to display the user's level appropriately.
@Injectable({
    providedIn: 'root'
})
export class ProgressBarService {

    public level = 0

    // The minimum experience on actual level
    public min: number = 0

    // The maximum experience on actual level
    public max: number = 0

    // The difference between min and max experience
    public totalDiference: number = 0

    // The actual experience amount
    public actual: number = 4

    // The difference between actual and max experience
    public actualDiference: number = 0

    // The percentage completed of the current level
    public perc: number = 0

    constructor() {
        this.getDataFromExperience()
        this.calculateDiferences()
        this.calculatePerc()
    }

    // Gets the current level information from the manager class and sets the variables level, min and max.
    private getDataFromExperience() {
        var results =  LevelManagerService.getInfoFor(this.actual)
        this.level = results[0]
        this.min = results[1]
        this.max = results[2]
    }

    // Update the differences and percentage
    private refresh() {
        this.calculateDiferences()
        this.calculatePerc()
    }

    // Adds a certain number of experience, which is added progressively.
    // If the percentage exceeds 100%, the level is recalculated with getDataFromExperience.
    // When the current level of experience is equal to the required level, the process ends.
    add(number: number) {
        const objetive = this.actual + number
        const interval = setInterval(() => {
            if (this.perc >= 100) {
                this.getDataFromExperience()
            }
            if (this.actual < objetive) {
                this.actual++
                this.refresh()
            } else {
                clearInterval(interval)
            }
        }, 40)
    }

    private calculateDiferences() {
        this.totalDiference = this.max - this.min
        this.actualDiference = this.actual - this.min
    }

    private calculatePerc() {
        this.perc = Math.round(this.actualDiference * 100 / this.totalDiference)
    }
    
}