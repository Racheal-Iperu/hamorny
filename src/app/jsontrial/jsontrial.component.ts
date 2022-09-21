import { Component, OnInit } from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {PostService} from "../services/post.service";
import {HttpClient} from "@angular/common/http";

export class Post{
constructor(
    public userID:number,
    public ID:number,
    public Title:string,
    public Body:string
){}
}

@Component({
  selector: 'app-jsontrial',
  templateUrl: './jsontrial.component.html',
  styleUrls: ['./jsontrial.component.scss']
})
export class JSONTrialComponent implements OnInit {
   posts:any; //Post[] = [];
  constructor(private service:PostService) { }

  ngOnInit(): void {
      //this.getPosts();
      this.service.getPosts()
          .subscribe(response => {
              this.posts = response;
          });
  }

  // getPosts(){
  //     this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(
  //         response=> {
  //             console.log(response);
  //             this.posts.push(response);
  //         })
  // }

}
