pipeline {
    agent any

    environment {
        IMAGE_NAME = "sit753-app"
        CONTAINER_NAME = "sit753-running-app"
        PORT = "3000"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Stop Old Container') {
            steps {
                echo "Stopping old container (if exists)..."
                sh "docker rm -f ${CONTAINER_NAME} || true"
            }
        }

        stage('Run Updated App') {
            steps {
                echo "Running updated Docker container..."
                sh "docker run -d -p ${PORT}:${PORT} --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }
}
