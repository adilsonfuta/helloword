import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {PostService} from '../../services/post.service';
import {Post} from '../../model/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private PostService: PostService,
  ) { }

  ngOnInit() {
    const id=+this.route.snapshot.paramMap.get('id');
    this.PostService.getPost(id).subscribe(
      post=>this.post=post);
  }

}
