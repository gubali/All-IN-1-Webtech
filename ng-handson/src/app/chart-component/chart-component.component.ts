import { HttpClient } from '@angular/common/http';
import { Component, effect, Input, OnInit } from '@angular/core';
import { Chart, ChartData, ChartType, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SignalService } from '../services/signal.service';
Chart.register(...registerables);
@Component({
  selector: 'app-chart-component',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chart-component.component.html',
  styleUrl: './chart-component.component.less',
})
export class ChartComponentComponent implements OnInit {
  @Input() childMessage: string = '';
  mainSignalChartData: any;
  currentQuote: any;
  testchartData: any;
  ///// test
  myChartData: any;
  myLabel: any[] = [];
  myData: any[] = [];
  color: string[] = [];
  constructor(private http: HttpClient, private signalservice: SignalService) {
    // console.log('test');
    // console.log('test', this.signalservice.getData());
    // this.signalservice.currentQuote.subscribe(
    //   (quote) => (this.currentQuote = quote)
    // );
    // effect(() => {
    //   console.log('effect');
    //   if (this.mainSignalChartData != null) {
    //     debugger;
    // this.myLabel = this.mainSignalChartData.lebel;
    // this.myData = this.mainSignalChartData.data;
    // this.color = this.mainSignalChartData.color;
    //     } else {
    //       alert('signal is empty');
    //     }
    //   });
    // }
  }
  ngOnInit(): void {
    // console.log('chart component');

    // this.signalservice.currentQuote.subscribe(
    //   (quote) => (this.currentQuote = quote)
    // );
    console.log('data coming from exp-httpcomponent');
    // console.log('sss', this.currentQuote);
    this.signalservice.get();
    // console.log(this.signalservice.data);
    // this.initChartData(this.myLabel, this.myData, this.color);
    this.getApi();
  }

  getApi() {
    this.http.get('http://localhost:3000/Sales').subscribe((elem: any) => {
      this.myChartData = elem;
      if (this.myChartData != null) {
        this.myLabel = this.myChartData.lebel;
        this.myData = this.myChartData.data;
        this.color = this.myChartData.color;
        this.initChartData(this.myLabel, this.myData, this.color);
      }
    });
  }

  initChartData(labelData: any, myData: any, bgcolor: any) {
    new Chart('myChart', {
      type: 'pie',
      data: {
        labels: labelData,
        datasets: [
          {
            label: '# of Votes',
            data: myData,
            borderWidth: 2,
            backgroundColor: bgcolor,
          },
        ],
      },
    });
  }
}
