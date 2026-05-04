pipeline {
    agent {
        docker {
            image 'node:18'
            args '-p 3000:3000' // Map ports if needed for live reload or testing
        }
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                // Use npm ci for faster, deterministic installs in CI
                sh 'npm ci'
            }
        }
        stage('Linting') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('Unit Tests') {
            steps {
                // Run tests with code coverage if required
                sh 'npm run test -- --watch=false --code-coverage'
            }
        }
        stage('Build Angular App') {
            steps {
                // Build for production
                sh 'npm install '
                sh 'ng build --configuration=production'
            }
        }
    }
    post {
        always {
            // Clean up workspace or archive artifacts
            archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
        }
        success {
            echo '✅ Build and Test Successful!'
        }
        failure {
            echo '❌ Build Failed!'
        }
    }
}   