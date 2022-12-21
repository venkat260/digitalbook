import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';
import { Book } from '../book';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  errorMessage = '';

 bookList:Book[]=[];
 bookKey:any=[];
  bookValue:any =[];

  search: any = {
    title: null,
    author: null,
    publisher: null,
    category:null,
    price:[(0)]
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  onSubmit(): void {
    const { category, title, author,price,publisher } = this.search;
    this.userService.search(category, title, author,price,publisher).subscribe(
      data => {
        this.bookList=JSON.parse(data)
         
        console.log(this.bookList);
      },
      err => {
        this.errorMessage = err.error.message;
        
      }
    );

  }

  
  


} 
