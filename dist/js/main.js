"use strict";

Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('chart-container', {
    chart: {
      type: 'bar',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100
    },
    title: {
      text: null
    },
    data: {
      googleSpreadsheetKey: '1lIvfnaL4AJY_QmTCBujZzZaBNYKxDzanaorY2IHJ8ZY',
      startRow: 1,
      endRow: 9
    },
    plotOptions: {
      bar: {
        groupPadding: .1
      }
    },
    legend: {
      align: 'right',
      symbolRadius: 0,
      verticalAlign: 'top',
      x: 10,
      itemMarginBottom: 5,
      floating: true,
      layout: 'vertical'
    },
    xAxis: {
      labels: {
        style: {
          whiteSpace: 'nowrap'
        }
      }
    },
    yAxis: {
      title: false,
      labels: {
        useHTML: true,
        overflow: 'allow',
        formatter: function formatter() {
          return this.value.toLocaleString();
          ;
        }
      },
      max: 1800,
      tickAmount: 7
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      padding: 10,
      valuePrefix: '$'
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            spacingRight: 20
          },
          tooltip: {
            enabled: false
          }
        }
      }]
    }
  });
});