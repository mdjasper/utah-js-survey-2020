const charts = []

const tooltip = {
  backgroundColor: '#fff'
}

const dataLabels = {
  enabled: true,
  crop: false,
  overflow: 'none',
  color: '#000',
  align: 'center',
  format: '{point.y}',
  y: -5,
  style: {
    fontSize: '13px',
    fontFamily: 'Verdana, sans-serif'
  }
}

charts.push({
  c: "job-titles-chart",
  d: {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Job titles'
    },
    xAxis: {
        categories: [
          "Junior Developer",
          "Mid-level Developer",
          "Senior Developer",
          "Engineering Manager",
          "Other"
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Responses'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
      name: 'Job Titles',
      data: [13, 50, 51, 4, 3],
      colorByPoint: true,
      dataLabels
    }]
  }
})

charts.push({
  c: "job-titles-experience",
  d:{

    chart: {
      type: 'boxplot'
    },

    title: {
      text: 'Experience by Job Title'
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: ['Junior', 'Mid-level', 'Senior', 'Engineering Manager'],
      title: {
        text: 'Job titles'
      }
    },

    yAxis: {
      title: {
        text: 'Years of Experience'
      },
      // min: 0,
      // max: 40,
      tickInterval: 5
    },

    series: [{
      name: 'Years of Experience',
      colorByPoint: true,
      lineWidth:3,
      data: [
        [1, 1, 1.615384615, 2, 3.5],
        [2, 2, 3.79, 4.75, 8],
        [3, 5, 9.529411765, 11, 25],
        [10, 11.5, 12.5, 13.5, 15]
      ],
      tooltip: {
        headerFormat: '<em>Job Title: {point.key}</em><br/>'
      }
    }
  ]}
})

charts.push({
  c: "overall-experience",
  d: {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Overall Experience'
    },
    subtitle: {
      text: 'Bucketed by 3 years'
  },
    yAxis: {
        title: {
            text: 'Responses'
        },
        tickInterval: 5
    },
    xAxis: {
      categories: ['0-3', '3-7', '7-10', '10-14', '14-17', '17-21', '21-24', '24-27'],
      title: {
        text: 'Years of experience'
      }
    },
    series: [{
        name: 'Responses',
        data: [
          42,33,25,7,8,3,2,1
        ]
    }]
}
})

charts.push({
  c: "gender",
  d: {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Gender'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            // showInLegend: true
        }
    },
    series: [{
        name: 'Responses',
        colorByPoint: true,
        data: [
        //   {
        //     name: 'Chrome',
        //     y: 61.41,
        //     sliced: true,
        //     selected: true
        // },
         {
            name: 'Male',
            y: 106
        }, {
            name: 'Female',
            y: 11
        }, {
            name: 'Other',
            y: 5
        }]
    }]
}
})

charts.push({
  c: "total-comp-with-nones",
  d:{

    chart: {
      type: 'boxplot'
    },

    title: {
      text: 'Cash Compensation (aka Salary)'
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: ['All Responses'],
      title: {
        text: 'Compensation'
      }
    },

    yAxis: {
      title: {
        text: 'Cash Compensation aka Salary'
      },
      min: 0,
      tickInterval: 25000
    },

    series: [{
      name: 'Total Compensation',
      colorByPoint: true,
      lineWidth:3,
      data: [
        [24000,81000,106369.9174,134000,195000]
      ],
      tooltip: {
        headerFormat: '<em>Job Title: {point.key}</em><br/>'
      }
    }
  ]}
})

charts.push({
  c: "total-comp-by-experience",
  d: {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    // accessibility: {
    //     description: 'A scatter plot compares the height and weight of 507 individuals by gender. Height in centimeters is plotted on the X-axis and weight in kilograms is plotted on the Y-axis. The chart is interactive, and each data point can be hovered over to expose the height and weight data for each individual. The scatter plot is fairly evenly divided by gender with females dominating the left-hand side of the chart and males dominating the right-hand side. The height data for females ranges from 147.2 to 182.9 centimeters with the greatest concentration between 160 and 165 centimeters. The weight data for females ranges from 42 to 105.2 kilograms with the greatest concentration at around 60 kilograms. The height data for males ranges from 157.2 to 198.1 centimeters with the greatest concentration between 175 and 180 centimeters. The weight data for males ranges from 53.9 to 116.4 kilograms with the greatest concentration at around 80 kilograms.'
    // },
    title: {
        text: 'Cash Compensation by Years of Experience'
    },
    // subtitle: {
    //     text: 'Sum of salary, liquid equity, and cash bonuses'
    // },
    xAxis: {
        title: {
            enabled: true,
            text: 'Years of experience'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
        min:0,
        max:26
    },
    yAxis: {
        title: {
            text: 'Cash Compensation'
        },
        tickInterval: 25000
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} years, ${point.y}'
            }
        }
    },
    series: [{
        name: 'Responses',
        color: 'rgba(223, 83, 83, .5)',
        data: [[1,60000],[5.5,105000],[2.5,65000],[8,95000],[10,155000],[18,160000],[4,88000],[8,140000],[4,115000],[7,78000],[5,148000],[3,71000],[2,55000],[14,195000],[3.5,100000],[2,87550],[10,160000],[3.5,106000],[10,130500],[2,70000],[3,85000],[6,120000],[10,110000],[2,105900],[7,112500],[5,90000],[22,140000],[4,99910],[3,140000],[7,85000],[15,142000],[2,60500],[8,145000],[3,85000],[5,95000],[6,139000],[1,75400],[13,170000],[6,115000],[2,77000],[1,24000],[2,95000],[10,148000],[3,80000],[11,104000],[4.5,96800],[4,85000],[6,80000],[10,97000],[4,90000],[3,95000],[2,70000],[2,87000],[8,88000],[7,105000],[2,63000],[16,135000],[7,92000],[5,121150],[3.5,80000],[7,140000],[14,150000],[5,125000],[12,135000],[20,150000],[9,130000],[16,178200],[4,95000],[8,130000],[5,120000],[16,135000],[11,170000],[11,135000],[3,82500],[2,104000],[4,75000],[1,64000],[4,100000],[3,130000],[2,57000],[2,60000],[3,72000],[5,112350],[2,55000],[8,65000],[6,145000],[21,165000],[5,90000],[4,85000],[25,125000],[7,115000],[2,86000],[17,170000],[4,74000],[3,120000],[15,145000],[1,70000],[4,180000],[1,90000],[11,109000],[12,120000],[10,155000],[3,90000],[2,72000],[2.5,67000],[10,143500],[5,120000],[5,80000],[8,105000],[1,60000],[4,106000],[20,150000],[2,93000],[7,134000],[3,85000],[8,115000],[2,40000],[3,108000],[4,81000],[2,115000],[3,80000]]

    }]
}
})

