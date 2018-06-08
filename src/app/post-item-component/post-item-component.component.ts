import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-item-component',
  templateUrl: './post-item-component.component.html',
  styleUrls: ['./post-item-component.component.css']
})
export class PostItemComponentComponent implements OnInit {

  @Input() post: {
    title: string,
    content: string,
    loveIts: number,
    created_at, Date
  };



  constructor() { }

  ngOnInit() {
  }

  onLove() {
    this.post.loveIts++;
    console.log(this.post.loveIts);
  }

  onNoLove() {
    this.post.loveIts--;
    console.log(this.post.loveIts);
  }

  green() {
    if (this.post.loveIts > 0) {
      return 'green';
    }
  }

  red() {
    if (this.post.loveIts < 0) {
      return 'red';
    }
  }

  getColor() {
    if (this.post.loveIts > 0) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'red';
    }
  }

}
