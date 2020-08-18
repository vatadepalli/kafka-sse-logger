# Getting Started
    
    # Install dependencies - to be run only once to install dependencies
    yarn
    
    # starting container
    docker build -t klogger .
    docker run -it -v /Users/vatadepalli/Desktop/kafka-sse-logger.nosync:/app -p 7000:7000 -p 9092:9092 klogger bash
    
    docker run -it --rm -v /Users/vatadepalli/Desktop/kafka-sse-logger.nosync:/app -p 7000:7000 -p 9092:9092 -p 2181:2181 klogger

    # Inside Container - start servers
    bash exec.sh  # starts zookeeper & kafka
    npm start # starts express API server
