import { Component, OnInit } from '@angular/core';
import { MediumBlogsService } from './medium-blogs.service';
import { blog } from '../data/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
 
  blogs=[{
    date: new Date(),
    description: "",
    image: "",
    link: "",
    tags:[''],
    title:""
  }];

  tags:string[]=[];
  constructor(private blogService:MediumBlogsService){}
  ngOnInit(): void {
   this.blogService.getPost().subscribe(
    data=>{
    
      this.blogs = data.dataMedium.reverse();
      // console.log(this.blogs);
      
      
      
    }
   )
  }

}
