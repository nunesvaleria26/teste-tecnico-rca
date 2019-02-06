import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = "https://jsonplaceholder.typicode.com/"         
  constructor(private http: HttpClient) { }

  public getPostList():Observable<Post[]>{
    return this.http.get<Post[]>(this.url + "posts/");
  }

  public getPostDetail(id):Observable<Post>{
    return this.http.get<Post>(this.url + "posts/" + id);
  }
}
