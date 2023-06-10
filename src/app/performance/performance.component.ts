import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BeinexService } from '../beinex.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css'],
})
export class PerformanceComponent implements AfterViewInit {
  pageViews: any;
  clicksData: any;
  chart: any;
  pageViewGraphlabels: any = [];
  pageViewGraphdata: any = [];
  clickViewGraphlabels: any = [];
  clickViewGraphdata: any = [];
  @ViewChild('performanceChart') performanceChart!: ElementRef;
  constructor(private service: BeinexService, private chartElem: ElementRef) {}
  ngOnInit() {
    this.service.getPageViews().subscribe((data) => {
      this.pageViews = data;
      data.forEach((element) => {
        this.pageViewGraphlabels.push(element.Month);
        this.pageViewGraphdata.push(element.pageView);
      });
      console.log(data);
    });
    this.service.getClicks().subscribe((data) => {
      this.clicksData = data;
      data.forEach((element) => {
        this.clickViewGraphlabels.push(element.Month);
        this.clickViewGraphdata.push(element.clicks);
      });
    });
  }
  onPageViewCick(e: Event) {
    this.createPageViewChart();
  }
  onClicksMenuClick(e: Event) {
    this.createClicksViewChart();
  }
  createPageViewChart() {
    let chartExist = Chart.getChart('performanceChart'); // <canvas> id
    if (chartExist != undefined) chartExist.destroy();
    let gradient = this.performanceChart.nativeElement
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgb(145, 166, 255)');
    gradient.addColorStop(1, 'rgb(255, 255, 255)');

    this.chart = new Chart(
      this.performanceChart.nativeElement.getContext('2d'),
      {
        type: 'line',

        data: {
          labels: this.pageViewGraphlabels,
          datasets: [
            {
              data: this.pageViewGraphdata,
              backgroundColor: gradient,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          elements: {
            line: {
              borderColor: '#6ca9ea',
              borderWidth: 2,
              fill: true,
            },
          },
          aspectRatio: 3.0,
        },
      }
    );
  }
  createClicksViewChart() {
    var chartExist = Chart.getChart('performanceChart');
    if (chartExist != undefined) chartExist.destroy();
    let gradient = this.performanceChart.nativeElement
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgb(247, 212, 212)');
    gradient.addColorStop(1, 'rgb(246, 236, 196)');
    this.chart = new Chart(
      this.performanceChart.nativeElement.getContext('2d'),
      {
        type: 'line',

        data: {
          labels: this.clickViewGraphlabels,
          datasets: [
            {
              data: this.clickViewGraphdata,
              backgroundColor: gradient,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          elements: {
            line: {
              borderColor: '#6ca9ea',
              borderWidth: 2,
              fill: true,
            },
          },
          aspectRatio: 3.0,
        },
      }
    );
  }
  ngAfterViewInit(): void {
    this.createPageViewChart();
  }
}
