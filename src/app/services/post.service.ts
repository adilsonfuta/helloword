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

  Url:string='https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost():Observable<Post[]>{
      return  this.http.get<Post[]>(this.Url);
  }

  savePost(post:Post):Observable<Post> {
        return this.http.post<Post>(this.Url,post,httpOptions);
  }

  updatePost(post:Post):Observable<Post> {  
    const updateUrl=`${this.Url}/${post.id}`;
    return this.http.put<Post>(updateUrl, post, httpOptions);
  }

  // deletePost(post:Post):Observable<Post>{    
  //   const eliminarUrl=`${this.Url}/${post.id}`;
  //     return this.http.delete<Post>(eliminarUrl, post,  httpOptions);
  // }

  EliminarPost():Observable<Post>{    
    const removerurl=`${this.Url}/${1}`;
    return this.http.delete<Post>(removerurl,httpOptions);
  }



}
