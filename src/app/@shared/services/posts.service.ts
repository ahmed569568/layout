import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1OTUxODIyMzUsImV4cCI6MTU5NTE4NTgzNX0.Xxo8Yg29_wzVgUwfstJRKKsSKKiNtN8PU2T7JCeQ92Q`,
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
}
