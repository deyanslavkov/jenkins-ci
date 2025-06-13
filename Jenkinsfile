pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/deyanslavkov/jenkins-ci.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run App') {
            steps {
                sh 'nohup npm start &'
            }
        }
    }
}
