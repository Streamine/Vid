import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {
 rows = [];

  temp = [];

  columns = [
    { prop: 'id' },
	{ name: 'image' },
    { name: 'titre' },
    { name: 'description' },
    { name: 'date' },
	{ name: 'chaine' },
    { name: 'categorie' },
    { name: 'duree' },
	{ name: 'likes' },
    { name: 'vues' },
    { name: 'status' }
  ];

  constructor() {
    this.fetch((data) => {
      // cache our list
      this.temp = [...data];
      // push our inital complete list
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/fr_videos.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateFilter(event) {
    const val = event.target.value;
    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
  }
  
  onClickRemove(index){

    this.rows.splice(index, 1);
  }
	VideoDetails() {
    window.location.href='videos/details';
}

}
