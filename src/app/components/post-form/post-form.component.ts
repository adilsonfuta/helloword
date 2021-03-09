import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Post} from '../../model/Post'
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPost: EventEmitter<Post>=new EventEmitter();
  @Output() atualizarPost: EventEmitter<Post>=new EventEmitter();
  @Input() currentPost:Post;
  @Input() isEdit:boolean;


  constructor(private postService:PostService) { }

  ngOnInit() {
  }

  addPost(title, body) {
    if (!title || !body) {
      alert('Please add Post');
    } else {
        this.postService.savePost({title, body} as Post ).subscribe(post=>{
         this.newPost.emit(post);
        });
    }
  }

  updatePost(){
   this.postService.updatePost(this.currentPost)
   .subscribe(post=> {
     this.isEdit=false;
     this.atualizarPost.emit(post);
    } ); 
  }


  // RemovePost(){
  //   this.postService.deletePost(this.currentPost).subscribe(post=>{
  //     console.log(post);
  //   });
  // }


DeletePOST(){
  this.postService.EliminarPost().subscribe(post=>{
    console.log(post.id);
  });
}





}
