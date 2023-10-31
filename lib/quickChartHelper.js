const QuickChart = require('quickchart-js');

function generateLineGraph(data, title, xAxis, yAxis) {
    const chart = new QuickChart();
    chart.setConfig({
        type: 'line',
        data: { labels: xAxis, datasets: [{ label: title, data }] },
        options: { scales: { y: { beginAtZero: true } } }
    });
    return chart.getUrl();
}

module.exports = { generateLineGraph };
