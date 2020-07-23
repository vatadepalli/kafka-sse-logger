# Getting Started
    
    # Install dependencies - to be run only once to install dependencies
    yarn
    
    # starting container
    docker build -t klogger . 
    docker run -it -v <path_to_root_folder>:/app -p 7000:7000 klogger bash
    
    # Inside Container - start servers
    bash exec.sh  # starts zookeeper & kafka
    npm start # starts express API server
