import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blog } from '../data/blog';

@Injectable({
  providedIn: 'root'
})
export class MediumBlogsService {

  constructor(private http:HttpClient) { }

  getPost(){
   return this.http.get<blog>('https://mediumpostsapi.vercel.app/api/mechatron2022')
  }
}