charts.push({
    c: "comp-comparison",
    d: {
      chart: {
          type: 'scatter',
          zoomType: 'xy'
      },
      // accessibility: {
      //     description: 'A scatter plot compares the height and weight of 507 individuals by gender. Height in centimeters is plotted on the X-axis and weight in kilograms is plotted on the Y-axis. The chart is interactive, and each data point can be hovered over to expose the height and weight data for each individual. The scatter plot is fairly evenly divided by gender with females dominating the left-hand side of the chart and males dominating the right-hand side. The height data for females ranges from 147.2 to 182.9 centimeters with the greatest concentration between 160 and 165 centimeters. The weight data for females ranges from 42 to 105.2 kilograms with the greatest concentration at around 60 kilograms. The height data for males ranges from 157.2 to 198.1 centimeters with the greatest concentration between 175 and 180 centimeters. The weight data for males ranges from 53.9 to 116.4 kilograms with the greatest concentration at around 80 kilograms.'
      // },
      title: {
          text: 'Salary by Experience'
      },
      subtitle: {
          text: 'Grouped by year'
      },
      xAxis: {
          title: {
              enabled: true,
              text: 'Years of experience'
          },
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true,
          min:0,
          max:40
      },
      yAxis: {
          title: {
              text: 'Salary (base cash compensation)'
          },
          tickInterval: 25000
      },
      plotOptions: {
          scatter: {
              marker: {
                  radius: 5,
                  states: {
                      hover: {
                          enabled: true,
                          lineColor: 'rgb(100,100,100)'
                      }
                  }
              },
              states: {
                  hover: {
                      marker: {
                          enabled: false
                      }
                  }
              },
              tooltip: {
                  headerFormat: '<b>{series.name}</b><br>',
                  pointFormat: '{point.x} years, ${point.y}'
              }
          }
      },
      series: [{
        name: '2020',
        color: 'rgba(83, 83, 223, .5)',
        data: [[1,60000],[5.5,105000],[2.5,65000],[8,95000],[10,155000],[18,160000],[4,88000],[8,140000],[4,115000],[7,78000],[5,148000],[3,71000],[2,55000],[14,195000],[3.5,100000],[2,87550],[10,160000],[3.5,106000],[10,130500],[2,70000],[3,85000],[6,120000],[10,110000],[2,105900],[7,112500],[5,90000],[22,140000],[4,99910],[3,140000],[7,85000],[15,142000],[2,60500],[8,145000],[3,85000],[5,95000],[6,139000],[1,75400],[13,170000],[6,115000],[2,77000],[1,24000],[2,95000],[10,148000],[3,80000],[11,104000],[4.5,96800],[4,85000],[6,80000],[10,97000],[4,90000],[3,95000],[2,70000],[2,87000],[8,88000],[7,105000],[2,63000],[16,135000],[7,92000],[5,121150],[3.5,80000],[7,140000],[14,150000],[5,125000],[12,135000],[20,150000],[9,130000],[16,178200],[4,95000],[8,130000],[5,120000],[16,135000],[11,170000],[11,135000],[3,82500],[2,104000],[4,75000],[1,64000],[4,100000],[3,130000],[2,57000],[2,60000],[3,72000],[5,112350],[2,55000],[8,65000],[6,145000],[21,165000],[5,90000],[4,85000],[25,125000],[7,115000],[2,86000],[17,170000],[4,74000],[3,120000],[15,145000],[1,70000],[4,180000],[1,90000],[11,109000],[12,120000],[10,155000],[3,90000],[2,72000],[2.5,67000],[10,143500],[5,120000],[5,80000],[8,105000],[1,60000],[4,106000],[20,150000],[2,93000],[7,134000],[3,85000],[8,115000],[2,40000],[3,108000],[4,81000],[2,115000],[3,80000]]
      },{
        name: '2019',
        color: 'rgba(223, 83, 83, 1)',
        data: [[15,115000],[3.5,90000],[5,83000],[12,102000],[8,95000],[4,75000],[13,145000],[3,97000],[10,134286],[9,145000],[3,90000],[2.5,80000],[4,93600],[13,126000],[1,90000],[12,170000],[4.5,101000],[5,80000],[1,72000],[3,85000],[3,75000],[21,140000],[3,115000],[1,60000],[1.5,60000],[6.5,137000],[2,68000],[3,87500],[4,165000],[10,100000],[2,67000],[1.5,60000],[1,50000],[3,72500],[3.5,118000],[5,119000],[8,110000],[4,112000],[9,90000],[4,90000],[5,135000],[2,72000],[8,115000],[3,86000],[6,89100],[3,77000],[3,84771],[1,55000],[1,75000],[3,83411.64],[5,135000],[4,109200],[15,138000],[4,110000],[2,77000],[13,155000],[4,91000],[1.5,93800],[11,170000],[1,78000],[2,60000],[2,102000],[5,105000],[2.5,90000],[2,103000],[3,50000],[1,85000],[5,171350],[12,95000],[5,130000],[19,160000],[6.5,108000],[8,106000],[2.5,80000],[11,38500],[2,90000],[8,130000],[36,100000],[1,72000],[1,70000],[4,82000],[5,144000],[3,85000],[2,70000],[5,85000],[4,88000],[14,137000],[15,140000],[3,75000],[2,104000],[6,105000],[2,70000],[5,125000],[5,80000],[5,91000],[2,75000],[4,80000],[40,170000],[1,87000],[1,40000],[4,110700],[16,107000],[4,95000],[7,87400],[5.6,109000],[4,95000],[1.5,72000],[7,100000],[1,57500],[1,80000],[3.5,70000],[4,83600],[3,73000],[20,110000],[0,57500],[5,111000],[8,110000],[3,80000],[10,110000],[1,75000],[5,1],[2,90000],[15,145000],[20,100000],[2,102000],[2.5,66000],[1,72000],[8,88000],[10,150000],[3,72000],[1,90000],[3,100000],[20,127000],[21,140000],[2,76000],[1,67000],[8,115000],[5,95],[35,100000],[10,120],[8,95000],[1,42000],[2,54000],[10,130000],[2,31000],[1,110000],[2,50000],[5,141000],[2.5,80000],[1,60000],[8,145000],[8,112000],[1.5,94000],[3,120000],[2,110000],[7,100000],[4,81000],[5,115000],[0,30000],[15,165000],[6,84000],[20,100000],[3,90000],[7,120750],[0,1],[0,1],[1.5,90000],[12,145000],[0.4,50000],[4,89000],[6,110000],[1.5,48000],[9,138000],[12,106000],[3,75000],[2,67500],[0.5,75000],[4,54000],[3,72000],[1,65000],[6,80000],[4,110000],[3,100000],[8,79900],[2.5,94000],[8,48000],[1,72000],[5,110900],[2,55000],[8,135000],[4,130000],[5,105000],[8,151000],[0.5,50000],[4,60000],[12,69300],[0.5,37542],[4,94000],[0,1],[20,100000],[3,75000],[1,85000],[20,135000],[12,70000],[0,65000],[24,140000],[3,80000]]
      },{
          name: '2018',
          color: 'rgba(50, 200, 50, 1)',
          data: [[1.5,90000],[1,70000],[10,128000],[3,68500],[1,72800],[15,98000],[5,85000],[3,60000],[1.5,65000],[6,90000],[5,67000],[3,75000],[4,108000],[2,80000],[2.5,52000],[5,94000],[3,80000],[8,101000],[14,94000],[12,110000],[6,125000],[3,120000],[3,63000],[2,80000],[6,80000],[1,40000],[3,75000],[2,51250],[0.5,40000],[11,145000],[13,149000],[2.5,80000],[1,50000],[1,60000],[13,125000],[1,60000],[6,80000],[2,59450],[1.75,65000],[1.7,51250],[4,105000],[1,96000],[3,65000],[2.5,80000],[7,150000],[8,140000],[4,110000],[2,105000],[0.7,52000],[12,150000],[1,45000],[0.6,38000],[18,125000],[2.5,100000],[1,50000],[2,75000],[2,70000],[1.5,70000],[4,75000],[5,80000],[13,140000],[1,34000],[1.5,60000],[10,60000],[3.75,115000],[8,135000],[1.5,65000],[2,70000],[1.5,74000],[1,50000],[1.5,62000],[5,206400],[10,172000],[2.5,92000],[1,80000],[1,60000],[3,75000],[2,105000],[10,120000],[1,65000],[12,125000],[10,130000],[2,38000],[20,135000],[15,130000],[1,62000],[5,115000],[5,107000],[2,55000],[14,150000],[5,100000],[3,70000],[12,160000],[6,90000],[4,82000],[9,180000],[5,130000],[7,114000],[5,109000],[8,165000],[20,159000],[2,88500],[7,120000],[14,141000],[8,121000],[5,60000],[10,75000],[19,135000],[8,96000],[1,60000],[4,115000],[18,110000],[7,140000],[20,142000],[3,85000],[1,37440],[5,95000],[5,65000],[5,105500],[2,70000],[7,60000],[10,150000],[3,90000],[14,140000],[0.5,75000],[1,41000],[4,90000],[4,105000],[4,121000],[5,125000],[1.5,80500],[8,108500],[1,52000],[13,135000],[13,151000],[11,130000],[8,110000],[1,48000],[1,65000],[6,112000],[12,145000],[4,91000],[12,87500],[7,114500],[5,82000],[1,42000],[1,38000],[5,125000],[2,78000],[5,88000],[13,150000],[18,114000],[2,70000],[3,100000],[7,117000],[2,65000],[3,76553.4],[2.5,65000],[20,135000],[14,85000],[10,100000],[1,70000],[3,165000],[3,80000],[2,90000],[15,160000],[1,50000],[2,36000],[2,60000],[2,250000],[10,110000],[1,40000],[16,155000],[2,67500],[5,109000],[2,70000],[1.2,67000],[2,76800],[5,100000],[3,127000],[0.5,0],[3,75000],[1,50000],[6,138000],[9,113000],[7,120000],[2,100000],[1,37440],[1,65000],[4,125000],[21,105000],[2,55000],[1.5,75000],[25,177000],[3,98000],[4,96000],[1,65000],[3,85000],[16,105000],[2,92000],[20,140000],[3,90000],[9,97500],[5,77500],[3.5,65000],[3,100000],[3.5,130000],[2,50000]]

      }]
    }
  })

