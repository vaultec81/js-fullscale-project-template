const endpoints = {
    http: require('./http')
}

class apiEndpoints {
    constructor(application) {
        this.application = application;
        this.endpoints = {};
    }
    _apiEndpoints(iteratorCallback) {
        for(var endpoint of Object.values(this.endpoints)) {
            iteratorCallback(endpoint.address, endpoint.name)
        }
    }
    async start() {
        for(var name in endpoints) {
            var endpoint = new endpoints[name](this.application);
            await endpoint.start();
            this.endpoints[name] = endpoint;
        }
    }
    async stop() {
        for(var endpoint of Object.values(this.endpoints)) {
            await endpoint.stop()
        }
    }
}
module.exports = apiEndpoints