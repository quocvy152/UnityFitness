import mqtt from 'mqtt'

// host: 'broker.hivemq.com',
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const options = {
    clientId,
    protocol: 'mqtts',
    host: '2548d6d6a6be466e9c2b5e82d6f5fd10.s1.eu.hivemq.cloud',
    port: 8883,
    clean: true,
    connectTimeout: 4000,
    username: 'quocvy152',
    password: 'Anh0205vy1502',
    reconnectPeriod: 1000,
};

const mqttClient = mqtt.connect(options)

function publishTopicEvent(topic, event) {
    mqttClient.publish(topic, JSON.stringify(event));
}

function SocketMQTT() {
    mqttClient.on('connect', () => {
        console.log('MQTT connected');
    });

    mqttClient.on('error', (error) => {
        console.error('connection failed', error)
    })

    mqttClient.subscribe('/match/events', () => {
        console.log('MQTT subscribe /match/events');
    });

    mqttClient.on('message', (topic, message) => {
        console.log("🚀 ~ mqttClient.on ~ message:", message.toString())
        console.log("🚀 ~ mqttClient.on ~ topic:", topic)
    });

    // Event 1
    setTimeout(() => {
        const messageEvent = {
            id: 1,
            type: 'goal',
            team: 'home',
            player: 'Player A',
            time: '15:00'
        };
        const topic = '/match/events';
        publishTopicEvent(topic, messageEvent);
    }, 2000);

    // Event 2
    setTimeout(() => {
        const messageEvent2 = {
            id: 2,
            type: 'substitution',
            team: 'home',
            playerIn: 'Player B',
            playerOut: 'Player C',
            time: '26:00'
        };
        const topic = '/match/events';
        publishTopicEvent(topic, messageEvent2);
    }, 4000);

    // Event 3
    setTimeout(() => {
        const messageEvent3 = {
            id: 3,
            type: 'goal',
            team: 'away',
            player: 'Player A',
            time: '33:00'
        };
        const topic = '/match/events';
        publishTopicEvent(topic, messageEvent3);
    }, 6000);

    // Event 4
    setTimeout(() => {
        const messageEvent4 = {
            id: 4,
            type: 'fault_yellow',
            team: 'away',
            player: 'Player A',
            time: '39:00'
        };
        const topic = '/match/events';
        publishTopicEvent(topic, messageEvent4);
    }, 8000);

    // Event 5
    setTimeout(() => {
        const messageEvent4 = {
            id: 5,
            type: 'fault_red',
            team: 'away',
            player: 'Player G',
            time: '45:00'
        };
        const topic = '/match/events';
        publishTopicEvent(topic, messageEvent4);
    }, 10000);

     // Event 6
    setTimeout(() => {
        const messageEvent6 = {
            id: 6,
            type: 'goal',
            team: 'home',
            player: 'Player G',
            time: '48:00'
        };
        const topic = '/match/events';
        publishTopicEvent(topic, messageEvent6);
    }, 12000);

    setTimeout(() => {
        const messageEvent6 = {
            id: 7,
            type: 'substitution',
            team: 'away',
            player: 'Player G',
            time: '65:00'
        };
        const topic = '/match/events';
        publishTopicEvent(topic, messageEvent6);
    }, 14000);

    // Event 8
    setTimeout(() => {
        const messageEvent = {
            id: 8,
            type: 'goal',
            team: 'away',
            player: 'Player A',
            time: '75:00'
        };
        const topic = '/match/events';
        publishTopicEvent(topic, messageEvent);
    }, 16000);

    // Event 9
    setTimeout(() => {
        const messageEvent = {
            id: 9,
            type: 'goal',
            team: 'home',
            player: 'Player A',
            time: '89:00'
        };
        const topic = '/match/events';
        publishTopicEvent(topic, messageEvent);
    }, 18000);
}

export default SocketMQTT;
