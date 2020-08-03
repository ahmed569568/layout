import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1OTU4Njc4NzcsImV4cCI6MTU5NTg3MTQ3N30.S_k8y6UI-r0qdinOCCY60awZPyNV6426AngsURnmLAM`,
    }),
  };
  constructor(private http: HttpClient) {}

  // Get All items
  getAll() {
    return this.http.get(`${environment.serverUrl}/posts`, this.httpOptions);
  }

  // delete post
  deletePost(id: any) {
    return this.http.delete(`${environment.serverUrl}/posts/${id}`, this.httpOptions);
  }
  //add Post
  addPost(data: any) {
    return this.http.post(`${environment.serverUrl}/posts`, data, this.httpOptions);
  }
}
