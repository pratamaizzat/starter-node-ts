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
        nodejs '16.16.0'
        sh 'node --version && npm --version'
      }
    }

  }
}