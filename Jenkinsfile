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
        sh 'node --version && npm --version && pnpm --version'
      }
    }

    stage('install package') {
      steps {
        sh 'pnpm install'
      }
    }

    stage('lint') {
      steps {
        sh 'pnpm run lint'
      }
    }

    stage('test') {
      steps {
        sh 'pnpm run test'
      }
    }

  }
  tools {
    nodejs '16.16.0'
  }
}