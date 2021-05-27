import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentPayload } from './post-details/CommentPayload';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  constructor(private httpClient: HttpClient) { }

  getAllCommentsForPost(postId: number): Observable<Array<CommentPayload>> {
    return this.httpClient.get<Array<CommentPayload>>('http://localhost:8080/posts/comments/' + postId);
  }

  postComment(commentPayload: CommentPayload, postId: number): Observable<any> {
    return this.httpClient.post('http://localhost:8080/posts/comments/'+ postId, commentPayload);
  }
}
