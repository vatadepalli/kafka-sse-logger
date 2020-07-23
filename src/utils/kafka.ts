import { KafkaClient } from "kafka-node";
const { spawn } = require('child_process');

const kafka = require('kafka-node');
const config = require('../config');

const client: KafkaClient = new kafka.KafkaClient({ kafkaHost: config.KafkaHost });

interface Topic {
  topic: string;
  partitions: number;
  replicationFactor: number;
}

export async function createTopic(topic: Topic) {
  let topics = []

  topics.push(topic)
  return new Promise((resolve, reject) => {
    client.createTopics(topics, (error, result) => {
      console.log(result, 'Topic created successfully');
      if(error) {
        reject(error)
      }
      resolve(result)
    });
  })
}

export async function deleteTopic(topic: string) {
  return new Promise((resolve, reject) => {
    let data = ''
    try {
      const del = spawn('/kafka/bin/kafka-topics.sh', [
        '--zookeeper',
        'localhost:2181',
        '--delete',
        '--topic',
        topic
      ])

      del.stdout.on('data', (data_) => {
        data = data + data_;
      });
  
      del.on('exit', (code) => resolve({
        message: data.split('\n').slice(0, data.split('\n').length-1).join(' ')
      }));
    } catch (error) {
      reject(error)
    }
  })
}

export async function listTopics() {
  return new Promise((resolve, reject) => {
    let data = ''
    try {
      const list = spawn('/kafka/bin/kafka-topics.sh', [
        '--list',
        '--zookeeper',
        'localhost:2181'
      ])

      list.stdout.on('data', (data_) => {
        data = data + data_;
      });
  
      list.on('exit', (code) => resolve(data));
    } catch (error) {
      reject(error)
    }
  })
}