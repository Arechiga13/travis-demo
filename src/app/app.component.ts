import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';
import { PwaService } from './pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient, public Pwa: PwaService) {}
  // constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(fetchedPosts => (this.posts = fetchedPosts));
  }

  installPwa(): void {
    console.log("Here")
    console.log(this.Pwa.promptEvent)
    this.Pwa.promptEvent.prompt();
  }

}
