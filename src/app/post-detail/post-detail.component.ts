import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  public post:Post
  constructor(private route: ActivatedRoute, private postService:PostService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPostDetail(params.id);
    });
  }

  public getPostDetail(id) {
    this.postService.getPostDetail(id).subscribe(
        response => {
          this.post = response
        }
      )
  }

}
