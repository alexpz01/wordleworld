import { DailyWordle } from "./dailywordle.model"
import { Stats } from "./stats.model"

export class User {

    private _id = undefined

    private username : string = ''

    private experience : number = 0

    private dailyWordles : Array<DailyWordle> = []

    private stats : Stats

    private pass : string = ''

}