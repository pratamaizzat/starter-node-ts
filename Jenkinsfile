pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/pratamaizzat/starter-node-ts', branch: 'main')
      }
    }

    stage('node version') {
      steps {
        sh 'node --version && npm --version'
      }
    }

  }
  tools {
    nodejs '16.16.0'
  }
}