import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { throwError } from 'rxjs';
import { AddPostService } from 'src/app/add-post.service';
import { PostPayload } from 'src/app/add-post/post-paylaod';
import { RegisterPayload } from 'src/app/authentif/register-payload';
import { CommentService } from '../comment.service';
import { CommentPayload } from './CommentPayload';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  currentUser: RegisterPayload;
  post: PostPayload;
  postId: number;
  commentForm: FormGroup;
  commentPayload: CommentPayload;
  comments: CommentPayload[];
  username:string;
  email:string;
  title:string; 
  permaLink: number;



  constructor(private router: ActivatedRoute, private postService: AddPostService, 
    private route:Router, private commentService: CommentService,
    private localStorageService: LocalStorageService) { 

      this.currentUser= localStorageService.retrieve('user');


    this.postId = this.router.snapshot.params.id;
    this.postService.getPostById(this.postId).subscribe((data:PostPayload) => {
      this.post = data;
   console.log(data);
      
    }, error => {
      throwError(error);
      console.log('Failure Response');

    });

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required)
    });
    this.commentPayload = {
      text: '',
      username: this.currentUser.email,
      postId: this.postId
    };

}



ngOnInit(): void {

}



  // ngOnInit(): void {
  //   this.getPostById();
  //   this.getCommentsForPost();
  //   console.log(this.currentUser.email);

  // }


  
  postComment() {
    this.commentPayload.text = this.commentForm.get('text').value;
    this.commentService.postComment(this.commentPayload, this.postId).subscribe(data => {
      this.commentForm.get('text').setValue('');
      this.commentForm.get('username').setValue(this.currentUser.email);
      
      this.getCommentsForPost();
    }, error => {
      throwError(error);
    })
  }

  private getPostById() {
    this.postService.getPostById(this.postId).subscribe(data => {
      this.post = data;
      this.email= this.currentUser.email;

    }, error => {
      throwError(error);
    });
  }

  private getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.postId).subscribe(data => {
      this.comments = data['content'];
      this.username= this.currentUser.email;
      console.log(this.currentUser.email);

    }, error => {
      throwError(error);
    });
  }




  

}
