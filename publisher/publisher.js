
import config from '../support/config.js'; // Import the configuration file


let response = await fetch('../data/rota1.json'); // fetch the data from the data1 JSON file
const data1 = await response.json();

response = await fetch('../data/rota2.json'); // fetch the data from the data2 JSON file
const data2 = await response.json();

response = await fetch('../data/rota3.json'); // fetch the data from the data3 JSON file
const data3 = await response.json();

response = await fetch('../data/rota4.json'); // fetch the data from the data4 JSON file
const data4 = await response.json();

const button1 = document.getElementById("button1"); // get the button element from the DOM
const button2 = document.getElementById("button2"); // get the button element from the DOM
const button3 = document.getElementById("button3"); // get the button element from the DOM
const button4 = document.getElementById("button4"); // get the button element from the DOM


const publisher = config.publisher; // get the publisher configuration from the configuration file

const mqttOptions = {
    username: publisher.username,
    password: publisher.password,
}

 const client = mqtt.connect(publisher.hivemq, mqttOptions);

 client.on("connect", () => {
    client.subscribe("presence");
     
    button1.onclick = () => {
        client.publish("presence",JSON.stringify(data1));
    }; // set the onclick event to log a message to the console

    button2.onclick = () => {
        client.publish("presence",JSON.stringify(data2));
    }; // set the onclick event to log a message to the console

    button3.onclick = () => {
        client.publish("presence",JSON.stringify(data3));
    }; // set the onclick event to log a message to the console

    button4.onclick = () => {
        client.publish("presence",JSON.stringify(data4));
    }; // set the onclick event to log a message to the console
});