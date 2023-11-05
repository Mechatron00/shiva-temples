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
    
      console.log(data);
      
      this.blogs = data.dataMedium;
      console.log(this.blogs);
      // this.blogs = this.blogsArray.reverse();
      
      
    }
   )
  }
  //dummy data
// blogsArray=[
//   {
//     date: new Date(),
//     description: "description 1",
//     image: "",
//     link: "",
//     tags:['shiva','spiritual','temples',],
//     title:"Title 1"
//   },
//   {
//     date: new Date(),
//     description: "description 2",
//     image: "",
//     link: "",
//     tags:['shiva, spiritual, temples, hinduism'],
//     title:"Title 2"
//   },
//   {
//     date: new Date(),
//     description: "description 2",
//     image: "",
//     link: "",
//     tags:['shiva, spiritual, temples, hinduism'],
//     title:"Title 2"
//   },
//   {
//     date: new Date(),
//     description: "description 3",
//     image: "",
//     link: "",
//     tags:['shiva, spiritual, temples, hinduism'],
//     title:"Title 3"
//   },
//   {
//     date: new Date(),
//     description: "description 4",
//     image: "",
//     link: "",
//     tags:['shiva, spiritual, temples, hinduism'],
//     title:"Title 4"
//   },
//   {
//     date: new Date(),
//     description: "description 5",
//     image: "",
//     link: "",
//     tags:['shiva, spiritual, temples, hinduism'],
//     title:"Title 5"
//   },
//   {
//     date: new Date(),
//     description: "description 5",
//     image: "",
//     link: "",
//     tags:['shiva, spiritual, temples, hinduism'],
//     title:"Title 5"
//   },
//   {
//     date: new Date(),
//     description: "description 5",
//     image: "",
//     link: "",
//     tags:['shiva'],
//     title:"Title 5"
//   },
//   {
//     date: new Date(),
//     description: "description 5",
//     image: "",
//     link: "",
//     tags:['shiva, spiritual, temples'],
//     title:"Title 5"
//   },
//   {
//     date: new Date(),
//     description: "description 5",
//     image: "",
//     link: "",
//     tags:['shiva, spiritual, temples, hinduism'],
//     title:"Title 5"
//   },
//   {
//     date: new Date(),
//     description: "description 5",
//     image: "",
//     link: "",
//     tags:['shiva, spiritual, temples, hinduism'],
//     title:"Title 5"
//   },
//   {
//     date: new Date(),
//     description: "description 5",
//     image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Temple_front_view_2.jpg",
//     link: "",
//     tags:['Shiva',
//      ' Spiritual Awakening',
//       'Spirituality',
//       'Spiritual Growth',
//       'Spiritual'],
//     title:"Title 5"
//   },

// ]
}
