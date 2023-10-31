const QuickChartHelper = require('./quickChartHelper');
const DatabaseHelper = require('./databaseHelper');

class Stats {
    constructor() {
        // Initialize your Stats instance, if necessary
    }

    async cpu() {
        // Logic to fetch CPU data, generate graph, and store in the database
        const cpuData = []; // Fetch CPU data from your source
        const graphUrl = QuickChartHelper.generateLineGraph(cpuData, 'CPU Usage');
        await DatabaseHelper.storeStats('CPU', cpuData);
        return graphUrl;
    }

    async ram() {
        // Logic to fetch RAM data, generate graph, and store in the database
        const ramData = []; // Fetch RAM data from your source
        const graphUrl = QuickChartHelper.generateLineGraph(ramData, 'RAM Usage');
        await DatabaseHelper.storeStats('RAM', ramData);
        return graphUrl;
    }

    async servers() {
        // Logic to fetch Servers data, generate graph, and store in the database
        const serversData = []; // Fetch Server data from your source
        const graphUrl = QuickChartHelper.generateLineGraph(serversData, 'Server Status");
        await DatabaseHelper.storeStats('Servers', serversData);
        return graphUrl;
    }

    async stats() {
        // Logic to fetch all stats
        const allStats = {
            CPU: await this.cpu(),
            RAM: await this.ram(),
            Servers: await this.servers()
        };
        return allStats;
    }
}

module.exports = Stats;
