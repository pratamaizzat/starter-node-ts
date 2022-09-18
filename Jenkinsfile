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
        sh 'echo $PATH'
      }
    }

  }
}