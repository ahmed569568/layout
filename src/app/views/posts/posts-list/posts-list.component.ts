import { Component, OnInit } from '@angular/core';
import { PostsService } from '@app/@shared/services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts: any = [];
  constructor(private postsServices: PostsService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.postsServices.getAll().subscribe((res) => {
      this.posts = res;
    });
  }
}