charts.push({
  c: "received-non-cash",
  d: {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Received Equity or a Bonus'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            slicedOffset: 20
        }
    },
    series: [{
        name: 'Responses',
        colorByPoint: true,
        data: [{
          name: 'Salary Only',
          y: 54
        }, {
          name: 'Received equity or a bonus',
          y: 68,
          sliced: true,

        }]
    }]
}
})

charts.push({
  c: "total-comp-by-experience-2",
  d: {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    // accessibility: {
    //     description: 'A scatter plot compares the height and weight of 507 individuals by gender. Height in centimeters is plotted on the X-axis and weight in kilograms is plotted on the Y-axis. The chart is interactive, and each data point can be hovered over to expose the height and weight data for each individual. The scatter plot is fairly evenly divided by gender with females dominating the left-hand side of the chart and males dominating the right-hand side. The height data for females ranges from 147.2 to 182.9 centimeters with the greatest concentration between 160 and 165 centimeters. The weight data for females ranges from 42 to 105.2 kilograms with the greatest concentration at around 60 kilograms. The height data for males ranges from 157.2 to 198.1 centimeters with the greatest concentration between 175 and 180 centimeters. The weight data for males ranges from 53.9 to 116.4 kilograms with the greatest concentration at around 80 kilograms.'
    // },
    title: {
        text: 'Total Compensation by Years of Experience'
    },
    // subtitle: {
    //     text: 'Sum of salary, liquid equity, and cash bonuses'
    // },
    xAxis: {
        title: {
            enabled: true,
            text: 'Years of experience'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
        min:0,
        max:26
    },
    yAxis: {
        title: {
            text: 'Total Compensation'
        },
        tickInterval: 25000
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} years, ${point.y}'
            }
        }
    },
    series: [{
        name: 'Responses',
        color: 'rgba(223, 83, 83, .5)',
        data: [[1,60000],[5.5,105000],[2.5,70000],[8,95000],[10,195000],[18,460000],[4,89000],[8,140001],[4,130000],[7,79000],[5,192600],[3,71000],[2,55000],[14,195000],[3.5,100000],[2,90950],[10,160000],[3.5,116600],[10,163550],[2,73000],[3,93500],[6,120000],[10,110000],[2,115900],[7,120500],[5,90000],[22,142000],[4,109910],[3,170000],[7,85000],[15,202000],[2,60500],[8,145000],[3,88000],[5,95000],[6,141100],[1,76400],[13,170000],[6,135000],[2,77000],[1,24000],[2,104000],[10,148000],[3,80000.02],[11,104000],[4.5,106480],[4,85000],[6,80000],[10,97000],[4,90000],[3,95000],[2,70000],[2,87000],[8,88000],[7,105000],[2,63000],[16,135000],[7,92000],[5,121150],[3.5,80000],[7,140000],[14,152000],[5,127000],[12,135000],[20,155000],[9,130000],[16,178200],[4,95000],[8,135000],[5,120000],[16,135000],[11,200000],[11,145000],[3,82500],[2,104000],[4,75000],[1,67000],[4,108000],[3,143000],[2,57000],[2,65000],[3,72000],[5,112550],[2,55000],[8,65000],[6,235000],[21,185000],[5,100000],[4,85000],[25,125000],[7,115000],[2,87200],[17,180000],[4,74500],[3,120000],[15,151000],[1,70000],[4,180000],[1,106000],[11,112200],[12,120000],[10,155000],[3,91000],[2,72000],[2.5,70000],[10,143500],[5,120000],[5,80000],[8,105000],[1,60000],[4,113000],[20,160000],[2,93000],[7,134000],[3,85000],[8,116000],[2,40000],[3,108000],[4,91000],[2,115000],[3,80000.05]]
    }]
}
})

