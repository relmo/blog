import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Post 1',
      content: 'POSYYHHJHGGHXGHGHGHGHXGHHGXHGVHVXXGHGHXGHXGHXGHXGHXGHGHXGHXGHGHGHXVVBX',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Post 2',
      content: 'POSYYHHJHGGHXGHGHGHGHXGHHGXHGVHVXXGHGHXGHXGHXGHXGHXGHGHXGHXGHGHGHXVVBX',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Post 3',
      content: 'POSYYHHJHGGHXGHGHGHGHXGHHGXHGVHVXXGHGHXGHXGHXGHXGHXGHGHXGHXGHGHGHXVVBX',
      loveIts: 0,
      created_at: new Date()
    }
  ];

}
