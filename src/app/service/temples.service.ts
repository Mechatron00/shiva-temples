import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { temples } from '../data/temple-data';
import { templesData } from '../data/data';
@Injectable({
  providedIn: 'root'
})
export class TemplesService {
  items: MenuItem[] = [];
  filteredData: temples[] = [];
  templesData: temples[] = templesData;
  found:boolean = false;
  temple!:temples;
constructor(private http:HttpClient) { }


getTemples(){
  return this.http.get<temples[]>('https://api.npoint.io/d6eda1d536bc9f381182')
}

getSortedTemples(startIndex: number, endIndex: number) {
  this.filteredData = this.templesData.sort((a, b) => {
    const nameA = a.basic.name.toLowerCase();
    const nameB = b.basic.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  this.filteredData = this.templesData.slice(startIndex, endIndex);
  console.log('sliced', this.filteredData);
}

filterTemple(tag: string) {
  this.filteredData = templesData.filter((data) => {
    const num = parseInt(data.tag[1]);
    return data.tag[0].toLowerCase().match(tag.toLowerCase())?.sort();
  });
  this.filteredData = this.filteredData.sort((a, b) => {
    const nameA = a.tag[1];
    const nameB = b.tag[1];

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  // this.templesData = this.filteredData;
}
}

