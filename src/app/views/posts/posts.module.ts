import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostShowComponent } from './post-show/post-show.component';
import { PostEditComponent } from './post-edit/post-edit.component';

@NgModule({
  declarations: [PostsListComponent, PostAddComponent, PostShowComponent, PostEditComponent],
  imports: [CommonModule, PostsRoutingModule],
})
export class PostsModule {}
