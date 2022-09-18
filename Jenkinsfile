pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/pratamaizzat/starter-node-ts', branch: 'main')
      }
    }

    stage('check node') {
      steps {
        sh 'node --version && npm --version'
      }
    }

  }
  environment {
    nodejs = '16.16.0'
  }
}