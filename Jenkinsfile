pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/pratamaizzat/starter-node-ts', branch: 'main')
      }
    }

    stage('log dir') {
      parallel {
        stage('log dir') {
          steps {
            sh 'ls -la'
          }
        }

        stage('install all package') {
          steps {
            sh 'pnpm i'
          }
        }

      }
    }

    stage('lint') {
      parallel {
        stage('lint') {
          steps {
            sh 'pnpm run lint'
          }
        }

        stage('unit test') {
          steps {
            sh 'pnpm run test'
          }
        }

      }
    }

    stage('log dir 2') {
      steps {
        sh 'ls -la'
      }
    }

  }
}