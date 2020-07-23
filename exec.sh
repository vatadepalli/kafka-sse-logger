#!/bin/bash
/kafka/bin/zookeeper-server-start.sh -daemon /kafka/config/zookeeper.properties
sleep 4
/kafka/bin/kafka-server-start.sh -daemon /kafka/config/server.properties