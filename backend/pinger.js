const net = require('net');
const port = 9898;
const host = "discordbot";

module.exports = function ping() {
    return new Promise((resolve) => {
        const client = new net.Socket();
        let value = -1;
        client.connect(port, host, () => {client.write('ping')});

        client.on('data', (data) => {
            // console.log(`Received: ${data}`);
            value = parseInt(data); // we r totally losing precision with this
            client.end();
            resolve(value)
        });
    });
};