charts.push({
  c: "non-cash-comp",
  d:{

    chart: {
      type: 'boxplot'
    },

    title: {
      text: 'Non-Cash Compensation'
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: ['Cash Bonus', 'Liquid Equity'],
      // title: {
      //   text: 'Job titles'
      // }
    },

    yAxis: {
      title: {
        text: 'Compensation'
      },
      // min: 0,
      // max: 40,
      tickInterval: 5000
    },

    series: [{
      name: 'Compensation',
      colorByPoint: true,
      lineWidth:3,
      data: [
        [200,   2000, 9650.75,      12250, 40000],
        [2000,  5000, 8000,  13750, 55000],
      ],
      tooltip: {
        headerFormat: '<em>Job Title: {point.key}</em><br/>'
      }
    }
    // ,{
    //     name: 'Outlier',
    //     type: 'scatter',
    //     data: [
    //       [1, 300000]
    //     ]
    //   },
  ]}
})
charts.push({
  c: "salary-by-gender",
  d: {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    // accessibility: {
    //     description: 'A scatter plot compares the height and weight of 507 individuals by gender. Height in centimeters is plotted on the X-axis and weight in kilograms is plotted on the Y-axis. The chart is interactive, and each data point can be hovered over to expose the height and weight data for each individual. The scatter plot is fairly evenly divided by gender with females dominating the left-hand side of the chart and males dominating the right-hand side. The height data for females ranges from 147.2 to 182.9 centimeters with the greatest concentration between 160 and 165 centimeters. The weight data for females ranges from 42 to 105.2 kilograms with the greatest concentration at around 60 kilograms. The height data for males ranges from 157.2 to 198.1 centimeters with the greatest concentration between 175 and 180 centimeters. The weight data for males ranges from 53.9 to 116.4 kilograms with the greatest concentration at around 80 kilograms.'
    // },
    title: {
        text: 'Salary by Experience'
    },
    subtitle: {
        text: 'Grouped by gender'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Years of experience'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
        min:0,
        max:40
    },
    yAxis: {
        title: {
            text: 'Salary (base cash compensation)'
        },
        tickInterval: 25000
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} years, ${point.y}'
            }
        }
    },
    series: [{
      name: 'Male',
      color: 'rgba(83, 83, 223, .5)',
      data: [[5.5,105000],[8,95000],[10,155000],[18,160000],[4,88000],[4,115000],[7,78000],[5,148000],[3,71000],[2,55000],[14,195000],[3.5,100000],[10,160000],[3.5,106000],[10,130500],[2,70000],[3,85000],[6,120000],[10,110000],[2,105900],[7,112500],[5,90000],[22,140000],[4,99910],[3,140000],[7,85000],[15,142000],[2,60500],[8,145000],[3,85000],[5,95000],[13,170000],[6,115000],[2,77000],[1,24000],[2,95000],[3,80000],[11,104000],[4.5,96800],[4,85000],[6,80000],[10,97000],[4,90000],[3,95000],[2,70000],[2,87000],[8,88000],[7,105000],[2,63000],[16,135000],[5,121150],[3.5,80000],[14,150000],[5,125000],[12,135000],[20,150000],[9,130000],[16,178200],[4,95000],[8,130000],[5,120000],[16,135000],[11,170000],[11,135000],[2,104000],[4,75000],[4,100000],[2,57000],[2,60000],[3,72000],[5,112350],[2,55000],[8,65000],[6,145000],[21,165000],[5,90000],[4,85000],[25,125000],[7,115000],[2,86000],[17,170000],[4,74000],[15,145000],[1,70000],[4,180000],[1,90000],[11,109000],[12,120000],[10,155000],[3,90000],[2,72000],[10,143500],[5,120000],[5,80000],[8,105000],[1,60000],[4,106000],[20,150000],[7,134000],[3,85000],[8,115000],[2,40000],[3,108000],[4,81000],[2,115000],[3,80000]]
    },{
      name: 'Female',
      color: 'rgba(223, 83, 83, 1)',
      marker:{
        radius:10
      },
      data: [[1,60000],[8,140000],[2,87550],[6,139000],[1,75400],[10,148000],[1,64000],[3,130000],[3,120000],[2.5,67000],[2,93000]]
    },{
      name: 'Other',
      color: 'rgba(50, 200, 50, 1)',
      data: [[7,92000],[3,82500],[7,140000],[2.5,65000]]
    }]
  }
})

charts.push({
  c: "comp-by-title",
  d:{
    title: {
      text: 'Compensation by Job Title'
    },
    subtitle: {
      text: 'Base pay & Total Compensation'
    },
    yAxis: [{
      // labels: { style: { color: colors[0] } },
      title: {
        text: 'Compensation'
      },
      tickInterval: 25000
    }],
    xAxis:[{
      categories: ['Junior', 'Mid-level', 'Senior', 'Engineering Manager'],
    }],
    series: [{
      name: 'Base Pay (salary)',
      type: 'boxplot',
      lineWidth:3,
      data: [
        [24000,60000,70000,80000,93000],
        [40000,75500,85000,98682.5,145000],
        [74000,109750,130250,145750,180000],
        [97000,125500,111250,151250,170000]
      ]
    },
    {
      name: 'Total Compensation',
      type: 'boxplot',
      lineWidth:3,
      data: [
        [24000,60000,70000,80000,106000],
        [40000,75500,87600,103000,235000],
        [74500,112600,135000,153500,202000],
        [97000,125500,143000,155750,170000]
      ]
    },{
      name: 'Outlier',
      type: 'scatter',
      data: [
        [2, 460000]
      ]
    }
  ]
  }
})

charts.push({
  c: "utah-vs-remote-pay",
  d:{
    title: {
      text: 'Utah vs. Remote Compensation'
    },
    subtitle: {
      text: 'Base pay & Total Compensation'
    },
    yAxis: [{
      // labels: { style: { color: colors[0] } },
      title: {
        text: 'Compensation'
      },
      tickInterval: 25000
    }],
    xAxis:[{
      categories: ['Utah', 'Remote'],
    }],
    series: [{
      name: 'Base Pay (salary)',
      type: 'boxplot',
      lineWidth:3,
      data: [
        [40000,85000,100000,132250,195000],
        [24000,76050,109500,133750,155000]
      ]
    },
    {
      name: 'Total Compensation',
      type: 'boxplot',
      lineWidth:3,
      data: [
        [40000,85000,105000,135000,202000],
        [24000,77050,109500,141000,235000]
      ]
    }
    // ,{
    //   name: 'Outlier',
    //   type: 'scatter',
    //   data: [
    //     [2, 460000]
    //   ]
    // }
  ]
  }
})

