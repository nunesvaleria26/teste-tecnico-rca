import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.scss']
})
export class PostFeedComponent implements OnInit { 
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
