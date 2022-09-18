pipeline {
  agent any
  tools {
    nodejs '16.16.0'
  }
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/pratamaizzat/starter-node-ts', branch: 'main')
      }
    }

    stage('node version') {
      steps {
        sh 'npm version'
      }
    }
  }
}
