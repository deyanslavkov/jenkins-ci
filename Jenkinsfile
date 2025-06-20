pipeline {
        agent any

	stages {
	    stage('Checkout') {
	        steps {
	            git branch: 'main', url: 'https://github.com/deyanslavkov/jenkins-ci.git'
		}
	    }
	    stage('Install Dependencies') {
	        steps {
	            sh 'npm install'
	        }
	    }
	    stage('Restart App with PM2') {
	        steps {
	            sh '''
	            pm2 stop app || true
	            pm2 delete app || true
	            pm2 start index.js --name app
	            '''
	        }
	    }
	    stage('Test') {
	  	steps {
	    	    sh 'curl -f http://localhost:3000'
	        }
	    }
        }
}
