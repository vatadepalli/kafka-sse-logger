const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
})

const producer = kafka.producer()

const run = async() => {
    await producer.connect()
    let count = 0;
    const timer = setInterval(async() => {
        await producer.send({
            topic: 'test',
            messages: [
                { value: 'Sending: ' + new Date().toUTCString() + ' - ' + count++ },
            ],
        })
    }, 1000);

    await producer.disconnect()
}


run()