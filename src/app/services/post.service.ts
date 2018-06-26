import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts = [];
  postSubject = new Subject<any[]>();

  constructor() { }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  savePost() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      });
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePost();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postE1) => {
        if (postE1 === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePost();
    this.emitPosts();
  }

  loveIt(post: Post) {
    ++post.loveIts;
    console.log(post.loveIts);
    this.savePost();
    this.emitPosts();
  }

  notLoveIt(post: Post) {
    --post.loveIts;
    console.log(post.loveIts);
    this.savePost();
    this.emitPosts();
  }

}
