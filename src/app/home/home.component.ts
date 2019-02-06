import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts:Post[]
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPostList().subscribe(
      response => {
        this.posts = response
      }
    )
  }

}
