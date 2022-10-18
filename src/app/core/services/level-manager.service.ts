import { Injectable } from '@angular/core';

// This class converts the total experience into useful information such as the current level or the points remaining for the next level.
@Injectable({
  providedIn: 'root'
})
export abstract class LevelManagerService {

  private static experience : number = 0

  constructor() { }

  public static getInfoFor(experience : number) {
    const data : Array<number>= []
    LevelManagerService.experience = experience
    return LevelManagerService.getInfo()
  }

  private static getInfo() : Array<number> {
    var level : number = 1
    var requiredExperience : number = 0
    var forNextLevel = 20;
    while(LevelManagerService.experience > forNextLevel) {
      requiredExperience = forNextLevel
      level++
      forNextLevel = Math.round(requiredExperience + (level * 20)) 
    }
    return [level, requiredExperience, forNextLevel]
  }
}
