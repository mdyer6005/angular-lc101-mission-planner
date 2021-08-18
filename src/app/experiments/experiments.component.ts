import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  listOfExperiments: string[] = [
    "Mars soil sample",
    "Plant growth in habitat",
    "Human bone density"
  ];
  editExperimentName: boolean = false;
  experimentBeingEdited: string = "";

  constructor() { }

  ngOnInit() {
  }

  add(experiment: string) {
    for (let i = 0; i < this.listOfExperiments.length; i++) {
      if (this.listOfExperiments[i].toLowerCase() === experiment.toLowerCase()) {
        return;
      }
    }
    this.listOfExperiments.push(experiment);
  }

  remove(experiment: string) {
    let index = this.listOfExperiments.indexOf(experiment);
    this.listOfExperiments.splice(index, 1);
  }

  edit(elementToEdit: string) {
    this.experimentBeingEdited = elementToEdit;
  }

  save(newName: string) {
    this.listOfExperiments[this.listOfExperiments.indexOf(this.experimentBeingEdited)] = newName;
    this.experimentBeingEdited = "";
  }

}
