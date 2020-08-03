import { Component, OnInit } from '@angular/core';
import { PostsService } from '@app/@shared/services/posts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts: any = [];
  constructor(private postsServices: PostsService, private modalService: NgbModal, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.postsServices.getAll().subscribe((res) => {
      this.posts = res;
    });
  }
  deletePost(model: any, id: any) {
    this.modalService.open(model).result.then(
      (result) => {
        this.postsServices.deletePost(id).subscribe(
          (res) => {
            this.toastr.success('posted deleted successfuly', 'success', {
              timeOut: 3000,
              closeButton: true,
              progressBar: true,
            });
            this.getAll();
          },
          (err) => {
            this.toastr.error(err.statusText, 'Error', { timeOut: 3000, closeButton: true, progressBar: true });
          }
        );
      },
      (resone) => {
        console.log(resone);
      }
    );
  }
}
