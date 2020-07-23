# Getting Started

    docker build -t klogger . 
    docker run -it -v <path_to_root_folder>:/app -p 7000:7000 klogger bash
    
    /* Inside Container */
    bash exec.sh
    npm start
