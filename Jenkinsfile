pipeline {
    agent any

    environment {
        DIRECTORY_PATH = '/path/to/your/code'
        TESTING_ENVIRONMENT = 'Test_Environment'
        PRODUCTION_ENVIRONMENT = 'Binaya_Production'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/yourusername/express-app.git'
            }
        }

        stage('Build') {
            steps {
                echo "Build step: Fetching and compiling the app"
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo "Test step: Running tests"
                // Optional: Run your tests here
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the application to testing environment"
                // Deploy the app - for simplicity, just printing
                sh 'echo Deploying app to ${TESTING_ENVIRONMENT}'
            }
        }

        stage('Approval') {
            steps {
                echo "Waiting for approval"
                input "Approve deployment to Production?"
            }
        }

        stage('Deploy to Production') {
            steps {
                echo "Deploying app to production environment ${PRODUCTION_ENVIRONMENT}"
                // Here you would deploy your app, e.g., using Docker or SSH to a server
                sh 'echo Deploying to production'
            }
        }
    }
}
