import { Injectable } from '@angular/core';
import { mantras } from '../data/mantras';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {

  data!:mantras;
constructor() { }

}
