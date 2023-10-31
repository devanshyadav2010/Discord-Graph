const QuickChartHelper = require('./quickChartHelper');
const DatabaseHelper = require('./databaseHelper');
const os = require('os'); // Import the Node.js 'os' module

class Stats {
    constructor() {
        // Initialize your Stats instance, if necessary
    }

    async cpu() {
        const cpuUsage = os.cpus(); // Get CPU usage data from the 'os' module

        const xAxis = [];
        const yAxis = [];

        cpuUsage.forEach(core => {
            xAxis.push(new Date().toISOString()); // Placeholder for timestamp data
            yAxis.push(/* Usage value from CPU data */); // Placeholder for CPU usage value
        });

        console.log('CPU Usage:', { x: xAxis, y: yAxis });

        const graphUrl = QuickChartHelper.generateLineGraph(yAxis, 'CPU Usage', xAxis, yAxis);
        await DatabaseHelper.storeStats('CPU', { x: xAxis, y: yAxis });
        return graphUrl;
    }

    async ram() {
        const totalRam = os.totalmem(); // Total RAM
        const freeRam = os.freemem(); // Free RAM
        const usedRam = totalRam - freeRam;

        const xAxis = ['Total', 'Used', 'Free'];
        const yAxis = [totalRam, usedRam, freeRam];

        console.log('RAM Usage:', { x: xAxis, y: yAxis });

        const graphUrl = QuickChartHelper.generateLineGraph(yAxis, 'RAM Usage', xAxis, yAxis);
        await DatabaseHelper.storeStats('RAM', { x: xAxis, y: yAxis });
        return graphUrl;
    }

    async servers(client) {
        const serverCount = client.guilds.cache.size; // Get the number of servers the bot is in

        const xAxis = ['Server Count'];
        const yAxis = [serverCount];

        console.log('Number of Servers:', { x: xAxis, y: yAxis });

        const graphUrl = QuickChartHelper.generateLineGraph(yAxis, 'Server Count', xAxis, yAxis);
        await DatabaseHelper.storeStats('Servers', { x: xAxis, y: yAxis });
        return graphUrl;
    }

    async stats(client) {
        const allStats = {
            CPU: await this.cpu(),
            RAM: await this.ram(),
            Servers: await this.servers(client)
        };
        return allStats;
    }
}

module.exports = Stats;
