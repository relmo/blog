import { Component } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*posts = [
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
  ];*/

  constructor() {
    const config = {
      apiKey: "AIzaSyCIdqTWsSf9dZIdterzQQBLotqAo_QnxLY",
      authDomain: "blog-44705.firebaseapp.com",
      databaseURL: "https://blog-44705.firebaseio.com",
      projectId: "blog-44705",
      storageBucket: "blog-44705.appspot.com",
      messagingSenderId: "706226926260"
    };
    firebase.initializeApp(config);
  }

}