// charts.push({
//   c: "edu-type",
//   d: {
//     chart: {
//         type: 'column'
//     },
//     title: {
//         text: 'Education type'
//     },
//     xAxis: {
//         categories: [
//           "Self-taught",
//           "Bootcamp",
//           "Some College",
//           "Bachelor's Degree",
//           "Graduate Degree",
//           "Other"
//         ],
//         crosshair: true
//     },
//     yAxis: {
//         min: 0,
//         title: {
//             text: 'Responses'
//         }
//     },
//     plotOptions: {
//         column: {
//             pointPadding: 0.2,
//             borderWidth: 0
//         }
//     },
//     series: [{
//       name: 'Job Titles',
//       data: [36, 62, 22, 66, 14, 7],
//       colorByPoint: true,
//       dataLabels
//     }]
//   }
// })

charts.push({
  c: "comp-by-edu",
  d: {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    // accessibility: {
    //     description: 'A scatter plot compares the height and weight of 507 individuals by gender. Height in centimeters is plotted on the X-axis and weight in kilograms is plotted on the Y-axis. The chart is interactive, and each data point can be hovered over to expose the height and weight data for each individual. The scatter plot is fairly evenly divided by gender with females dominating the left-hand side of the chart and males dominating the right-hand side. The height data for females ranges from 147.2 to 182.9 centimeters with the greatest concentration between 160 and 165 centimeters. The weight data for females ranges from 42 to 105.2 kilograms with the greatest concentration at around 60 kilograms. The height data for males ranges from 157.2 to 198.1 centimeters with the greatest concentration between 175 and 180 centimeters. The weight data for males ranges from 53.9 to 116.4 kilograms with the greatest concentration at around 80 kilograms.'
    // },
    title: {
        text: 'Salary by Experience'
    },
    subtitle: {
        text: 'Grouped by education'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Years of experience'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
        min:0,
        max:25
    },
    yAxis: {
        title: {
            text: 'Salary (base cash compensation)'
        },
        tickInterval: 25000
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} years, ${point.y}'
            }
        }
    },
    series: [{
      name: 'Bachelor\'s Degree',
      color: 'rgba(83, 83, 223, .5)',
      data: [[1,60000],[8,140000],[5,148000],[14,195000],[2,87550],[10,160000],[3,85000],[2,105900],[22,140000],[15,142000],[8,145000],[6,139000],[2,95000],[10,148000],[8,88000],[7,105000],[16,135000],[5,121150],[14,150000],[5,125000],[12,135000],[20,150000],[8,130000],[3,82500],[4,75000],[5,112350],[7,115000],[17,170000],[15,145000],[11,109000],[12,120000],[10,155000],[10,143500],[5,80000],[8,105000],[4,106000],[20,150000]]
    },{
      name: 'Graduate Degree',
      color: 'rgba(223, 83, 83, 1)',
      data: [[13,170000],[11,170000],[25,125000],[10,155000],[10,110000],[7,112500],[7,140000],[16,135000]]
    },{
      name: 'Bootcamp',
      color: 'rgba(50, 200, 50, 1)',
      data: [[5.5,105000],[2.5,65000],[4,115000],[2,55000],[3.5,100000],[3.5,106000],[4,99910],[1,75400],[1,24000],[3,80000],[4,90000],[2,87000],[2,104000],[2,57000],[2,55000],[4,74000],[1,90000],[3,90000],[2,72000],[2,40000],[3,108000],[3,85000],[6,115000],[2,77000],[10,97000],[2,63000],[2,60000],[3,72000],[8,65000],[3,120000],[2,93000],[7,134000],[4,81000],[2,115000],[2,86000],[3,95000],[2,70000],[1,64000],[4,100000],[2.5,67000],[5,120000],[3,85000]]
    },{
      name: 'Self-taught',
      color: 'rgba(50, 200, 200, 1)',
      data: [[4,88000],[6,120000],[3,140000],[4.5,96800],[9,130000],[4,95000],[11,135000],[5,90000],[4,85000],[1,70000],[4,180000],[5,95000],[2,70000],[16,178200],[5,120000],[21,165000],[8,115000],[1,60000],[6,80000],[3.5,80000],[3,130000],[2,60500],[7,92000]]
    }]
  }
})

charts.push({
  c: "degree-type",
  d: {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Types of Degrees'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            // showInLegend: true
        }
    },
    series: [{
        name: 'Responses',
        colorByPoint: true,
        data: [
        //   {
        //     name: 'Chrome',
        //     y: 61.41,
        //     sliced: true,
        //     selected: true
        // },
         {
            name: 'Computer Science & Related Degrees',
            y: 40,
            sliced:true
        }, {
            name: 'Other',
            y: 49
        }]
    }]
}
})

charts.push({
  c: "cs-adjacent-degrees",
  d: {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Computer Science & Related Degrees'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            // showInLegend: true
        }
    },
    series: [{
        name: 'Responses',
        colorByPoint: true,
        data: [{
          name: 'Computer Science',
          y: 23,
          sliced:true
        }, {
          name: 'Information Systems',
          y: 9
        }, {
          name: 'Digital Media',
          y: 4
        }, {
          name: 'Information Systems',
          y: 8
        }, {
          name: 'Software Engineering',
          y: 2
        }, {
          name: 'Web Development',
          y: 1
        }, {
          name: 'Computer Engineering',
          y: 1
        }]
    }]
}
})


// // Create the chart
Highcharts.mapChart('live-location', {
  chart: {
      map: 'countries/us/us-ut-all'
  },

  title: {
      text: 'Counties where respondents live'
  },
  colorAxis: {
      min: 0
  },

  series: [{
      data: [
//         //['us-ut-001',],
        //['us-ut-003',],
        ['us-ut-005',2],
        //['us-ut-007',],
        //['us-ut-009',],
        ['us-ut-011',6],
        //['us-ut-013',],
        //['us-ut-015',],
        //['us-ut-017',],
        //['us-ut-019',],
        //['us-ut-021',],
        //['us-ut-023',],
        //['us-ut-025',],
        //['us-ut-027',],
        //['us-ut-029',],
        //['us-ut-031',],
        //['us-ut-033',],
        ['us-ut-035',52],
        //['us-ut-037',],
        //['us-ut-039',],
        //['us-ut-041',],
        //['us-ut-043',],
        ['us-ut-045',1],
        //['us-ut-047',],
        ['us-ut-049',50],
        //['us-ut-051',],
        ['us-ut-053',1],
        //['us-ut-055',],
        ['us-ut-057',3],
      ],
      name: 'Random data',
      states: {
          hover: {
              color: '#BADA55'
          }
      },
      dataLabels: {
          enabled: true,
          format: '{point.name}'
      }
  }]
});

