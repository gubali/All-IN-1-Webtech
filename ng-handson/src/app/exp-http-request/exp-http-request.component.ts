import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { getDataModel, postModel } from '../modal/post.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-exp-http-request',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exp-http-request.component.html',
  styleUrl: './exp-http-request.component.less',
})
export class ExpHttpRequestComponent implements OnInit {
  public loadPostData: postModel[] = [];
  public getLoadData: any;
  isLoading = false;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    // this.getAllComments();
  }
  onCreatePost(postData: { name: string; salary: string; age: string }) {
    console.log(postData);
    this.http
      .post('https://dummy.restapiexample.com/api/v1/create', postData)
      .subscribe((res) => {
        console.log(res);
      });
  }
  getAllComments() {
    this.isLoading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((res: any) => {
        this.getLoadData = res;
        this.isLoading = false;
        console.log(this.isLoading);
      });
  }
}
function res(value: Object): void {
  throw new Error('Function not implemented.');
}
