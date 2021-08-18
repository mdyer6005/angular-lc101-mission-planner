import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  pileOfEquipment: string[] = [
    "Habitat dome",
    "Drones",
    "Food containers",
    "Oxygen tanks"
  ];
  editEquipmentName: boolean = false;
  equipmentBeingEdited: string = "";

  constructor() { }

  ngOnInit() {
  }

  add(pieceOfEquipment: string) {
    for (let i = 0; i < this.pileOfEquipment.length; i++) {
      if (this.pileOfEquipment[i].toLowerCase() === pieceOfEquipment.toLowerCase()) {
        return;
      }
    }
    this.pileOfEquipment.push(pieceOfEquipment);
  }

  remove(pieceOfEquipment: string) {
    let index = this.pileOfEquipment.indexOf(pieceOfEquipment);
    this.pileOfEquipment.splice(index, 1);
  }

  edit(elementToEdit: string) {
    this.equipmentBeingEdited = elementToEdit;
  }

  save(newName: string) {
    this.pileOfEquipment[this.pileOfEquipment.indexOf(this.equipmentBeingEdited)] = newName;
    this.equipmentBeingEdited = "";
  }

}
