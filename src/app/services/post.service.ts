import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../model/Post';

const httpOptions={
  headers:new HttpHeaders( {'content-type':'application/json'}  )
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsUrl:string='https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost():Observable<Post[]>{
      return  this.http.get<Post[]>(this.postsUrl);
  }

  savePost(post:Post):Observable<Post> {
        return this.http.post<Post>(this.postsUrl,post,httpOptions);
  }

  updatePost(post:Post):Observable<Post> {  
    const updateUrl=`${this.postsUrl}/${post.id}`;
    return this.http.put<Post>(updateUrl, post, httpOptions);
  }
}