Highcharts.mapChart('work-location', {
  chart: {
      map: 'countries/us/us-ut-all'
  },

  title: {
      text: 'Counties where respondents work'
  },
  colorAxis: {
      min: 0
  },

  series: [{
      data: [
        //['us-ut-003',
        ['us-ut-005', 2],
        //['us-ut-007',
        //['us-ut-009',
        ['us-ut-011', 3],
        //['us-ut-013',
        //['us-ut-015',
        //['us-ut-017',
        //['us-ut-019',
        //['us-ut-021',
        //['us-ut-023',
        //['us-ut-025',
        //['us-ut-027',
        //['us-ut-029',
        //['us-ut-031',
        //['us-ut-033',
        ['us-ut-035', 47],
        //['us-ut-037',
        //['us-ut-039',
        //['us-ut-041',
        //['us-ut-043',
        //['us-ut-045',
        //['us-ut-047',
        ['us-ut-049', 49],
        //['us-ut-051',
        ['us-ut-053', 1],
        //['us-ut-055',
        ['us-ut-057', 1],
      ],
      name: 'Random data',
      states: {
          hover: {
              color: '#BADA55'
          }
      },
      dataLabels: {
          enabled: true,
          format: '{point.name}'
      }
  }]
});

charts.push({
  c: "raise-received",
  d: {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Received Equity or a Bonus'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            slicedOffset: 20
        }
    },
    series: [{
        name: 'Responses',
        colorByPoint: true,
        data: [{
          name: 'No Raise',
          y: 49,
          sliced: true
        }, {
          name: 'Raise via changing jobs',
          y: 28
        },{
          name: 'Raise at same company',
          y: 45
        }]
    }]
}
})

charts.push({
  c: "raise-vs-move-box",
  d:{

    chart: {
      type: 'boxplot'
    },

    title: {
      text: 'Changes in Salary'
    },
    // subtitle: {
    //   text: 'as a percentage of salary'
    // },
    legend: {
      enabled: false
    },

    xAxis: {
      categories: ['Current Employer (raise)', 'New Employer'],
      title: {
        text: 'Responses'
      }
    },

    yAxis: {
      title: {
        text: 'Salary Change'
      },
      tickInterval: 5000,
      // plotLines: [{
      //   color: 'red', // Color value
      //   dashStyle: 'longdashdot', // Style of the plot line. Default to solid
      //   value: 0, // Value of where the line will appear
      //   width: 2 // Width of the line
      // }]
      plotBands: [{
        color: 'rgba(255,0,0,0.05)', // Color value
        from: -100000, // Start of the plot band
        to: 0 // End of the plot band
      },{
        color: 'rgba(0,255,0,0.05)', // Color value
        from: 0, // Start of the plot band
        to: 100 // End of the plot band
      }]
    },

    series: [{
      name: 'Percent increase',
      colorByPoint: true,
      lineWidth:3,
      data: [
        [700,4500,8000,14500,25000],
        [10,9125,17500,25000,50000]
      ],
      // tooltip: {
      //   headerFormat: '<em>Job Title: {point.key}</em><br/>'
      // }
    }, {
      name: 'Outlier',
      type: 'scatter',
      data: [
        [1, -15000],
        [1, -20000],
        [1, -15000],
        [1, -25000]
      ],
      marker: {
        fillColor: 'rgba(255,0,0,1)',
        lineWidth: 1,
        lineColor: "rgba(255,0,0,1)"
      },
      // tooltip: {
      //   pointFormat: '{point.y} Percent'
      // }
    }, {
      name: 'Outlier',
      type: 'scatter',
      data: [
        [0, -12000],
      ],
      marker: {
        fillColor: 'rgba(255,0,0,1)',
        lineWidth: 1,
        lineColor: "rgba(255,0,0,1)"
      },
      // tooltip: {
      //   pointFormat: '{point.y} Percent'
      // }
    }, {
      name: 'Outlier',
      type: 'scatter',
      data: [
        [0, 48000],
        [0, 50000],
      ],
      marker: {
        fillColor: 'rgba(0,255,0,1)',
        lineWidth: 1,
        lineColor: "rgba(0,255,0,1)"
      },
      // tooltip: {
      //   pointFormat: '{point.y} Percent'
      // }
    }
  ]}
})

charts.push({
  c: "response-rates",
  d: {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Survey Responses'
    },
    xAxis: {
        categories: [
          "2017",
          "2018",
          "2019",
          "2020"
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Responses'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
      name: 'Number of responses',
      data: [69, 209, 208, 122],
      colorByPoint: true,
      dataLabels
    }]
  }
})

charts.push({
  c: "covid-changes",
  d: {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Work Affected by Covid-19'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            // showInLegend: true
        }
    },
    series: [{
        name: 'Responses',
        colorByPoint: true,
        data: [{
          name: 'Laid off',
          y: 8
        }, {
          name: 'No Annual Raise',
          y: 18
        }, {
          name: 'Not Affected',
          y: 79
        }, {
          name: 'Reduced Pay',
          y: 16
      }]
    }]
}
})

charts.push({
  c: "working-from",
  d: {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'I primarily work from'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            // showInLegend: true
        }
    },
    series: [{
        name: 'Responses',
        colorByPoint: true,
        data: [{
          name: 'At the office',
          y: 6
        }, {
          name: 'From home',
          y: 97,
          sliced: true
        }, {
          name: 'Home & office mix',
          y: 18
        }]
    }]
}
})

