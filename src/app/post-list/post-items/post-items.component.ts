import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-items',
  templateUrl: './post-items.component.html',
  styleUrls: ['./post-items.component.css']
})
export class PostItemsComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLove(post: Post) {
    this.postService.loveIt(post);
  }

  onDontLove(post: Post) {
    this.postService.notLoveIt(post);
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }

}
