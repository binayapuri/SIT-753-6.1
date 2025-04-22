// pipeline {
//     agent any

//     environment {
//         DIRECTORY_PATH = '.'
//         TESTING_ENVIRONMENT = 'Test_Environment'
//         PRODUCTION_ENVIRONMENT = 'Binaya_Production'
//     }

//     stages {
//         stage('Build') {
//             steps {
//                 echo "Fetch the source code from the directory path specified by the environment variable: ${env.DIRECTORY_PATH}"
//                 echo "Compile the code and generate any necessary artefacts"
//             }
//         }

//         stage('Test') {
//             steps {
//                 echo "Unit tests"
//                 echo "Integration tests"
//             }
//         }

//         stage('Code Quality Check') {
//             steps {
//                 echo "Check the quality of the code"
//             }
//         }

//         stage('Deploy') {
//             steps {
//                 echo "Deploy the application to a testing environment specified by the environment variable: ${env.TESTING_ENVIRONMENT}"
//             }
//         }

//         stage('Approval') {
//             steps {
//                 echo "Waiting for approval..."
//                 sleep(time: 10, unit: 'SECONDS') // Simulating manual approval
//             }
//         }

//         stage('Deploy to Production') {
//             steps {
//                 echo "Deploying the application to production environment: ${env.PRODUCTION_ENVIRONMENT}"
//             }
//         }
//     }
// }


pipeline {
    agent any

    environment {
        IMAGE_NAME = "sit753-app"
        CONTAINER_NAME = "sit753-running-app"
        PORT = "3000"
    }

    stages {
        stage('Clone') {
            steps {
                echo "Pulling latest code from GitHub..."
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Stop Old Container') {
            steps {
                echo "Stopping and removing old container..."
                sh """
                docker rm -f ${CONTAINER_NAME} || true
                """
            }
        }

        stage('Run New Container') {
            steps {
                echo "Running new container..."
                sh """
                docker run -d -p ${PORT}:${PORT} --name ${CONTAINER_NAME} ${IMAGE_NAME}
                """
            }
        }
    }
}
