import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  maxCrewSize: number = 3;
  showPhoto: boolean = false;
  photoToShow: string = "";
  
  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(person: object) {
    console.log("before check:", this.inCrew);
    this.inCrew = this.isAlreadyInCrew(person);
    console.log("after check:", this.inCrew);
    if (this.inCrew) {
      this.removeCrewMember(person);
    } else if (this.crew.length < this.maxCrewSize) {
      this.crew.push(person);
    }    
  }

  removeCrewMember(person: object) {
    let index = this.crew.indexOf(person);
    this.crew.splice(index, 1);
  }

  isAlreadyInCrew(person: object) {
    console.log(person);
    for (let i=0; i < this.crew.length; i++) {
      let crewName: string = this.crew[i]['name'];
      let personName: string = person['name'];
      if (crewName.toLowerCase() === personName.toLowerCase()) {
        return true;
      }      
    }
    return false;
  }

  crewIsFull() : boolean {
    return this.crew.length >= this.maxCrewSize;
  }

  putUpPhoto(person) {
    this.photoToShow = person['photo'];
    this.showPhoto = true;
  }

  takeDownPhoto() {
    this.photoToShow = "";
    this.showPhoto = false;
  }


}
