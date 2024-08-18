import config from '../support/config.js'; // Import the configuration file

const subscriber = config.subscriber;

const mqttOptions = {
    username: subscriber.username,
    password: subscriber.password,
}

const client = mqtt.connect(subscriber.hivemq, mqttOptions);

client.subscribe("presence");

client.on("message", (topic, message) => {
    console.log(JSON.parse(message.toString()).waypoints);
});