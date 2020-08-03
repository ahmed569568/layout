import { Component, OnInit } from '@angular/core';
import { PostsService } from '@app/@shared/services/posts.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss'],
})
export class PostAddComponent implements OnInit {
  submitted: boolean;

  constructor(
    private postsServices: PostsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  addForm: FormGroup;

  ngOnInit(): void {
    this.buildAddForm();
  }

  addPost(data: any) {
    this.postsServices.addPost(data).subscribe((res) => {
      console.log(res, 'res');
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.postsServices.addPost(this.addForm.value).subscribe(
      (res) => {
        this.toastr.success('posted add successfuly', 'success', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
        });
        this.router.navigate(['../admin/posts']);
      },
      (err) => {
        this.toastr.error('posted notAdd successfuly', 'success', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
        });
      }
    );
  }
  get f() {
    return this.addForm.controls;
  }

  buildAddForm() {
    this.addForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
    });
  }
}
