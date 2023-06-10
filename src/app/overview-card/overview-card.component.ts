import {
  Component,
  ElementRef,
  ViewChild,
  HostBinding,
  HostListener,
} from '@angular/core';
import { BeinexService } from '../beinex.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.css'],
})
export class OverviewCardComponent {
  chart: any;
  pageViewGraphlabels: any = [];
  pageViewGraphdata: any = [];
  pageViews: any;
  @HostBinding('class.vertical') isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }
  checkScreenSize() {
    const isMobile = window.matchMedia('(max-width: 950px)').matches;
    this.isMobile = isMobile;
  }
  @ViewChild('overviewChart') performanceChart!: ElementRef;
  constructor(private service: BeinexService) {
    this.service.getPageViews().subscribe((data) => {
      this.pageViews = data;
      data.forEach((element) => {
        this.pageViewGraphlabels.push(element.Month);
        this.pageViewGraphdata.push(element.pageView);
      });
      console.log(data);
    });
  }
  ngAfterViewInit(): void {
    this.createPageViewChart();
  }
  createPageViewChart() {
    let chartExist = Chart.getChart('overviewChart');
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
          scales: {
            x: { display: false },
            y: { display: false },
          },
          elements: {
            line: {
              borderColor: '#6ca9ea',
              borderWidth: 1,
              fill: true,
            },
          },
          aspectRatio: 4.0,
        },
      }
    );
  }
}
