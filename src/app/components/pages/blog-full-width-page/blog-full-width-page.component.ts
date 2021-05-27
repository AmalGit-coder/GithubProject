import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentif/auth.service';

@Component({
  selector: 'app-blog-full-width-page',
  templateUrl: './blog-full-width-page.component.html',
  styleUrls: ['./blog-full-width-page.component.scss']
})
export class BlogFullWidthPageComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
