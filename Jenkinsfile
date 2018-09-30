pipeline {
	agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
	stages {
		stage('Build') {
			steps {
				sh 'npm install --save chainsql'
				sh 'npm install --save string-random'
				sh 'npm install --save single-line-log'
				sh 'node ./test_preLoader.js'
			}
		}
	}
}