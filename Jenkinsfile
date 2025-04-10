pipeline {
  agent any

  tools {
    nodejs 'Node 20'
  }

  environment {
    NODE_ENV = 'dev'
    PORT=4202
  }

  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Install Frontend') {
      steps {
        dir('src/frontend/test-proj') {
          sh 'npm install'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('src/frontend/test-proj') {
          sh 'npm run build'
        }
      }
    }

    stage('Install Backend') {
      steps {
        dir('src/api') {
          sh 'npm install'
        }
      }
    }


    stage('Run Backend Server') {
      steps {
        dir('src/api') {
          sh 'npm start' 
        }
      }
    }
  }
}
