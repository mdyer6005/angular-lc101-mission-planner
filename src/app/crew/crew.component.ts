import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true }
  ];
  editCrewName: boolean = false;
  astronautBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    for (let i=0; i < this.crew.length; i++) {
      if (this.crew[i].name.toLowerCase() === memberName.toLowerCase()) {
        return;
      }
    }
    this.crew.push({ name: memberName, firstMission: isFirst });
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.astronautBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;    
    this.astronautBeingEdited = null;
    }
}
