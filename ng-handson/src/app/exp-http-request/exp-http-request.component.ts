import {
  HttpClient,
  HttpHandler,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { getDataModel, postModel } from '../modal/post.model';
import { CommonModule } from '@angular/common';
import { SignalService } from '../services/signal.service';
import { ChartComponentComponent } from '../chart-component/chart-component.component';
@Component({
  selector: 'app-exp-http-request',
  standalone: true,
  imports: [FormsModule, CommonModule, ChartComponentComponent],
  templateUrl: './exp-http-request.component.html',
  styleUrl: './exp-http-request.component.less',
})
export class ExpHttpRequestComponent implements OnInit {
  public loadPostData: postModel[] = [];
  public getLoadData: any;
  isLoading = false;
  parentMessage = 'Hello from Parent!';
  // let search = new HttpParams();
  // search.append('')
  constructor(private http: HttpClient, private signalservice: SignalService) {}
  ngOnInit() {
    // this.getAllComments();
  }
  onCreatePost(postData: { name: string; salary: string; age: string }) {
    console.log(postData);
    this.http
      .post('https://dummy.restapiexample.com/api/v1/create', postData, {
        headers: new HttpHeaders({ 'Custom-header': 'Hello' }),
        params: new HttpParams().set('print', 'pretty'),
        observe: 'response',
        responseType: 'json',
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
  getAllComments() {
    this.isLoading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/comments', {
        observe: 'response',
      })
      .subscribe((res: any) => {
        this.getLoadData = res;
        this.isLoading = false;
        console.log(this.getLoadData);
        console.log(this.isLoading);
      });
  }
  pushDataToSignal() {
    debugger;
    this.http.get('http://localhost:3000/Sales').subscribe((elem: any) => {
      // this.signalservice.data = elem;
      this.signalservice.updateQuote({ elem });
    });
  }
}
function res(value: Object): void {
  throw new Error('Function not implemented.');
}
