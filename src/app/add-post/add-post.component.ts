import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { AddPostService } from '../add-post.service';
import { AuthService } from '../authentif/auth.service';
import { RegisterPayload } from '../authentif/register-payload';
import { PostPayload } from './post-paylaod';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  
  currentUser: RegisterPayload;   
  addPostForm: FormGroup;
  postPayload: PostPayload;
  title = new FormControl('');
  content = new FormControl('');
  description = new FormControl('');
  imageBlog= new FormControl(null);
  createdAt= new FormControl('');
  type= new FormControl('');


  constructor(private addpostService: AddPostService,public  authService: AuthService, private router: Router,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService) {
    this.currentUser= localStorageService.retrieve('user');

    this.addPostForm = new FormGroup({
      title: this.title,
      description: this.description,
      imageBlog: this.imageBlog,
      createdAt: this.createdAt,
      content: this.content,
      type:this.type,      
    });
    this.postPayload = {
      id: '',
      content: '',
      title: '',
      description: '',
      type:'',      
      username: '',
      imageBlog:null,
      createdAt:''

    }
  }

  ngOnInit() {
  }

  addPost() {
    this.postPayload.description = this.addPostForm.get('description').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.postPayload.type = this.addPostForm.get('type').value;

    this.postPayload.imageBlog = this.addPostForm.get('imageBlog').value;

    this.postPayload.username= this.currentUser.email;

      /* tslint:disable:no-unused-variable */
    this.addpostService.addPost(this.postPayload).subscribe( data => {
      this.router.navigateByUrl('/blog');
      console.log(data);
    }, error => {
      console.log('Failure Response');
    });
  }
}