// charts.push({
//   c: "log-growth",
//   d: {
//     chart: {
//         type: 'scatter',
//         zoomType: 'xy'
//     },
//     // accessibility: {
//     //     description: 'A scatter plot compares the height and weight of 507 individuals by gender. Height in centimeters is plotted on the X-axis and weight in kilograms is plotted on the Y-axis. The chart is interactive, and each data point can be hovered over to expose the height and weight data for each individual. The scatter plot is fairly evenly divided by gender with females dominating the left-hand side of the chart and males dominating the right-hand side. The height data for females ranges from 147.2 to 182.9 centimeters with the greatest concentration between 160 and 165 centimeters. The weight data for females ranges from 42 to 105.2 kilograms with the greatest concentration at around 60 kilograms. The height data for males ranges from 157.2 to 198.1 centimeters with the greatest concentration between 175 and 180 centimeters. The weight data for males ranges from 53.9 to 116.4 kilograms with the greatest concentration at around 80 kilograms.'
//     // },
//     title: {
//         text: 'Total Compensation by Years of Experience'
//     },
//     subtitle: {
//         text: 'X Axis in log scale'
//     },
//     xAxis: {
//         title: {
//             enabled: true,
//             text: 'Years of experience'
//         },
//         startOnTick: true,
//         endOnTick: true,
//         showLastLabel: true,
//         min:0.1,
//         max:40,
//         type: 'logarithmic',
//     },
//     yAxis: {
//         title: {
//             text: 'Total Compensation'
//         },
//         tickInterval: 25000
//     },
//     plotOptions: {
//         scatter: {
//             marker: {
//                 radius: 5,
//                 states: {
//                     hover: {
//                         enabled: true,
//                         lineColor: 'rgb(100,100,100)'
//                     }
//                 }
//             },
//             states: {
//                 hover: {
//                     marker: {
//                         enabled: false
//                     }
//                 }
//             },
//             tooltip: {
//                 headerFormat: '<b>{series.name}</b><br>',
//                 pointFormat: '{point.x} years, ${point.y}'
//             }
//         }
//     },
//     series: [{
//         name: 'Responses',
//         color: 'rgba(223, 83, 83, .5)',
//         data: [[15,115000],[3.5,90000],[5,105000],[12,107000],[8,111000],[4,75000],[13,151000],[3,100000],[10,143943],[9,145000],[3,92000],[2.5,80000],[4,93600],[13,126000],[1,150000],[12,170000],[4.5,131000],[5,80000],[1,72000],[3,85000],[3,78000],[21,140000],[3,140000],[1,74000],[1.5,65000],[6.5,153850],[2,68000],[3,87500],[4,180000],[10,100000],[2,67000],[1.5,60000],[1,50000],[3,72500],[3.5,118000],[5,139000],[8,110000],[4,112000],[9,90000],[4,114000],[5,135000],[2,72000],[8,116500],[3,94000],[6,126400],[3,77000],[3,84771],[1,55000],[1,75000],[3,83411.64],[5,135000],[4,120100],[15,138000],[4,111000],[2,77000],[13,175000],[4,104000],[1.5,98300],[11,200000],[1,78000],[2,60000],[2,102000],[5,130000],[2.5,97000],[2,113000],[3,50000],[1,85000],[5,171350],[12,95000],[5,135000],[19,188000],[6.5,113000],[8,106000],[2.5,80000],[11,38500],[2,90000],[8,130500],[36,100000],[1,72000],[1,70000],[4,82000],[5,144000],[3,85000],[2,75000],[5,85000],[4,96800],[14,207000],[15,140000],[3,75000],[2,114000],[6,105000],[2,71500],[5,225000],[5,80000],[5,93000],[2,75000],[4,100000],[40,170000],[1,87000],[1,40000],[4,114700],[16,107000],[4,99000],[7,87400],[5.6,109000],[4,95000],[1.5,72000],[7,100000],[1,57500],[1,80000],[3.5,70000],[4,87600],[3,73000],[20,112400],[0.1,57500],[5,111000],[8,110000],[3,80000],[10,110000],[1,75000],[5,2],[2,95000],[15,145000],[20,101000],[2,112000],[2.5,66500],[1,74000],[8,88000],[10,150000],[3,72000],[1,90000],[3,100000],[20,139000],[21,140000],[2,76000],[1,67000],[8,120000],[5,95000],[35,100001],[10,120010],[8,95000],[1,50000],[2,54000],[10,130000],[2,31000],[1,150000],[2,50000],[5,141000],[2.5,80000],[1,60000],[8,150000],[8,112000],[1.5,94000],[3,126000],[2,110000],[7,104000],[4,162000],[5,115000],[0.1,30000],[15,165000],[6,84000],[20,100000],[3,100000],[7,120750],[0.1,1],[0.1,1],[1.5,90000],[12,145000],[0.4,50000],[4,89000],[6,110000],[1.5,48000],[9,188000],[12,117000],[3,76000],[2,67500],[0.5,75000],[4,54000],[3,72000],[1,71500],[6,83000],[4,110000],[3,100000],[8,79900],[2.5,94000],[8,49500],[1,72000],[5,146990],[2,55000],[8,135000],[4,135000],[5,113000],[8,156000],[0.5,50000.1],[4,60000],[12,69300],[0.5,37542],[4,94000],[0.1,2],[20,104000],[3,75000],[1,85000],[20,180000],[12,70000],[0.1,70000],[24,170000],[3,80000]]

//     },
//     {
//       type: 'line',
//       name: 'Regression Line',
//       data: [[0.1, 45000], [40, 140000]],
//       marker: {
//           enabled: false
//       },
//       states: {
//           hover: {
//               lineWidth: 0
//           }
//       },
//       enableMouseTracking: false
//   },]
// }
// })


