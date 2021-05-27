import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { AddPostService } from 'src/app/add-post.service';
import { AddPostComponent } from 'src/app/add-post/add-post.component';
import { PostPayload } from 'src/app/add-post/post-paylaod';
import { AuthService } from 'src/app/authentif/auth.service';
import { RegisterPayload } from 'src/app/authentif/register-payload';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.scss']
})
export class Post1Component implements OnInit {

posts: PostPayload[];
postForm: FormGroup;
postPayload: PostPayload;
currentUser: RegisterPayload;
myGroup: FormGroup;

email:string;
username:string;
data$: Observable<object>;

  constructor(private postService : AddPostService, public  authService: AuthService,
    private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,
    private localStorageService: LocalStorageService) { 
      this.currentUser= localStorageService.retrieve('user');
 
    }



  ngOnInit() {
     this.getAllPosts();
     console.log(this.currentUser);
     console.log(this.currentUser.email);



    }


     getAllPosts(){
 
        this.postService.getAllPosts()
          .subscribe(
            data => {
             this.posts = data['content'];
            //  console.log(this.posts,"hello");
             // console.log(data);
             this.email= this.currentUser.email;

            },
            error => {
              console.log(error);
            });
      
            

      }
      
    
    
    }


    
