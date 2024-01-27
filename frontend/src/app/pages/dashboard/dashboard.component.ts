import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chart: any = []
  bubble: any = [];
  pie: any;
  doughnut: any;
  data1 = [];
  constructor(
    private _userService: UserService,
  ) {
    this._userService.getChatData().subscribe((res: any) => {
      this.updateChartData(this.chart, res, 0, 'chart')
    })
    this._userService.getPieData().subscribe((res: any) => {
      this.updateChartData(this.doughnut, res.slice(0, 5), 0, 'doughnut');
      this.updateChartData(this.pie, res, 0, 'pie');
    })
  }
  ngOnInit(): void {


    // this.socket.on('doughnut', (res: string | any[]) => {
    //   this.updateChartData(this.doughnut, res.slice(0, 5), 0, 'doughnut');
    // })

    // this.socket.on('pie', (res: any) => {
    //   this.updateChartData(this.pie, res, 0, 'pie');
    // })

    // this.socket.on('bubble', (res: any) => {
    //   this.updateChartData(this.bubble, res, 0, 'bubble');
    // })

    Chart.register(...registerables);
    this.chart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'State vs Population'
          },
        },
      },
      data: {
        labels: ['Andhra Pradesh', 'Karnataka', 'Kerala', 'Tamil Nadu	', 'Telangana'],
        datasets: [
          {
            type: 'bar',
            label: 'Population',
            data: [],
            backgroundColor: 'rgba(255,0,0,0.4)',
            borderColor: 'rgba(255,0,0,0.4)',
          },
        ]
      }
    });

    let options = {
      // aspectRatio: 1,
      // legend: false,
      tooltips: false,
      // responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Bubble Chart'
        }
      },
      elements: {
        point: {
          borderWidth: function (context: any) {
            return Math.min(Math.max(1, context.datasetIndex + 1), 8);
          },
          hoverBackgroundColor: 'transparent',
          hoverBorderColor: function (context: any) {
            return "red";
          },
          hoverBorderWidth: function (context: any) {
            var value = context.dataset.data[context.dataIndex];
            return Math.round(8 * value.v / 1000);
          },
          radius: function (context: any) {
            var value = context.dataset.data[context.dataIndex];
            var size = context.chart.width;
            var base = Math.abs(value.v) / 1000;
            return (size / 24) * base;
          }
        }
      }
    };

    this.bubble = new Chart('bubble', {
      type: 'bubble',
      options: options,
      data: {
        datasets: [
          {
            backgroundColor: 'rgba(255,255,0,0.4)',
            label: 'Name 1',
            data: [{
              x: 50,
              y: 60,
              v: 200
            }, {
              x: 50,
              y: 80,
              v: 700
            }, {
              x: 80,
              y: 60,
              v: 100
            }, {
              x: 60,
              y: 60,
              v: 500
            }, {
              x: 90,
              y: 80,
              v: 800
            }]
          }, {
            backgroundColor: 'rgba(0,25,0,0.4)',
            label: 'Name 2',
            data: [{
              x: 60,
              y: 20,
              v: 200
            }, {
              x: 55,
              y: 70,
              v: 800
            }, {
              x: 80,
              y: 30,
              v: 500
            }, {
              x: 70,
              y: 40,
              v: 800
            }]
          }]
      }
    })

    this.doughnut = new Chart('doughnut', {
      type: 'doughnut',
      options: {
        responsive: true,
        plugins: {

          title: {
            display: true,
            text: 'Expense Doughnut'
          }, legend: {
            position: 'top',
          },
        }, animation: {
          animateScale: true,
          animateRotate: true
        }
      },
      data: {
        datasets: [{
          data: [],
          backgroundColor: ["red", "orange", "yellow", "green",],
          label: 'Dataset 1'
        }],
        labels: ['Travel', 'Food', 'Shopping', 'Rent']
      }
    })

    this.pie = new Chart('pie', {
      type: 'pie',
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Expense Pie'
          }, legend: {
            position: 'top',
          },
        }, animation: {
          animateScale: true,
          animateRotate: true
        }
      },
      data: {
        datasets: [{
          data: [],
          backgroundColor: ["red", "orange", "yellow", "green", "blue"],
          label: 'Dataset 1',
        }],
        labels: ['Travel', 'Food', 'Shopping', 'Rent']
      }
    })

  }

  addData(chart: { data: { labels: any[]; datasets: any[]; }; update: () => void; }, label: any, data: any) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset: { data: any[]; }) => {
      dataset.data.push(data);
    });
    chart.update();
  }

  removeData(chart: { data: { labels: void[]; datasets: any[]; }; update: () => void; }) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset: { data: void[]; }) => {
      dataset.data.pop();
    });
    chart.update();
  }

  updateChartData(chart: { data: { datasets: { [x: string]: { data: any; }; }; }; update: () => void; }, data: any, dataSetIndex: number, type: any) {
    chart.data.datasets[dataSetIndex].data = data;
    chart.update();
  }
}
