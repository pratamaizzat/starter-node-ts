pipeline {
  agent {
    docker {
      image 'node:16-alpine'
      args '-p 3000:3000'
    }

  }
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