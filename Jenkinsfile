pipeline{
	agent any
	parameters{
		string(name:'SPEC', defaultValue:"Cypress/cypress/**/**",description:"Enter the script path to execute"),
		choice(name:'BROWSER',choices:['firefox','chrome'],description:"Select the browser to execute scripts")
	}
	options{
		ansiColor('xterm')
	}
	stages{
		stage('Build'){
			'echo "Building the application"
		}
	
		stage('Testing){
			steps{
				bat "npn i"	
				bat "npx cypress run --browser ${BROWSER} --spec $SPEC "
			}
		}
		stage('Deploying){
			'echo "Building the application"
		}
	}
	post{
		always{
		publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
		}
	}
}