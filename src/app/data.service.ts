import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private goals = new BehaviorSubject<any>([
    "The intitial goal",
    "Another life goal"
  ]);
  goal = this.goals.asObservable();

  constructor() {}

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
