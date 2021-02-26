$(document).ready(function(){
    function drawChart() {
        // Define the chart to be drawn.
        var data = google.visualization.arrayToDataTable([
           ['Period', '2020', { role: 'style' }],
           ['Jan',  2000, 'color: blue'],
           ['Feb',  4000, 'color: orange'],
           ['Mar',  6000,'color: blue'],
           ['Apr',  8000,'color:orange'],
           ['May',  10000,'color:orange'],
           ['June',  12000,'color:blue']
        ]);

        var options = {
            title: 'for the period of Jan-June',
            width: 1000,
            height: 400,
            bar: { groupWidth: '20%' }
        }; 

        // Instantiate and draw the chart.
        var chart = new google.visualization.ColumnChart(document.getElementById('gst_chart'));
        chart.draw(data, options);
     }
     google.charts.setOnLoadCallback(drawChart);
});