// charts.push({
//   c: "comp-comp-by-year",
//   d: {
//     chart: {
//         type: 'scatter',
//         zoomType: 'xy'
//     },
//     // accessibility: {
//     //     description: 'A scatter plot compares the height and weight of 507 individuals by gender. Height in centimeters is plotted on the X-axis and weight in kilograms is plotted on the Y-axis. The chart is interactive, and each data point can be hovered over to expose the height and weight data for each individual. The scatter plot is fairly evenly divided by gender with females dominating the left-hand side of the chart and males dominating the right-hand side. The height data for females ranges from 147.2 to 182.9 centimeters with the greatest concentration between 160 and 165 centimeters. The weight data for females ranges from 42 to 105.2 kilograms with the greatest concentration at around 60 kilograms. The height data for males ranges from 157.2 to 198.1 centimeters with the greatest concentration between 175 and 180 centimeters. The weight data for males ranges from 53.9 to 116.4 kilograms with the greatest concentration at around 80 kilograms.'
//     // },
//     title: {
//         text: 'Compensation year-to-year'
//     },
//     subtitle: {
//         text: 'Base salary only'
//     },
//     xAxis: {
//         title: {
//             enabled: true,
//             text: 'Years of experience'
//         },
//         startOnTick: true,
//         endOnTick: true,
//         showLastLabel: true,
//         min:0,
//         max:20
//     },
//     yAxis: {
//         title: {
//             text: 'Salary (base cash compensation)'
//         },
//         tickInterval: 25000
//     },
//     plotOptions: {
//         scatter: {
//             marker: {
//                 radius: 3,
//                 states: {
//                     hover: {
//                         enabled: true,
//                         lineColor: 'rgb(100,100,100)'
//                     }
//                 }
//             },
//             states: {
//                 hover: {
//                     marker: {
//                         enabled: false
//                     }
//                 }
//             },
//             tooltip: {
//                 headerFormat: '<b>{series.name}</b><br>',
//                 pointFormat: '{point.x} years, ${point.y}'
//             }
//         }
//     },
//     series: [{
//       name: '2019',
//       color: 'rgba(83, 83, 223, .5)',
//       data: [[15,115000],[3.5,90000],[5,83000],[12,102000],[8,95000],[4,75000],[13,145000],[3,97000],[10,134286],[9,145000],[3,90000],[4,93600],[13,126000],[1,90000],[12,170000],[4.5,101000],[5,80000],[1,72000],[3,85000],[3,75000],[21,140000],[3,115000],[1.5,60000],[6.5,137000],[2,68000],[3,87500],[4,165000],[10,100000],[2,67000],[1.5,60000],[1,50000],[3,72500],[3.5,118000],[5,119000],[8,110000],[4,112000],[9,90000],[4,90000],[5,135000],[2,72000],[8,115000],[3,86000],[6,89100],[3,77000],[3,84771],[1,55000],[1,75000],[3,83411.64],[4,109200],[15,138000],[4,110000],[2,77000],[13,155000],[1.5,93800],[11,170000],[1,78000],[2,60000],[2,102000],[2.5,90000],[3,50000],[5,171350],[12,95000],[5,130000],[19,160000],[6.5,108000],[8,106000],[2.5,80000],[11,38500],[2,90000],[8,130000],[1,72000],[1,70000],[4,82000],[5,144000],[3,85000],[2,70000],[5,85000],[4,88000],[14,137000],[15,140000],[3,75000],[2,104000],[6,105000],[5,125000],[5,80000],[5,91000],[2,75000],[4,80000],[40,170000],[1,87000],[1,40000],[4,110700],[16,107000],[4,95000],[7,87400],[5.6,109000],[4,95000],[1,57500],[1,80000],[3.5,70000],[4,83600],[3,73000],[20,110000],[0,57500],[5,111000],[8,110000],[3,80000],[10,110000],[1,75000],[5,1],[2,90000],[15,145000],[20,100000],[2,102000],[2.5,66000],[1,72000],[8,88000],[10,150000],[3,72000],[1,90000],[3,100000],[20,127000],[21,140000],[2,76000],[1,67000],[8,115000],[5,95000],[8,95000],[1,42000],[2,54000],[10,130000],[2,31000],[1,110000],[2,50000],[5,141000],[1,60000],[8,145000],[1.5,94000],[3,120000],[2,110000],[7,100000],[4,81000],[15,165000],[6,84000],[20,100000],[3,90000],[7,120750],[0,1],[0,1],[1.5,90000],[12,145000],[0.4,50000],[4,89000],[6,110000],[1.5,48000],[12,106000],[3,75000],[2,67500],[0.5,75000],[4,54000],[3,72000],[6,80000],[4,110000],[8,79900],[2.5,94000],[8,48000],[1,72000],[5,110900],[2,55000],[8,135000],[4,130000],[5,105000],[8,151000],[0.5,50000],[4,60000],[0.5,37542],[4,94000],[0,1],[20,100000],[1,85000],[20,135000],[12,70000],[24,140000],[3,80000],[0,30000],[0,65000],[1,60000],[1,85000],[1,65000],[1.5,72000],[2,103000],[2.5,80000],[2.5,80000],[3,100000],[3,75000],[4,91000],[5,105000],[5,135000],[8,112000],[9,138000],[12,69300],[2,70000],[5,115000],[7,100000],[10,120000]]
//     },{
//       name: '2018',
//       color: 'rgba(223, 83, 83, 1)',
//       data: [[1.5,90000],[1,70000],[10,128000],[3,68500],[1,72800],[15,98000],[5,85000],[3,60000],[1.5,65000],[6,90000],[5,67000],[3,75000],[4,108000],[2,80000],[2.5,52000],[5,94000],[3,80000],[8,101000],[14,94000],[12,110000],[6,125000],[3,120000],[3,63000],[2,80000],[6,80000],[1,40000],[3,75000],[2,51250],[0.5,40000],[11,145000],[13,149000],[2.5,80000],[1,50000],[1,60000],[13,125000],[1,60000],[6,80000],[2,59450],[1.75,65000],[1.7,51250],[4,105000],[1,96000],[3,65000],[2.5,80000],[7,150000],[8,140000],[4,110000],[2,105000],[0.7,52000],[12,150000],[1,45000],[0.6,38000],[18,125000],[2.5,100000],[1,50000],[2,75000],[2,70000],[1.5,70000],[4,75000],[5,80000],[13,140000],[1,34000],[1.5,60000],[10,60000],[3.75,115000],[8,135000],[1.5,65000],[2,70000],[1.5,74000],[1,50000],[1.5,62000],[5,206400],[10,172000],[2.5,92000],[1,80000],[1,60000],[3,75000],[2,105000],[10,120000],[1,65000],[12,125000],[10,130000],[2,38000],[20,135000],[15,130000],[1,62000],[5,115000],[5,107000],[2,55000],[14,150000],[5,100000],[3,70000],[12,160000],[6,90000],[4,82000],[9,180000],[5,130000],[7,114000],[5,109000],[8,165000],[20,159000],[2,88500],[7,120000],[14,141000],[8,121000],[5,60000],[10,75000],[19,135000],[8,96000],[1,60000],[4,115000],[18,110000],[7,140000],[20,142000],[3,85000],[1,37440],[5,95000],[5,65000],[5,105500],[2,70000],[7,60000],[10,150000],[3,90000],[14,140000],[0.5,75000],[1,41000],[4,90000],[4,105000],[4,121000],[5,125000],[1.5,80500],[8,108500],[1,52000],[13,135000],[13,151000],[11,130000],[8,110000],[1,48000],[1,65000],[6,112000],[12,145000],[4,91000],[12,87500],[7,114500],[5,82000],[1,42000],[1,38000],[5,125000],[2,78000],[5,88000],[13,150000],[18,114000],[2,70000],[3,100000],[7,117000],[2,65000],[3,76553.4],[2.5,65000],[20,135000],[14,85000],[10,100000],[1,70000],[3,165000],[3,80000],[2,90000],[15,160000],[1,50000],[2,36000],[2,60000],[2,250000],[10,110000],[1,40000],[16,155000],[2,67500],[5,109000],[2,70000],[1.2,67000],[2,76800],[5,100000],[3,127000],[0.5,0],[3,75000],[1,50000],[6,138000],[9,113000],[7,120000],[2,100000],[1,37440],[1,65000],[4,125000],[21,105000],[2,55000],[1.5,75000],[25,177000],[3,98000],[4,96000],[1,65000],[3,85000],[16,105000],[2,92000],[20,140000],[3,90000],[9,97500],[5,77500],[3.5,65000],[3,100000],[3.5,130000],[2,50000]]
//     },{
//         name: '2017',
//         color: 'rgba(50, 200, 50, 1)',
//         data: [[1,58000],[2.75,103000],[1,35000],[7,126000],[3,75000],[9,125000],[9,150000],[4,80000],[2,85000],[7,140000],[2,75000],[11,125000],[0.5,60000],[1,37000],[4,82000],[3,35000],[2,55000],[4.5,80000],[4,85000],[2,55000],[5,100000],[12,125000],[8,120000],[6,115000],[3,85000],[17,120000],[1.5,70000],[2,60000],[5,95000],[1,50000],[18,90000],[4,82000],[1,50000],[3,70000],[3,87000],[13,90000],[1.5,63000],[12,87000],[4,80000],[5,115000],[1,58000],[9,175000],[1,47500],[1,50000],[13,87500],[8,100000],[13,145000],[5,160000],[14,125000],[7,99000],[10,140000],[11,135000],[2,42000],[3,95000],[2,45000],[12,120000],[8,95000],[10,110000],[2,80000],[5,110000],[4,54000],[2.5,95000],[4,70000],[3,90000],[3,55000],[18,160000],[8,105000],[5,60000],[2,74000]]
//     }]
//   }
// })

charts.forEach(({c,d}) => Highcharts.chart(c, {...d, tooltip}))