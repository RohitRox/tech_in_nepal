$(function () {
    $('#container').highcharts({
        chart: {
            type: 'waterfall'
        },

        title: {
            text: 'Highcharts Waterfall'
        },

        xAxis: {
            type: 'category'
        },

        yAxis: {
            title: {
                text: 'USD'
            }
        },

        legend: {
            enabled: false
        },

        tooltip: {
            pointFormat: '<b>${point.y:,.2f}</b> USD'
        },

        series: [{
            upColor: Highcharts.getOptions().colors[5],
            color: Highcharts.getOptions().colors[2],
            data: [{
                name: '2010',
                y: 1035282
            }, {
                name: '2011',
                y: 3111858
            }, {
                name: '2012',
                y: 4867254
            }, {
                name: '2013',
                 y: 4867254,
                // isIntermediateSum: true,
                // color: Highcharts.getOptions().colors[1]
            }],
            dataLabels: {
                enabled: true,
                formatter: function () {
                    return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                },
                style: {
                    color: '#FFFFFF',
                    fontWeight: 'bold'
                }
            },
            pointPadding: 0
        }]
    });
});

